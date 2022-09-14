import * as fs from "fs";
import yargs from "yargs";
import { ApiPromise, WsProvider } from "@axia-js/api";
import replacements from "./inject-dict.json";
import * as computed from "./computed.mjs";

const argv = yargs(process.argv)
  .option("dry", {
    alias: "d",
    description: "Dry run - check values before replacing",
    type: "boolean",
  })
  .option("isAXIA", {
    alias: "p",
    description: "Is AXIA - build dict values for AXIA or AXIALunar",
    type: "boolean",
  })
  .help()
  .alias("help", "h").argv;

if (argv.isAXIA === undefined) {
  throw new Error("Must pass a --isAXIA option.");
}

const node = argv.isAXIA ? "wss://wss.stage.axiacoin.network/" : "wss://kusama-rpc.axiadot.io/";
console.log("Connecting to node " + node);

let filledDict = {};

// Connect to a node
const wsProvider = new WsProvider(node);
ApiPromise.create({ provider: wsProvider })
  .then(function (instance) {
    console.log("Connected");

    let wiki;
    if (argv.isAXIA) {
      console.log("Working on the AXIA wiki");
      wiki = "AXIA";
    } else {
      console.log("Working on AXIALunar Guide");
      wiki = "axialunar";
    }

    replacements.forEach(async function (replacement) {
      if (replacement.computed) {
        let result = null;
        try {
          const key = computed.toCamelCase(replacement.tpl);
          console.log("Getting", key);
          result = computed[key];
        } catch (e) {
          console.log(e);
        }
        filledDict["{{ " + replacement.tpl + " }}"] = result || replacement.default;
        return;
      }

      let chainValue = undefined;
      try {
        // Simple const retrieve
        if (replacement.path.indexOf("consts") === 0) {
          console.log("In const for " + replacement.path);
          chainValue = byString(instance, replacement.path);
        }

        // Query calls
        if (replacement.path.indexOf("query") === 0) {
          console.log("In query for " + replacement.path);
          chainValue = byString(instance, replacement.path);
          chainValue = await chainValue();
        }

        // Convert to human readable number if possible
        if (undefined !== chainValue.toNumber) {
          chainValue = chainValue.toNumber();
        }
      } catch (e) {}

      // Activate default mode, depending on wiki being injected into
      if (!chainValue) {
        console.log("No value found, seeking default for " + replacement.tpl);
        if (typeof replacement.default === "object") {
          if (wiki === "AXIA") {
            chainValue = replacement.default.AXIA;
          } else {
            chainValue = replacement.default.axialunar;
          }
        } else {
          chainValue = replacement.default;
        }
      } else {
        if (replacement.filters && replacement.filters.length) {
          for (let i = 0; i < replacement.filters.length; i++) {
            chainValue = applyFilter(chainValue, replacement.filters[i], wiki);
          }
        }
      }

      filledDict["{{ " + replacement.tpl + " }}"] = chainValue;
    });
  })
  .catch(function (e) {
    console.log(e);
    console.error(
      "Error connecting! Check your node URL and make sure its websockets are open, secure if remote (wss), and allow RPC from all."
    );
    process.exit(1);
  });

let v = setInterval(function () {
  if (Object.keys(filledDict).length === Object.keys(replacements).length) {
    clearInterval(v);
    const content = JSON.stringify(filledDict, null, 2);

    fs.writeFileSync("./scripts/computed-dict.json", content, { encoding: "utf8" });
    console.log("Save dict values successfully!");
    process.exit(0);
  }
}, 1000);

function byString(o, s) {
  s = s.replace(/\[(\w+)\]/g, ".$1"); // convert indexes to properties
  s = s.replace(/^\./, ""); // strip a leading dot
  var a = s.split(".");
  for (var i = 0, n = a.length; i < n; ++i) {
    var k = a[i];
    if (k in o) {
      o = o[k];
    } else {
      return;
    }
  }
  return o;
}

function applyFilter(value, filter, wiki) {
  console.log(`Applying ${filter} to ${wiki} value ${value}`);

  const values = {
    AXIA: {
      precision: 1e10,
      symbol: "AXC",
    },
    axialunar: {
      precision: 1e12,
      symbol: "LUNAR",
    },
  };

  switch (filter) {
    case "humanReadableToken":
      value = (value / values[wiki].precision).toFixed(3) + " " + values[wiki].symbol;
      break;
    case "blocksToDays":
      value = (value * 6) / 86400;
    default:
      break;
  }

  return value;
}
