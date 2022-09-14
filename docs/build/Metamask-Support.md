---
id: Metamask-Support
title: Interacting with AXIA Using MetaMask
sidebar_label: Add AXIA to MetaMask
slug: ../Metamask-Support
---

## Introduction
Developers can leverage AXIA's Ethereum compatibility features to integrate tools, such as MetaMask, into their DApps. By doing so, they can use the injected library MetaMask provides to interact with the blockchain.
MetaMask allows users to store and manage account keys, broadcast transactions, send and receive Ethereum-based cryptocurrencies and tokens, and securely connect to decentralized applications through a compatible web browser or the mobile app's built-in browser.

### Install the MetaMask Extension

First, we start with a fresh and default MetaMask installation from the Chrome store. After downloading, installing, and initializing the extension, follow the Get Started guide. 

1. Go to - https://metamask.io/download.html
2. Click- Install MetaMask for Chrome

![remix](../assets/metamask/mmsupport0.png)

3. Click - Add to Chrome

![remix](../assets/metamask/mmsupport-1.png)

4. A window will pop up and click - Add Extension

![remix](../assets/metamask/mmsupport-2.png)

After a few second it will automatically redirect you to the Metamask Quick Start site

### How to Import or Create a Wallet in Metamask

1. Click- Get Started

![remix](../assets/metamask/mmsupport-3.png)

You will see a wizard like this

![remix](../assets/metamask/mmsupport-4.png)

### Import Previous Wallet

1. If you already have a wallet Select- Import Wallet
2. Click - I Agree
3. Fill the - Secret Recovery Phrase

![remix](../assets/metamask/mmsupport-5.png)

4. Fill the - New Password
5. Fill the - Confirm Password
6. Click - Import

Your Previous Wallet will be successfully imported.

### Create A New Wallet

1. If you don’t have any wallet select- Create a Wallet
2. Click - I Agree
3. Fill the - New Password
4. Fill the - Confirm Password
5. Tick the - I have read and agree to the Terms of Use Box
6. Click - Create
7. Press - Next

![remix](../assets/metamask/mmsupport-6.png)

12. Click on the “Lock” symbol - CLICK HERE TO REVEAL SECRET WORDS

:::note

Store that phrase in a secure place, it will help you to recover the account later

:::

9. Select the words of the previous phrase accordingly
10. click - Confirm
11. Click - All Done


![remix](../assets/metamask/mmsupport-7.png)

A new Wallet is created successfully.

### Connect Metamask AXIA

1. Click on the Network dropdown right before the account logo

![remix](../assets/metamask/sc1.png)

2. Click- Add Networks

![remix](../assets/metamask/mmsupport.png)

You can add the network here.

To connect with AXIA (Testnet) the parameters are:

- Network Name - AXIA
- RPC URL - https://rpc.testnet.axiacoin.network/ext/bc/AX/rpc
- Chain ID - 4000
- Currency Symbol - AXC
- Block Explorer URL - https://axscan-v2.axiacoin.network/?network=Testnet

![remix](../assets/metamask/mmsupport1.png)

3. Now save the network. 

![remix](../assets/metamask/mmsupport2.png)

You can see a new network is added to the list and you can switch to the AXIA network anytime.

### How to Import Account

1. Click the “Account Round Logo on the top right”

![remix](../assets/metamask/mmsupport-8.png)

2. Select- Import Account

3. Select Type- Private Key

![remix](../assets/metamask/mmsupport-9.png)

4. Paste your private key string In the Box 
5. Click- Import

![remix](../assets/metamask/mmsupport3.png)

Your old account with some AXCs (if there were any) will be imported.

## How to Transfer TOKENS from one account to another

1. Click the “Account Round Logo on the top right”
2. Click on  an account that has some tokens
3. Enter the public address of that account where you want to transfer.

![remix](../assets/metamask/mmsupport4.png)

4. Enter the amount and click ‘Next’.

![remix](../assets/metamask/mmsupport5.png)

5. Network will estimate the gas fee and it will be added with the transaction amount you want to send. Press ‘Confirm’.

![remix](../assets/metamask/mmsupport6.png)

6. Once you have submitted the transaction, you will see it pending until it is confirmed, as shown in the following image:


![remix](../assets/metamask/mmsupport7.png)

:::note

the Account 1 balance has been decreased by the sent amount + gas fees.

:::

You can copy the Transaction ID and check it in the [AXChain Explorer](https://axscan-v2.axiacoin.network)

![remix](../assets/metamask/mmsupport8.png)

Paste the Transaction ID on the top search bar of the Explorer and press ‘Enter’.

![remix](../assets/metamask/mmsupport9.png)

The explorer will show the necessary details about the Transaction.

![remix](../assets/metamask/mmsupport10.png)

 [AXIA Support](https://discord.gg/axianetwork) - Connect with our community of experts to learn or ask.













