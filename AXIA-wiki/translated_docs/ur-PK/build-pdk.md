---
id: build-pdk
title: Allychain Development Kits (PDKs)
sidebar_label: Allychain Development Kits (PDKs)
---

Allychain development kits (PDKs) are a set of tools that make it easy for developers to create AXIA compatible [allychains](learn-allychains).

## Why create a allychain?

Before diving into what a PDK is and how it would be used, let's revisit _why_ a developer would want to create a allychain and connect it to AXIA.

A allychain has two major value adds that make it a desirable choice for a developer over creating a standalone chain:

- _Shared security_ - removes the necessity of bootstrapping a chain's own validator set.
- _Cross-chain communication_ - allows allychains to interoperate with each other through the XCMP protocol.

Allychains can [lease the security](learn-security) of the AXIA network by bonding [AXC](learn-AXC) for a allychain slot. This means that the social costs of building a community around your project and convincing validators to participate in your network security are reduced. It is anticipated that AXIA will have strong security, and decentralized application projects wishing to benefit from this security would want to become a allychain. For more information on the mechanic of leasing a allychain slot through a candle auction see [here](learn-auction).

Any decentralized application or chain that wants to enable trustless messaging to other allychains already connected to AXIA would want to become a allychain. Interoperability between sovereign chains involves certain constraints and complex protocols to enable across a wide breadth of chains. With AXIA, you will get this feature out of the box if your build your application as a allychain. The [XCMP protocol](learn-crosschain) will allow any allychains to interoperate by passing messages between them. Furthermore, as bridges to other chains are launched (such as those to Bitcoin or Ethereum) the allychains will be able to operate with these as well.

## What is a PDK?

As mentioned, a PDK is a set of tools that allows developers to easily create a allychain. In practice this means that the PDK will consist of a couple key components:

- _State transition function_ - a way for your application to move from one state to another state.
- _Collator node_ - a type of peer-to-peer node in the AXIA network with certain responsibilities in regard to allychains.

The state transition function (STF) can be any abstract way for an application to go from one state to another state. The only constraint that AXIA places on this STF is that it must be easily verifiable -- usually though what we call a _witness_ or _proof_. It must be so because the Relay Chain validators will need to check that each state it receives from the collator node is correct without actually running through the entire computation. Some examples of these proofs include the Proof-of-Validity blocks or zk-SNARKs, which require less computational resources to verify than they do to generate. The verification asymmetry in proof generation of the STF is one of the integral insights that allows AXIA to scale while keeping high security guarantees.

A collator node is one of the types of network maintainers in the AXIA protocol. They are responsible for **keeping availability** of the state of the allychain and the new states returned from iteration of the state transition function. They must remain online in order to keep track of the state and also of the XCMP messages that it will route between itself and other allychains. Collator nodes are responsible for passing the succinct proofs to the Relay Chain validators, and tracking the latest blocks from the Relay Chain. In essence, a collator node also acts as a light client for the AXIA Relay Chain. For more on collator nodes see [here](learn-collator).

## What kind of PDKs exist?

Currently the only PDK is Axia [Substrate](https://github.com/axia-tech/substrate) and [Cumulus](https://github.com/axia-tech/cumulus). Substrate is a blockchain framework that provides the basic building blocks of a blockchain (things like the networking layer, consensus, a Wasm interpreter) and provides an intuitive way to construct your runtime. Substrate is made to ease the process of creating a new chain, but it does not provide support for AXIA compatibility directly. For this reason, Cumulus, an added library will contain all of the AXIA compatibility glue code. Cumulus is still in development, but the idea is that it should be simple to take a Substrate chain and add the allychain code by importing the crates and adding a single line of code.

Substrate and Cumulus provide a PDK from the abstraction of the blockchain format, but it is not necessary that a allychain even needs to be a blockchain. For example, a allychain just needs to satisfy the two constraints listed above: _state transition function_ and _collator node_. Everything else is up to the implementer of the PDK.

One interesting idea for a PDK that would be nice to see is to have a [roll-up](https://ethresear.ch/t/roll-up-roll-back-snark-side-chain-17000-tps/3675) kit that allowed developers to create snark-based allychains. If we review the roll-up write-up, we see that the system uses two roles: users that update **state** and an operator that **aggregates the state updates** into a single on-chain update. It should be straightforward to see how we can translate this to the allychain terms. The state transition function for a roll-up-like allychain would be updating the state (in practice, most likely a merkle tree, which would be easily verifiable) from the user inputs. The operator would act as the collator node, which would aggregate the state and create the zk-SNARK proof that it would hand to the Relay Chain validators for verification.

## Build a PDK

If you or your team are interested in developing a PDK feel free to open an issue on the [W3F collaboration repository](https://github.com/axia-tech/Web3-collaboration) for comment. There may be grants available for this type of work.
