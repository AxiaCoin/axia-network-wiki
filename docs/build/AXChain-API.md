---
sidebar_position: 4
---
sidebar_label: AXChain API

# AXChain APIs

:::info
Ethereum has its own notion of **networkID** and **chainID**. These have no relationship to the view of networkID and chainID developed by AXIA, which are purely internal to the AXChain. On the AXIA Network Mainnet, the AXChain uses **1** and **4001** for these values. On the Testnet, it uses **1** and **4000** for these values. **networkID** and **chainID** can also be obtained using the **net_version** and **eth_chainId** methods.

:::


## Ethereum APIs

### Ethereum API Endpoints

#### JSON-RPC Endpoints

To interact with AXChain via the JSON-RPC endpoint:

```
/ext/bc/AX/rpc
```



### Methods

#### Standard Ethereum APIs

AXIA offers an API interface identical to Geth's API except that it only supports the following services:

- `web3_`
- `net_`
- `eth_`
- `personal_`
- `txpool_`
- `debug_` (note: this is turned off on the public API node.)

You can interact with these services the same exact way you’d interact with Geth. See the [Ethereum Wiki’s JSON-RPC Documentation](https://eth.wiki/json-rpc/API) and [Geth’s JSON-RPC Documentation](https://geth.ethereum.org/docs/rpc/server) for a full description of this API.


#### eth_getAssetBalance

In addition to the standard Ethereum APIs, AXIA offers **eth_getAssetBalance** to retrieve the balance of first class AXIA Native Tokens on the AXChain (excluding AXIA Coin, which must be fetched with **eth_getBalance**).

**Signature**

```sh
eth_getAssetBalance({
    address: string,
    blk: BlkNrOrHash,
    assetID: string,
}) -> {balance: int}
```

- `address` owner of the asset
- `blk` is the block number or hash at which to retrieve the balance
- `assetID` ID of the asset for which the balance is requested

**Example Call**

```sh
curl -X POST --data '{
    "jsonrpc": "2.0",
    "method": "eth_getAssetBalance",
    "params": [
        "0x790e5825b65ade90095ddfe30709f14f04372194",
        "latest",
        "2iHQFYZrMKLapxZqYw7nrnjBNMAvoxmTxjr29agxYGBXKMpFFB"
    ],
    "id": 1
}' -H 'content-type:application/json;' http://127.0.0.1:9650/ext/bc/AX/rpc
```

**Example Response**

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x1388"
}
```

### eth_baseFee

Get the base fee for the next block.

#### **Signature**

```sh
eth_baseFee() -> {}
```

`result` is the hex value of the base fee for the next block.

#### **Example Call**

```sh
curl -X POST --data '{
    "jsonrpc":"2.0",
    "id"     :1,
    "method" :"eth_baseFee",
    "params" :[]
}' -H 'content-type:application/json;' http://127.0.0.1:9650/ext/bc/AX/rpc
```

#### **Example Response**

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x34630b8a00"
}
```

### eth_maxPriorityFeePerGas

Get the priority fee needed to be included in a block.

#### **Signature**

```sh
eth_maxPriorityFeePerGas() -> {}
```

`result` is hex value of the priority fee needed to be included in a block.

#### **Example Call**

```sh
curl -X POST --data '{
    "jsonrpc":"2.0",
    "id"     :1,
    "method" :"eth_maxPriorityFeePerGas",
    "params" :[]
}' -H 'content-type:application/json;' http://127.0.0.1:9650/ext/bc/AX/rpc
```

#### **Example Response**

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x2540be400"
}
```

## AXIA Specific APIs

### Endpoints

To interact with the `axc` specific RPC calls on the AXChain:

```
/ext/bc/AX/axc
```


### axc.getAtomicTx

Gets a transaction by its ID. Optional encoding parameter to specify the format for the returned transaction. Can only be `hex` when a value is provided.

#### Signature

```go
axc.getAtomicTx({
    txID: string,
    encoding: string, //optional
}) -> {
    tx: string,
    encoding: string,
    blockHeight: string
}
```

**Request**

- `txID` is the transacion ID. It should be in cb58 format.
- `encoding` is the encoding format to use. Can only be `hex` when a value is provided.

**Response**

- `tx` is the transaction encoded to `encoding`.
- `encoding` is the `encoding`.
- `blockHeight` is the height of the block which the transaction was included in.

#### Example Call

```sh
curl -X POST --data '{
    "jsonrpc":"2.0",
    "id"     :1,
    "method" :"axc.getAtomicTx",
    "params" :{
        "txID":"NsjZbrFZDTwrfqV7skzx3c8UVvTUybSpPCJhy6z4dWZ7RnsE4",
        "encoding": "hex"
    }
}' -H 'content-type:application/json;' http://127.0.0.1:9650/ext/bc/AX/axc
```

#### Example Response

```json
{
  "jsonrpc": "2.0",
  "result": {
    "tx": "0x000000000000000030399d0775f450604bd2fbc49ce0c5c1c6dfeb2dc2acb8c92c26eeae6e6df4502b19d891ad56056d9c01f18f43f58b5c784ad07a4a49cf3d1f11623804b5cba2c6bf000000018212d6807a0ec9c1b26321418fe7a548180b5be728ce53fe7e98ab5755ed316100000001dbcf890f77f49b96857648b72b77f9f82937f28a68704af05da0dc12ba53f2db00000005000003a352a382400000000100000000000000018db97c7cece249c2b98bdc0226cc4c2a57bf52fc000003a3529edd17dbcf890f77f49b96857648b72b77f9f82937f28a68704af05da0dc12ba53f2db000000010000000900000001ead19377f015422fbb8731204fcf6d6879dd05146c2d5b5594e2fea2cb420b2f40bd457b71e279e547790b28fe5482f278c76cf39b2dce5c2e6c53352fe6827d002cc7d20d",
    "encoding": "hex",
    "blockHeight": "1"
  },
  "id": 1
}
```

### axc.export

:::warning
Not recommended for use on Mainnet. See warning notice in [Keystore API](./keystore).
:::

Export an asset from the AXChain to SwapChain or CoreChain. After calling this method, you must call the SwapChain's [`avm.import`](x-chain.md#avmimport) or CoreChain's [`platform.import`](p-chain.md#platformimportaxc).

#### Signature

```
axc.export({
    to: string,
    amount: int,
    assetID: string,
    baseFee: int,
    username: string,
    password:string,
}) -> {txID: string}
```

- `to` is the SwapChain or CoreChain address the asset is sent to.
- `amount` is the amount of the asset to be sent.
- `assetID` is the ID of the asset. To export AXIA Coin use `"AXC"` as the `assetID`.
- `baseFee` is the base fee that should be used when creating the transaction. If ommitted, a suggested fee will be used.
- `username` is the user that controls the address that the transaction will be sent from.
- `password` is `username`‘s password.

#### Example Call

```sh
curl -X POST --data '{
    "jsonrpc":"2.0",
    "id"     :1,
    "method" :"axc.export",
    "params" :{
        "to":"Swap-test1qj5nfrtqh40zuwxhz3m7wxwg6v23nzxsv8yurs",
        "amount": 500,
        "assetID": "2nzgmhZLuVq8jc7NNu2eahkKwoJcbFWXWJCxHBVWAJEZkhquoK",
        "username":"myUsername",
        "password":"myPassword"
    }
}' -H 'content-type:application/json;' http://127.0.0.1:9650/ext/bc/AX/axc
```

#### Example Response

```json
{
  "jsonrpc": "2.0",
  "result": {
    "txID": "2W5JuFENitZKTpJsy9igBpTcEeBKxBHHGAUkgsSUnkjVVGQ9i8"
  },
  "id": 1
}
```

### axc.exportAXC

:::warning
Not recommended for use on Mainnet. See warning notice in [Keystore API](./keystore).
:::

**DEPRECATED—instead use** [**axc.export**](c-chain.md#axcexport).

Send AXIA Coin from the AXChain to the SwapChain or CoreChain. After calling this method, you must call the SwapChain's [`avm.import`](x-chain.md#avmimport) or CoreChain's [`platform.import`](p-chain.md#platformimportaxc) with assetID `AXC` on the SwapChain to complete the transfer.

#### Signature

```go
axc.exportAXC({
    to: string,
    amount: int,
    baseFee: int,
    username: string,
    password:string,
}) -> {txID: string}
```

**Request**

- `to` is the SwapChain or CoreChain address the asset is sent to.
- `amount` is the amount of the asset to send.
- `baseFee` is the base fee that should be used when creating the transaction. If ommitted, a suggested fee will be used.
- `username` is the user that controls the address that the transaction will be sent from.
- `password` is `username`‘s password.

**Response**

- `txID` is the txid of the completed ExportTx.

#### Example Call

```sh
curl -X POST --data '{
    "jsonrpc":"2.0",
    "id"     :1,
    "method" :"axc.exportAXC",
    "params" :{
        "from": ["0x8db97C7cEcE249c2b98bDC0226Cc4C2A57BF52FC"],
        "to":"Swap-test1qj5nfrtqh40zuwxhz3m7wxwg6v23nzxsv8yurs",
        "amount": 500,
        "changeAddr": "0x8db97C7cEcE249c2b98bDC0226Cc4C2A57BF52FC",
        "username":"myUsername",
        "password":"myPassword"
    }
}' -H 'content-type:application/json;' http://127.0.0.1:9650/ext/bc/AX/axc
```

#### Example Response

```json
{
  "jsonrpc": "2.0",
  "result": {
    "txID": "2ffcxdkiKXXA4JdyRoS38dd7zoThkapNPeZuGPmmLBbiuBBHDa"
  },
  "id": 1
}
```

### axc.exportKey

:::warning
Not recommended for use on Mainnet. See warning notice in [Keystore API](./keystore).
:::

Get the private key that controls a given address. The returned private key can be added to a user with `axc.importKey`.

#### Signature

```go
axc.exportKey({
    username: string,
    password:string,
    address:string
}) -> {privateKey: string}
```

**Request**

- `username` must control `address`.
- `address` is the address that you want to export the corresponding private key to. It should be in hex format.

**Response**

- `privateKey` is the CB58 endcoded string representation of the private key that controls `address`. It has a `PrivateKey-` prefix and can be used to import a key via `axc.importKey`.
- `privateKeyHex` is the hex string representation of the private key that controls `address`. It can be used to import an account into MetaMask.

#### Example Call

```sh
curl -X POST --data '{
    "jsonrpc":"2.0",
    "id"     :1,
    "method" :"axc.exportKey",
    "params" :{
        "username" :"myUsername",
        "password":"myPassword",
        "address": "0xc876DF0F099b3eb32cBB78820d39F5813f73E18C"
    }
}' -H 'content-type:application/json;' http://127.0.0.1:9650/ext/bc/AX/axc
```

#### Example Response

```json
{
    "jsonrpc": "2.0",
    "result": {
        "privateKey": "PrivateKey-2o2uPgTSf3aR5nW6yLHjBEAiatAFKEhApvYzsjvAJKRXVWCYkE",
        "privateKeyHex": "0xec381fb8d32168be4cf7f8d4ce9d8ca892d77ba574264f3665ad5edb89710157"
    },
    "id": 1
}}
```

### axc.getUTXOs

Gets the UTXOs that reference a given address.

#### **Signature**

```sh
axc.getUTXOs(
    {
        addresses: string,
        limit: int, //optional
        startIndex: { //optional
            address: string,
            utxo: string
        },
        sourceChain: string,
        encoding: string, //optional
    },
) ->
{
    numFetched: int,
    utxos: []string,
    endIndex: {
        address: string,
        utxo: string
    }
}
```

- `utxos` is a list of UTXOs such that each UTXO references at least one address in `addresses`.
- At most `limit` UTXOs are returned. If `limit` is omitted or greater than 1024, it is set to 1024.
- This method supports pagination. `endIndex` denotes the last UTXO returned. To get the next set of UTXOs, use the value of `endIndex` as `startIndex` in the next call.
- If `startIndex` is omitted, it will fetch all UTXOs up to `limit`.
- When using pagination (ie when `startIndex` is provided), UTXOs are not guaranteed to be unique across multiple calls. That is, a UTXO may appear in the result of the first call, and then again in the second call.
- When using pagination, consistency is not guaranteed across multiple calls. That is, the UTXO set of the addresses may have changed between calls.
- `encoding` sets the format for the returned UTXOs. Can only be `hex` when a value is provided.

#### **Example**

Suppose we want all UTXOs that reference at least one of `C-axc18jma8ppw3nhx5r4ap8clazz0dps7rv5ukulre5`.

```sh
curl -X POST --data '{
    "jsonrpc":"2.0",
    "id"     :1,
    "method" :"axc.getUTXOs",
    "params" :{
        "addresses":["C-axc18jma8ppw3nhx5r4ap8clazz0dps7rv5ukulre5"],
        "sourceChain": "AX",
        "startIndex": {
            "address": "C-axc18jma8ppw3nhx5r4ap8clazz0dps7rv5ukulre5",
            "utxo": "22RXW7SWjBrrxu2vzDkd8uza7fuEmNpgbj58CxBob9UbP37HSB"
        },
        "encoding": "hex"
    }
}' -H 'content-type:application/json;' http://127.0.0.1:9650/ext/bc/AX/axc
```

This gives the response:

```json
{
  "jsonrpc": "2.0",
  "result": {
    "numFetched": "3",
    "utxos": [
      "0x0000a799e7448acf74ca9223159a04f93b948f99cf28509f908839532b2f85baffc300000001dbcf890f77f49b96857648b72b77f9f82937f28a68704af05da0dc12ba53f2db00000007000003a352a38240000000000000000000000001000000013cb7d3842e8cee6a0ebd09f1fe884f6861e1b29c22d23171",
      "0x00006385c683d43bdbe754c224be36c5004ea7ce49c0849cadeaea6af93dae18cc7700000001dbcf890f77f49b96857648b72b77f9f82937f28a68704af05da0dc12ba53f2db00000007000003a352a38240000000000000000000000001000000013cb7d3842e8cee6a0ebd09f1fe884f6861e1b29cb81cc877",
      "0x000038137283c94582351b86c3e90808312636769e3f5c14fbf1152d6634f770695c00000001dbcf890f77f49b96857648b72b77f9f82937f28a68704af05da0dc12ba53f2db00000007000003a352a38240000000000000000000000001000000013cb7d3842e8cee6a0ebd09f1fe884f6861e1b29c7412490e"
    ],
    "endIndex": {
      "address": "C-axc18jma8ppw3nhx5r4ap8clazz0dps7rv5ukulre5",
      "utxo": "0x9333ef8a05f26acf2d8766f94723f749870fa2ca80c19c33cc945d79013d7c50fd023beb"
    },
    "encoding": "hex"
  },
  "id": 1
}
```

### axc.import

:::warning
Not recommended for use on Mainnet. See warning notice in [Keystore API](./keystore).
:::

#### Signature

```go
axc.import({
    to: string,
    sourceChain: string,
    baseFee: int, // optional
    username: string,
    password:string,
}) -> {txID: string}
```

**Request**

- `to` is the address the asset is sent to. This must be the same as the `to` argument in the corresponding call to the SwapChain's or CoreChain's `export`.
- `sourceChain` is the ID or alias of the chain the asset is being imported from: `"Swap"` or `"AX"` or `"Core"`.
- `baseFee` is the base fee that should be used when creating the transaction. If omitted, a suggested fee will be used.
- `username` is the user that controls the address that the transaction will be sent from.
- `password` is `username`‘s password.

**Response**

- `txID` is the ID of the completed ImportTx.

#### Example Call

```sh
curl -X POST --data '{
    "jsonrpc":"2.0",
    "id"     :1,
    "method" :"axc.import",
    "params" :{
        "to":"0x4b879aff6b3d24352Ac1985c1F45BA4c3493A398",
        "sourceChain":"AX",
        "username":"myUsername",
        "password":"myPassword"
    }
}' -H 'content-type:application/json;' http://127.0.0.1:9650/ext/bc/AX/axc
```

#### Example Response

```json
{
  "jsonrpc": "2.0",
  "result": {
    "txID": "6bJq9dbqhiQvoshT3uSUbg9oB24n7Ei6MLnxvrdmao78oHR9t"
  },
  "id": 1
}
```

### axc.importAXC

:::warning
Not recommended for use on Mainnet. See warning notice in [Keystore API](./keystore).
:::

**DEPRECATED—instead use** [**axc.import**](c-chain.md#axcimport)


#### Signature

```go
axc.importAXC({
    to: string,
    sourceChain: string,
    baseFee: int, // optional
    username: string,
    password:string,
}) -> {txID: string}
```

**Request**

- `to` is the address the AXC is sent to. It should be in hex format.
- `sourceChain` is the ID or alias of the chain the AXC is being imported from. `"Swap"` or `"AX"` or `"Core"`.
- `baseFee` is the base fee that should be used when creating the transaction. If omitted, a suggested fee will be used.
- `username` is the user that controls the address that the transaction will be sent from.
- `password` is `username`‘s password.

**Response**

- `txID` is the ID of the completed ImportTx.

#### Example Call

```sh
curl -X POST --data '{
    "jsonrpc":"2.0",
    "id"     :1,
    "method" :"axc.importAXC",
    "params" :{
        "to":"0x4b879aff6b3d24352Ac1985c1F45BA4c3493A398",
        "sourceChain":"AX",
        "username":"myUsername",
        "password":"myPassword"
    }
}' -H 'content-type:application/json;' http://127.0.0.1:9650/ext/bc/AX/axc
```

#### Example Response

```json
{
  "jsonrpc": "2.0",
  "result": {
    "txID": "LWTRsiKnEUJC58y8ezAk6hhzmSMUCtemLvm3LZFw8fxDQpns3"
  },
  "id": 1
}
```

### axc.importKey

:::warning
Not recommended for use on Mainnet. See warning notice in [Keystore API](./keystore).
:::

Give a user control over an address by providing the private key that controls the address.

#### Signature

```go
axc.importKey({
    username: string,
    password:string,
    privateKey:string
}) -> {address: string}
```

**Request**

- Add `privateKey` to `username`'s set of private keys.

**Response**

- `address` is the address that `username` now controls with the private key. It will be in hex format.

#### Example Call

```sh
curl -X POST --data '{
    "jsonrpc":"2.0",
    "id"     :1,
    "method" :"axc.importKey",
    "params" :{
        "username" :"myUsername",
        "password":"myPassword",
        "privateKey":"PrivateKey-2o2uPgTSf3aR5nW6yLHjBEAiatAFKEhApvYzsjvAJKRXVWCYkE"
    }
}' -H 'content-type:application/json;' http://127.0.0.1:9650/ext/bc/AX/axc
```

#### Example Response

```json
{
  "jsonrpc": "2.0",
  "result": {
    "address": "0xc876DF0F099b3eb32cBB78820d39F5813f73E18C"
  },
  "id": 1
}
```

### axc.issueTx

Send a signed transaction to the network. `encoding` specifies the format of the signed transaction. Can only be `hex` when a value is provided.

#### **Signature**

```sh
axc.issueTx({
    tx: string,
    encoding: string, //optional
}) -> {
    txID: string
}
```

#### **Example Call**

```sh
curl -X POST --data '{
    "jsonrpc":"2.0",
    "id"     : 1,
    "method" :"axc.issueTx",
    "params" :{
        "tx":"0x00000009de31b4d8b22991d51aa6aa1fc733f23a851a8c9400000000000186a0000000005f041280000000005f9ca900000030390000000000000001fceda8f90fcb5d30614b99d79fc4baa29307762668f16eb0259a57c2d3b78c875c86ec2045792d4df2d926c40f829196e0bb97ee697af71f5b0a966dabff749634c8b729855e937715b0e44303fd1014daedc752006011b730",
        "encoding": "hex"

    }
}' -H 'content-type:application/json;' http://127.0.0.1:9650/ext/bc/AX/axc
```

#### **Example Response**

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "txID": "NUPLwbt2hsYxpQg4H2o451hmTWQ4JZx2zMzM4SinwtHgAdX1JLPHXvWSXEnpecStLj"
  }
}
```

### axc.getAtomicTxStatus

Get the status of an atomic transaction sent to the network.

#### **Signature**

```sh
axc.getAtomicTxStatus({txID: string}) -> {
  status: string,
  blockHeight: string // returned when status is Accepted
}
```

`status` is one of:

- `Accepted`: The transaction is (or will be) accepted by every node. Check the `blockHeight` property
- `Processing`: The transaction is being voted on by this node
- `Dropped`: The transaction was dropped by this node because it thought the transaction invalid
- `Unknown`: The transaction hasn’t been seen by this node

#### **Example Call**

```sh
curl -X POST --data '{
    "jsonrpc":"2.0",
    "id"     :1,
    "method" :"axc.getAtomicTxStatus",
    "params" :{
        "txID":"2QouvFWUbjuySRxeX5xMbNCuAaKWfbk5FeEa2JmoF85RKLk2dD"
    }
}' -H 'content-type:application/json;' http://127.0.0.1:9650/ext/bc/AX/axc
```

#### **Example Response**

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "status": "Accepted",
    "blockHeight": "1"
  }
}
```

## Admin API

This API can be used for debugging. Note that the Admin API is disabled by default. To run a node with the Admin API enabled, use [AX Chain config flag `--coreth-admin-api-enabled:true`](../../../nodes/maintain/chain-config-flags.md#coreth-admin-api-enabled-boolean) .

### Endpoint

```text
/ext/bc/AX/admin
```

### Methods

#### admin.setLogLevel

Sets the log level of the AX Chain.

#### **Signature**

```text
admin.setLogLevel({level:string}) -> {}
```

- `level` is the log level to be set.

#### **Example Call**

```bash
curl -X POST --data '{
    "jsonrpc":"2.0",
    "id"     :1,
    "method" :"admin.setLogLevel",
    "params": {
        "level":"info"
    }
}' -H 'content-type:application/json;' http://127.0.0.1:9650/ext/bc/AX/admin
```

#### **Example Response**

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {}
}
```

#### admin.startCPUProfiler

Starts a CPU profile.

#### **Signature**

```text
admin.startCPUProfiler() -> {}
```

#### **Example Call**

```bash
curl -X POST --data '{
    "jsonrpc":"2.0",
    "id"     :1,
    "method" :"admin.startCPUProfiler",
    "params": {}
}' -H 'content-type:application/json;' http://127.0.0.1:9650/ext/bc/AX/admin
```

#### **Example Response**

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {}
}
```

#### admin.stopCPUProfiler

Stops and writes a CPU profile.

#### **Signature**

```text
admin.stopCPUProfiler() -> {}
```

#### **Example Call**

```bash
curl -X POST --data '{
    "jsonrpc":"2.0",
    "id"     :1,
    "method" :"admin.stopCPUProfiler",
    "params": {}
}' -H 'content-type:application/json;' http://127.0.0.1:9650/ext/bc/AX/admin
```

#### **Example Response**

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {}
}
```

#### admin.memoryProfile

Runs and writes a memory profile.

#### **Signature**

```text
admin.memoryProfile() -> {}
```

#### **Example Call**

```bash
curl -X POST --data '{
    "jsonrpc":"2.0",
    "id"     :1,
    "method" :"admin.memoryProfile",
    "params": {}
}' -H 'content-type:application/json;' http://127.0.0.1:9650/ext/bc/AX/admin
```

#### **Example Response**

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {}
}
```

#### admin.lockProfile

Runs a mutex profile writing to the `coreth_performance_c` directory.

#### **Signature**

```text
admin.lockProfile() -> {}
```

#### **Example Call**

```bash
curl -X POST --data '{
    "jsonrpc":"2.0",
    "id"     :1,
    "method" :"admin.lockProfile",
    "params": {}
}' -H 'content-type:application/json;' http://127.0.0.1:9650/ext/bc/AX/admin
```

#### **Example Response**

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {}
}
```

