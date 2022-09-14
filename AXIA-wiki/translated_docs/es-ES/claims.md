---
id: claims
title: AXIA Claims
sidebar_label: Claims
---

Si hiciste una compra de AXCs en una de las ventas previas al lanzamiento, entonces tendrás que solicitar tus tokens AXCs. Para aquellos que hicieron la solicitud previa al lanzamiento enviando una transacción de solicitud al Contrato de Reclamación en Ethereum, aún tendrán que enviar una transacción gratuita de _prueba_ que acepte los términos y condiciones de su asignación. Si no ha hecho una reclamación previa al génesis, entonces la reclamará y certificará en una sola transacción.

Esta guía le ayudará en los pasos para hacer una reclamación o dar fe de la declaración.

Si es la primera vez que reclama en AXIA, por favor, lea más abajo en la sección de [reclamaciones](#making-a-claim). Si ya ha reclamado durante el período de reclamación previo al Génesis, por favor proceda a la sección de [certificar una declaración](#attesting-to-a-statement) en su lugar.

> To learn more on How to claim your AXC post genesis, check out our walkthrough [video](https://www.youtube.com/watch?v=rjhWfKXJTCg&list=PLOyWqupZ-WGuAuS00rK-pebTMAOxW41W8&index=22) and our video on [Claiming AXC with an Ethereum address generated using an old mnemonic phrase](https://www.youtube.com/watch?v=AlwrM27x3As&list=PLOyWqupZ-WGuAuS00rK-pebTMAOxW41W8&index=16)

## Hacer la reclamación

Si no hizo la solicitud en el período de reclamación previo a la génesis, entonces puede reclamar sus tokens AXCs después del génesis. No hay límite de tiempo para hacer su reclamación, así que siéntase libre de hacerlo cuando se sienta más cómodo.

> Note: When you make a claim, you will also attest to the agreement that corresponds to your AXC allocation. The two actions "claim" and "attest" are done in a single transaction, but for the most part this is simplified from the perspective of the user.

### Lo que necesitarás

- La cuenta Ethereum que contiene los tokens del indicador AXC
- La cartera MyCrypto
- Una cuenta de AXIA

Ya deberías tener tu cuenta en Ethereum que tiene los tokens del indicador AXC de AXIA de la venta anterior. Necesitarás tener acceso a esta cuenta para poder firmar.

[MyCrypto][] es una cartera versátil que admite una variedad de métodos de almacenamiento para su cuenta de Ethereum. Vaya a su página de descargas y asegúrese de descargar la última versión para su sistema operativo. Esto es importante porque la última versión siempre tendrá los últimos parches de seguridad.

> **NOTICE**: It is much more secure to download and use the MyCrypto app locally. You can always find the most up-to-date releases of the desktop app on their [releases page][mycrypto].

You will need a AXIA account to claim your AXC. Please follow the instructions on the \[account generation\]\[\] page for generating a new AXIA account.

#### Reclamando tus AXCs con MyCrypto

The AXIA-JS [Claims app][] helps you sign a message from MyCrypto. MyCrypto is a good choice in case you have stored the key to the Ethereum account holding your AXC indicator tokens on a hardware device like a Ledger Nano S or a Trezor. It also supports raw private keys, mnemonics, and Axia signer.

Once you've downloaded MyCrypto and have it running locally (we recommend an air-gapped computer for maximum security), you can start by navigating to the Claims app on AXIA-JS Apps. Select the account you would like to claim the AXC into and click the blue "Continue" button to proceed. Your screen should look something like this:

![claim-1](assets/new-claims/claim-1.jpg)

Ahora tendrás que proporcionar la dirección de Ethereum que está asociada con los tokens AXCs que reclamarás. Introduce la dirección de Ethereum en la casilla y haz clic en "Continue".

![claim-2](assets/new-claims/claim-2.jpg)

A continuación, tu pantalla debe mostrar la imagen de abajo.

![claim-2-1](assets/new-claims/claim-2-1.jpg)

The hex-encoded string that follows the sentence: "Pay AXC to the AXIA account:" is the hex-encoded public key of your AXIA account, minus the `0x` prefix.

El siguiente paso es ir a la aplicación MyCrypto y hacer clic en la pestaña "Sign & Verify Message".

![claim-3](assets/new-claims/claim-3.png)

Esto te pedirá que selecciones un método para desbloquear tu cartera.

![claim-4](assets/new-claims/claim-4.png)

After unlocking your wallet, paste the message from AXIA-JS into the "Message" box.

![claim-5](assets/new-claims/claim-5.png)

Cuando hagas clic en "Sign Message" obtendrás una salida JSON como la de abajo:

![claim-6](assets/new-claims/claim-6.png)

Copy and paste the JSON output of the signed message from MyCrypto into the input box on the AXIA-JS UI and click "Confirm Claim."

![claim-7](assets/new-claims/claim-7.jpg) ![claim-8](assets/new-claims/claim-8.jpg)

Aparecerá un cuadro verde que te indicará la cantidad a reclamar con un botón "Claim" para hacer la solicitud. Haz clic en el botón "Claim" y luego en "Submit (no signature)" para completar la solicitud.

![claim-9](assets/new-claims/claim-9.jpg)

If this claim succeeded, then you will see a success message and your AXC will be in the account that you claimed to.

#### Verificando tu reclamación

After you make an on-chain claim for AXC, your balance should be updated on the AXIA UI immediately.

¿Tienes problemas? Consigue ayuda en el [canal de soporte de reclamaciones]() de AXC.

![claim-10](assets/new-claims/claim-10.jpg)

Congratulations, you have now completed the process for claiming and signing for your AXC.

### Procesos de reclamaciones de terceros

**We do not recommend using third-party apps or processes to perform your claim or acquire AXC.**

Claiming using a third-party process can lead to the loss of your allocation, therefore we cannot recommend using any third party apps to do so. Manually specifying your transaction data, as specified in our claims process, is the only way to be certain you will receive your allocation.

## Acreditar una declaración

If you've already made a pre-genesis claim, you still have to agree to a statement using your AXIA account.

## Using AXIA-JS Apps

### Lo que necesitarás

- Tu cuenta de AXIA desbloqueada en la IU de AXIA-JS Apps.

You will be sending a free transaction from your AXIA account on the AXIA-JS Apps UI. Once you make this transaction you will have the tokens available in your account.

### Vaya a AXIA-JS Apps

Proceed to [AXIA-js Apps][claims app]. You will need to grant Apps access to your account in some way. One way would be to go to the Accounts page and "create" a new account, replacing the generated seed or mnemonic with the one belonging to your account. The other way is by using the AXIA-JS extension and entering your seed or mnemonic there, which is generally safer than entering it directly to the Apps page.

### Haga la declaración

After entering your account, you should see a red counter appear on the "Claim Tokens" tab on the left navigation drawer.

![claim-attest-1](assets/new-claims/new-attest-1.jpg)

Click on the "Claim Tokens" tab and you will see a large notification at the top of the page that tells you that you need to sign an attestation.

![claim-attest-2](assets/new-claims/new-attest-2.png)

The notification will display one or more AXIA addresses that you have loaded in AXIA-JS that you need to sign. Select a AXIA account with a claim using the drop down selection. If you don't see a notification or don't see the selector, please double check that the account has been loaded into AXIA-JS and that it has already claimed during the preclaim period. As always, feel free to reach out for help in the [Claims Support]() channel.

Click "Continue" and you will see a green box appear on the right.

![claim-attest-3](assets/new-claims/new-attest-3.jpg)

![claim-attest-4](assets/new-claims/new-attest-4.jpg)

Click on "I Agree" and then "Sign and Submit" to make your free attest transaction. When the transaction is included in the block, you will see a green success box appear in the upper right corner and the AXC will be in your account.

![claim-attest-5](assets/new-claims/new-attest-5.jpg)

## Using Axia Signer

### What you will need

- Axia Signer
- Your AXIA account linked to AXIA-JS Apps UI

Before claiming, you should import your AXIA address on Axia Signer to the AXIA-JS Apps. All operations will use Axia Signer to sign the transaction, but will broadcast it via the AXIA-JS Apps remote node. If you do not have a AXIA address, please follow the instructions on the Axia Signer section in the [account generation][] page for generating a new AXIA account.

### Go to AXIA-JS Apps

Proceed to [AXIA-JS Apps][claims app]. You will need to import your address on Axia Signer to the Accounts page first.

### Make the Attestation

![ps-claim-1](assets/new-claims/ps-claim-1.jpg)

Click "Add via Qr" on the right side.

![ps-claim-2](assets/new-claims/ps-claim-2.png)

Open Axia Signer and choose "AXIA" network.

![ps-1](assets/new-claims/ps-01.jpg)

Select the address that you have claimed AXC to during pre-genesis.

![ps-2](assets/new-claims/ps-02.jpg)

![ps-3](assets/new-claims/ps-03.jpg)

Your address will be displayed in QR code format. You can move the QR code to the camera so that the AXIA-JS Apps can decode it.

![ps-claim-3](assets/new-claims/ps-claim-3.png)

Once decoded successfully, input the name for your address and click "Create".

You will notice that the digit beside the "Claim Tokens" menu increased by 1. It means the number of addresses on the Accounts page that need to do attestations.

Go to the [Claim Tokens](https://AXIA.js.org/apps/#/claims) page and and you will see a large notification at the top of the page that tells you that you need to sign an attestation.

Select the AXIA account that you just have imported with a claim using the drop-down selection. If you don't see a notification or don't see the selector, please double check that the account has been loaded into AXIA-JS and that it has already claimed during the pre-genesis period. As always, feel free to reach out for help in the [Claims Support]() channel.

![ps-claim-5](assets/new-claims/ps-claim-5.png)

Then click "Continue" and you will see a green box appear on the right.

![ps-claim-6](assets/new-claims/ps-claim-6.png)

Click on "I Agree" and then "Sign via Qr".

![ps-claim-7](assets/new-claims/ps-claim-7.png)

Now you need to sign the transaction using the Axia Signer with your AXIA address.

![ps-claim-8](assets/new-claims/ps-claim-8.png)

First, you need to press the "QR Scanner" on the Axia Signer to scan the QR code that's shown on the authorize transaction window to generate the raw transaction. Next, you may be required to input the PIN on the Axia Signer to generate the signed transaction as a QR code. Then move the QR code to the camera on the AXIA-JS Apps to continue.

![ps-3r](assets/new-claims/ps-3r.jpg)

When the transaction is included in the block, you will see a green success box appear in the upper right corner and the AXC will be in your account.
https://riot.im/app/#/room/!kwIkVteRpPRjjTyvTe:AXIA.org?via=AXIA.org&via=matrix.org&via=matrix.axia.io

[mycrypto]: https://download.mycrypto.com/
[mycrypto]: https://download.mycrypto.com/
[account generation]: learn-account-generation
[claims app]: https://AXIA.js.org/apps/#/claims
[claims app]: https://AXIA.js.org/apps/#/claims
[claims app]: https://AXIA.js.org/apps/#/claims
