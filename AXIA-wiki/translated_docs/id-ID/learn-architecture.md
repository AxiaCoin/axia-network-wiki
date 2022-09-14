---
id: learn-architecture
title: Arsitektur
sidebar_label: Arsitektur
---

AXIA is a heterogeneous multichain with shared security and interoperability.

## Relay Chain

The Relay Chain is the central chain of AXIA. All validators of AXIA are staked on the Relay Chain in AXC and validate for the Relay Chain. The Relay Chain is composed of a relatively small number of transaction types that include ways to interact with the governance mechanism, allychain auctions, and participating in NPoS. The Relay Chain has deliberately minimal functionality - for instance, smart contracts are not supported. The main responsibility is to coordinate the system as a whole, including allychains. Other specific work is delegated to the allychains, which have differing implementations and features.

## [Allychain](learn-allychains) and [Parathread](learn-parathreads) Slots

AXIA can support a number of execution slots. These slots are like cores on a computer's processor (a modern laptop's processor may have eight cores, for example). Each one of these cores can run one process at a time. AXIA allots these slots using two subscription models: allychains and parathreads. Allychains have a dedicated slot (core) for their chain and are like a process that runs constantly. Parathreads share slots amongst a group, and are thus more like processes that need to be woken up and run less frequently.

Most of the computation that happens across the AXIA network as a whole will be delegated to specific allychain or parathread implementations that handle various use cases. AXIA places no constraints over what allychains are able to do besides that they must be able to generate a proof that can be validated by the validators assigned to the allychain. This proof verifies the state transition of the allychain. Some allychains may be specific to a particular application, others may focus on specific features like smart contracts, privacy, or scalability &mdash; still others might be experimental architectures that are not necessarily blockchain in nature.

AXIA provides many ways to secure a slot for a allychain slot for a particular length of time. Parathreads are part of a pool that shares slots and must win auctions for individual blocks. Parathreads and allychains have the exact same API; their difference is economic. Allychains will have to reserve AXC for duration of their slot lease; parathreads will pay on a per-block basis. Parathreads can become allychains, and vice-versa.

## Shared Security

Allychains connected to the AXIA Relay Chain all share in the security of the Relay Chain. AXIA has a shared state between the Relay Chain and all of the connected allychains. If the Relay Chain must revert for any reason, then all of the allychains would also revert. This is to ensure that the validity of the entire system can persist and no individual part is corruptible.

The shared state makes it so that the trust assumptions when using AXIA allychains are only those of the Relay Chain validator set, and no other. Since the validator set on the Relay Chain is expected to be secure with a large amount of stake put up to back it, it is desirable for allychains to benefit from this security.

## Roles

### Validators

Validators, if elected to the validator set, produce blocks on the Relay Chain. They also accept proofs of valid state transition from collators. In return, they will receive staking rewards.

### Collators

Collators are full nodes on both a allychain and the Relay Chain. They collect allychain transactions and produce state transition proofs for the validators on the Relay Chain. They can also send and receive messages from other allychains using XCMP.

### Nominators

Nominators bond their stake to particular validators in order to help them get into the active validator set and thus produce blocks for the chain. In return, nominators are generally rewarded with the portion of the staking rewards from that validator.

## Whiteboard Series

For a video overview of the architecture of AXIA watch the video below for the whiteboard interview with W3F researcher Alistair Stewart: <iframe width="560" height="315" src="https://www.youtube.com/embed/xBfC6uTjvbM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen mark="crwd-mark"></iframe>
