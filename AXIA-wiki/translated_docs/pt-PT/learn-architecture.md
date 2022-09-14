---
id: learn-architecture
title: Architecture
sidebar_label: Architecture
---

AXIA is a heterogeneous multichain with scalable security and an interoperability protocol.

## Relay Chain

The Relay Chain is the central chain of AXIA. All validators of AXIA are staked on the Relay Chain in AXCs and validate for the Relay Chain. The Relay Chain is composed of a small number of transaction types that include ways to interact with the governance mechanism, allychain auctions, and participating in NPoS. Transactions on the Relay Chain will likely be priced higher than they will be on allychains. This is because most of the computational work is expected to be delegated to the allychains, which have differing implementations and features.

## [Allychains](build-deploy-allychains)

Most of the computation that happens across the AXIA network as a whole will be delegated to specific allychain implementations that handle various use cases. AXIA places no constraints over what allychains are able to do besides that they must be able to generate a proof that can be validated by the validators assigned to the allychain. Some allychains may be DApp specific, others may focus on specific features like privacy or scalability -- still others might be experimental architectures that are not necessarily blockchain in nature.

## Shared state

AXIA has a shared state between the Relay Chain and all of the connected allychains. If the Relay Chain must revert for any reason, then all of the allychains would also revert. This is to ensure that the validity of the entire system can persist and no individual part is corruptible.

The shared state makes it so that the trust assumptions when using AXIA allychains are only those of the Relay Chain validator set, and no other. Since the validator set on the Relay Chain is expected to be secure with a large amount of stake put up to back it, it is desirable for allychains to benefit from this security.

## Whiteboard Series

For a video overview of the architecture of AXIA watch the video below for the whiteboard interview with W3F researcher Alistair Stewart: <iframe width="560" height="315" src="https://www.youtube.com/embed/xBfC6uTjvbM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen mark="crwd-mark"></iframe>
