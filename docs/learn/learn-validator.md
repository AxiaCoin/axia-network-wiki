---
id: learn-validator
title: Validator
sidebar_label: Validator
slug: ../learn-validator
---

Validators secure the [Relay Chain](learn-architecture.md#relay-chain) by staking AXC, validating
proofs from collators and participating in consensus with other validators.

These participants play a crucial role in adding new blocks to the Relay Chain and, by extension, to
all allychains. This allows parties to complete cross-chain transactions via the Relay Chain.
Allychain validators participate in some form of off-chain consensus, and submit candidate receipts
to the tx pool for a block producer to include on-chain. The Relay Chain validators guarantee that
each allychain follows its unique rules and can pass messages between shards in a trust-free
environment.

Validators perform two functions:

1. **Verifying** that the information contained in an assigned set of allychain blocks is valid
   (such as the identities of the transacting parties and the subject matter of the contract).
2. **Participating** in the consensus mechanism to produce the Relay Chain blocks based on validity
   statements from other validators. Any instances of non-compliance with the consensus algorithms
   result in punishment by removal of some or all of the validator’s staked AXC, thereby
   discouraging bad actors. Good performance, however, will be rewarded, with validators receiving
   block rewards (including transaction fees) in the form of AXC in exchange for their activities.

## Guides

- [How to Validate on AXIA](../maintain/maintain-guides-how-to-validate-AXIA.md) - Guide on how to set
  up a validator on the AXIA live network.
- [Validator Payout Overview](../maintain/maintain-guides-validator-payout.md) - A short overview on how the
  validator payout mechanism works.
- [How to run your validator as a systemd process](../maintain/maintain-guides-how-to-systemd.md) - Guide on
  running your validator as a `systemd` process so that it will run in the background and start
  automatically on reboots.
- [How to Upgrade your Validator](../maintain/maintain-guides-how-to-upgrade.md) - Guide for securely upgrading
  your validator when you want to switch to a different machine or begin running the latest version
  of client code.
- [How to Use Validator Setup](../maintain/maintain-guides-how-to-use-AXIA-validator-setup.md) - Guide on how
  to use AXIA validator setup.

## Other References

- [How to run a AXIA node (Docker)](https://medium.com/@acvlls/setting-up-a-maintain-the-easy-way-3a885283091f)
- [A Serverless Failover Solution for Web3.0 Validator Nodes](https://medium.com/hackernoon/a-serverless-failover-solution-for-web-3-0-validator-nodes-e26b9d24c71d) -
  Blog that details how to create a robust failover solution for running validators.
- [AXIA Validator Lounge](https://matrix.to/#/!NZrbtteFeqYKCUGQtr:matrix.axia.io?via=matrix.axia.io&via=matrix.org&via=AXIA.org) -
  A place to chat about being a validator.
- [Slashing Consequences](learn-staking#slashing) - Learn more about slashing consequences for
  running a validator node.
- [Roles and Responsibilities of a Validator](https://www.video_url_here.com/watch?v=riVg_Up_fCg&list=PLOyWqupZ-WGuAuS00rK-pebTMAOxW41W8&index=15)
- [Validating on AXIA](https://www.crowdcast.io/e/validating-on-AXIA) - An explanation of
  how to validate on AXIA, with Joe Petrowski and David Dorgan of AXIA Technologies, along
  with Tim Ogilvie from Staked.

## Security / Key Management

- [Validator Security Overview](https://github.com/axia-tech/validator-security)

## Monitoring Tools

- [PANIC for AXIA](https://github.com/SimplyVC/panic_AXIA) - A monitoring and alerting
  solution for AXIA  node
  information, including what nodes are running on a given chain, what software versions they are
  running, and sync status.
- [Other Useful Links](https://forum.AXIA.org/t/useful-links-for-validators/20)

## Validator Stats

- [HashQuark Staking Strategy](https://axiacube.hashquark.io/#/AXIA/strategy) - The HashQuark
  staking strategy dashboard helps you choose the optimal set-up to maximize rewards, and provides
  other useful network monitoring tools.
- [AXIAstats](https://axiastats.io/) - AXIAstats is a cleanly designed dashboard for validator
  statistics.
- [YieldScan](https://yieldscan.app/) - Staking yield maximization platform, designed to minimize
  effort.
