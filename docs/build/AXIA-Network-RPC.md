---
id: AXIA-Network-RPC
title: AXIA Network RPC
sidebar_label: AXIA Network RPC
slug: ../AXIA-Network-RPC
---



### For all RPC methods:

```bash
$ curl -H "Content-Type: application/json" -d '{"id":1, "jsonrpc":"2.0", "method": "rpc_methods"}' https://rpc.test.axiacoin.network

{
  "jsonrpc": "2.0",
  "result": {
    "methods": [
      "account_nextIndex",
      "author_hasKey",
      "author_hasSessionKeys",
      "author_insertKey",
      "author_pendingExtrinsics",
      "author_removeExtrinsic",
      "author_rotateKeys",
      "author_submitAndWatchExtrinsic",
      "author_submitExtrinsic",
      "author_unwatchExtrinsic",
      "babe_epochAuthorship",
      "beefy_subscribeJustifications",
      "beefy_unsubscribeJustifications",
      "chain_getBlock",
      "chain_getBlockHash",
      "chain_getFinalisedHead",
      "chain_getFinalizedHead",
      "chain_getHead",
      "chain_getHeader",
      "chain_getRuntimeVersion",
      "chain_subscribeAllHeads",
      "chain_subscribeFinalisedHeads",
      "chain_subscribeFinalizedHeads",
      "chain_subscribeNewHead",
      "chain_subscribeNewHeads",
      "chain_subscribeRuntimeVersion",
      "chain_unsubscribeAllHeads",
      "chain_unsubscribeFinalisedHeads",
      "chain_unsubscribeFinalizedHeads",
      "chain_unsubscribeNewHead",
      "chain_unsubscribeNewHeads",
      "chain_unsubscribeRuntimeVersion",
      "childstate_getKeys",
      "childstate_getKeysPaged",
      "childstate_getKeysPagedAt",
      "childstate_getStorage",
      "childstate_getStorageEntries",
      "childstate_getStorageHash",
      "childstate_getStorageSize",
      "grandpa_proveFinality",
      "grandpa_roundState",
      "grandpa_subscribeJustifications",
      "grandpa_unsubscribeJustifications",
      "mmr_generateProof",
      "offchain_localStorageGet",
      "offchain_localStorageSet",
      "payment_queryFeeDetails",
      "payment_queryInfo",
      "state_call",
      "state_callAt",
      "state_getChildReadProof",
      "state_getKeys",
      "state_getKeysPaged",
      "state_getKeysPagedAt",
      "state_getMetadata",
      "state_getPairs",
      "state_getReadProof",
      "state_getRuntimeVersion",
      "state_getStorage",
      "state_getStorageAt",
      "state_getStorageHash",
      "state_getStorageHashAt",
      "state_getStorageSize",
      "state_getStorageSizeAt",
      "state_queryStorage",
      "state_queryStorageAt",
      "state_subscribeRuntimeVersion",
      "state_subscribeStorage",
      "state_traceBlock",
      "state_unsubscribeRuntimeVersion",
      "state_unsubscribeStorage",
      "subscribe_newHead",
      "sync_state_genSyncSpec",
      "system_accountNextIndex",
      "system_addLogFilter",
      "system_addReservedPeer",
      "system_chain",
      "system_chainType",
      "system_dryRun",
      "system_dryRunAt",
      "system_health",
      "system_localListenAddresses",
      "system_localPeerId",
      "system_name",
      "system_nodeRoles",
      "system_peers",
      "system_properties",
      "system_removeReservedPeer",
      "system_reservedPeers",
      "system_resetLogFilter",
      "system_syncState",
      "system_unstable_networkState",
      "system_version",
      "unsubscribe_newHead"
    ],
    "version": 1
  },
  "id": 1
}

```
### Adding Parameters in the call
You can also add parameters in the call, for example get a block by its hash value:

```bash
$ curl -H "Content-Type: application/json" -d '{"id":1, "jsonrpc":"2.0", "method": "chain_getBlock", "params":["0x8aab89e94c3c66cd767065e393a64ddc73d5a2423c1c599d567281d688031f2a"]}' https://rpc.test.axiacoin.network

{
  "jsonrpc": "2.0",
  "result": {
    "block": {
      "extrinsics": [
        "0x280403000b903ac08b7e01",
        "0x9904043600000000b1bae01cc6ecab1ddda6c79dfc2dca665394f83428afd769a5c7db2641d4acfff2d01b00c975e1b4697d743b7b07d4f802641c810f940c6a790a002bf617f23a1555a121b12164ba74d472f2027a9c199872b9983a43deca7a68ed36a3c25dadc562c5b9080642414245b5010302000000de6b5210000000003272ad97986b8607efe2345e1f98c27de0d8567cd6839bfff63f8a7d8004e75d9dba7a3b88de39d264a2526e6bf7e4af69a976f4ad0edbcb077aa0d34ea6580945a7255abd4c5fa79c594816a0632fc1ad89219e8e70a537c836f83868083609054241424501016a50e4430909e1b755023e57456460762970a600df5075a95fd8f90db23ade008447dbc1f77a017a4fe63043344026163d4322c21067af9545c9b6451fd35f86"
      ],
      "header": {
        "digest": {
          "logs": [
            "0x0642414245b5010300000000df6b5210000000005473dfcb76b0dfa3736ad221b148269235a60ba02a5748ac0b6ad100b2787243a7268994e948f5117c04475d22632b9624258965ebce2796eccdb4a08ca5bc0ad509b702d469b8b3ed7f9ab270d3145156d4c2f48ac3e7a2d313db5517e8e406",
            "0x05424142450101789f8e7942d664d7e6646609665b73a98bc24fb1cb2230b82e6d7aa275ec1a52f6f239134c9938a4cd33b84f7e32c3593c8c5427745604c90b4805ad704fa68e"
          ]
        },
        "extrinsicsRoot": "0x612252c41caa0d2b67816d755c2bdb0a0e0d311f2ec1ec31c3890894166f3047",
        "number": "0x6f43d",
        "parentHash": "0x100348498dc079b209096df2ffa4d0438780b812c3f9fab547d4406a28d85017",
        "stateRoot": "0x59b12f8b288f83f43facd6c8e0be55550c8dd1e976e78351441359d6e139c2cd"
      }
    },
    "justifications": null
  },
  "id": 1
}
```


 [AXIA Support](https://discord.gg/axianetwork) - Connect with our community of experts to learn or ask.
