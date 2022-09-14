const fs = require("fs");
const path = require("path");
const visit = require("unist-util-visit");
const { yellow, cyan } = require("chalk");

const R_AXIA = /{{ AXIA: ([\s\S]+?) :AXIA }}/gim;
const R_AXIALUNAR = /{{ axialunar: ([\s\S]+?) :axialunar }}/gim;
const R_AXIALUNAR_HEAD = /{{ axialunar: [\s\S]*/gim;
const R_AXIALUNAR_TAIL = /[\s\S]* :axialunar }}/gim;
const R_AXIA_HEAD = /{{ AXIA: [\s\S]*/gim;
const R_AXIA_TAIL = /[\s\S]* :AXIA }}/gim;

const logger = (file, dryRun, subStr, replaceStr) => {
  console.log(
    cyan(
      `${dryRun ? "[dryRun]" : ""}[${file.basename}] ${yellow(subStr)} => ${yellow(
        replaceStr ? replaceStr : `""`
      )}`
    )
  );
};

const unconditionalReplace = (node, file, options) => {
  const { dict, dryRun = false, verbose = true } = options;

  Object.entries(dict).forEach(([key, value]) => {
    node.value = node.value.replace(new RegExp(key, "ig"), (match) => {
      verbose && logger(file, dryRun, key, value);
      return dryRun ? match : value;
    });
  });
};

const conditionalReplace = (node, file, options) => {
  const { isAXIA, debug } = options;
  let foundTarget = false,
    foundDelete = false;
  const children = [];

  const TARGET = isAXIA ? "AXIA" : "axialunar";
  const R_TARGET = isAXIA ? R_AXIA : R_AXIALUNAR;
  const R_TARGET_HEAD = isAXIA ? R_AXIA_HEAD : R_AXIALUNAR_HEAD;
  const R_TARGET_TAIL = isAXIA ? R_AXIA_TAIL : R_AXIALUNAR_TAIL;

  const R_DELETE = isAXIA ? R_AXIALUNAR : R_AXIA;
  const R_DELETE_HEAD = isAXIA ? R_AXIALUNAR_HEAD : R_AXIA_HEAD;
  const R_DELETE_TAIL = isAXIA ? R_AXIALUNAR_TAIL : R_AXIA_TAIL;

  node.children.forEach((childNode) => {
    if (childNode.type !== "text") {
      if (!foundDelete) {
        children.push(childNode);
      }
      return;
    }

    let text = childNode.value;

    debug && console.log(`Before ${JSON.stringify({ foundTarget, foundDelete })}:`, `[${text}]`);

    text = text.replace(R_DELETE, "").replace(R_TARGET, "$1");

    let foundSomething = false;
    if (R_TARGET_HEAD.test(text)) {
      foundTarget = true;
      foundSomething = true;
      text = text.replace(`{{ ${TARGET}: `, "");
    }

    if (R_TARGET_TAIL.test(text)) {
      foundTarget = false;
      foundSomething = true;
      text = text.replace(` :${TARGET} }}`, "");
    }

    if (R_DELETE_HEAD.test(text)) {
      foundDelete = true;
      foundSomething = true;
      text = text.replace(R_DELETE_HEAD, "");
    }

    if (R_DELETE_TAIL.test(text)) {
      foundDelete = false;
      foundSomething = true;
      text = text.replace(R_DELETE_TAIL, "");
    }

    if (foundDelete && !foundSomething) {
      text = "";
    }

    debug && console.log(`After ${JSON.stringify({ foundTarget, foundDelete })}:`, `[${text}]`);
    children.push({ ...childNode, value: text });
  });

  node.children = children;
};

function transform(options) {
  return (tree, file) => {
    visit(tree, ["paragraph", "emphasis", "heading"], (node) => {
      conditionalReplace(node, file, options);
    });

    visit(tree, "text", (node) => {
      unconditionalReplace(node, file, options);
    });

    visit(tree, "code", (node) => {
      unconditionalReplace(node, file, options);
    });
  };
}

function injectPlugin(param) {
  const dictPath = path.resolve(__dirname, "computed-dict.json");
  const dict = JSON.parse(fs.readFileSync(dictPath, "utf8"));
  return [
    transform,
    { dict, isAXIA: param.isAXIA, dryRun: false, verbose: false, debug: false },
  ];
}

module.exports = { injectPlugin };
