---
id: learn-PRE
title: AXIA Runtime Environment (PRE)
sidebar_label: AXIA Runtime Environment (PRE)
---

The AXIA Runtime Environment is an important component of the AXIA protocol. It consists of the networking, consensus and Wasm VM subsystems, and acts as the lower layers of the stack underlying the AXIA runtime and the runtimes of the allychains. Loosely, the AXIA RE can be thought of as synonymous with a virtual machine running the AXIA relay chain (although as stated below, there is a clear separation between the chain logic itself, and the PRE on which it runs).

The components of the AXIA RE are:

- Network Interactions
- State storage and the Storage Trie
- Consensus Engine
- Wasm Virtual Machine (VM)

The runtime, which is defined as the code implementing the logic of the chain, is decoupled from the AXIA RE. The separation of the two components allows the runtime to be easily upgradable without needing to upgrade the AXIA RE.

The AXIA runtime (as well as the runtimes of the allychains) must be compiled WebAssembly (Wasm) blobs. The AXIA runtime "plugs-in" to the AXIA RE and will be swappable through the governance mechanism.

The image below is taken from the [slide deck](https://slides.com/axia-tech/axiasubstrate#/8) that Gavin Wood presented on Substrate and demonstrates visually the 4 layers of the AXIA stack.

![PRE](assets/PRE.png)

## Resources

- [AXIA Runtime Environment Protocol Specification](https://github.com/axia-tech/AXIA-spec) - Incubator for the PRE spec, including tests.
