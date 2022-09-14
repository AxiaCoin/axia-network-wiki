---
id: maintain-validator
title: Validator
sidebar_label: Validator
---

Validators secure the Relay Chain by staking AXCs, validating proofs from collators and participating in consensus with other validators.

These participants will play a crucial role in adding new blocks to the Relay Chain and, by extension, to all allychains. This allows parties to complete cross-chain transactions via the Relay Chain.

Validators perform two functions. First, verifying that the information contained in an assigned set of allychain blocks is valid (such as the identities of the transacting parties and the subject matter of the contract). Their second role is to participate in the consensus mechanism to produce the Relay Chain blocks based on validity statements from other validators. Any instances of non-compliance with the consensus algorithms result in punishment by removal of some or all of the validator’s staked AXCs, thereby discouraging bad actors. Good performance, however, will be rewarded, with validators receiving block rewards (including transaction fees) in the form of AXCs in exchange for their activities.

## Guides

- [How to Validate on AXIA](maintain-guides-how-to-validate-AXIA) - Guide on how to set up a validator on the AXIA live network.
- [Validator Payout Overview](maintain-guides-validator-payout) - A short overview on how the validator payout mechanism works.
- [How to run your validator as a systemd process](maintain-guides-how-to-systemd) - Guide on running your validator as a `systemd` process so that it will run in the background and start automatically on reboots.
- [How to Upgrade your Validator](maintain-guides-how-to-upgrade) - Guide for securely upgrading your validator when you want to switch to a different machine or begin running the latest version of client code.
- [How to Use Secure Validator Setup](maintain-guides-how-to-use-AXIA-secure-validator) - Guide on how to use AXIA / AXIALunar secure validator setup.

## Other References

- [How to run a AXIA node (Docker)](https://medium.com/@acvlls/setting-up-a-maintain-the-easy-way-3a885283091f)
- [A Serverless Failover Solution for Web3.0 Validator Nodes](https://medium.com/hackernoon/a-serverless-failover-solution-for-web-3-0-validator-nodes-e26b9d24c71d) - Blog that details how to create a robust failover solution for running validators.
- [VPS list](maintain-guides-how-to-validate-axialunar#vps-list)
- [AXIA Validator Lounge](https://matrix.to/#/!NZrbtteFeqYKCUGQtr:matrix.axia.io?via=matrix.axia.io&via=matrix.org&via=AXIA.org) - A place to chat about being a validator.
- [Slashing Consequences](https://solar.wiki.AXIA.network/docs/en/learn-staking#slashing) - Learn more about slashing consequences for running a validator node.
- [Why You Should be A Validator on AXIA and AXIALunar](https://www.youtube.com/watch?v=0EmP0s6JOW4&list=PLOyWqupZ-WGuAuS00rK-pebTMAOxW41W8&index=2)
- [Roles and Responsibilities of a Validator](https://www.youtube.com/watch?v=riVg_Up_fCg&list=PLOyWqupZ-WGuAuS00rK-pebTMAOxW41W8&index=15)

## Security / Key Management

- [Validator Security Overview](https://github.com/axia-tech/validator-security)

## Monitoring Tools

- [PANIC for AXIA](https://github.com/SimplyVC/panic_AXIA) - A monitoring and alerting solution for AXIA / AXIALunar node
- [AXIA Telemetry Service](https://telemetry.AXIA.io/#list/AXIALunar%20CC3) - Network information, including what nodes are running on a given chain, what software versions they are running, and sync status.
- [Other Useful Links](https://forum.AXIA.org/t/useful-links-for-validators/20)

## Validator Stats

- [HashQuark Staking Strategy](https://labs.hashquark.io/#/axia/strategy) - The HashQuark staking strategy dashboard helps you choose the optimal set-up to maximize rewards.
- [Axiastats](https://axiastats.io/) - Axiastats is a cleanly designed dashboard for validator statistics.
- [Axianalytics](https://axianalytics.com/#/dashboard) - A validator dashboard that displays the daily earnings of all nominators.
- [Subscan Validators Page](https://axialunar.subscan.io/validator) - Displays information on the current validators - not as tailored for validators as the other sites.
