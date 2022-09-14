---
id: The-AXIA-Network
title: The AXIA Network
sidebar_label: The AXIA Network
slug: ../The-AXIA-Network
---

## Network design
On first generation blockchains, broadcasting of transactions is synchronic. This logic is rooted in these networks' peer-to-peer model but that is not mirrored in the protocol itself. Second generation protocols like Ethereum 2.0 plan to address this gap by facilitating the amalgamation of several sub-protocols. This structure, however, also remains quite simple. 
The AXIA Network can broadly be separated into following sets - the CoreChain, SwapChain, AXChain and AllyChains, with each of these having two subsets; Validators and nominators. Members of each AllyChain interact among themselves rather than conversing with participants in other AllyChains. 
For a well scaled out multi-chain, the approach for a network node, or the peer strategy, will differ for each set of participants. The CoreChain is the main chain, which serves as the communication layer for all AllyChains. This communication layer further facilitates the interoperability between multiple AllyChains with each of them being part of the same CoreChain. It also ensures the network security and validation across all AllyChains, SwapChain and AXChain.
There is not an intrinsic requirement for CoreChain to support the smart contracts of AllyChains or AXChain. This is due to the fact that the AllyChains on the AXIA Network have complete freedom and autonomy to enable their own token with their own token standards as well as the economics. This provides an even higher level of decentralization.

## Network Architecture
### CoreChain
CoreChain would be considered the layer-0 blockchain protocol that supports and accommodates multiple layer-1 AllyChains as well as the SwapChain and AXChain CoreChain acts as a middleware chain on AXIA network which manages all the Validators and communications, it also allows creation of new AllyChains and maintains active AllyChains. CoreChain offers the API’s to allow for efficient creation of AllyChains, as well as adding new Validators to these AllyChains.

### AXChain
The AXChain maintains a state, which is a direct mapping of account details, balances and counters of transactions. AXChain will allow developers to easily build dApps and other applications on top of the AXIA Network offering a new level of convenience for users and assets to exist across multiple blockchains and provides greater compatibility with the AXIA Network AllyChain environment. This enables projects and developers to continue to use the programming languages and tools they have become accustomed to but within a fast-growing, scalable Layer 1 chain with superior economics and technology. Furthermore, developers are able to deploy smart contracts on the AXIA Network that are compatible with Ethereum. It offers an interoperability layer with existing Ethereum based tools, it will support all applications that were originally written for the EVM environment without friction on the AXIA Network. AXChain is a EVM implementation that has its own ledger which is secured and validated through CoreChain Validators.

### SwapChain
SwapChain is built with AVM (AXIA Virtual Machine) which provides support for creating and exchanging digital properties, it is a digital twin for the real world instruments with each having a predefined set of rules. Network fees will be required for the creation and exchange of these digital instruments. SwapChain offers APIs to allow for convenient creation and exchange of these digital properties over AVM.

### AllyChain
The AXIA AllyChains are next-generation layer-1 blockchains that combine the power of multiple independently running chains connected to the CoreChain. AllyChains are independent in terms of tokenomics and ledger while inheriting the security from CoreChain. The cross-chain interoperability of the AXIA Network allows any type of data or asset exchange between AllyChains; it will enable a new design of interoperable chains while developing future decentralized communities and economies. The AXIA Network was designed for a greater level of decentralization and scalability rather than being dependent on inferior layer-2 approaches.
By the virtue of the continuous expansion of multiple AllyChains across the AXIA Network, the Validator Nodes that are contributing to the ecosystem will grow with each AllyChain which increases the level of decentralization.

### AllyChain and Projects
AXIA CoreChain allows any project to access the network as it is by utilizing the given token and token economies of the default AllyChain. However, they will also possess the ability to have a customized AllyChain with their own token and tokenomics as required by that particular project. The AllyChain will continue to inherit all the characteristics of the default AllyChain and operate fully integrated with the AXIA CoreChain while simultaneously having complete independence.
 
### Validators
The AXIA PoP consensus is a fair and transparent protocol that is driven by Nominators and Validators. It allows for Nominators to elect a set of Validators and support them with a specific stake of their AXIA Coin. The endorsed Validators in turn are then responsible to author and finalize blocks on the network. This staking process is very secure, scalable and highly decentralized. The Validator is evaluated during the unbonding time during which the defined set of tokens remains staked. These bonded tokens cannot be used until the end of the unbonding time or manual unbonding is initiated. The minimum amount a validator must stake is 10,000 AXC. Currently the maximum tenure for a Validator to stake is for a period of two year. Minimum staking period currently is 120 days. A Validator can measure the uptime of other Validators. There is a minimum of uptime for validation of 80% for each Validator, however, the target should always be 100% for the validation tenure.

### Nominators
Nominators stake their AXIA Coin with the objective to ensure a fair Validator selection and good performance. As the Nominators are vested through their stake it ensures that the Network remains secure and trustworthy. Once the Nominators determine their Validator node candidates for a specific tenure, the system utilized for staking will then select the Validators with the highest staking balance and with the most fair reward distribution percentage.
A cycle is a time span during which there is a set of Validators actively participating in the authoring of blocks. Each cycle will have six sessions, equating to four hours in the real world. Before the last session, the active set of Validators for the next cycle are then elected. At the completion of each cycle, the total rewards are then calculated and will be distributed to the Validators and Nominators. 
Nominators are incentivized to select multiple Validators rather than concentrating all of their votes on just a small number of Validators. This offers the benefit of a true level of decentralization. The process in which elections take place is also quite dynamic, which assists in the network adapting should there be an instance where a Validator discontinuous or is removed for not meeting the obligations to the Network.
To ensure there is always fairness on the AXIA Network, should there ever be an instance that a Validator is removed there will be no need for the Nominator to change their vote as this will be done automatically.  

### MINIMIZATION OF LATENCY
As the Validators are selected to verify the AXchain transactions are randomly chosen as part of the basic consensus protocol, the validation and block level details change with each new block that is written. When disparate nodes need to exchange data, this may create a problem. The dApp or blockchain architect primarily relies upon appropriately distributed peer nodes to evaluate worst case latencies as the network size grows. Otherwise, longer block times have to be introduced to pave the way for the necessary connection negotiation so that a peer set reflecting the current communication needs takes shape. However, this does not solve the current latency issue to the extent needed.
Long block times render a network useless. Forcing uninterested nodes to forward data also results in the creation of substantial wastage of bandwidth. 
The architect may combine both directions to arrive at a solution. Minimization of latency will help reduce the volatility of these Validator sets. Placing tabs on the amount of peer churn and providing for the partial predictability of AXChain sets can help keep latency at the minimum possible level at all times.


## Network key components and features

### AXIA Network Client
AXIA Network Client is a distributable open source executable binary for the AXIA Network. It can start, connect or communicate between multiple nodes for all the activities which will take place on the CoreChain or between the CoreChain and AllyChains. It is implemented in RUST and ensures the network is secure and its data is accurate. 

The following elements remain fundamental to the AXIA Network:

### Storage and Peer-to-Peer Communication
AXIA Network storage is a continuously growing and ever evolving record through its own state updates. It is built out of the key value pair mechanism which is highly optimized, efficient and fairly simple to operate upon. Meanwhile, the communication is driven out of the libp2p based modular network stack which allows the AXIA Network to remain free from runtime and address services without worrying about the location of the communicating nodes.

### Crosschain Transfer
With the AXIA Network the CoreChain, SwapChain and AXChain are running in parallel for their specific purposes and also allows the transfer of tokens between these three chains using the same wallet. A user holds three addresses with different prefixes i.e. “Swap-”, “Core-”, “AX-”, respectively. This allows the user to easily manage and transact between each chain.

### Remote Procedure Call
The RPCs (Remote Procedure Calls) of AXIA are built over both HTTPs and WSS (WebSockets) that allow developers to not just interact with the blockchain but to get the running network details out of the node endpoints at any time.

## AXIA Network V2 Services
|                         | Description                                                                                                    |
|-------------------------|----------------------------------------------------------------------------------------------------------|
| [Web Wallet](https://wallet.axiacoin.network/)             |AXIA wallet a secure crypto wallet for the AXIA Network.                                                                          |
| [AXScan Explorer](https://axscan-v2.axiacoin.network/)  |    A block explorer for the AX chain of the AXIA network.                                                                |
| EVM Chain RPC           | https://rpc.mainnet.axiacoin.network/ext/bc/AX/rpc<br/>https://rpc.testnet.axiacoin.network/ext/bc/AX/rpc|
| [AXIA Network Explorer](https://explorer.axiacoin.network/)| A transaction explorer for the AXIA network.                                                                 |

