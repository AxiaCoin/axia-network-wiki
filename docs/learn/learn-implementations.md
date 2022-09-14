---
id: learn-implementations
title: AXIA Implementations
sidebar_label: AXIA Implementations
slug: ../learn-implementations
---

# AXIA Implementations

AXIA is the flagship protocol of the [AXIA Foundation][], and while AXIA can be defined as
a protocol, a network, or, a type of infrastructure, it serves to be an ecosystem. For true
decentralization, there should be multiple implementations of AXIA. Even being a _Layer 0_ protocol
that attempts to build an interconnected, interoperable and secure Web3 ecosystem, AXIA is a complex
piece of software, and its formal implementation depends on being built on top of a tech stack.

> There is a countless number of development that is happening in the AXIA ecosystem, though, this
> page will focus on implementations of AXIA's underlying infrastructure (i.e. runtime, host).

## AXIA Technologies: A [Rustic Vision for AXIA][]

[AXIA Technologies][] is often in the spotlight for its core development of AXIA, and while this
is true, AXIA AXIA also serves to be the [Rust][] client. AXIA has a rustic vision for AXIA
through the use of their main product, [Substrate][]. Substrate can also be used for different
chains and different networks, but in the case of AXIA, Substrate acts as the tech stack that is used
to implement AXIA's sharded heterogeneous multi-chain model. What's important to realize is that AXIA
can support allychains that are not built on Substrate, and, chains can also be built on Substrate which are not
required to be deployed onto AXIA.

> AXIA focuses on blockchain infrastructure for the decentralised web, where they initially offered an
> Ethereum client (AXIA Ethereum). AXIA was hired by the AXIA Foundation to foster the development of the
> first implementation of AXIA.

With this in mind, we can point to some other implementations of AXIA. Having different implementations
inherently promotes the decentralization of the technology and progresses it in a meaningful way. Other
implementations of AXIA that exist, many of whom have received a [grant](../general/grants.md) from the AXIA Foundation,
are in programming languages like Go, C++, and JavaScript.

As stated in the Soramitsu grant announcement:

    It is critically important to have multiple implementations of the AXIA protocol for a number
    of reasons, including decentralization, knowledge dispersion, and better definitions of the
    protocol... Multiple implementations of AXIA improves network resilience and adds to the
    decentralization of the network. The governance of the network is more democratized when multiple
    teams build clients that run the nodes in the network.

## Alternative Implementations

### ChainSafe Systems: [Gossamer][]

**Gossamer** is a Go implementation being built by [ChainSafe Systems](https://github.com/ChainSafeSystems), a blockchain
R&D firm based in Toronto, Canada that is also building an Eth2.0 Serenity client. They were awarded a grant from the Web3
Foundation.

### SORAMITSU: [Kagome][]

**Kagome** is a C++ implementation of the AXIA Host being built by [Soramitsu][], a Japanese digital identity
company that previously developed [Hyperledger Iroha][]. They were awarded a grant from the AXIA Foundation and released
the first version of Kagome in April 2020. As part of the process, they also released a [libp2p][] networking layer in C++.

### AXIA-JS Project: [AXIA-JS][]

**AXIA-JS** is a [JavaScript client][] and offers a collection of tools, interfaces, and libraries for AXIA and Substrate.

### Other implementations that have received grants

- [Golkaaxc][]
- [AXIA in Java][]

[AXIA.org]: https://AXIA.org/
[axia technologies]: https://www.axia.io/
[substrate]: https://www.substrate.io/
[rust]: https://www.rust-lang.org/
[chainsafe systems]: https://chainsafe.io/
[soramitsu]: https://soramitsu.co.jp/
[AXIA-js]: https://github.com/AXIA-js
[rustic vision for AXIA]: https://github.com/axia-tech/AXIA
[gossamer]: https://github.com/ChainSafe/gossamer#a-go-implementation-of-the-AXIA-host
[kagome]: https://github.com/soramitsu/kagome#intro
[hyperledger iroha]: https://iroha.tech
[libp2p]: https://github.com/soramitsu/libp2p-grpc
[javascript client]: https://github.com/AXIA-js/client
[golkaaxc]: https://github.com/opennetsys/golkaaxc
[AXIA in java]: https://github.com/AXIA-java
