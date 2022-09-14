---
id: Transaction-Structure
title: Transaction Structure
sidebar_label: Transaction Structure
slug: ../Transaction-Structure
---

<!-- no updates -->

This page will discuss the transaction format in AXIA network and how to create, sign, and broadcast
transactions. Like the other pages in this guide, this page demonstrates some of the available
tools.

## Transaction Format

AXIA network has some basic transaction information that is common to all transactions.

- Address: The SS58-encoded address of the sending account.
- Block Hash: The hash of the block.
- Block Number: The number of the block.
- Genesis Hash: The genesis hash of the chain.
- Metadata: The [SCALE-encoded](https://cocoapods.org/pods/ScaleCodec) metadata for the runtime when submitted.
- Nonce: The nonce for this transaction.\*
- Spec Version: The current spec version for the runtime.
- Transaction Version: The current version for transaction format.
- Optional fee (tip) : The [optional fee](https://wiki.axiacoin.network/docs/learn-consensus#fees-on-the-axia-network-corechain-are-calculated-based-on-the-following) to increase transaction priority.
- Era Period: Optional, the number of blocks after a block hash for which a transaction is valid.
  If zero, the transaction is vaild forever.

\*The nonce queried from the System module does not account for pending transactions. You must track
and increment the nonce manually if you want to submit multiple valid transactions at the same time.

Each transaction will have its own (or no) parameters to add. For example, the transferKeepAlive
function from the Balances pallet will take:

- dest: Destination address
- value: Number of tokens ([compact encoding](https://www.npmjs.com/package/compact-encoding))

Once you have all the necessary information, you will need to:

1. Construct an unsigned transaction.
1. Create a signing payload.
1. Sign the payload.
1. Serialize the signed payload into a transaction.
1. Submit the serialized transaction.

AXIA provides the following tools to help perform these steps.

## AXscan Tools

[AXscan Tools](https://github.com/AxiaCoin/Axia-Network-tools) contains a set of javascript tools for
interacting with a Axlib client, including one called "Signer CLI" to create, sign, and
broadcast transactions.

This example will use the signer submit command, which will create and submit the transaction. The
signer sendOffline command has the exact same API, but will not broadcast the transaction.
submit and sendOffline must be connected to a node to fetch the current metadata and construct a
valid transaction. Their API has the format:

```bash
yarn run:signer <submit|sendOffline> --account <from-account-ss58> --ws <endpoint> <module.method> [param1] [...] [paramX]
```

Signing:

```bash
yarn run:signer sign --account <from-account-ss58> --seed <seed> --type <sr25519|ed25519> <payload>
```

For example, let's send 0.5 AXC from 121X5bEgTZcGQx5NZjwuTjqqKoiG8B2wEAvrUFjuw24ZGZf2 to
15vrtLsCQFG3qRYUcaEeeEih4JwepocNJHkpsrqojqnZPc2y.

```bash
yarn run:signer submit --account 121X5bEgTZcGQx5NZjwuTjqqKoiG8B2wEAvrUFjuw24ZGZf2 --ws ws://127.0.0.1:9944 balances.transferKeepAlive 15vrtLsCQFG3qRYUcaEeeEih4JwepocNJHkpsrqojqnZPc2y 5000000000
```

This will return a payload to sign and an input waiting for a signature. Take this payload and use
your normal signing environment (e.g. airgapped machine, VM, etc.). Sign the payload:

```bash
yarn run:signer sign --account 121X5bEgTZcGQx5NZjwuTjqqKoiG8B2wEAvrUFjuw24ZGZf2 --seed "pulp gaze fuel ... mercy inherit equal" --type sr25519 0x040300ff4a83f1...a8239139ff3ff7c3f6
```

Save the output and bring it to the machine that you will broadcast from, enter it into submit's
signature field, and send the transaction (or just return the serialized transaction if using
sendOffline).

## AXIA Transaction wrapper (txwrapper)

If you do not want to use the CLI for signing operations, AXIA provides an SDK called [txwrapper-axia-core](https://www.npmjs.com/package/@axia-core/txwrapper-axia-core) to generate and sign transactions 
offline.

**Import a private key**

```ts
import { importPrivateKey } from '@axia-core/txwrapper-axia-core';

const keypair = importPrivateKey(“pulp gaze fuel ... mercy inherit equal”);
```

**Derive an address from a public key**

```ts
import { deriveAddress } from '@axia-core/txwrapper-axia-core';

// Public key, can be either hex string, or Uint8Array
const publicKey = “0x2ca17d26ca376087dc30ed52deb74bf0f64aca96fe78b05ec3e720a72adb1235”;
const address = deriveAddress(publicKey);
```

**Construct a transaction offline**

```ts
import { methods } from "@axia-core/txwrapper-axia-core";

const unsigned = methods.balances.transferKeepAlive(
  {
    dest: "15vrtLsCQFG3qRYUcaEeeEih4JwepocNJHkpsrqojqnZPc2y",
    value: 5000000000,
  },
  {
    address: "121X5bEgTZcGQx5NZjwuTjqqKoiG8B2wEAvrUFjuw24ZGZf2",
    blockHash:
      "0x1fc7493f3c1e9ac758a183839906475f8363aafb1b1d3e910fe16fab4ae1b582",
    blockNumber: 4302222,
    genesisHash:
      "0xe3777fa922cafbff200cadeaea1a76bd7898ad5b89f7848999058b50e715f636",
    metadataRpc, // must import from client RPC call state_getMetadata
    nonce: 2,
    specVersion: 1019,
    tip: 0,      // The optional fee to increase transaction priority.
    eraPeriod: 64, // number of blocks from block hash that transaction is valid
    transactionVersion: 1,
  },
  {
    metadataRpc,
    registry, // Type registry
  }
);
```

**Construct a signing payload**

```ts
import { methods, createSigningPayload } from '@axia-core/txwrapper-axia-core';

// See "Construct a transaction offline" for "{...}"
const unsigned = methods.balances.transferKeepAlive({...}, {...}, {...});
const signingPayload = createSigningPayload(unsigned, { registry });
```

**Serialize a signed transaction**

```ts
import { createSignedTx } from "@axia-core/txwrapper-axia-core";

// Example code, replace `signWithAlice` with actual remote signer.
const signature = await signWithAlice(signingPayload);
const signedTx = createSignedTx(unsigned, signature, { metadataRpc, registry });
```

**Decode payload types**

You may want to decode payloads to verify their contents prior to submission.

```ts
import { decode } from "@axia-core/txwrapper-axia-core";

// Decode an unsigned tx
const txInfo = decode(unsigned, { metadataRpc, registry });

// Decode a signing payload
const txInfo = decode(signingPayload, { metadataRpc, registry });

// Decode a signed tx
const txInfo = decode(signedTx, { metadataRpc, registry });
```

**Check a transaction's hash**

```ts
import { getTxHash } from ‘@axia-core/txwrapper-axia-core’;
const txHash = getTxHash(signedTx);
```

## Submitting a Signed Payload

There are several ways to submit a signed payload:

1. Signer CLI (yarn run:signer submit --tx signed-transaction --ws endpoint)
2. RPC with author_submitExtrinsic or
   author_submitAndWatchExtrinsic, the latter of which will subscribe you to events to be notified
   as a transaction gets validated and included in the chain.


[AXIA Support](https://discord.gg/axianetwork) - Connect with our community of experts to learn or ask.
