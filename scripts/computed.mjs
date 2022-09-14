const AXCS = 1000000000000;
const DOLLARS = AXCS / 100;
const CENTS = DOLLARS / 100;
const MILLICENTS = CENTS / 1000;

const DotDecimals = 10**10;
const KsmDecimals = 10**12;

const dotDeposit = (items, bytes) => {
  return items * 20 * DOLLARS + bytes * 100 * MILLICENTS;
}

// AXIA
// https://github.com/axia-tech/AXIA/blob/master/runtime/AXIA/src/lib.rs#L747
const dotProxyDepositBase = dotDeposit(1, 8) / DotDecimals;
const dotProxyDepositFactor = dotDeposit(0, 33) / DotDecimals;

const LUNAR_DOLLARS = AXCS / 6;
const LUNAR_CENTS = LUNAR_DOLLARS / 100;
const LUNAR_MILLICENTS = LUNAR_CENTS / 1000;

const ksmDeposit = (items, bytes) => {
  return items* 20 * LUNAR_DOLLARS + bytes * 100 * LUNAR_MILLICENTS
}

const dotIpfsPdfUrl = `https://ipfs.io/ipfs/${process.env.IPFS_PDF_HASH}?filename=AXIA-wiki.pdf`

// AXIALunar
// https://github.com/axia-tech/AXIA/blob/master/runtime/axialunar/src/lib.rs#L758
const ksmProxyDepositBase = ksmDeposit(1, 8) / KsmDecimals;
const ksmProxyDepositFactor = ksmDeposit(0, 33) / KsmDecimals;

const toCamelCase = (str) => {
  return str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
}

export {
  dotProxyDepositBase,
  dotProxyDepositFactor,
  ksmProxyDepositBase,
  ksmProxyDepositFactor,
  dotIpfsPdfUrl,
  toCamelCase,
}
