---
id: build-wallets
title: AXIA Wallets
sidebar_label: AXIA Wallets
---

## AXIA Wallets

The integration of a [wallet](https://solar.wiki.AXIA.network/docs/en/glossary#wallet) with AXIA allows for simple and easy access to private keys and signing transactions. Below are some wallets that support AXIA along with their development statuses.

Note that inclusion does not necessarily imply endorsement of that wallet. AXIA support can provide assistance with issues related to AXIA-JS, the AXIA{.js} extension, or Axia Signer. For other wallet software, you should contact the developers of that wallet.

## Encryption Enhancement

Some recently generated `JSON` account files cannot be imported (restored) into older wallet software. This is due to an enhanced encryption method, which is also noticeable in a slight delay when encrypting/decrypting your wallet. If you are unable to load a `JSON` file, please ensure that you are using the latest version of the wallet software. If you are still unable to load it, ensure that the wallet software is using the latest version of the [AXIA API](https://AXIA.js.org/api/).

### Supported Wallets

| Wallet Name                                                         | Development State | Team Name | Description       | Custody       | Supports |
| ------------------------------------------------------------------- | ----------------- | --------- | ----------------- | ------------- | -------- |
| [Axia Signer](https://www.axia.io/signer/) (see warning below)  | Live              | Axia    | iOS and Android   | Non-custodial | Staking  |
| [AXIA-js Desktop](https://github.com/AXIA-js/apps/releases) | Live              | Axia    | Win, Mac, Linux   | Non-custodial | Staking  |
| [AXIA-js extension](https://github.com/AXIA-js/extension)   | Live              | Axia    | Browser extension | Non-custodial | Staking  |
| [AXIA-js apps](https://AXIA.js.org/apps/#/accounts)         | Live              | Axia    | Browser           | Non-Custodial | Staking  |

> Warning: Axia Signer currently does not allow you to see the transaction you are signing. This means that you are at risk if connected to a compromised version of AXIA-JS. A fix is being worked on; please see [this GitHub issue](https://github.com/axia-tech/axia-signer/issues/724) for more details.

> Note: the wallets page is currently being reviewed. Currently only Axia-developed wallets are listed.
