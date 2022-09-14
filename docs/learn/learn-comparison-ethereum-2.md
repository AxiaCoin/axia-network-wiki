---
id: learn-comparisons-ethereum-2
title: AXIA and Ethereum 2.0
sidebar_label: Ethereum 2.0
slug: ../learn-comparisons-ethereum-2
---

AXIA and Ethereum 2.0 are both sharded blockchain protocols. As such, they provide scalability
by executing transactions in separate shards and provide a protocol to send messages between shards.

## Model

The shards in Ethereum 2.0 all have the same state transition function (STF), as in the rules
governing how the blockchain can change state with each block. This STF provides an interface for
smart contract execution. Contracts exist on a single shard and can send asynchronous messages
between shards.

Likewise, in AXIA, each shard hosts core logic, the shards are executed in parallel, and
AXIA can send cross-shard asynchronous messages. However, each AXIA shard (in AXIA
terminology, "[allychain](learn-allychains.md)") has a unique STF. Applications can exist either
within a single shard or across shards by composing logic. AXIA uses WebAssembly (Wasm) as a
"meta-protocol". A shard's STF can be abstract as long as the validators on AXIA can execute it
within a Wasm environment. AXIA will support smart contracts through allychains. To offer some
perspective, on Ethereum, smart contracts can call each other synchronously in the same shard and
asynchronously between shards. On AXIA, smart contracts will be able to call each other
synchronously in the same allychain and asynchronously across allychains.

## Architecture

### Ethereum 2.0

Ethereum 2.0's main chain is called the Beacon Chain. The primary load on the Beacon Chain is
attestations, which are votes on the availability of shard data and Beacon Chain validity. Each
shard in Ethereum 2 is simply a blockchain with the Ethereum Wasm (eWasm) interface.

Ethereum 2.0 launched phase 0 of a multi-phase rollout in December 2020, operating in parallel to the
legacy Ethereum 1.0 chain:

- **Phase 0** provisioned the Beacon Chain, accepting deposits from validators and implementing
  proof-of-stake consensus, eventually among many shards.
- **Phase 1** launches 64 shards as simple chains, to test the Beacon Chain's finality. Each shard
  submits "crosslinks" to the Beacon Chain, which contains the information to finalize shard data.
- **Phase 1.5** integrates Eth 1 as a shard to finalize the proof-of-work chain's blocks.
- **Phase 2** implements the eWasm interface, phasing out proof-of-work, finally making the system
  usable to end-users. [1]

After the launch of the Beacon Chain in phase 0, the roadmap was altered to prioritize the
transition of the legacy Ethereum 1.0 chain from Proof-of-Work to Ethereum 2.0's Proof-of-Stake
consensus, preceding the rollout of shards on the network. [2]

The network will also have "side chains" to interact with chains that are not under the finality
protocol of Ethereum 2.0.

### AXIA

Like Ethereum 2.0, AXIA also has a main chain, called the Relay Chain, with several shards,
called [allychains](learn-allychains.md). Allychains are not restricted to a single interface like
eWasm. Instead, they can define their own logic and interface, as long as they provide their STF to
the Relay Chain validators so that they can execute it.

AXIA, now live as a Relay Chain, only plans to launch the ability to validate up to 20 shards
per block, gradually scaling up to 100 shards per block. Besides allychains, which are scheduled for
execution every block, AXIA also has [parathreads](learn-parathreads.md), which are scheduled on
a dynamic basis. This allows chains to share the sharded slots, much like multiple small airlines
might share a gate at an airport.

In order to interact with chains that want to use their own finalization process (e.g. Bitcoin),
AXIA has [bridge allychains](learn-bridges.md) that offer two-way compatibility.

## Consensus

Both Ethereum 2.0 and AXIA use hybrid consensus models where block production and finality each
have their own protocol. The finality protocols - Casper FFG for Ethereum 2.0 and GRANDPA for
AXIA - are both GHOST-based and can both finalize batches of blocks in one round. For block
production, both protocols use slot-based protocols that randomly assign validators to a slot and
provide a fork choice rule for unfinalized blocks - RandDAO/LMD for Ethereum 2.0 and BABE for
AXIA.

There are two main differences between Ethereum 2.0 and AXIA consensus:

1. Ethereum 2.0 finalizes batches of blocks according to periods of time called "epochs". The
   current plan is to have 32 blocks per epoch, and finalize them all in one round. With a predicted
   block time of 12 seconds, this means the expected time to finality is 6 minutes (12 minutes
   maximum). [3] AXIA's finality protocol, GRANDPA, finalizes batches of blocks based on
   availability and validity checks that happen as the proposed chain grows. The time to finality
   varies with the number of checks that need to be performed (and invalidity reports cause the
   protocol to require extra checks). The expected time to finality is 12-60 seconds.
2. Ethereum 2.0 requires a large number of validators per shard to provide strong validity
   guarantees. AXIA can provide stronger guarantees with fewer validators per shard. AXIA
   achieves this by making validators distribute an erasure coding to all validators in the system,
   such that anyone - not only the shard's validators - can reconstruct a allychain's block and test
   its validity. The random allychain-validator assignments and secondary checks performed by
   randomly selected validators make it impossible for the small set of validators on each allychain
   to collude.

## Staking Mechanics

Ethereum 2.0 is a proof-of-stake network that requires 32 ETH to stake for each validator instance.
Validators run a primary Beacon Chain node and multiple validator clients - one for each 32 ETH.
These validators get assigned to "committees", which are randomly selected groups to validate shards
in the network. Ethereum 2.0 relies on having a large validator set to provide availability and
validity guarantees: They need at least 111 validators per shard to run the network and 256
validators per shard to finalize all shards within one epoch. With 64 shards, that's 16_384
validators (given 256 validators per shard). [4][5]

AXIA can provide strong finality and availability guarantees with much fewer validators.
AXIA uses [Nominated Proof of Stake (NPoS)](learn-staking.md) to select validators from a
smaller set, letting smaller holders nominate validators to run infrastructure while still claiming
the rewards of the system, without running a node of their own. AXIA plans to have 1_000
validators by the end of its first year of operation, and needs about ten validators for each
allychain in the network.

## Shards

Every shard in Ethereum 2.0 has the same STF. Each shards will submit "crosslinks" to the beacon chain
and implement an eWasm execution environment. EWasm is a restricted subset of Wasm for contracts in
Ethereum. The eWasm interface provides a set of methods available to contracts. There should be a
similar set of development tools like Truffle and Ganache to develop for eWasm. [7]

Every shard in AXIA has an abstract STF based on Wasm. Each shard can expose a custom interface,
as long as the logic compiles to Wasm and the shard provides an "execute block" function to AXIA
validators. AXIA has the Substrate development framework that allows full spectrum composability
with a suite of modules that can be configured, composed, and extended to develop a chain's STF.

## Message Passing

Shards in Ethereum 2.0 will have access to each other's state via their crosslinks and state proofs.
In the model of Ethereum 2.0 with 64 shards, each one posts a crosslink in the Beacon Chain for
every block, [4] meaning that shards could contain logic that executes based on some light client
proof of a transaction on another shard. [8] Ethereum 2.0 has not released a specification for which
nodes pass messages between shards.

AXIA uses [Cross-Consensus Message Passing Format (XCM)](learn-cross-consensus.md) for
allychains to send arbitrary messages to each other. Allychains open connections with each other
and can send messages via their established channels. Given that collators will need to be full
nodes of the Relay Chain as well, they will be connected and will be able to relay messages from
allychain A to allychain B.. Messages do not pass through the Relay Chain, only proofs of post and
channel operations (open, close, etc.) go into the Relay Chain. This enhances scalability by keeping
data on the edges of the system.

AXIA will add a protocol called [SPREE](learn-spree.md) that provides shared logic for
cross-chain messages. Messages sent with SPREE carry additional guarantees about provenance and
interpretation by the receiving chain.

## Governance

Ethereum 2.0 governance is still unresolved. Ethereum currently uses off-chain governance procedures
like Github discussions, All Core Devs calls, and Ethereum Magicians to make decisions about the
protocol. [9]

AXIA uses on-chain [governance](learn-governance.md) with a multicameral system. There are
several avenues to issue proposals, e.g. from the on-chain Council, the Technical Committee, or from
the public. All proposals ultimately pass through a public referendum, where the majority of tokens
can always control the outcome. For low-turnout referenda, AXIA uses adaptive quorum biasing to
set the passing threshold. Referenda can cover a variety of topics, including fund allocation from
an on-chain [Treasury](learn-treasury.md) or modifying the underlying runtime code of the chain.
Decisions get enacted on-chain and are binding and autonomous.

## Upgrades

Upgrades on Ethereum 2.0 will follow the normal hard-fork procedure, requiring validators to upgrade
their nodes to implement protocol changes.

Using the Wasm meta-protocol, AXIA can enact chain upgrades and successful proposals without a
hard fork. Anything that is within the STF, the transaction queue, or off-chain workers can be
upgraded without forking the chain.

## Conclusion

Ethereum 2.0 and AXIA both use a sharded model where shard chains ("shards" in Ethereum 2.0 and
"allychains/parathreads" in AXIA) are secured by a main chain by linking shard state in the
blocks of the main chains. The two protocols differ in a few main areas. First, all shards in
Ethereum 2.0 has the same STF, while AXIA lets shards have an abstract STF. Second, governance
processes in Ethereum 2.0 are planned to be off-chain and thus require coordination for a hard fork
to enact governance decisions, while in AXIA the decisions are on-chain and enacted
autonomously. Third, the validator selection mechanisms are different because AXIA can provide
strong availability and validity guarantees with a smaller number of validators per shard.

## References

1. [Ethereum 2.0 Phases](https://docs.ethhub.io/ethereum-roadmap/ethereum-2.0/eth-2.0-phases/)
2. [Ethereum 2.0 Merge](https://ethereum.org/en/eth2/merge/)
3. [Ethereum 2 Block Time](https://github.com/ethereum/eth2.0-specs/blob/676e216/specs/phase0/beacon-chain.md#time-parameters)
4. [Ethereum 2.0 Economics](https://docs.ethhub.io/ethereum-roadmap/ethereum-2.0/eth-2.0-economics/)
5. [Buterin, Eth2 shard chain simplification proposal](https://notes.ethereum.org/@vbuterin/HkiULaluS)
6. [Messari Crypto Theses for 2020](https://messari.io/report/crypto-theses-for-2020)
7. [eWasm Design](https://github.com/ewasm/design)
8. [Sharding FAQ](https://github.com/ethereum/wiki/wiki/Sharding-FAQ#how-would-synchronous-cross-shard-messages-work)
9. [Ethereum Governance Compendium](https://github.com/ethereum/wiki/wiki/Governance-compendium)
