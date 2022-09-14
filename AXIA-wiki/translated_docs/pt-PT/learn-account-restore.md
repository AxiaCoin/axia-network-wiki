---
id: learn-account-restore
title: Backing up and Restoring Accounts
sidebar_label: Backing up and Restoring Accounts
description: Step-by-step guides on backing up and restoring a AXIA account.
---

In the case that your AXIA account needs to backed up and later restored, there are simple ways to take care of this in AXIA.js Browser Plugin, AXIA.js, and Axia Signer. Note that in order to recover an account, it is necessary that an account is created according to the instructions [here](learn-account-generation).

## AXIA.js Browser Plugin

For using the AXIA.js browser plugin, restoring an account is simple. Let's start off by heading over to the extension and selecting the desired account to restore. Click on the three dots beside the address to open up a settings tab.

![list-accounts-plugin](assets/accounts/AXIA.js_list_accounts.png)

From here, we will be selecting the Export Account button, which will then ask you for the password for that specific account. Once you enter the password, the browser will automatically download a `.json` file that will hold all the account restoration details that will be used when you restore your account. This part is _very important_.

![enter-password-plugin](assets/accounts/AXIA.js_enter_password.png)

Now, onto restoring the account. In AXIA.js browser plugin, let's click on the + button at the top. This will open up a tab with many choices listed, select "Restore account from backup JSON file". This will then prompt you for the `.json` file which was download earlier and the password for that account.

![restore-account-plugin](assets/accounts/AXIA.js_restore_account.png)

Once these are filled out, and the "Restore" button has been pressed, you'll be taken back to the main page of the plugin. There listed will be your restored account!

## AXIA.js

If you're using the main AXIA.js UI, restoring an account will feel similar to restoring an account on AXIA.js browser plugin. The first step is to head over to the chosen account and click on the three dots beside it. This will open up a tab with lots of options. For backing up the account we'll restore later, press on "Create a backup file for this account".

![click-account-restore-AXIA](assets/accounts/AXIA_click_restore.png)

From there, a pop up screen will appear, prompting for the password of that account. By entering your password and clicking on "Download", your browser will download the `.json` file associated with the AXIA account. This `.json` file holds all relevant data about the account to be used in account restoration.

![enter-account-password-AXIA](assets/accounts/AXIA_enter_password.png)

Now that's completed, it's time to restore the account. On the AXIA accounts page, click on the "Restore JSON" button, which will let you upload your `.json` file that you downloaded and enter your password for that account.

![restore-account-AXIA](assets/accounts/AXIA_restore_account.png)

Once you've pressed the "Restore" button, you should see a green notification letting you know that your account has been restored. That's it!

![restore-complete-AXIA](assets/accounts/AXIA_restore_complete.png)

### Using an existing Mnemonic Seed to restore an Account

If you've already created an account but are looking to have it restored, you can do that by using the AXIA.js UI and the existing mnemonic seed.

To start, you'll need to open up the [AXIA.js UI](https://AXIA.js.org/apps) and head over to the accounts tab. Click on the "Add Account" button, and fill out with the prompted details: a name for the account, a password, and be sure to replace the generated mnemonic seed with your _existing seed_. Note here that when you replace the generated mnemonic seed with your existing one, you aren't actually creating a new account, rather adding that account onto the AXIA.js UI. It is also important to note that the name and the password of this added account can be set to whatever you'd like, it does not need to be that specific accounts name and password when created.

![restore-using-json](assets/accounts/AXIA-js-existing-json.png)

Now that those details have been filled in, you will need to click on the "Save" button. This will prompt a screen to appear. To back up your existing account, press on the "Create and backup account" button. This will download the `.json` file which contains the data to be used in account restoration.

There we go! Now you've successfully restored and backed up your account using its mnemonic seed.

## Axia Signer

To back up an account we'll restore below in Axia Signer, open the app and click on the user profile icon in the top right hand corner.

![click-profile-axia](assets/accounts/axia_select_profile.jpeg)

From here, we want to choose "Show Recovery Phase", which will be the next step in restoring an account.

![click-restore-axia](assets/accounts/axia_click_restore.jpg)

The next step will require you to enter your PIN that was created with your account on Axia Signer. Once this has been added, you'll have access to your Mnemonic Recovery phrase for your account.

![enter-pin-axia](assets/accounts/axia_enter_password.jpg) ![recovery-phrase-axia](assets/accounts/axia_recovery_phrase.jpg)

Now, it's time to restore the account. Open up the AXIA.js on your browser, and navigate to "Add Account". Though this may seem counter-intuitive, we aren't actually adding in an account here, rather we are restoring the account using its mnemonic recovery phrase. It is very important here to put in the mnemonic recovery phrase from your Axia Signer account.

Note that you can change the name and password if desired.

![restoring-account-axia](assets/accounts/axia_restoring_account.jpg)

Once you hit save, click on "Create and backup account", which will download a `.json` file that contains all the relevant data for that account. At this point, we have successfully saved the Axia Signer account onto AXIA js and downloaded the account data, now we have restored the account.

![save-backup-axia](assets/accounts/axia_save_recovery.png)
