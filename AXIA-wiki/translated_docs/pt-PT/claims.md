---
id: claims
title: AXIA Claims
sidebar_label: Claims
---

If you made a AXC purchase in one of the pre-launch sales, then you will need to claim your AXC tokens. For those who made a pre-genesis claim by sending a claim transaction to the Claims Contract on Ethereum, you will still need to send a free _attest_ transaction that will agree to the terms and conditions of your allocation. If you did not make a pre-genesis claim, then you will claim and attest in a single transaction.

This guide will walk you through the steps for either making a claim or attesting to the statement.

If you are making a claim on AXIA for the first time, please read on below in the [making a claim](#making-a-claim) section. If you've already claimed during the pre-genesis claims period, please proceed to the [attesting to a statement](#attesting-to-a-statement) section instead.

> To learn more on How to claim your AXCs post genesis, check out our walkthrough [video](https://www.youtube.com/watch?v=rjhWfKXJTCg&list=PLOyWqupZ-WGuAuS00rK-pebTMAOxW41W8&index=22) and our video on [Claiming AXCs with an Ethereum address generated using an old mnemonic phrase](https://www.youtube.com/watch?v=AlwrM27x3As&list=PLOyWqupZ-WGuAuS00rK-pebTMAOxW41W8&index=16)

## Making a Claim

If you did not make a claim in the pre-genesis claims period, then you are able to claim your AXC tokens after genesis. There is no time limit for making your claim so feel free to do this whenever you are most comfortable.

> Note: When you make a claim, you will also attest to the agreement that corresponds to your AXC allocation. The two actions "claim" and "attest" are done in a single transaction, but for the most part this is simplified from the perspective of the user.

### What You Will Need

- The Ethereum account that holds the AXC indicator tokens
- The MyCrypto wallet
- A AXIA account

You should already have your Ethereum account that holds the AXC indicator tokens from AXIA's prior sales. You will need to have access to this account in order to make a signature.

[MyCrypto][] is a versatile wallet that supports a variety of storage methods for your Ethereum account. Go to their downloads page and ensure that you download the latest version for your operating system. This is important because the latest version will always have the latest security patches.

> **NOTICE**: It is much more secure to download and use the MyCrypto app locally. You can always find the most up-to-date releases of the desktop app on their [releases page][mycrypto].

You will need a AXIA account to claim your AXCs. Please follow the instructions on the \[account generation\]\[\] page for generating a new AXIA account.

#### Claiming your AXC with MyCrypto

The AXIA JS [Claims app][] helps you sign a message from MyCrypto. MyCrypto is a good choice in case you have stored the key to the Ethereum account holding your AXC indicator tokens on a hardware device like a Ledger Nano S or a Trezor. It also supports raw private keys, mnemonics, and Axia signer.

Once you've downloaded MyCrypto and have it running locally (we recommend an air-gapped computer for maximum security), you can start by navigating to the Claims app on AXIA-JS Apps. Select the account you would like to claim the AXCs into and click the blue "Continue" button to proceed. Your screen should look something like this:

![claim-1](assets/new-claims/claim-1.png)

Now you will need to provide the Ethereum address that is associated with the AXC indicator tokens that you will claim. Enter the Ethereum address into the box and click "Continue".

![claim-2](assets/new-claims/claim-2.png)

Next your screen should look the image below.

![claim-2-1](assets/new-claims/claim-2-1.png)

The hex-encoded string that follows the sentence: "Pay AXCs to the AXIA account:" is the hex-encoded public key of your AXIA account, minus the `0x` prefix.

The next step is to go to the MyCrypto application and click on "Sign & Verify Message" tab.

![claim-3](assets/new-claims/claim-3.png)

This will prompt you to select a method for unlocking your wallet.

![claim-4](assets/new-claims/claim-4.png)

After unlocking your wallet, paste the message from AXIA JS into the "Message" box.

![claim-5](assets/new-claims/claim-5.png)

When you click "Sign Message" you will get a JSON output like the one below:

![claim-6](assets/new-claims/claim-6.png)

Copy and paste the JSON output of the signed message from MyCrypto into the input box on the AXIA JS UI and click "Confirm Claim."

![claim-7](assets/new-claims/claim-7.png) ![claim-8](assets/new-claims/claim-8.png)

A green box will appear telling you the amount to claim with a "Claim" button to make the claim. Click on the "Claim" button and click "Submit (no signature)" to complete the claim.

![claim-9](assets/new-claims/claim-9.png)

If this claim succeeded, then you will see a success message and your AXCs will be in the account that you claimed to.

#### Verifying your Claim

After you make an on-chain claim for AXCs, your balance should be updated on the AXIA UI immediately.

Having trouble? Get support in the AXC [Claims Support]() channel.

![claim-10](assets/new-claims/claim-10.png)

Congratulations, you have now completed the process for claiming and signing for your AXCs.

### Third Party Claims Processes

**We do not recommend using third-party apps or processes to perform your claim or acquire AXC.**

Claiming using a third-party process can lead to the loss of your allocation, therefore we cannot recommend using any third party apps to do so. Manually specifying your transaction data, as specified in our claims process, is the only way to be certain you will receive your allocation.

## Attesting to a Statement

If you've already made a pre-genesis claim, you still have to agree to a statement using your AXIA account.

## Using AXIA-JS Apps

### What you will need

- Your AXIA account unlocked on AXIA-JS Apps UI.

You will be sending a free transaction from your AXIA account on the AXIA-JS Apps UI. Once you make this transaction you will have the tokens available in your account.

### Go to AXIA-JS Apps

Proceed to [AXIA-js Apps][claims app]. You will need to grant Apps access to your account in some way. One way would be to go to the Accounts page and "create" a new account, replacing the generated seed or mnemonic with the one belonging to your account. The other way is by using the AXIA-JS extension and entering your seed or mnemonic there, which is generally safer than entering it directly to the Apps page.

### Make the Attestation

After entering your account, you should see a red counter appear on the "Claim Tokens" tab on the left navigation drawer.

![claim-attest-1](assets/new-claims/new-attest-1.png)

Click on the "Claim Tokens" tab and you will see a large notification at the top of the page that tells you that you need to sign an attestation.

![claim-attest-2](assets/new-claims/new-attest-2.png)

The notification will display one or more AXIA addresses that you have loaded in AXIA-JS that you need to sign. Select a AXIA account with a claim using the drop down selection. If you don't see a notification or don't see the selector, please double check that the account has been loaded into AXIA-JS and that it has already claimed during the preclaim period. As always, feel free to reach out for help in the [Claims Support]() channel.

Click "Continue" and you will see a green box appear on the right.

![claim-attest-3](assets/new-claims/new-attest-3.png)

![claim-attest-4](assets/new-claims/new-attest-4.png)

Click on "I Agree" and then "Sign and Submit" to make your free attest transaction. When the transaction is included in the block, you will see a green success box appear in the upper right corner and the AXCs will be in your account.

![claim-attest-5](assets/new-claims/new-attest-5.png)

## Using Axia Signer

### What you will need

- Axia Signer
- Your AXIA account linked to AXIA-JS Apps UI

Before claiming, you should import your AXIA address on Axia Signer to the AXIAJS apps. All operations will use Axia Signer to sign the transaction, but will broadcast it via the AXIAJS apps remote node. If you do not have a AXIA address, please follow the instructions on the Axia Signer section in the [account generation][] page for generating a new AXIA account.

### Go to AXIA-JS Apps

Proceed to [AXIA-js Apps][claims app]. You will need to import your address on Axia Signer to the Accounts page first.

### Make the Attestation

![ps-claim-1](assets/new-claims/ps-claim-1.png)

Click "Add via Qr" on the right side.

![ps-claim-2](assets/new-claims/ps-claim-2.png)

Open Axia Signer and choose "AXIA" network.

![ps-1](assets/new-claims/ps-01.jpg)

Select the address that you have claimed AXCs to during pre-genesis.

![ps-2](assets/new-claims/ps-02.jpg)

![ps-3](assets/new-claims/ps-03.jpg)

Your address will be displayed in QR code format. You can move the QR code to the camera so that the AXIAJS Apps can decode it.

![ps-claim-3](assets/new-claims/ps-claim-3.png)

Once decoded successfully, input the name for your address and click "Create".

![ps-claim-4](assets/new-claims/ps-claim-4.png)

You will notice that the digit beside the "Claim Tokens" menu changed to 2. It means the number of addresses on the Accounts page that need to do attestations.

Go to the [Claim Tokens](https://AXIA.js.org/apps/#/claims) page and and you will see a large notification at the top of the page that tells you that you need to sign an attestation.

Select the AXIA account that you just have imported with a claim using the drop-down selection. If you don't see a notification or don't see the selector, please double check that the account has been loaded into AXIA-JS and that it has already claimed during the pre-genesis period. As always, feel free to reach out for help in the [Claims Support]() channel.

![ps-claim-5](assets/new-claims/ps-claim-5.png)

Then click "Continue" and you will see a green box appear on the right.

![ps-claim-6](assets/new-claims/ps-claim-6.png)

Click on "I Agree" and then "Sign via Qr".

![ps-claim-7](assets/new-claims/ps-claim-7.png)

Now you need to sign the transaction using the Axia Signer with your AXIA address.

![ps-claim-8](assets/new-claims/ps-claim-8.png)

First, you need to press the "QR Scanner" on the Axia Signer to scan the QR code that's shown on the authorize transaction window to generate the raw transaction. Next, you may be required to input the PIN on the Axia Signer to generate the signed transaction as a QR code. Then move the QR code to the camera on the AXIAJS Apps to continue.

![ps-3r](assets/new-claims/ps-3r.jpg)

When the transaction is included in the block, you will see a green success box appear in the upper right corner and the AXCs will be in your account.
https://riot.im/app/#/room/!kwIkVteRpPRjjTyvTe:AXIA.org?via=AXIA.org&via=matrix.org&via=matrix.axia.io

[mycrypto]: https://download.mycrypto.com/
[mycrypto]: https://download.mycrypto.com/
[account generation]: learn-account-generation
[claims app]: https://AXIA.js.org/apps/#/claims
[claims app]: https://AXIA.js.org/apps/#/claims
