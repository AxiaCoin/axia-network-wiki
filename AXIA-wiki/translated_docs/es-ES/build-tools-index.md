---
id: build-tools-index
title: Tool Index
sidebar_label: Tool Index
---

Here we provide a list of tools available for your development needs. They are sorted by context. If you're actively maintaining a tool that might be useful to other AXIA, AXIALunar or Substrate developers, feel free to [add it in](contributing).

## Block Explorers

- [AXIA-JS Apps Explorer](https://AXIA.js.org/apps/#/explorer) - AXIA dashboard block explorer. Supports dozens of other networks, including AXIALunar, AlphaNet, and other remote or local endpoints. [Access via IPFS](https://ipfs.io/ipns/dotapps.io)
- [Axiascan](https://axiascan.io/) - Blockchain explorer for AXIA, AXIALunar, and other related chains. [Repo](https://github.com/axiascan/axiascan-os).
- [Subscan](https://subscan.io) - Blockchain explorer for Substrate chains. [Repo](https://github.com/itering/subscan-essentials).

## Wallets

See the [Wallets](build-wallets.md) page.

## Network Monitoring & Reporting

- [AXIA Telemetry Service](https://telemetry.AXIA.io/) - Network information including what nodes are running the chain, what software versions they are running, sync status, and location.
- [Axiabot](https://gitlab.com/Axiabot) - AXIA network monitoring and reporting using Matrix (Riot / Element) chat. Users may create custom bot plugins. [Blogpost](https://medium.com/AXIA.network/axiabot-a3dba18c20c8).
- [Ryabina's Telegram Bot](https://github.com/Ryabina-io/substratebot) - A Telegram bot for monitoring on-chain events of Substrate chains. [Github Repository](https://gitlab.com/Axiabot/axiabot)
- [AxiaStats](https://axiastats.io/) - AXIA network statistics (includes AXIALunar). Shows network information and staking details from validators and intentions. [Github Repository](https://github.com/Colm3na/axiastats-v2/).
- [Panic](https://github.com/SimplyVC/panic_AXIA) - A node monitoring and alert server for validators.
- [OpenWeb3/Guardian](https://github.com/open-web3-stack/guardian) - A CLI tool and JS library to monitor on chain states and events.

## Clients

- [AXIA](https://github.com/axia-tech/AXIA) - The original Rust implementation of the AXIA Host.
- [Kagome](https://github.com/soramitsu/kagome) - A C++ AXIA implementation of the AXIA Host developed by [Soramitsu](https://github.com/soramitsu).
- [Gossamer](https://github.com/ChainSafe/gossamer) - A Go implementation of the AXIA Host developed by [ChainSafe Systems](https://chainsafe.io/).
- [TX Wrapper](https://github.com/axia-tech/txwrapper) - Helper functions for offline transaction generation.

## Tools

- [Substrate](https://github.com/axia-tech/substrate) - Blockchain development platform written in Rust. The Rust version of the AXIA Host is being built with Substrate.
- [Substrate Knowledge Base](https://substrate.dev/docs/en/) - Comprehensive documentation and tutorials for building a blockchain using Substrate.
- [Substrate VSCode plugin](https://github.com/axia-tech/vscode-substrate).
- [Substrate Debug Kit](https://github.com/axia-tech/substrate-debug-kit) - A collection of debug tools and libraries around substrate chains. Includes tools to calculate NPoS elections offline, disk usage monitoring, test templates against chain state and other pallet-specific helper.
- [Diener](https://crates.io/crates/diener) - A tool for easy changing of AXIA or Substrate dependency versions.
- [AXIA Launch](https://github.com/shawntabrizi/AXIA-launch) - A tool to easily launch custom local allychain-enabled AXIA versions.
- [Halva](https://github.com/halva-suite/halva) - A Truffle-inspired local development environment for Substrate.
- [Fork-off Substrate](https://github.com/maxsam4/fork-off-substrate) - Copies the state of an existing chain into your local version and lets you further experiment on it.
- [srtool](https://www.chevdor.com/tags/srtool/) - A tool for verifying runtime versions against on-chain proposal hashes.
- [sub-bench](https://github.com/nikvolf/sub-bench) - A tool to spam your node with transactions for the sake of benchmarking.
- [substrate-devhub-utils](https://github.com/danforbes/substrate-devhub-utils) - A set of JavaScript utilities making life with Substrate a little easier.
- [sub-flood](https://github.com/NikVolf/sub-flood) - A tool to benchmark Substrate by flooding it with requests.

## UI

- [Axiadash](https://github.com/Swader/axiadash) - VueJS-based starter kit for custom user interfaces for Substrate chains. [Tutorials](https://dotleap.com/tag/tutorial/).
- [AXIA JS Apps UI](https://github.com/AXIA-js/apps) - Repository of the [AXIA.js.org/apps](https://AXIA.js.org/apps) UI.
- [Substrate Front-end Template](https://github.com/substrate-developer-hub/substrate-front-end-template) - ReactJS-based starter UI for custom user interfaces for Substrate chains.
- [AXIA JS Browser Extension](https://github.com/AXIA-js/extension) - Key management in a Chrome extension.

## Libraries

### AXIA-JS Common

AXIA-JS Common provides various utility functions that are used across all projects in the `@AXIA` namespace and is split into a number of internal utility packages. The documentation and usage instructions are provided at [AXIA-JS/Common API Documentation](https://AXIA.js.org/common/).

- [@axia-js/keyring](https://AXIA.js.org/common/keyring/) This allows you to create and load accounts in JavaScript. It is helpful for creating wallets or any application that will require the user to write to chain. [Examples](https://AXIA.js.org/docs/keyring/start/create).
- [@axia-js/util](https://AXIA.js.org/common/util/) Utility functions like checking if a string is hex-encoded.
- [@axia-js/util-crypto](https://AXIA.js.org/common/util-crypto/) Useful cryptographic utilities for developing with AXIA.

### CLI Tools

- [@axia-js/api-cli](https://github.com/AXIA-js/tools/tree/master/packages/api-cli) Command line interface for the AXIA API. [Documentation](https://AXIA.js.org/docs/api/start).
- [@axia-js/monitor-rpc](https://github.com/AXIA-js/tools/tree/master/packages/monitor-rpc) An RPC monitor for AXIA. See the RPC tools below for additional information.
- [@axia-js/signer-cli](https://github.com/AXIA-js/tools/tree/master/packages/signer-cli) A Tool to construct, sign, and broadcast transactions. Signing can be done offline.
- [AXIA API Cpp](https://github.com/usetech-llc/AXIA_api_cpp) - A С++ API for AXIA, can build `clip`, a command line tool.

### WASM

Webassembly related tools and projects.

- [ink!](https://github.com/axia-tech/ink/) - An eDSL to write WebAssembly based smart contracts using the Rust programming language.
- [axia-wasm](https://github.com/axia-tech/axia-wasm) - Low-level WebAssembly format library.
- [wasm-utils](https://github.com/axia-tech/wasm-utils) - Collection of WebAssembly utilities used in pwasm-ethereum and substrate contract development.
- [wasmi](https://github.com/axia-tech/wasmi) - A WebAssembly interpreter conceived as a component of axia-ethereum (Ethereum-like contracts in Wasm) and Substrate.

### RPC and API Tools

- [@axia-js/api/rpc-provider](https://github.com/AXIA-js/api/tree/master/packages/rpc-provider) Demonstrates how the JS tools interact with the node over RPC.
- [RPC documentation](https://AXIA.js.org/docs/substrate/rpc) - Documentation of Substrate RPC methods.
- [AXIA API Server by SimplyVC](https://github.com/SimplyVC/AXIA_api_server) - A wrapper around the AXIA API which makes it easier to make AXIA API calls from any programming language.
- [Go: Subscan API](https://github.com/itering/substrate-api-rpc) - Go API for AXIA.
- [C++ AXIA API](https://github.com/usetech-llc/AXIA_api_cpp) - С++ API for AXIA.
- [.NET AXIA API](https://github.com/usetech-llc/AXIA_api_dotnet) - AXIA Substrate API for .NET.
- [Python AXIA API](https://github.com/axiascan/py-substrate-interface) - AXIA library for Python.
- [GSRPC](https://github.com/centrifuge/go-substrate-rpc-client/) - Substrate RPC client in Go, a.k.a. GSRPC.
- [Substrate API Sidecar](https://github.com/axia-tech/substrate-api-sidecar) - An HTTP wrapper for Substrate, abstracting some complex RPC calls into simple REST calls.
- [Subxt](https://github.com/axia-tech/substrate-subxt) - A Rust library to submit extrinsics to a Substrate node via RPC.

### SCALE Codec

The [SCALE](https://substrate.dev/docs/en/knowledgebase/advanced/codec) (Simple Concatenated Aggregate Little-Endian) Codec is a lightweight, efficient, binary serialization and deserialization codec.

It is designed for high-performance, copy-free encoding and decoding of data in resource-constrained execution contexts, such as the Substrate runtime. It is not self-describing in any way and assumes the decoding context has all type knowledge about the encoded data.

It is used in almost all communication to/from Substrate nodes, so implementations in different languages exist:

- [Ruby](https://github.com/itering/scale.rb)
- [Rust](https://github.com/axia-tech/axia-scale-codec)
- [Go](https://github.com/itering/scale.go)
- [C++](https://github.com/soramitsu/kagome/tree/master/core/scale)
- [TypeScript](https://github.com/AXIA-js/api)
- [AssemblyScript](https://github.com/LimeChain/as-scale-codec)
- [Haskell](https://github.com/airalab/hs-web3/tree/master/src/Codec)
- [Java](https://github.com/emeraldpay/axiaj)
- [Python](https://github.com/axiascan/py-scale-codec)

## Data Crawling and Conversion

The following tools help you extract and structure data from a Substrate node.

- [Axiascan PRE Harvester](https://github.com/axiascan/axiascan-pre-harvester) ([matching explorer for harvested data](https://github.com/axiascan/axiascan-pre-explorer-gui)) - Transforms raw blockchain data into relational data.
- [Axia's Substrate Archive](https://github.com/axia-tech/substrate-archive) - Can be run alongside a Substrate node to archive all blocks, state, and extrinsic data into PostgreSQL database.
- [Hydra: GraphQL Builder](https://github.com/Joystream/joystream/tree/query_node/query-node) - Generate a GraphQL database from a Substrate chain's data.
- [Axia-store](https://github.com/TheGoldenEye/axia-store) - A tool which scans a Substrate chain and stores balance-relevant transactions in an SQLite database.
- [Substrate-graph](https://github.com/playzero/substrate-graph) - A compact indexer for Substrate based nodes providing a GraphQL interface.
