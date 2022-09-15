---
id: AxiaJS
title: AxiaJS
sidebar_label: AxiaJS
slug: ../AxiaJS
---

## Overview

AxiaJS is a JavaScript Library for interfacing with the Axia Platform. It is built using TypeScript and intended to support both browser and Node.js. The AxiaJS library allows you to issue commands to the Axia node APIs.

The APIs currently supported by default are:


* AX Chain API
* Health API
* Info API
* Keystore API




  Using AxiaJS, developers can:

* Locally manage private keys
* Retrieve balances on addresses
* Get UTXOs for addresses
* Build and sign transactions
* Issue signed transactions to the Swap-Chain, Core-Chain, and AX-Chain
* Perform cross-chain swaps between the Swap-Chain<->Core-Chain and between the Swap-Chain<->AX-Chain
* Retrieve Axia network information from a node

### Requirements

AxiaJS requires Node.js LTS version 14.16.0 or higher to compile.

### Installation

Axia is available for install via `yarn`:

`yarn add @axiaglobal/axiajs`

You can also pull the repo down directly and build it from scratch:

`yarn build`

This will generate a pure Javascript library and place it in a folder named "web" in the project root. The "axia.js" file can then be dropped into any project as a pure javascript implementation of Axia.

The AxiaJS library can be imported into your existing Node.js project as follows:

```js
const axia = require("@axiaglobal/axiajs")
```

Or into your TypeScript project like this:

```js
import { Axia } from "@axiaglobal/axiajs"
```

### Importing essentials

```js
import { Axia, BinTools, BN, Buffer } from "@axiaglobal/axiajs"

const bintools = BinTools.getInstance()
```

The above lines import the libraries used in the tutorials. The libraries include:

* Axia: Our javascript module.
* BinTools: A singleton built into AxiaJS that is used for dealing with binary data.
* [BN](https://www.npmjs.com/package/bn.js): A bignumber module use by AxiaJS.
* [Buffer](https://www.npmjs.com/package/buffer): A Buffer library.
