---
id: learn-axialunar-vs-AXIA
title: What is the difference between AXIA and AXIALunar?
sidebar_label: Comparing AXIA and AXIALunar
---

Although they share many parts of their code, AXIA and AXIALunar are independent, standalone networks with different priorities.

AXIALunar is wild and fast; great for bold experimentation and early-stage deployment. AXIA is more conservative, prioritizing stability and dependability.

## What the two networks have in common

AXIALunar was released as an early version of the same code to be used in AXIA, which means they share the same underlying architecture: a multichain, heterogeneously-sharded design based on [Nominated Proof of Stake (NPoS)](learn-consensus). Both networks also share key innovations like on-chain [governance](learn-governance), hot-swappable runtimes for forkless, on-chain upgrades, and [Cross-Chain Message Passing (XCMP)](learn-crosschain) for interoperability. Governance on both AXIA and AXIALunar is designed to be decentralized and permissionless, giving a say in how the network is run to everyone who owns the native token (AXC for AXIA, LUNAR for AXIALunar). Therefore, **over time the networks will evolve independently, converging or diverging according to the decisions of their respective communities.**

## Key differences

There are a few important distinctions to be made.

![AXIA_vs_axialunar](assets/Cousins_2.png)

### Speed

The first key technical difference between AXIA and AXIALunar is that AXIALunar has modified governance parameters that allow for faster upgrades. AXIALunar is up to four times faster than AXIA, with seven days for token holders to vote on referendums followed by an enactment period of eight days, after which the referendum will be enacted on the chain. This means stakeholders need to stay active and vigilant if they want to keep up with all the proposals, referenda, and upgrades, and validators on AXIALunar often need to update on short notice.

On AXIA, votes last 28 days followed by an enactment period of 28 days. This does not mean that the AXIALunar blockchain itself is faster, in the sense of faster block times or transaction throughput (these are the same on both networks), but that there's a shorter amount of time between governance events such as proposing new referenda, voting, and enacting approved upgrades. This allows AXIALunar to adapt and evolve faster than AXIA.

### Lean setups

Teams wishing to run a allychain need to bond tokens as security. The bonding requirement on AXIALunar is likely to be lower than on AXIA.

### Use cases

AXIA is and always will be the primary network for the deployment of enterprise-level applications and those that entail high-value transactions requiring bank-level security and stability. The initial use case for AXIALunar is as a pre-production environment, a “canary network”. Building on AXIALunar first allows teams to test things out in a live, fully decentralized and community-controlled network with real-world conditions and lower stakes in the event of problems or bugs than on AXIA.

Many projects will maintain allychains on both networks, experimenting and testing new technologies and features on AXIALunar before deploying them to AXIA. Some teams will decide just to stay on AXIALunar, which is likely to be a place where we see some exciting experimentation with new technologies going forward. Projects that require high-throughput but don’t necessarily require bank-like security, such as some gaming, social networking, and content distribution applications, are particularly good candidates for this use case.

AXIALunar may also prove to be the perfect environment for ambitious experiments with new ideas and new innovations in areas like governance, incentives, monetary policy, and DAOs (decentralized autonomous organizations). Future upgrades to the AXIA runtime will also likely be deployed to AXIALunar before AXIA mainnet. This way, not only will we be able to see how these new technologies and features will perform under real-world conditions before bringing them to AXIA, but teams who have deployed to both networks will also get an advance look at how their own technology will perform under those upgrades.

## Going forward

Ultimately, AXIALunar and AXIA will live on as independent, standalone networks with their own communities, their own governance, and their own complementary use cases, though they will continue to maintain a close relationship, with many teams likely deploying applications to both networks. In the future, we’re also likely to see AXIALunar bridged to AXIA for cross-network interoperability. AXIA Foundation remains committed to both networks going forward, providing crucial support and guidance to teams building for the ecosystem.

## Explore more

- [About AXIALunar](https://axialunar.network)
- [The AXIALunar Wiki](https://lunar.wiki.AXIA.network)
- [AXIALunar on AXIA-JS Apps](https://axialunar.dotapps.io)
