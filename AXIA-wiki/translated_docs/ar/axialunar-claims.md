---
id: axialunar-claims
title: AXIALunar Claims
sidebar_label: Claims
---

The AXIALunar network is AXIA's experimental, community-focused R&D network. If you held the AXC indicator token at the time of the genesis block of AXIALunar, you are entitled to claim an equivalent amount of LUNAR on the AXIALunar network.

You can claim LUNAR by signing a message with the Ethereum account that holds your AXC indicator tokens. There is no deadline for claiming LUNAR.

## Step 1. Create a AXIALunar account

You will need to generate a AXIALunar account to claim LUNAR. There are a few ways you can create one.

For most users, we recommend using the [AXIA{.js} browser extension](https://chrome.google.com/webstore/detail/AXIA%7Bjs%7D-extension/mopnmbcafieddcagagdcbnhejhlodfdd?hl=en) since it will allow you to store your encrypted keystore locally.

In terms of hardware wallet support, you can use the [AXIALunar Ledger application](axialunar-ledger), or [Axia Signer](https://solar.wiki.AXIA.network/docs/en/learn-account-generation#axia-signer).

Another option you may consider using is the Subkey command-line utility, which will allow you to take extra steps to protect the security of your key.

There are a variety of other wallets that you can use; see the [AXIA Wiki Wallets page](https://solar.wiki.AXIA.network/docs/en/build-wallets). Many of these wallets support generating AXIALunar accounts as well.

### Using AXIALunar Ledger application

Please follow the instructions for [installing the AXIALunar Ledger application](axialunar-ledger) and then proceed to step 2 below.

### Using AXIA{.js} extension (Chrome/Brave or Firefox)

1. Install the AXIA{.js} extension from the [Chrome store](https://chrome.google.com/webstore/detail/AXIA%7Bjs%7D-extension/mopnmbcafieddcagagdcbnhejhlodfdd?hl=en) or [Firefox store](https://addons.mozilla.org/en-US/firefox/addon/AXIA-js-extension/).
2. Click on the settings button to change the network to "AXIALunar Relay Chain". <img src="/img/axialunar/axialunar_AXIAjs_add_account-1.png" width=50% style="margin-left: 70px;" />
3. Create a new account by clicking on "Create new account (root or derived)". <img src="/img/axialunar/axialunar_AXIAjs_create.png" width=50% style="margin-left: 70px;" />
4. Uncheck the option to create an account dervied from another seed. <img src="/img/axialunar/axialunar_AXIAjs_uncheck.png" width=50% style="margin-left: 70px;" />
5. Copy the seed phrase and store it somewhere safe. Don't share the seed phrase with anyone, you can use it to access your account if you forget your password or want to import your account again. <img src="/img/axialunar/axialunar_AXIAjs_mnemonicseed.jpg" width=50% style="margin-left: 70px;" />
6. Enter a name for the account and type a strong password (at least 6 characters). <img src="/img/axialunar/axialunar_AXIAjs_final_account.png" width=50% style="margin-left: 70px;" />
7. Click on "Add the account with the generated seed".
8. You can copy the account's address to the clipboard by clicking on its identicon.

### Using Subkey

#### Installation

You can install Subkey with this one-line command:

```
cargo install --force --git https://github.com/axia-tech/substrate subkey
```

Note that you will already have had to install the proper Rust version and dependencies. If you have not done so, or experience problems installing using that command, run the following commands first, and then re-try the previous command:

```
curl https://sh.rustup.rs -sSf | sh

rustup update nightly
rustup target add wasm32-unknown-unknown --toolchain nightly
rustup update stable
cargo install --git https://github.com/alexcrichton/wasm-gc
```

Alternatively, you can build Subkey from the source code.

1. Follow the build instructions for [Substrate](https://substrate.dev/docs/en/knowledgebase/getting-started).
2. When building, only build Subkey by typing `cargo build -p subkey`.
3. The executable is `./target/debug/subkey`.

#### Usage

You can use Subkey on a computer that is not connected to the internet for added security.

The command `subkey --network axialunar generate` will generate a new key pair. If you want to be more secure, use 24 words, `subkey --network axialunar generate --words 24`.

```
$ subkey --network axialunar generate
Secret phrase `lobster flock few equip connect boost excuse glass machine find wonder tattoo` is account:
  Secret seed: 0x95b90eb1344e3aea40f4a6dc81622901a2ac39efb331c41db10c311bb9b46927
  Public key (hex): 0xfe7fce341ff73e1db537daa4cc8c539997a8b0654b06cb81c47e4f067f55a65a
  Address (SS58): JL1eTcbzuZP99FjeySkDrMygNREPdbhRyV7iD5AsV4fDRcg
```

The `Address (SS58)` field is what you should use to claim your LUNAR tokens. Never share your `Secret phrase` or `Secret seed`, as these can both control your funds.

NOTE: Previous versions of Subkey only generated Substrate addresses. If you do not want to generate a new seed, you can convert the Substrate address to a AXIALunar address by following [this section](#axialunar-from-substrate-address).

See the [Subkey documentation](https://substrate.dev/docs/en/knowledgebase/integrate/subkey) or enter `subkey --help` for more usage examples.

### Using AXIA-JS UI

1. Open up the [AXIA-JS UI](https://AXIA.js.org/apps) and navigate to the top left corner of the navigation. This will open up a panel of network options to select from. Select on "AXIALunar", either from Axia or AXIA Foundation, then "Switch".

2. Navigate to the [AXIA-JS UI Accounts Tab](https://AXIA.js.org/apps/#/accounts) and click on the "Add account" button.

![axialunar add account](assets/axialunar/axialunar_add_account.png)

3. Enter a name for your account and create a secure password. This password will be used to decrypt your account. The required text fields to complete are highlighted in pink.

![axialunar create account](assets/axialunar/axialunar_create_account.png)

4. Ignore the advanced options unless you want to change the type of cryptography used for your keys (we recommend "Schnorrkel (sr25519)"). You will have to enter an Account Name and a password to protect your account. Be sure to select a secure and hard-to-guess password. Note that anything will be accepted as a password here. Please note: There are no checks to see if it is long enough or secure. You will need this password for any future interaction with or transaction from this account.

5. Click "Save" and "Create and backup account".

![axialunar save backup](assets/axialunar/axialunar_backup_account.png)

6. Save your encrypted keystore locally. Ideally, you would also save it on an external hard drive or thumb drive, or print it out and be able to re-enter it later. You should not store it in cloud storage, email it to yourself, etc. You can use this backup file to restore your account. The seed in the backup file is not readable unless it is decrypted with the password.

7. The account now appears in your Accounts tab and is backed up to the keystore you just saved.

8. Click on the AXC identicon to copy the address to the clipboard. ![axialunar copy address](assets/axialunar/axialunar_copy_address.png)

### Using Axiawallet

1. Install [Axiawallet](https://axiawallet.io). Click "Download" and select the link corresponding to the platform you are using. On Android, you may need to allow installing apps from external sources. On iOS, you may need to "trust" Axiawallet in the "General > Profiles & Device Management > Enterprise App" section before running the app.

2. Once the app is open, copy the seed phrase and store it in a safe place. Don't share the seed phrase with anyone, you can use it to access your account if you forget your password or otherwise lose your keystore.

<img src="/img/axialunar/axiawallet-create-account.jpg" width=50% />

3. Name your account and make a strong password, make sure to write it down in another place, then click "Save".

4. You will be asked to confirm your seed phrase - this is to make sure you have copied it somewhere safe.

5. Click on the pink QR Code symbol and select "Copy address" to copy your address to the clipboard.

<img src="/img/axialunar/axiawallet-accounts-page.jpg" width=50% />
<img src="/img/axialunar/axiawallet-copy-address.jpg" width=50% />

6. [Get the AXIALunar address from the Substrate address.](#axialunar-from-substrate-address)

### AXIALunar from Substrate address

If you used one of the generation methods that gave you a generic Substrate address (begins with a `5`), then you will need to take an extra step to turn this into the properly encoded AXIALunar address.

1. Copy your Substrate generic address to the clipboard.
2. Go to the [AXIA-JS UI](https://AXIA.js.org/apps).
3. Go to the "Settings" tab and find the configuration for "address network prefix".
4. Select "Substrate (development)" and click "Save and reload".
5. Go to the "Address book" and click the "Add contact" button.
6. Enter your address and give it a name like "My Address".
7. Go back to the "Settings" tab and select the "AXIALunar (canary)" option in "address network prefix" and click "Save and reload".
8. Go back to the "Address book" and find the account you just added (it will have the same name).
9. The address is now formatted as a AXIALunar address.

## Step 2. Get LUNAR tokens

There are two methods to claim LUNAR.

### AXC Holders

Those who participated in the AXIA sales before 2020 and have been allocated AXC indicator tokens on Ethereum can claim a proportional amount of LUNAR on the AXIALunar Network.

To do this you must sign a message containing the address of your AXIALunar account. You can do this by using the AXIA-JS UI [Claims app](https://AXIA.js.org/apps/#/claims).

#### Generate a AXIALunar address

If you haven't already done so, you will need to generate a AXIALunar address. See [step 1 above](axialunar-claims#step-1-create-a-axialunar-account) for detailed instructions first.

#### Claiming your LUNAR with MyCrypto

The AXIA-JS [Claims app](https://AXIA.js.org/apps/#/claims) helps you sign a message from MyCrypto. MyCrypto is good to use in case you have stored the key to the Ethereum account holding your AXC indicator tokens on a hardware device like a Ledger Nano S or a Trezor. It also supports raw private keys, mnemonics and the Axia signer.

> **NOTICE**: It is much more secure to download and use the MyCrypto app locally. Please make sure to download the latest version for your operating system. You can always find the most up-to-date releases of the desktop app on their [releases page](https://github.com/MyCryptoHQ/MyCrypto/releases).

Once you've downloaded MyCrypto and have it running locally (we recommend an air-gapped computer for maximum security), you can start by navigating to the Claims app on the AXIA-JS UI. Select the account you would like to claim the LUNAR into and click the blue "Continue" button to proceed. Your screen should look something like this:

![Claim Step 1](assets/axialunar/claim/claim-1.png)

The hex-encoded string that follows the sentence: "Pay LUNAR to the AXIALunar account:" is the hex-encoded public key of your AXIALunar account, minus the `0x` prefix. To verify that the public key is correct you can use the Subkey tool to inspect your address.

The next step is to go to the MyCrypto application and click on "Sign & Verify Message" tab. This will prompt you to select a method for unlocking your wallet. After unlocking your wallet, you will copy and paste the outputted sentence into the input box.

![Claim Step 2](assets/axialunar/claim/claim-2.png)

When you click "Sign Message" you will get a JSON output like the below:

![Claim Step 3](assets/axialunar/claim/claim_3.png)

Copy and paste the JSON output of the signed message from MyCrypto into the input box on the AXIA-JS UI and click "Confirm Claim."

![Claim Step 3](assets/axialunar/claim/claim-3.png)

At this point, you will see a success message if everything went right and your LUNAR will now be in the account that you claimed to. Congratulations you can now participate in aspects of the AXIALunar network such as [governance](learn-governance) and [staking](learn-staking). During the soft launch, period balance transfers will not be enabled.

![Claim Step 4](assets/axialunar/claim/claim-4.png)]

#### Verifying your Claim

After you make an on-chain claim for LUNAR, your balance should be updated on AXIA-JS Apps immediately.

Having trouble? Send an email to [support@AXIA.network](mailto:support@AXIA.network).

### Third-Party Claims Processes

**We do not recommend using a third-party app or process to perform your claim or acquire LUNAR.**

Claiming using a third-party process can lead to the loss of your allocation, therefore we cannot recommend using any third-party apps to do so. Manually specifying your transaction data, as specified in our claims process, is the only way to be certain you will receive your allocation.
