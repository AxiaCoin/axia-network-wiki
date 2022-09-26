---
id: AxiaJS-create-an-asset
title: Create an asset
sidebar_label: Create an asset
slug: ../AxiaJS-create-an-asset
---

This example creates an asset in the Swap-Chain and publishes it to the Axia Platform. The first step in this process is to create an instance of AxiaJS connected to our Axia Platform endpoint of choice.

```js
import { Axia, BinTools, Buffer, BN } from "@axiaglobal/axiajs"
import { InitialStates, SECPTransferOutput } from "@axiaglobal/axiajs/dist/apis/avm"

const myNetworkID = 12345 // default is 1, we want to override that for our local network
const axia = new Axia("localhost", 443, "http", myNetworkID)
const swapchain = axia.SwapChain() // returns a reference to the Swap-Chain used by AxiaJS
```

### Describe the new asset

The first steps in creating a new asset using AxiaJS is to determine the qualities of the asset. We will give the asset a name, a ticker symbol, as well as a denomination.

```js
// Name our new coin and give it a symbol
const name = "TeamRocket"
const symbol = "ROKT"

// Where is the decimal point indicate what 1 asset is and where fractional assets begin
// Ex: 1 AXC is denomination 9, so the smallest unit of AXC is nanoAXC (nAXC) at 10^-9 AXC
const denomination = 9
```

### Creating the initial state

We want to mint an asset with 400 coins to all of our managed keys, 500 to the second address we know of, and 600 to the second and third address. This sets up the state that will result from the Create Asset transaction.

_Note: This example assumes we have the keys already managed in our Swap-Chain's Keychain._

```js
const addresses = swapchain.keyChain().getAddresses()

// Create outputs for the asset's initial state
const secpOutput1 = new SECPTransferOutput(
  new BN(400),
  new BN(400),
  1,
  addresses
)
const secpOutput2 = new SECPTransferOutput(new BN(500), new BN(400), 1, [
  addresses[1],
])
const secpOutput3 = new SECPTransferOutput(new BN(600), new BN(400), 1, [
  addresses[1],
  addresses[2],
])

// Populate the initialStates with the outputs
const initialState = new InitialStates()
initialState.addOutput(secpOutput1)
initialState.addOutput(secpOutput2)
initialState.addOutput(secpOutput3)
```

### Creating the signed transaction

Now that we know what we want an asset to look like, we create an output to send to the network. There is an AVM helper function `buildCreateAssetTx()` which does just that.

```js
// Fetch the UTXOSet for our addresses
const utxos = await swapchain.getUTXOs(addresses)

// Make an unsigned Create Asset transaction from the data compiled earlier
const unsigned = await swapchain.buildCreateAssetTx(
  utxos, // the UTXOSet containing the UTXOs we're going to spend
  addresses, // the addresses which will pay the fees
  addresses, // the addresses which recieve the change from the spent UTXOs
  initialState, // the initial state to be created for this new asset
  name, // the full name of the asset
  symbol, // a short ticker symbol for the asset
  denomination // the asse's denomination
)

const signed = unsigned.sign(swapchain) // returns a Tx class
```

### Issue the signed transaction

Now that we have a signed transaction ready to send to the network, let's issue it!

Using the AxiaJS Swap-Chain API, we going to call the `issueTx` function. This function can take either the Tx class returned in the previous step, a CB58 representation of the transaction, or a raw Buffer class with the data for the transaction. Examples of each are below:

```js
// using the Tx class
const txid = await swapchain.issueTx(signed) // returns a CB58 serialized string for the TxID
```

```js
// using the base-58 representation
const txid = await swapchain.issueTx(signed.toString()) // returns a CB58 serialized string for the TxID
```

```js
// using the transaction Buffer
const txid = await swapchain.issueTx(signed.toBuffer()) // returns a CB58 serialized string for the TxID
```

We assume ONE of those methods are used to issue the transaction.

### Get the status of the transaction

Now that we sent the transaction to the network, it takes a few seconds to determine if the transaction has gone through. We can get an updated status on the transaction using the TxID through the AVM API.

```js
// returns one of: "Accepted", "Processing", "Unknown", and "Rejected"
const status = await swapchain.getTxStatus(txid)
```

The statuses can be one of "Accepted", "Processing", "Unknown", and "Rejected":

* "Accepted" indicates that the transaction has been accepted as valid by the network and executed
* "Processing" indicates that the transaction is being voted on.
* "Unknown" indicates that node knows nothing about the transaction, indicating the node doesn't have it
* "Rejected" indicates the node knows about the transaction, but it conflicted with an accepted transaction

### Identifying the newly created asset

The Swap-Chain uses the TxID of the transaction which created the asset as the unique identifier for the asset. This unique identifier is henceforth known as the "AssetID" of the asset. When assets are traded around the Swap-Chain, they always reference the AssetID that they represent.
