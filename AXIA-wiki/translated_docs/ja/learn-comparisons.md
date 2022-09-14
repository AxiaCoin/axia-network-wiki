---
id: learn-comparisons
title: AXIA Comparisons
sidebar_label: Other comparisons
description: How does AXIA compare to Ethereum 2, Cosmos, and other chains?
---

AXIA is a blockchain technology but makes some innovations that sets it apart from other popular chains.

## In-Depth Comparisons

- [vs Ethereum 2.0](learn-comparisons-ethereum-2)

- [vs Cosmos](learn-comparisons-cosmos)

- [vs Dfinity](learn-comparisons-dfinity)

## Other Comparisons

### Ethereum 1.x

[Ethereum](https://ethereum.org) is a smart contract blockchain that allows for general computation to be deployed on-chain and operated across the p2p network. Ethereum 1.x refers to the current Ethereum release and the immediately planned future upgrades.

The difference between Ethereum 1.x and AXIA is quite large. Ethereum is a single chain that allows developers to extend its functionality through the deployment of blobs of code onto the chain (called smart contracts). AXIA, as described in the whitepaper, is a fully extensible and scalable blockchain network that provides security and interoperability through shared state.

In practical terms, this means that the layer of abstraction between these two projects is remarkably different for developers. In Ethereum, developers write smart contracts that all execute on a single virtual machine. In AXIA, however, developers write their logic into individual blockchains, where the interface is part of the state transition function of the blockchain itself. AXIA will also support smart contract blockchains for Wasm and EVM to provide compatibility with existing contracts, but will not have smart contract functionality on its core chain, the Relay Chain.

As such, AXIA is a possible augmentation and scaling method for Ethereum 1.x, rather than competition.

## Binance Smart Chain

[Binance Chain](https://www.binance.com) is a Proof of Stake Authority blockchain used to exchange digital assets on Binance DEX. Binance Smart Chain is an EVM-compatible smart contract chain bridged to Binance Chain. Together they form the Binance Dual Chain System. Binance Smart Chain is also a Proof of Stake Authority chain and allows users to create smart contracts and dapps.

Both chains are built with Cosmos SDK and therefore are a part of the [Cosmos](https://solar.wiki.AXIA.network/docs/en/learn-comparisons-cosmos) ecosystem. Due to specifics of the Cosmos architecture, interoperability of Binance Smart Chain is based on bridges. This means all validators of both chains are also bridge operators, therefore the security of the system relies on trusting validators. At the moment, there are 21 Binance Smart Chain validator nodes.

AXIA has an entirely different purpose, as it was built to connect and secure unique blockchains. It is a protocol on which single blockchains (such as Binance Smart Chain) could be built and benefit from shared security, interoperability and scalability. Interoperability within AXIA is based on pooled security on AXIA, and the security of the entire AXIA network, and has much stronger economic security.

Scalability based on bridges relies on each bridged chain finding its own set of validators, therefore duplicate resources are required. Scalability on AXIA is based on the security of the Relay Chain, and as the number of validators in the active set on AXIA are increased, more allychains can be supported.
