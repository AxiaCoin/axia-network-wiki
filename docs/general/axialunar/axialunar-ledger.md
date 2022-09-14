---
id: axialunar-ledger
title: Using Ledger Devices
sidebar_label: Ledger Devices
slug: ../../axialunar-ledger
---

> Note: Because of required WebUSB support, Ledger wallets currently only work on Chromium-based
> browsers like Brave and Chrome.

AXIALunar has a [Ledger][] application that is compatible with the Ledger Nano S and Ledger Nano X
devices. The Ledger devices are hardware wallets that keep your private key secured on a physical
device that does not get directly exposed to your computer or the internet.

The AXIALunar application allows you to manage AXIALunar's native asset, the LUNAR token. It supports most
of the available transaction types of the network (a notable exception is the "Batch" transaction
from the Utility pallet).

If you have trouble using Ledger or following the directions below, you can try searching for your
issue on the [AXIA Knowledge Base](https://support.AXIA.network/).

> Please check out our
> [intro to Ledger video on Youtube for more information](https://www.video_url_here.com/watch?v=p24yOcLLFmI&list=PLOyWqupZ-WGuAuS00rK-pebTMAOxW41W8&index=33&ab_channel=AXIA).

## Requirements

Here is a list of what you will need before starting:

- A Ledger Nano S or a Ledger Nano X.
- The latest firmware installed.
- Ledger Live is installed and at version 2.19 or newer (see settings -> about to find out if you're
  up to date).
- A web browser is installed that you can use to access [AXIA-JS Apps UI][apps].

## Installing the Ledger Application

### Using Ledger Live

- Open the "Manager" tab in Ledger Live.
- Connect and unlock your Ledger device.
- If asked, allow the manager on your device by pressing both buttons on the YES screen.
- Find AXIALunar in the app catalog and install it.
  ![The AXIALunar App in the Ledger Manager](../../assets/ledger/manager-app-axialunar.png)

Please proceed to the [usage instructions](#using-on-AXIA-js-apps) below.

### Using the Developer Release

> NOTE: These instructions are for development installation only. It is recommended to install the
> application from Ledger Live unless you _know exactly what you're doing_.

Instructions for downloading the prerelease binary from the GitHub releases is written [on the
README][prerelease instructions] for the AXIALunar Ledger application GitHub repository.

On the [releases page][] you can download the shell script `install_app.sh` and then make it
executable in your shell by typing the command `chmod +x install_app.sh`.

Using `install_app.sh` help command will show you the available options:

```zsh
$ ./install_app.sh --help
Zondax Installer [AXIALunar-1.2011.1] [Warning: use only for test/demo apps]
  load    - Load AXIALunar app
  delete  - Delete AXIALunar app
  version - Show AXIALunar app version
```

Next, you must make sure your Ledger device is plugged in and unlocked and you're using the latest
firmware. If everything is prepared, then type `./install_app.sh load` and accept the prompts on
your Ledger device to install the application.

First it will prompt you to allow an unsafe manager - confirm this by switching the screen to the
allow screen and pressing the corresponding buttons.

After some processing time, the screen of your device will update to say "Install app AXIALunar".
Navigate all the way to the right, verify the Identifier hash matches the one that is printed in
your terminal. Click both buttons on "Perform Installation" to install the application. It will ask
again for your Pin code and you should enter it in the device.

At the end of the process you should have the newly installed AXIALunar application on the device.

## Using on AXIA-JS Apps UI

### Loading Your Account

[AXIA-JS Apps UI][apps] already has an integration with the Ledger application so that your
device will work with the browser interface after installation. The functionality is currently gated
behind a feature setting that you will need to turn on.

In order to turn on the interoperability with the AXIALunar Ledger application, go to the "Settings"
tab in [AXIA-JS Apps UI][apps]. Find the option for attaching Ledger devices and switch the
option from the default "Do not attach Ledger devices" to "Attach Ledger via WebUSB".

![Dropdown selector for allowing Ledger connections in AXIA-JS Apps UI Settings](../../assets/ledger.png)

Click "Save" to keep your settings.

Now when you go to the "Accounts" tab you will see a new button that says "Add Ledger". Ensure that
your Ledger device is unlocked and you have navigated into the AXIALunar application, then click this
button.

![Add Ledger button in AXIA-JS Apps UI](../../assets/ledger/query-ledger.png)

A popup will appear asking you to select an account and derivation path.

![Picking an account and derivation path](../../assets/ledger/add-account.png)

The first option lets you select an account. You can have multiple accounts on a single Ledger
device. The second dropdown lets you pick a derivation path - think of it like a formula from which
child accounts are generated. If in doubt, pick the first option for both.

Once you confirm your selection, depending on your browser and its security settings, you might need
to confirm the USB connection through a popup like the one below when adding the Ledger device for
the first time:

![Display the device connection popup](../../assets/ledger/query-device.png)

You should now be able to scroll down and find a new account on the page with the type "ledger".

![Displaying the Ledger account in the list](../../assets/ledger/ledger-balance.png)

You can now use this account to interact with AXIALunar on [AXIA-JS Apps UI][apps] and it will
prompt your ledger for confirmation when you initiate a transaction.

### Confirming the Address on your Device

On the "Accounts" tab, find your Ledger-connected account. Click on the three vertical axcs at the
end of the row. This will open a new menu, here you can click the "Show address on hardware device"
option to display the address on your device.

![Options menu of an account in the Accounts screen of AXIA-JS Apps UI](../../assets/ledger-4.png)

Here you can scroll through and make sure the address matches to what is displayed on [AXIA-JS
Apps UI][apps].

### Checking the Balance of Your Account

There are a few methods to check the balance of your account. You can use AXIA-JS Apps or you
can use a block explorer like [AXIAscan][] or [Subscan][].

#### Using AXIA-JS Apps

Once you have your account loaded on the "Accounts" tab it should show a row with your Ledger
account. At the far right of the row is located your account's AXC balance. If you expand the
balance arrow, it will show details of your balance such as locks or reserved amounts.

![Account row showing empty balance](../../assets/ledger/ledger-balance.png)

### Sending a Transfer

If you would like to send a transfer from your account housed on the Ledger device, the easiest
method is to use [AXIA-JS Apps UI][apps].

- Click on the "Transfer" button in "Accounts" dropdown in the top navigation menu.
- In the top input, select "Ledger" as your sending account.
- In the second input, select the account that you want to transfer funds to.
- In the third input, enter the amount of LUNAR you want to transfer.
- Click the "Make Transfer" button.
- Confirm the transaction on your device.
- A green success notification will be displayed when the transaction is included in a block.

> Note the "Transfer with Keep-Alive Checks" toggle. While this toggle is in the _On_ state, your
> account will be unable to make transactions which would get its balance below the existential
> deposit. This prevents reaping of accounts with low balances. If you toggle this to _Off_, you
> will be able to go below existential deposit balance, causing your account to be deleted and any
> dust amount of LUNAR to be burned. If you encounter KeepAlive errors when making transactions, this
> might be the reason.

A detailed guide on doing transfers is available [here](../../learn/learn-balance-transfers.md).

### Receiving a Transfer

In order to receive a transfer on the accounts stored on your Ledger device, you will need to
provide the sender (i.e. the payer) with your address.

The easiest way to get your address is to click on the account name which will open a sidebar. Your
address will be shown in this sidebar, along with some other information. Another method is just
clicking on your account's avatar icon - this immediately copies your address to the clipboard.

> **Warning**: before giving anyone your address, make sure it matches what's really on the Ledger
> by [confirming the address on your device](#confirming-the-address-on-your-device). Some malware
> will intercept clicks and clipboard requests and can change your copied value in-flight, so being
> extra vigilant around copy-paste operations makes sense.

### Staking

Since Ledger does not support batch transactions, you must do two separate transactions when you
want to stake using an account stored on a Ledger device.

- Go to the "Staking" tab found under the "Network" dropdown in the top navigation menu.
- Click the "Account Actions" pane in the inner navigation.
- Click "+ Stash" instead of "+ Nominator" or "+ Validator" (selecting the latter two will not
  work).
- Input the amount of tokens to bond and confirm the transaction.
- Confirm the transaction on the Ledger devivce.
- When the transaction is included you will see the newly bonded account in the "Account Actions"
  page.
- Select "Start Nominating" or "Start Validating" to start nominating or validating.
- Confirm the transaction on Apps and on the Ledger device.

### Removing Expired Democracy Locks

Since Ledger does not support batch transactions, you must issue several extrinsics manually when you
want to remove expired democracy locks on an account stored on a Ledger device.

- Go to https://AXIA.js.org/apps/#/accounts. Look at your expired locks and note which referenda
  they were for.
- Go to https://AXIA.js.org/apps/#/extrinsics
- For each referendum with an expired lock, issue a `democracy.removeVote(X)` extrinsic, where X =
  the referendum you voted on and has an expired lock. Make sure you do it from the account with the
  expired locks - you can't do it from another account.
- Once you have removed all of the votes, issue a `democracy.unlock(ACCOUNT)` extrinsic, where
  ACCOUNT is the account you just removed the votes from.
- Go back to https://AXIA.js.org/apps/#/accounts. You'll see that the locks are now removed.

**NOTE**: Despite the AXIA ledger application being compatible with both the Ledger Nano S and the
Ledger Nano X, none of the [Democracy](../../maintain/maintain-guides-democracy.md) extrinsics are available in the
light version. The following [repo by Zondax][] lists the currently supported Democracy extrinsics on
the full ledger.

## Support

If you need support please send an email to [support@axialunar.network](mailto:support@axialunar.network)
or visit [our Support page](https://support.AXIA.network).

[ledger]: https://www.ledger.com/
[repo by zondax]: https://github.com/Zondax/ledger-AXIA#democracy
[apps]: https://axialunar.axcapps.io
[prerelease instructions]: https://github.com/Zondax/ledger-axialunar#download-and-install
[releases page]: https://github.com/Zondax/ledger-axialunar/releases
[axiascan]: https://axiascan.io/axialunar
[subscan]: https://axialunar.subscan.io/
