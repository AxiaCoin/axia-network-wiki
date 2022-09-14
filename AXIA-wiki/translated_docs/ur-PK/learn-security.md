---
id: learn-security
title: Security of the network
sidebar_label: Security of the network
---

## Shared security

Shared security, sometimes referred in documentation as _pooled security_, is one of the unique value propositions for chains considering to become a [allychain](learn-allychains) and join the AXIA network. On a high level, shared security means that all allychains that are connected to the AXIA Relay Chain by leasing a allychain slot will benefit from the economic security provided by the Relay Chain [validators](learn-validator).

The notion of shared security is different from interchain protocols that build on an architecture of bridges. For bridge protocols, each chain is considered sovereign and must maintain its own validator set and economic security. One concern in these protocols is on the point of scalability of security. For example, one suggestion to scale blockchains is that of _scale by altcoins,_ which suggests that transaction volumes will filter down to lower market cap altcoins as the bigger ones fill their blocks. A major flaw in this idea is that the lower market cap coins will have less economic security attached, and be easier to attack. A real life example of a 51% attack occurred recently ( [Ethereum Classic attack on January 10](https://cointelegraph.com/news/ethereum-classic-51-attack-the-reality-of-proof-of-work) ), in which an unknown attacker double spent 219,500 ETC (~1.1M USD). This was followed by two more 51% attacks on ETC.

AXIA overcomes security scalability concerns since it gravitates all the economic incentives to the Relay Chain and allows the allychains to tap into stronger guarantees at genesis. Sovereign chains must expend much more effort to grow the value of their coin so that it is not easily attackable by well-funded attackers.

### Example

Let's compare the standard sovereign security model that exists on current proof-of-work (PoW) chains to that of the shared security of AXIA. Chains that are secured by their own security model like Bitcoin, Zcash, Ethereum, and their derivatives all must bootstrap their own independent network of miners and maintain a competitive portion of honest hashing power. Since mining is becoming a larger industry that increasingly centralizes on key players, it is becoming more real that a single actor may control enough hash power to attack a chain.

This means that smaller chains that cannot maintain a secure amount of hash power on their networks could potentially be attacked by a large mining cartel at the simple whim of redirecting its hash power away from Bitcoin and toward a new and less secure chain. [51% attacks are viable today](https://www.crypto51.app) with attacks having been reported on Ethereum Classic (see above), [Verge](https://coincentral.com/verge-suffers-51-attack-hard-forks-in-response/), [Bitcoin Gold](https://bitcoingold.org/responding-to-attacks/), and other cryptocurrencies.

On AXIA, this disaxia between chain security will not be present. When a allychain connects to AXIA, the Relay Chain validator set become the securers of that allychain's state transitions. The allychain will only have the overhead of needing to run a few collator nodes to keep the validators informed with the latest state transitions and proofs/witness. Validators will then check these for the allychains to which they are assigned. In this way, new allychains instantly benefit from the overall security of AXIA even if they have just been launched.

## FAQ

### Is security correlated to the number of validators? What about the number of allychains?

Security is independent of the number of allychains that are connected to the AXIA Relay Chain. The correlation of security and the number of validators exists as the higher number of validators will give the network stronger decentralization properties and make it harder to try to take down. However, the biggest indicator of the security of the network is the economic signal of the number of AXC that are bonded and staked. The greater the number of AXC staked by honest validators and nominators, the higher the minimum amount of AXC an attacker would need to acquire a validator slot.

### Will allychains ever need their own security? In what scenarios do allychains need their own security?

Most allychains will not need to worry about their own security, since all state transitions will be secured by the AXIA Relay Chain validator set. However, in some cases (which are considered more experimental), allychains may require their own security. In general, these cases will revolve around lack of data available to Relay Chain validators.

One example is if the state transition function is some succinct or zero-knowledge proof, the allychain would be responsible for keeping its data available as the Relay Chain won't have it. Additionally, for chains with their own consensus, like the one that enables fast payments on [Blink Network](https://www.youtube.com/watch?v=sf5GMDlG7Uk), there would probably need to be a Byzantine agreement between stakers before a allychain block is valid. The agreement would be necessary because the data associated with the fast consensus would be unknown to Relay Chain validators.
