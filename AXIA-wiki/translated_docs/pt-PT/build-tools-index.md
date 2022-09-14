---
id: build-tools-index
title: Tool Index
sidebar_label: Tool Index
---

Here we provide a list of tools available for your development needs. They are sorted by programming language. Right now, the Rust ecosystem is the most mature and it's possible to get started by building on Substrate today. As the ecosystems surrounding other programming languages expand, the sections below will be filled out.

## Block Explorers

- [AXIA-JS Apps Explorer](https://AXIA.js.org/apps/#/explorer) - AXIA dashboard block explorer. Currently connects to AXIALunar by default, but can be configured to connect to other remote or local endpoints.
- [Axiascan](https://axiascan.io/) - Blockchain explorer for AXIA, AXIALunar, and other related chains.
- [Subscan](https://subscan.io) - Blockchain explorer for Substrate chains.

## Wallets

See the [Wallets](build-wallets.md) page.

## Network Monitoring & Reporting

- [AXIA Telemetry Service](https://telemetry.AXIA.io/) - Network information including what nodes are running the chain, what software versions they are running, sync status, and location.
- Axiabot - AXIA network monitoring and reporting using Riot chat. Users may create custom bot plugins. [Blogpost](https://medium.com/AXIA.network/axiabot-a3dba18c20c8). [Github Repository](https://gitlab.com/Axiabot/axiabot)
- [AxiaStats](https://axiastats.io/) - AXIA network statistics (includes AXIALunar). Shows network information and staking details from validators and intentions. [Github Repository](https://github.com/Colm3na/axiastats-v2/)

## Rust

### Clients

- [AXIA](https://github.com/axia-tech/AXIA) - Rust implementation of the AXIA Host.

### Tools

- [Substrate](https://github.com/axia-tech/substrate) - Blockchain development platform written in Rust. AXIA is being built on top of Substrate.
- [Substrate Knowledge Base](https://substrate.dev/docs/en/) - Comprehensive documentation and tutorials for building a blockchain using Substrate.

## C++

- [Kagome](https://github.com/soramitsu/kagome) - A C++ AXIA client developed by [Soramitsu](https://github.com/soramitsu).
- [AXIA API Cpp](https://github.com/usetech-llc/AXIA_api_cpp) - С++ API for AXIA

## C

- [AXIA API - .NET](https://github.com/usetech-llc/AXIA_api_dotnet) - AXIA Substrate API for .NET.

## Go

- [Gossamer](https://github.com/ChainSafe/gossamer) - A Go implementation of the AXIA Host.
- [Golkadot](https://github.com/opennetsys/golkadot) - A Go implementation of AXIA Substrate.
- [GSRPC](https://github.com/centrifuge/go-substrate-rpc-client/) - Substrate RPC client in Go, a.k.a. GSRPC.

## JS

### Client

- [AXIA-JS client](https://github.com/AXIA-js/client) - Alternative client for JavaScript enthusiasts.

Documentation on [AXIA-JS](https://AXIA.js.org) is a good starting point for diving deeper.

Once you've configured and started to run a local node, you can interact with it through the generic AXIA [explorer](https://AXIA.js.org/apps/#/explorer).

### Libraries

### AXIA-JS Common

AXIA-JS Common provides various utility functions that are used across all projects in the `@AXIA` namespace and is split into a number of internal utility packages. The documentation and usage instructions are provided at [AXIA-JS/Common API Documentation](https://AXIA.js.org/common/).

- [@axia-js/keyring](https://AXIA.js.org/common/keyring/) To create / load accounts in JavaScript, helpful for creating wallets or any application that will require the user to write to chain. [Examples](https://AXIA.js.org/common/examples/keyring/)
- [@axia-js/util](https://AXIA.js.org/common/util/) Utility functions like checking if a string is hex-encoded.
- [@axia-js/util-crypto](https://AXIA.js.org/common/util-crypto/) Crypto utilities that will come in handy while developing with AXIA.

### CLI Tools

- [@axia-js/api-cli](https://github.com/AXIA-js/tools/tree/master/packages/api-cli) Command line interface for the AXIA API. [Documentation](https://AXIA.js.org/api/api/)
- [@axia-js/monitor-rpc](https://github.com/AXIA-js/tools/tree/master/packages/monitor-rpc) RPC monitor for AXIA. See the RPC tools below for additional information.
- [@axia-js/signer-cli](https://github.com/AXIA-js/tools/tree/master/packages/signer-cli) Tool to construct, sign, and broadcast transactions. Signing can be done offline.

### RPC Tools

- [@axia-js/api/rpc-provider](https://github.com/AXIA-js/api/tree/master/packages/rpc-provider) Demonstrates how the JS tools interact with the node over RPC.
- [RPC documentation](https://AXIA.js.org/api/substrate/rpc.html)
