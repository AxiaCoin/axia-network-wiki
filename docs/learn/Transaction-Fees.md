---
id: Transaction-Fees
title: Transaction Fees
sidebar_label: Transaction Fees
description: An explanation of the consensus model used in AXIA
slug: ../Transaction-Fees
---
Some resources in a blockchain network are not unlimited, such as storage space and computational power. Network fees are a means to prevent improper consumption of these resources by the network users, and also stop malicious behavior such as spamming. The AXIA Network uses a gas metering model that is well established in the Ethereum. The fee is charged for every on-chain transaction and once the fee is deducted, the network considers the transaction fully processed. At that time the network fee will be burned, permanently removing these AXIA Coins from existence.


### The transaction fee model of the AXIA Network follows these objectives:

* AXIA Network fees will stay low and stable 
* Smart contract deployment and execution
* All network fees are to be burned to create greater scarcity to provide consistent value for all network participants
* Block production delays are to be avoided and the CoreChain and AXChain must always ensure efficient block production
* The CoreChain and AXChain shall grow at a predictable rate
* Blocks must support having space for reporting of malicious events on-chain
* The AXIA Network as a system must be able to handle sudden demand peaks
* The AXIA Network will provide the capability to accurately estimate the fee for transactions

### Fees on the AXIA Network CoreChain are calculated based on the following:

* Fees for the length or the byte size
* A charge against the weight
* Optional fee to prioritize transactions

:::note

Here the length fee is the fixed per-byte fee and the transaction size in bytes, the weight fee is a fixed fee for each validated block, and the optional fee is at the discretion of the user to give higher priority to their transactions.

:::

These three elements of the fee are deducted from the sender's account prior to execution of the transaction. The total amount deducted from the sender will then be burned, reducing Total Supply of AXIA Coin. Therefore unlike any other network, AXIA will burn 100% of all gas fees. This provides a significant economic advantage for all participants on the network, as the constant reduction in Total Supply after each block creation will provide ongoing value for all AXIA community members. The staking rewards will come from Total Supply utilizing the proprietary model of AXIA.


The unique algorithms used to calculate network transaction fees utilized by AXIA ensures that fees are not only predictable but will remain low regardless of network usage and market activity. This is implemented by the fact there is a non-inflationary system in place whereas any increase in activity on the network will not correlate proportionally to an increased cost for the network fees. 



