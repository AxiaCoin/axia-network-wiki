---
id: Crosschain
title: What is Cross Chain Transfer?
sidebar_label: Cross Chain Transfer
slug: ../Crosschain
---


As we see there are three blockchains(CoreChain, AXChain, SwapChain) in [AXIA Network](../docs/The-AXIA-Network). Every chain has some distinct function. Cross Chian transfer is the transfer of AXC from one chain to another chain within the AXIA Network. This Cross Chain feature will provide more safety and scalability to the network.



## AXIA Network Structure
### CoreChain
CoreChain would be considered the layer-0 blockchain protocol that supports and accommodates multiple layer-1 AllyChains as well as the SwapChain and AXChain CoreChain acts as a middleware chain on AXIA network which manages all the Validators and communications, The Core Chain coordinates network validators and can be used for staking on the AXIA Wallet.

### AXChain
The AXChain maintains a state that is a direct mapping of account details, balances and counters of transactions. The AXChain will allow developers to easily build dApps and other applications on top of the AXIA Network, offering a new level of convenience for users and assets to exist across multiple blockchains while providing greater compatibility with the AXIA Network AllyChain environment. The AXChain is an EVM implementation that has its own ledger which is secured and validated through CoreChain Validators.

### SwapChain
The SwapChain is built with AVM (AXIA Virtual Machine) which provides support for creating and exchanging digital properties. It serves as a digital twin for real world instruments with each having a predefined set of rules. Network fees will be required for the creation and exchange of these digital instruments.



### How to perform cross-chain transactions on the AXIA Network:
Navigate to the "CROSS CHAIN" section from the sidebar.
![pjs-01](../assets/webWallet/w32.png)
Choose CoreChain, AXChain or SwapChain as your source chain.
![pjs-01](../assets/webWallet/w33.png)
If you choose one chain as a source chain, the other two chains can serve as the destination chains.
For example,if you choose AXChain as your Source Chain your destination will be the SwapChain or CoreChain. Select the destination chain as per the requirement.
![pjs-01](../assets/webWallet/w19.png)
Enter the amount you want to transfer and then click "CONFIRM" to continue.
:::note
Transaction fees be very minimal for cross-chain transfers.
:::
![pjs-01](../assets/webWallet/w20.png)
After confirming, you will see that the amount will first export from the source chain and then it will import in the destination chain. A transaction ID will also be generated for each operation.
![pjs-01](../assets/webWallet/w21.png)
Within a few seconds the transaction will be completed and the balance will be reflected in that specific chain.
![pjs-01](../assets/webWallet/w22.png)

 [AXIA Support](https://discord.gg/axianetwork) - Connect with our community of experts to learn or ask questions.
