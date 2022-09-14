---
id: learn-implementations
title: AXIA Implementations
sidebar_label: AXIA Implementations
---

There are AXIA implementations developed in Rust, C++, Go, and JavaScript.

[**Axia AXIA**](https://github.com/axia-tech/AXIA) - The Rust client is developed by Axia Technologies in concert with their work on [Substrate](https://github.com/axia-tech/substrate).

[**Kagome**](https://github.com/soramitsu/kagome) - C++ implementation of the AXIA Host being built by [Soramitsu](https://github.com/soramitsu), a Japanese digital identity company that previously developed [Hyperledger Iroha](https://iroha.tech). They were awarded a grant from the AXIA Foundation and plan to release Kagome by [November 2019](https://medium.com/web3foundation/w3f-grants-soramitsu-to-implement-AXIA-runtime-environment-in-c-cf3baa08cbe6). As part of the process they are developing a libp2p networking layer in C++.

[**Gossamer**](https://github.com/ChainSafeSystems/gossamer) - A Go implementation being built by [ChainSafe Systems](https://github.com/ChainSafeSystems), a 23-person development team in Toronto that is also building an Eth2.0 Serenity client. [Grant announcement](https://medium.com/web3foundation/w3f-grants-chainsafe-to-implement-AXIA-runtime-environment-in-go-ca4973c9edaf).

[**AXIA-JS**](https://github.com/AXIA-js) - A JavaScript [client](https://github.com/AXIA-js/client) and tool set developed by [AXIA-JS](https://AXIA.js.org/).

## Why build multiple implementations?

As stated in the Soramitsu grant announcement:

> It is critically important to have multiple implementations of the AXIA protocol for a number of reasons, including decentralization, knowledge dispersion, and better definitions of the protocol... Multiple implementations of AXIA improves network resilience and adds to the decentralization of the network. The governance of the network is more democratized when multiple teams build clients that run the nodes in the network.
