---
id: AxiaJS-manage-swap-keys
title: Manage Swap Keys
sidebar_label: Manage Swap Keys
slug: ../AxiaJS-manage-swap-keys
---


AxiaJS comes with its own AVM Keychain. This KeyChain is used in the functions of the API, enabling them to sign using keys it's registered. The first step in this process is to create an instance of AxiaJS connected to our Axia Platform endpoint of choice.

```js
import { Axia, BinTools, Buffer, BN } from "@axiaglobal/axiajs"

const bintools = BinTools.getInstance()

const myNetworkID = 12345 //default is 1, we want to override that for our local network
const axia = new Axia("localhost", 443, "http", myNetworkID)
const swapchain = axia.SwapChain() //returns a reference to the Swap-Chain used by AxiaJS
```

### Accessing the KeyChain

The KeyChain is accessed through the Swap-Chain and can be referenced directly or through a reference variable.

```js
const myKeychain = swapchain.keyChain()
```

This exposes the instance of the class AVMKeyChain which is created when the Swap-Chain API is created. At present, this supports secp256k1 curve for ECDSA key pairs.

### Creating Swap-Chain key pairs

The KeyChain has the ability to create new KeyPairs for you and return the address associated with the key pair.

```js
const newAddress1 = myKeychain.makeKey() // returns an instance of the KeyPair class
```

You may also import your existing private key into the KeyChain using either a Buffer...

```js
const mypk = bintools.cb58Decode(
  "JaCCSxdoWfo3ao5KwenXrJjJR7cBTQ287G1C5qpv2hr2tCCdb"
) // returns a Buffer
const newAddress2 = myKeychain.importKey(mypk) // returns an instance of the KeyPair class
```

... or an CB58 string works, too:

```js
const mypk = "PrivateKey-JaCCSxdoWfo3ao5KwenXrJjJR7cBTQ287G1C5qpv2hr2tCCdb"
const newAddress2 = myKeychain.importKey(mypk) // returns an instance of the KeyPair class
```

### Working with KeyChains

The Swap-Chains's KeyChain has standardized key management capabilities. The following functions are available on any KeyChain that implements this interface.

```js
const addresses = myKeychain.getAddresses() // returns an array of Buffers for the addresses
const addressStrings = myKeychain.getAddressStrings() // returns an array of strings for the addresses
const exists = myKeychain.hasKey(addresses[0]) // returns true if the address is managed
const keypair = myKeychain.getKey(addresses[0]) // returns the KeyPair class
```

### Working with KeyPairs

The Swap-Chain's KeyPair has standardized KeyPair functionality. The following operations are available on any KeyPair that implements this interface.

```js
const address = keypair.getAddress() // returns Buffer
const addressString = keypair.getAddressString() // returns string

const pubk = keypair.getPublicKey() // returns Buffer
const pubkstr = keypair.getPublicKeyString() // returns a CB58 encoded string

const privk = keypair.getPrivateKey() //returns Buffer
const privkstr = keypair.getPrivateKeyString() //returns a CB58 encoded string

keypair.generateKey() // creates a new random KeyPair

const mypk = bintools.cb58Decode(
  "24jUJ9vZexUM6expyMcT48LBx27k1m7xpraoV62oSQAHdziao5"
)
const successful = keypair.importKey(mypk) // returns boolean if private key imported successfully

const message = Buffer.from("Through consensus to the stars")
const signature = keypair.sign(message) // returns a Buffer with the signature

const signerPubk = keypair.recover(message, signature) // returns a Buffer
const isValid = keypair.verify(message, signature) // returns a boolean
```