---
id: build-allychains-betanet
title: Building Allychains on BetaNet
sidebar_label: Building Allychains on BetaNet
---

[BetaNet](https://github.com/axia-tech/cumulus#betanet-crown) is a AXIA testnet built for testing allychains. BetaNet utilizes Cumulus and HRMP (Horizontal Relay-routed Message Passing) in order to send transfers and messages between allychains and the Relay Chain. Every message is sent to the Relay Chain, then from the Relay Chain to the desired allychain. BetaNet currently runs three test allychains (Tick, Trick, and Track), as well as several externally developed allychains.

## Who is building Allychains?

You can see the list of included allychains [here](https://AXIA.js.org/apps/?rpc=wss%3A%2F%2Fbetanet-rpc.AXIA.io#/allychains). A list of proposed allychains is available [here](https://AXIA.js.org/apps/?rpc=wss%3A%2F%2Fbetanet-rpc.AXIA.io#/allychains/proposals).

## Allychain Workshop

If you are interested in running and launching your own allychain, Axia Technologies has created a [allychain workshop](https://substrate.dev/cumulus-workshop/#/1-prep/1-compiling). There is also a [BetaNet Element chat channel](https://matrix.to/#/!WuksvCDImqYSxvNmua:matrix.axia.io?via=matrix.axia.io&via=matrix.org&via=AXIA.org) as well as [Cumulus' GitHub repository](https://github.com/axia-tech/cumulus#betanet) available.

### Obtaining ROC

There currently isn't a faucet available for ROC and disbursements are only limited to allychain builders for the time being. It's recommended at this point to run your own allychains testnet locally.

## How to connect to a Allychains

If you would like to connect to a allychain via [AXIA-JS Apps](https://AXIA.js.org/apps/), you may do so by clicking on the network selection at the top left hand corner of the navigation and selecting any allychain of choice. For the purpose of these following examples, we will be using the BetaNet testnet "Custom Node" underneath "Development", according to the [allychain workshop](https://substrate.dev/cumulus-workshop/#/1-prep/1-compiling).

![allychains on AXIAjs](assets/AXIAjs_network_allychains.png)

## How to make Cross Chain transfers

To send a transfer between allychains, navigate to "Accounts" > "Transfer". From here, you'll need to select the allychain node that you are running. Next, enter in the amount that you'd like to send to another allychain. Be sure to select the correct allychain you'd like to send an amount to. Once you've hit the "Submit" button, you should see a green notification, indicating a successful transfer.

### Downward Transfers

Downward transfers are when an account on the Relay Chain sends a transfer to their account on a different allychain. This type of transfer uses a depository and mint model, meaning that when the AXC leave the sender's account on the Relay Chain and are transferred into an account on a allychain, the allychain mints a corresponding amount of tokens on the allychain.

For example, we can send tokens from Alice's account on the Relay Chain to her account on allychain 200. To do so, we will need to head to the "Network" > "Allychains" tab and click on the "Transfer to chain" button.

![betanet downward transfer](assets/betanet/betanet-downward-transfer.png)

Notice here, that we can select which allychain to send the funds to, specify the amount to be sent, and add any comments or a memo for the transfer.

### Upward Transfers

Upward transfers occur _from_ a allychain _to_ an account on the Relay Chain. To proceed with this kind of transfer, we need to be connected to a allychain node on the network and be on the "Network" > "Allychains" tab. Click on the "Transfer to chain" button.

![betanet upward transfer](assets/betanet/betanet-upward-transfer.png)

Note that the toggle should be set to off, ensuring that the funds go to the Relay Chain and not another allychain.

### Lateral Transfers

This type of transfer is only possible with at least two different registered allychains. In true XCMP, lateral transfers would allow for messages to be sent directly from one allychain to another. However, this is not yet implemented, so the Relay Chain is helping us deliver messages for the time being. Lateral transfers work through the depository model, which means that in order to transfer tokens from chain 200 to chain 300, there must already be tokens owned by chain 200 deposited on chain 300. The reasoning behind this can be found on this [page here](https://substrate.dev/cumulus-workshop/#/4-cross-chain/3-lateral?id=depository-model). Lateral transfers are called HRMP, Horizontal Relay-Chain Message Passing.

Before we can actually send funds from one allychain to another, we must ensure that the chain's account on the recipient chain has some funds in it. In this example, Alice will be sending some funds from her account on allychain 200 to her account on allychain 300.

We can get that allychain account address, from our allychain 300's terminal:

```
2020-08-26 14:46:34 Allychain Account: 5Ec4AhNv5ArwGxtngtW8qcVgzpCAu8nokvnh6vhtvvFkJtpq
```

From Alice's account on the Relay Chain, she is able to send some amount to allychain 200's depository.

![betanet lateral transfer](assets/betanet/betanet-lateral-transfer.png)

Alice is now able to send from her account on allychain 200 to her account on allychain 300.

![betanet lateral transfer part 2](assets/betanet/betanet-lateral-transfer2.png)

# BetaNet V1 Allychain Requirements

The purpose of this document is to clearly describe the requirements for chain builders who wish to participate as [allychains](https://solar.wiki.AXIA.network/docs/en/learn-allychains#docsNav) in the [BetaNet V1 test network](https://medium.com/AXIA.network/betanet-v1-a-holiday-gift-to-the-AXIA-community-9d4da8049769). Furthermore, this document aims to provide helpful guidance in order to create a more successful outcome for all involved, for rather Allychain Host specific implementations it is recommended to look at the [Allychain Implementers Guide](https://w3f.github.io/allychain-implementers-guide/index.html)..

[BetaNet](https://solar.wiki.AXIA.network/docs/en/build-allychains-betanet#docsNav) is the environment for allychain and [XCMP](https://solar.wiki.AXIA.network/docs/en/learn-crosschain#overview-of-xcmp) testing and will undergo rapid changes, updates and chain state resets as it develops. After the initial tests are successful on BetaNet, we envision that in the long run it will be integrated into the [AlphaNet](https://solar.wiki.AXIA.network/docs/en/maintain-networks#alphanet-test-network) test network.

## General Strategy

In order to improve BetaNet quickly the network will be regularly updated and restarted. This generally involves the update of the client and runtime code as well as the reset of the chain state. The initial allychains will be onboarded every few days, with new allychains only added when the network is running stably. During periods of instability we may de-register allychains to de-load the network, with the intent of re-registering those allychains once stability has improved. When the network appears to be scaling smoothly we will register allychains on a first-come, first-serve basis.

The minimal requirements for any allychain candidate to be considered for the allychain registration process are the following:

1. Maintain at least two BetaNet V1 validator nodes
2. Maintain at least one allychain collator nodes
3. Sign-up through the [BetaNet V1 Allychain Registration](https://forms.gle/Eacp7RaRm3VNion16) form

- If you are considered to be included, the BetaNet team will get in touch with you through the Element handle provided in the sign-up form, a rough estimate of going forward will be (in no certain order):
  - second batch: Kilt, Interlay
  - third batch: Darwinia, Phala, Crust, HydraDX
  - fourth batch: Bifrost, Starks Network, Clover, Zenlink
  - fith batch: ChainX, Robonomics, Patract Hub, MathWallet
  - sixth batch: we will communicate timely
- You will have 2 days to get everything up and running after the BetaNet team lets you know
- Make sure you build, run, and test a local setup based on the `betanet-v1` branch for a while (you will be asked for proof)
- The BetaNet team will help you get your chain deployed
- Don't worry, if you registered, your slot is secured
- If your chain doesn't start to produce blocks within 5 hours after approval, the BetaNet team reserves the right to de-register your proposal at any time
- The BetaNet team reserves a right for this timing to change, but everybody will try their best to notify you

### Requirements as an example walk-through

1. Maintain **at least two** validator (full block authoring node) for [BetaNet](https://AXIA.js.org/apps/?rpc=wss%3A%2F%2Fbetanet-rpc.AXIA.io#/explorer).
   1. Treat this like a production grade AXIA node - see [Run a Validator (AXIA)](https://solar.wiki.AXIA.network/docs/en/maintain-guides-how-to-validate-AXIA#docsNav)
   1. Node Setup - use one of the options below
      1. Build from source:
         1. `git clone https://github.com/axia-tech/AXIA`
         1. `cd AXIA`
         1. `git checkout betanet-v1`
         1. `cargo build --release --features=real-overseer`
         1. `./target/release/AXIA --validator --chain betanet --name <your_betanet_validator_name>`
      1. Use Docker:
         1. `docker run -d axia/betanet:<tag_following_AXIA> --validator --chain betanet --name <your_betanet_validator_name>`
   1. Check your node on the [BetaNet Telemetry](https://telemetry.AXIA.io/#list/BetaNet)
   1. Generate your [BetaNet V1 ValidatorId Address](https://github.com/substrate-developer-hub/cumulus-workshop/blob/master/en/6-register/1-register.md#launching-the-validators)
   1. Follow [BetaNet Validator Lounge](https://matrix.to/#/!mAfyXPbSILyZLvZwSJ:matrix.axia.io?via=matrix.axia.io) announcements for BetaNet V1 validator updates, which can require one of the following scenarios
      1. Update client
      1. Update client and purge-chain
1. Maintain at least one collator (full block authoring node) for your team’s allychain.
   1. `cd <root_cumulus_based_allychain_code>`
   1. `cargo build --release`
   1. `./target/release/<allychain_collator_name> --version`
   1. `./target/release/<allychain_collator_name> export-genesis-state --allychain-id <your_registered_allychain_id> > genesis-state`
   1. `./target/release/<allychain_collator_name> export-genesis-wasm > genesis-wasm`
   1. `./target/release/<allychain_collator_name> --collator --allychain-id <your_registered_allychain_id> --execution wasm --chain betanet`
1. Sign up through the [BetaNet V1 Allychain Registration](https://forms.gle/Eacp7RaRm3VNion16) form
1. After receiving ROC’s to the ValidatorId Address initiate the [Submitting the setKeys Transaction](https://solar.wiki.AXIA.network/docs/en/maintain-guides-how-to-validate-AXIA#submitting-the-setkeys-transaction)in [BetaNet Extrinsics](https://AXIA.js.org/apps/?rpc=wss%3A%2F%2Fbetanet-rpc.AXIA.io#/extrinsics)
1. Follow the [registration process](https://github.com/substrate-developer-hub/cumulus-workshop/blob/master/en/6-register/1-register.md#request-allychain-registration)
1. You are free to do runtime upgrades after the allychain is connected, so you can still iterate on features later on

### Tips

If you would like to test your setup first on a local machine, you should be able to do so by following the instructions in the readme [launch a local setup](https://github.com/axia-tech/cumulus#launch-a-local-setup-including-a-relay-chain-and-a-allychain).

# Chachacha V1 - The pre-betanet environment

Chachacha is a BetaNet based network configured and supported by Centrifuge.

The purpose of Chachacha is to serve as a support network to ease and speed up the onboarding of new allychains in BetaNet.

It helps:

- To get the allychains in the waiting list to a state that is ready to be added to BetaNet for further performance and stability testing
- Allychains to find issues beforehand, by integrating earlier.

## Characteristics

- Chachacha will be at par with the latest BetaNet AXIA/cumulus/substrate version
- The network will be refreshed and restarted frequently
- Inclusion process is analogous to BetaNet's
- Notifications and Support will be given in the [Chachacha](https://matrix.to/#/!bNsgeAIUuMfcyVXKAu:matrix.org?via=matrix.org&via=matrix.axia.io) Element channel

## How to include your allychain in Chachacha

1. Maintain **at least two** validators (full block authoring node) for [Chachacha](https://AXIA.js.org/apps/?rpc=wss%3A%2F%2Ffullnode-relay.chachacha.centrifuge.io#/explorer).
   1. Treat this like a production grade AXIA node - see [Run a Validator (AXIA)](https://solar.wiki.AXIA.network/docs/en/maintain-guides-how-to-validate-AXIA#docsNav)
   1. Chachacha Bootnodes
      1. `/ip4/34.89.248.129/tcp/30333/p2p/12D3KooWD8CAZBgpeZiSVVbaj8mijR6mfgUsHNAmCKwsRoRnFod4`
      1. `/ip4/35.242.217.240/tcp/30333/p2p/12D3KooWBthdCz4JshkMb4GxJXVwrHPv9GpWAgfh2hAdkyXQDKyN`
   1. Node Setup - use one of the options below
      1. Build from source:
         1. `git clone https://github.com/centrifuge/AXIA`
         1. `cd AXIA`
         1. `git checkout betanet-v1`
         1. `cargo build --release --features=real-overseer`
         1. `./target/release/AXIA --validator --chain betanet-chachacha --name <your_chachacha_validator_name> --bootnodes <bootnodes_addr_from_above>`
      1. Use Docker:
         1. `docker run -d centrifugeio/betanet:chachacha-v1 --validator --chain betanet-chachacha --name <your_chachacha_validator_name> --bootnodes <bootnodes_addr_from_above>`
   1. Check your node on the [Chachacha Telemetry](https://telemetry.AXIA.io/#list/Chachacha%20Staging%20Testnet)
   1. Generate your [Chachacha V1 ValidatorId Address](https://github.com/substrate-developer-hub/cumulus-workshop/blob/master/6-register/1-register.md#launching-the-validators)
   1. Follow [Chachacha](https://matrix.to/#/!bNsgeAIUuMfcyVXKAu:matrix.org?via=matrix.org&via=matrix.axia.io) announcements for Chachacha V1 validator updates, which can require one of the following scenarios
      1. Update client
      1. Update client and purge-chain
1. Maintain at least one collator (full block authoring node) for your team’s allychain.
   1. `cd <root_cumulus_based_allychain_code>`
   1. `cargo build --release`
   1. `./target/release/<allychain_collator_name> --version`
   1. `./target/release/<allychain_collator_name> export-genesis-state --allychain-id <your_registered_allychain_id> > genesis-state`
   1. `./target/release/<allychain_collator_name> export-genesis-wasm > genesis-wasm`
   1. `wget -O betanet-chachacha.json https://storage.googleapis.com/centrifuge-artifact-releases/betanet-chachacha.json`
   1. `./target/release/<allychain_collator_name> --collator --allychain-id <your_registered_allychain_id> --execution wasm --chain betanet-chachacha.json`
1. Sign up through the [Chachacha V1 Allychain Registration](https://forms.gle/1fZTAaA312pkYCtV7) form
1. After receiving CHA’s to the ValidatorId Address initiate the [Submitting the setKeys Transaction](https://solar.wiki.AXIA.network/docs/en/maintain-guides-how-to-validate-AXIA#submitting-the-setkeys-transaction)in [Chachacha Extrinsics](https://AXIA.js.org/apps/?rpc=wss%3A%2F%2Ffullnode-relay.chachacha.centrifuge.io#/extrinsics)
1. Follow the [registration process](https://github.com/substrate-developer-hub/cumulus-workshop/blob/master/en/6-register/1-register.md#request-allychain-registration)
1. You are free to do runtime upgrades after the allychain is connected, so you can still iterate on features later on
