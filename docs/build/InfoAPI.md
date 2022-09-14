---
id: InfoAPI
title: Info API
sidebar_label: Info API
slug: ../InfoAPI
---

This API can be used to access basic information about the node.


## Format

This API uses the json 2.0 RPC format.s

## Endpoint

```text
/ext/info
```

## API Methods

### info.getBlockchainID

Given a blockchain’s alias, get its ID.

#### **Signature**

```sh
info.getBlockchainID({alias:string}) -> {blockchainID:string}
```

#### **Example Call**

```
curl -X POST --data '{
    "jsonrpc":"2.0",
    "id"     :1,
    "method" :"info.getBlockchainID",
    "params": {
        "alias":"Swap"
    }
}' -H 'content-type:application/json;' https://rpc.testnet.axiacoin.network/ext/info
```

#### **Example Response**

```
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "blockchainID": "D4jukW8bnxDKxSS2ZfocNE5WfB37pvNjgG5qii5cMhyTV8Ymz"
  }
}
```

### info.getNetworkID

Get the ID of the network this node is participating in.

#### **Signature**

```sh
info.getNetworkID() -> {networkID:int}
```

#### **Example Call**

```
curl -X POST --data '{
    "jsonrpc":"2.0",
    "id"     :1,
    "method" :"info.getNetworkID"
}' -H 'content-type:application/json;' https://rpc.testnet.axiacoin.network/ext/info
```

#### **Example Response**

```
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "networkID": "5"
  }
}
```

### info.getNetworkName

Get the name of the network this node is participating in.

#### **Signature**

```sh
info.getNetworkName() -> {networkName:string}
```

#### **Example Call**

```
curl -X POST --data '{
    "jsonrpc":"2.0",
    "id"     :1,
    "method" :"info.getNetworkName"
}' -H 'content-type:application/json;' https://rpc.testnet.axiacoin.network/ext/info
```

#### **Example Response**

```
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "networkName": "test"
  }
}
```

### info.getNodeID

Get the ID of this node.

#### **Signature**

```sh
info.getNodeID() -> {nodeID: string}
```

#### **Example Call**

```
curl -X POST --data '{
    "jsonrpc":"2.0",
    "id"     :1,
    "method" :"info.getNodeID"
}' -H 'content-type:application/json;' https://rpc.testnet.axiacoin.network/ext/info
```

#### **Example Response**

```
{
  "jsonrpc": "2.0",
  "result": {
    "nodeID": "NodeID-3qztCoJtH2ZJmfo5Gz5TdQu9mte6tV55D"
  },
  "id": 1
}
```

### info.getNodeIP

Get the IP of this node.

#### **Signature**

```
info.getNodeIP() -> {ip: string}
```

#### **Example Call**

```
curl -X POST --data '{
    "jsonrpc":"2.0",
    "id"     :1,
    "method" :"info.getNodeIP"
}' -H 'content-type:application/json;' https://rpc.testnet.axiacoin.network/ext/info
```

#### **Example Response**

```
{
  "jsonrpc": "2.0",
  "result": {
    "ip": "54.205.204.194:9651"
  },
  "id": 1
}
```

### info.getNodeVersion

Get the version of this node.

#### **Signature**

```
info.getNodeVersion() -> {
    version: string,
    databaseVersion: string,
    gitCommit: string,
    vmVersions: map[string]string,
}
```

where:

- **version** is this node's version
- **databaseVersion** is the version of the database this node is using
- **gitCommit** is the Git commit that this node was built from
- **vmVersions** is map where each key/value pair is the name of a VM, and the version of that VM this node runs

#### **Example Call**

```
curl -X POST --data '{
    "jsonrpc":"2.0",
    "id"     :1,
    "method" :"info.getNodeVersion"
}' -H 'content-type:application/json;' https://rpc.testnet.axiacoin.network/ext/info
```

#### **Example Response**

```
{
  "jsonrpc": "2.0",
  "result": {
    "version": "axia/1.7.10",
    "databaseVersion": "v1.4.5",
    "gitCommit": "dc52706cf01de811824a612a35aee296a00badfa",
    "vmVersions": {
      "avm": "v1.7.10",
      "core":"v1.7.10",
      "evm":"v0.8.9"
    }
  },
  "id": 1
}
```

### info.getVMs

Get the virtual machines installed on this node.

#### **Signature**

```
info.getVMs() -> {
    vms: map[string][]string
}
```

#### **Example Call**

```
curl -X POST --data '{
    "jsonrpc":"2.0",
    "id"     :1,
    "method" :"info.getVMs",
    "params" :{}
}' -H 'content-type:application/json;' https://rpc.testnet.axiacoin.network/ext/info
```

#### **Example Response**

```
{
  "jsonrpc": "2.0",
  "result": {
    "vms": {
      "jvYyfQTxGMJLuGWa55kdP2p2zSUYsQ5Raupu4TW34ZAUBAbtq": ["avm"],
      "mgj786NP7uDwBCcq6YwThhaN8FLyybkCa4zBWTQbNgmK6k9A6": ["evm"],
      "qd2U4HDWUvMrVUeTcCHp6xH3Qpnn1XbU5MDdnBoiifFqvgXwT": ["nftfx"],
      "rWhpuQPF1kb72esV2momhMuTYGkEb1oL29pt2EBXWmSy4kxnT": ["core"],
      "rXJsCSEYXg2TehWxCEEGj6JU2PWKTkd6cBdNLjoe2SpsKD9cy": ["propertyfx"],
      "spdxUxVJQbX85MGxMHbKw1sHxMnSqJ3QBzDyDYEP3h6TLuxqQ": ["secp256k1fx"]
    }
  },
  "id": 1
}
```

### info.isBootstrapped

Check whether a given chain is done bootstrapping

#### **Signature**

```sh
info.isBootstrapped({chain: string}) -> {isBootstrapped: bool}
```

**chain** is the ID or alias of a chain.

#### **Example Call**

```
curl -X POST --data '{
    "jsonrpc":"2.0",
    "id"     :1,
    "method" :"info.isBootstrapped",
    "params": {
        "chain":"Swap"
    }
}' -H 'content-type:application/json;' https://rpc.testnet.axiacoin.network/ext/info
```

#### **Example Response**

```
{
  "jsonrpc": "2.0",
  "result": {
    "isBootstrapped": true
  },
  "id": 1
}
```

### info.peers

Get a description of peer connections.

#### **Signature**

```sh
info.peers({
    nodeIDs: string[] // optional
}) ->
{
    numPeers: int,
    peers:[]{
        ip: string,
        publicIP: string,
        nodeID: string,
        version: string,
        lastSent: string,
        lastReceived: string,
        benched: string[],
        observedUptime: int,
    }
}
```

- **nodeIDs** is an optional parameter to specify what nodeID's descriptions should be returned. If this parameter is left empty, descriptions for all active connections will be returned. If the node is not connected to a specified nodeID, it will be omitted from the response.
- **ip** is the remote IP of the peer.
- **publicIP** is the public IP of the peer.
- **nodeID** is the prefixed Node ID of the peer.
- **version** shows which version the peer runs on.
- **lastSent** is the timestamp of last message sent to the peer.
- **lastReceived** is the timestamp of last message received from the peer.
- **benched** shows chain IDs that the peer is being benched.
- **observedUptime** is the uptime of this node observed by the peer.

#### **Example Call**

```
curl -X POST --data '{
    "jsonrpc":"2.0",
    "id"     :1,
    "method" :"info.peers",
    "params": {
        "nodeIDs": []
    }
}' -H 'content-type:application/json;' https://rpc.testnet.axiacoin.network/ext/info
```

#### **Example Response**

```
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "numPeers": 3,
    "peers": [
      {
        "ip": "206.189.137.87:9651",
        "publicIP": "206.189.137.87:9651",
        "nodeID": "NodeID-8PYXX47kqLDe2wD4oPbvRRchcnSzMA4J4",
        "version": "avalanche/0.5.0",
        "lastSent": "2020-06-01T15:23:02Z",
        "lastReceived": "2020-06-01T15:22:57Z",
        "benched": [],
        "observedUptime": "99"
      },
      {
        "ip": "158.255.67.151:9651",
        "publicIP": "158.255.67.151:9651",
        "nodeID": "NodeID-C14fr1n8EYNKyDfYixJ3rxSAVqTY3a8BP",
        "version": "avalanche/0.5.0",
        "lastSent": "2020-06-01T15:23:02Z",
        "lastReceived": "2020-06-01T15:22:34Z",
        "benched": [],
        "observedUptime": "75"
      },
      {
        "ip": "83.42.13.44:9651",
        "publicIP": "83.42.13.44:9651",
        "nodeID": "NodeID-LPbcSMGJ4yocxYxvS2kBJ6umWeeFbctYZ",
        "version": "avalanche/0.5.0",
        "lastSent": "2020-06-01T15:23:02Z",
        "lastReceived": "2020-06-01T15:22:55Z",
        "benched": [],
        "observedUptime": "95"
      }
    ]
  }
}
```

### info.getTxFee

Get the fees of the network.

#### **Signature**

```sh
info.getTxFee() ->
{
    creationTxFee: uint64,
    txFee: uint64
}
```

- **creationTxFee** is the fee for creating assets on the network.
- **txFee** is the fee for making transactions on the network.

#### **Example Call**

```
curl -X POST --data '{
    "jsonrpc":"2.0",
    "id"     :1,
    "method" :"info.getTxFee"
}' -H 'content-type:application/json;' https://rpc.testnet.axiacoin.network/ext/info
```

#### **Example Response**

```
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "txFee":"1000000",
    "creationTxFee":"10000000",
    "createAssetTxFee":"10000000",
    "createAllychainTxFee":"1000000000",
    "createBlockchainTxFee":"1000000000" 
  }
}
```

### info.uptime

Returns the network's observed uptime of this node.

#### **Signature**

```sh
info.uptime() ->
{
    rewardingStakePercentage: float64,
    weightedAveragePercentage: float64
}
```

- **rewardingStakePercentage** is the percent of stake which thinks this node is above the uptime requirement.
- **weightedAveragePercentage** is the stake-weighted average of all observed uptimes for this node.

#### **Example Call**

```
curl -X POST --data '{
    "jsonrpc":"2.0",
    "id"     :1,
    "method" :"info.uptime"
}' -H 'content-type:application/json;' https://rpc.testnet.axiacoin.network/ext/info
```

#### **Example Response**

```
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "rewardingStakePercentage": "100.0000",
    "weightedAveragePercentage": "99.1905"
  }
}
```

 [AXIA Support](https://discord.gg/axianetwork) - Connect with our community of experts to learn or ask.
