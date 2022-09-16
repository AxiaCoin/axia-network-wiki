---
id: ERC20-AXIA
title: Create and Use an ERC-20 Token using Solidity
sidebar_label: Create an ERC-20 Token Using Solidity
slug: ../ERC20-AXIA
---

ERC-20 is the technical standard for fungible tokens created using the Ethereum blockchain. ERC-20 stands for Ethereum Request for Comment, number 20. ERC-20 allows provides different smart-contract enabled tokens with a way to be exchanged. Tokens, in this regard, are a representation of an asset, right, access, ownership, cryptocurrency, or anything else that is not unique in and of itself but can be transferred.

![interface](../assets/ERC20/axia-smart.png)

New use cases and projects or existing ones that are running on Ethereum or different chains can be implemented with AXIA. Everyone can create their own standard and own token on the AXIA Network through the AXChain.
Here we are creating our ownable and mintable ERC-20 token and will mint it to any address we want. We can also transfer this from one address to another address; it will be generated on the AXIA Network AXChain and be accessible on that chain.

In this section we will see how we can deploy a smart contract written with Solidity to the AXChain. This is the feature that AXIA provides us with - to be able to deploy any smart contract on the chain with no requirement for a new language-specific contract concept to interact with. Let’s look at how to create an ERC-20 contract and deploy it to the AXChain.

### Set up MetaMask

To set up a MetaMask wallet with a current or existing wallet, visit the [Add AXIA to MetaMask](../docs/Metamask-Support) section.

### Network Configuration

* **Network Name:** AXIA AXChain
* **New RPC URL:**
   * Mainnet: https://rpc.mainnet.axiacoin.network/ext/bc/AX/rpc
   * Testnet: https://rpc.testnet.axiacoin.network/ext/bc/AX/rpc
* **ChainID:**
   * Mainnet: 4001
   * Testnet: 4000
* **Symbol:** AXC
* **Explorer:** https://axscan-v2.axiacoin.network/?network=Testnet


### Create mintable and ownable tokens

Lets continue with this tutorial. Here, we will see how we can create our own mintable and ownable tokens on Remix. Open [Remix](https://remix.ethereum.org/) on your browser. After creating a MetaMask wallet and connecting it to the AXIA Network, then we need to connect the same account to Remix.

![interface](../assets/ERC20/Remix_New_File.png)

You should view this page. On this page, first, click "FILE EXPLORER" from the Featured Plugins menu and then click the "NEW FILE" button. When you click the this button, you will see a pop-up that requires a file name. 

![interface](../assets/ERC20/Remix_File_Create_and_Naming.png)

Now we can write an ERC-20 token contract. For this you can paste the same code we are using:

```

//SPDX-License-Identifier:MIT

pragma solidity ^0.8.2;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

import "@openzeppelin/contracts/access/Ownable.sol";



contract AXIACOIN is ERC20,Ownable{

constructor() ERC20("AXIASMARTCONTRACT","AXCSC"){}

function mint (address to, uint256 amount) public onlyOwner{

_mint(to,amount);

    }

}

```

![interface](../assets/ERC20/ERC20_token_code.png)

Move to the compiler section of Remix and make sure the compiler version is the same or newer than the one mentioned in the code.

![interface](../assets/ERC20/Complier_config.png)

Compile the code and it should be done without any issues. After that, go into the Deploy and Run section. Once there, select the Inject Web3 option in Environment and select the contract of the file which we have created recently.

![interface](../assets/ERC20/rem.png)

This will call out the MetaMask wallet and a pop-up will come up in your screen. 

![interface](../assets/ERC20/iw3.png) 

Connect MetaMask with Remix.

![interface](../assets/ERC20/iw32.png)

In remix press 'DEPLOY' to open up your MetaMask wallet; this will contain all transaction details.

![interface](../assets/ERC20/Deploy_and_Run_Metamask_Pop_up.png)

Confirm that and now the smart contract has been successfully deployed. 

![interface](../assets/ERC20/SucessfullDeploy.png)

You can find the transaction hash and the other details in Remix.

![interface](../assets/ERC20/trans_details.png)

### Interact with Smart Contract

Now we will mint the deployed smart contract with a given amount. For that, select the Mint function and give the address of the wallet and the desired amount you want to mint. 

![interface](../assets/ERC20/mint.png)

![interface](../assets/ERC20/Mint_step2.png)

Minting will also require some gas fees, and you will see a pop-up from MetaMask with the transaction details.

![interface](../assets/ERC20/MetMask_Mint_popup.png)

### Import Tokens in Metamask

To import the tokens in MetaMask, select the import tokens option in MetaMask and paste the contract address into it. This will automatically fetch the other values. Now in MetaMask you will see that the amount you minted is showing being displayed as a custom token.

![interface](../assets/ERC20/tokens.png)

Select 'ADD CUSTOM TOKEN' and the ERC-20 tokens will successfully imported.

![interface](../assets/ERC20/SmartContractSucessfuldeploy.png)

You can transfer this token to other addresses too, just make sure the other wallet has this token imported like we did earlier.

![interface](../assets/ERC20/t1.png)

Press 'NEXT' and then 'CONFIRM.'

![interface](../assets/ERC20/t3.png)

The Transferred ERC-20 token will be sent to that address.

![interface](../assets/ERC20/t4.png)


 [AXIA Support](https://discord.gg/axianetwork) - connect with our community of experts to learn or ask questions.




