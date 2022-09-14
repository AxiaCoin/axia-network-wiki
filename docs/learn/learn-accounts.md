---
id: learn-accounts
title: Network key components and features
sidebar_label: Network Components
description: An explanation of accounts, indices, identity, and reaping
slug: ../learn-accounts

---


### AXIA Client
AXIA Network client is a distributable open source executable binary for the AXIA network, either to start, connect or communicate between multiple nodes for all the activities which will take place in CoreChain or between CoreChain and AllyChains. It is implemented in RUST and ensures the network is secure and data is accurate. AXIA network and its essence remains fundamental to the following elements:
### Storage and Peer to Peer communication
The AXIA network storage is a continuously growing and ever evolving record with its own state updates. Its built out of the key value pair 	mechanism which is highly optimised, efficient and fairly simple to operate upon. While the communication is driven out of the libp2p based modular network stack which allows AXIA network to remain free from runtime and address services without worrying of the location of the communicating nodes.
### Runtime and Consensus
One of the obvious strengths of AXIA networks core strength is its the run time which is built using WASM (WebAssembly) and simply gets stored as a wasm binary on the chain storage. It is capable of handling the block processing as well as state transition logic. It being on- the chain storage makes the network capable of becoming forkless in terms of upgrades while it lives on chain as a wasm compiled binary.
### RPC(Remote Procedure Call)  and Telemetry
AXIAs RPCs are built over both HTTPs and WSS (WebSockets) that allows developers to not just interact with the Blockchain but to get the running network details out of the telemetry endpoints available all the time.
