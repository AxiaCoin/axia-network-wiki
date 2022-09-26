---
id: AxiaJS-send-an-asset
title: Send an asset
sidebar_label: Send an asset
slug: ../AxiaJS-send-an-asset
---
This example sends an asset in the Swap-Chain to a single recipient. The first step in this process is to create an instance of Axia connected to our Axia Platform endpoint of choice.

```js
import { Axia, BinTools, Buffer, BN } from "@axiaglobal/axiajs"

const myNetworkID = 12345 // default is 1, we want to override that for our local network
const axia = new axia.Axia(
  "localhost",
  443,
  "http",
  myNetworkID
)
const swapchain = axia.SwapChain() // returns a reference to the Swap-Chain used by AxiaJS
```

We're also assuming that the keystore contains a list of addresses used in this transaction.

### Getting the UTXO Set

The Swap-Chain stores all available balances in a datastore called Unspent Transaction Outputs (UTXOs). A UTXO Set is the unique list of outputs produced by transactions, addresses that can spend those outputs, and other variables such as lockout times (a timestamp after which the output can be spent) and thresholds (how many signers are required to spend the output).

For the case of this example, we're going to create a simple transaction that spends an amount of available coins and sends it to a single address without any restrictions. The management of the UTXOs will mostly be abstracted away.

However, we do need to get the UTXO Set for the addresses we're managing.

```js
const myAddresses = swapchain.keyChain().getAddresses() // returns an array of addresses the KeyChain manages as buffers
const addressStrings = swapchain.keyChain().getAddressStrings() // returns an array of addresses the KeyChain manages as strings
const u = await swapchain.getUTXOs(myAddresses)
const utxos = u.utxos
```

### Spending the UTXOs

The `buildBaseTx()` helper function sends a single asset type. We have a particular assetID whose coins we want to send to a recipient address. This is an imaginary asset for this example which we believe to have 400 coins. Let's verify that we have the funds available for the transaction.

```js
const assetID = "8pfG5CTyL5KBVaKrEnCvNJR95dUWAKc1hrffcVxfgi8qGhqjm" // cb58 string
const mybalance = utxos.getBalance(myAddresses, assetID) // returns 400 as a BN
```

We have 400 coins! We're going to now send 100 of those coins to our friend's address.

```js
const sendAmount = new BN(100) // amounts are in BN format
const friendsAddress = "Swap-axc1k26jvfdzyukms95puxcceyzsa3lzwf5ftt0fjk" // address format is Bech32

// The below returns a UnsignedTx
// Parameters sent are (in order of appearance):
//   * The UTXO Set
//   * The amount being sent as a BN
//   * An array of addresses to send the funds
//   * An array of addresses sending the funds
//   * An array of addresses any leftover funds are sent
//   * The AssetID of the funds being sent
const unsignedTx = await swapchain.buildBaseTx(
  utxos,
  sendAmount,
  [friendsAddress],
  addressStrings,
  addressStrings,
  assetID
)
const signedTx = swapchain.signTx(unsignedTx)
const txid = await swapchain.issueTx(signedTx)
```

And the transaction is sent!

### Get the status of the transaction

Now that we sent the transaction to the network, it takes a few seconds to determine if the transaction has gone through. We can get an updated status on the transaction using the TxID through the Swap-Chain.

```js
// returns one of: "Accepted", "Processing", "Unknown", and "Rejected"
const status = await swapchain.getTxStatus(txid)
```

The statuses can be one of "Accepted", "Processing", "Unknown", and "Rejected":

* "Accepted" indicates that the transaction has been accepted as valid by the network and executed
* "Processing" indicates that the transaction is being voted on.
* "Unknown" indicates that node knows nothing about the transaction, indicating the node doesn't have it
* "Rejected" indicates the node knows about the transaction, but it conflicted with an accepted transaction

### Check the results

The transaction finally came back as "Accepted", now let's update the UTXOSet and verify that the transaction balance is as we expected.

*Note: In a real network the balance isn't guaranteed to match this scenario. Transaction fees or additional spends may vary the balance. For the purpose of this example, we assume neither of those cases.*

```js
const updatedU = await swapchain.getUTXOs()
const updatedUTXOs = updatedU.utxos
const newBalance = updatedUTXOs.getBalance(myAddresses, assetID)
if (newBalance.toNumber() != mybalance.sub(sendAmount).toNumber()) {
  throw Error("heyyy these should equal!")
}
```

### Repo Dependency Updates

Dependabot will make pull requests against the development branch. If all tests pass, it is safe to merge into development, but for redundancy you want to try to build it locally.

```zsh
git fetch origin
git checkout -b <branchName>
git merge development
yarn build && yarn test
```

If the E2E check does not pass, go into the 'checks' section of the PR.
`https://github.com/AxiaCoin/axiajs/pull/<PR number>/checks`

* Click on the `> E2E` tab on the left
* Click 'Re-run jobs' on the right