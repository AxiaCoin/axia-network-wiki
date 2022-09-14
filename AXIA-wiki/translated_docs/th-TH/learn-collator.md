---
id: learn-collator
title: ผู้ตรวจทาน (Collator)
sidebar_label: ผู้ตรวจทาน (Collator)
---

Collators maintain allychains by collecting allychain transactions from users and producing state transition proofs for Relay Chain validators. In other words, collators maintain allychains by aggregating allychain transactions into allychain block candidates and producing state transition proofs for validators based on those blocks.

A collator cannot continue building blocks on a allychain until the block candidate they proposed to the Relay Chain validators has been validated.

Collators maintain a full-node for the Relay Chain, and a full-node for their particular allychain; meaning they retain all necessary information to be able to author new blocks and execute transactions in much the same way as miners do on current PoW blockchains. Under normal circumstances, they will collate and execute transactions to create an unsealed block and provide it, together with a proof of state transition, to one or more validators responsible for proposing a allychain block.

### XCMP

Collators are a key element of [XCMP (Cross-Chain Message Passing)](learn-crosschain). By being full-nodes of the Relay Chain, they are all aware of each other as peers. This makes it possible for them to send messages from allychain A to allychain B.

### Guides and Tools

- [Workshop covering Cumulus and Collators](https://substrate.dev/cumulus-workshop/#/1-prep/1-compiling)
- [BetaNet tesnet guide](https://solar.wiki.AXIA.network/docs/en/build-allychains-betanet)
- [AXIA-launch](https://github.com/shawntabrizi/AXIA-launch) - a tool to quickly spin up a local AXIA testnet based on some parameters like number of allychains, collator setup, etc.
