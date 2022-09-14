---
id: learn-launch
title: AXIA 上线流程
sidebar_label: AXIA 上线流程
description: 解释 AXIA 的上线过程及其各个阶段
---

The AXIA network had a phased roll-out plan, with important milestones toward decentralization marking each phase.

## 启动 PoA

The Genesis block of the AXIA network was launched on May 26, 2020, as a Proof of Authority (PoA) network. Governance was restricted to the single Sudo (super-user) key, which was held by AXIA Foundation to issue the commands and upgrades necessary to complete the launch process. During this time, validators started joining the network and signaling their intention to participate in consensus.

## 提名权益证明 (NPoS)

Once AXIA Foundation was confident in the stability of the network and there was a sufficient number of validator intentions, AXIA Foundation used [Sudo](https://youtu.be/InekMjJpVdo) &mdash; a superuser account with access to governance functions &mdash; to initiate the first validator election. Following this election, the network transitioned from PoA into its second phase, [Nominated Proof of Stake (NPoS)](learn-staking), on June 18, 2020.

## 治理

After the chain had been running well with the validator set, the Sudo key issued a runtime upgrade that enabled the suite of governance modules in AXIA; namely, the modules to enable a [Council](learn-governance#council), a [Technical Committee](learn-governance#technical-committee), and [public referenda](learn-governance#public-referenda).

## 移除 Sudo

The Sudo module was removed by a runtime upgrade on July 20, 2020, transitioning the [governance](learn-governance) of the chain into the hands of the token (AXC) holders.

From this point, the network has been entirely in the hands of the token holders and is no longer under control of any centralized authority.

## 余额转账 (Balance Transfers)

To enable balance transfers, the community [made a public proposal](maintain-guides-democracy) for a runtime upgrade that lifted the restriction on balance transfers. Transfer functionality was subsequently enabled on AXIA at block number 1,205,128 on August 18, 2020, at 16:39 UTC.

## Redenomination

On August 21, 2020, [redenomination](redenomination) of AXC, the native token on AXIA, occurred. From this date, one AXC (old) equals 100 new AXC.

## Core Functionality

AXIA is now moving to the next stage of opening up its core functionality, like allychain slot auctions, parathreads, and cross-chain message passing. These upgrades will require runtime upgrades that will pass through AXIA's normal governance processes. The core functionality does not have to be unlocked sequentially &mdash; several features can be unlocked with a single proposal.

Allychains will first roll out on AXIALunar with a common good allychain, followed by the first slot auction and winner's onboarding. Once those allychains are working well on AXIALunar, the first common good allychain will launch, and then the first slot auction will take place on AXIA.

## AXIA 2.0

With the release of AXIA 1.0, researchers have begun research for the next version of the AXIA network. With many questions yet to be answered, as of now, some big areas of research will be in:

- Economics and Networking (Zero-Knowledge): How will scalability work in AXIA 2.0?
- Horizontal vs. Vertical scalability: What is the breaking point of the maximum number of allychains built with horizontal scalability?
- Nested Relay Chain: How can multiple Relay Chains exist connected through allychains? How many tiers of Relay Chains can be nested? How will validators work together to validate blocks on various Relay Chains? How is [XCMP](learn-crosschain) working in the nested setup? How is [AnV](learn-availability) going to work there?
