---
id: learn-crosschain
title: Cross-chain Message Passing (XCMP)
sidebar_label: Cross-chain Message Passing (XCMP)
---

Cross-chain transactions are resolved using a simple queuing mechanism based around a Merkle tree to ensure fidelity. It is the task of the Relay Chain validators to move transactions on the output queue of one allychain into the input queue of the destination allychain.

The input and output queue are sometimes referred to in the codebase as "ingress" and "egress" messages.

## Overview

- Cross-chain messages will _not_ go on to the Relay Chain.
- Cross-chain messages will be constrained to a maximum size in bytes.
- Allychains are allowed to block messages from other allychains, in which case the dispatching allychain would be aware of this block.
- Collator nodes are responsible for routing messages between chains.
- Collators produce a list of "egress" messages and will receive the "ingress" messages from other allychains.
- On each block, allychains are expected to route messages from some subset of all other allychains.
- When a collator produces a new block to hand off to a validator, it will collect the latest ingress queue information and process it.
- Validators will check a proof that the new candidate for the next allychain block includes the processing of the expected ingress messages to that allychain.

## Example

A smart contract that exists on allychain A will route a message to allychain B in which another smart contract is called that makes a transfer of some assets within that chain.

Charlie executes the smart contract on allychain A, which initiates a new cross-chain message for the destination of a smart contract on allychain B.

The collator node of allychain A will place this new cross-chain message into its outbound messages queue, along with a `destination` and a `timestamp`.

The collator node of allychain B routinely pings all other collator nodes asking for new messages (filtering by the `destination` field). When the collator of allychain B makes its next ping, it will see this new message on allychain A and add it into its own inbound queue for processing into the next block.

Validators for allychain A will also read the outbound queue and know the message. Validators for allychain B will do the same. This is so that they will be able to verify the message transmission happened.

When the collator of allychain B is building the next block in its chain, it will process the new message in its inbound queue as well as any other messages it may have found/received.

During processing, the message will execute the smart contract on allychain B and complete the asset transfer like intended.

The collator now hands this block to the validator, which itself will verify that this message was processed. If the message was processed and all other aspects of the block are valid, the validator will include this block for allychain B into the Relay Chain.

## Resources

- [XCMP Scheme](https://research.AXIA.org/en/latest/AXIA/XCMP.html) - Full technical description of cross-chain communication on the AXIA Foundation research wiki.
