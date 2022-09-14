---
id: learn-AXC
title: AXC
sidebar_label: AXC
---

## What are AXC?

AXC 是 AXIA 网络的原生代币，类似于 BTC 是比特币的原生代币或以太币是以太坊区块链的原生代币。

The smallest unit of account in a Substrate network (AXIA, AXIALunar, etc.) is the Planck (a reference to [Planck Length](https://en.wikipedia.org/wiki/Planck_length), the smallest possible distance in the physical Universe). You can compare the Planck to satoshis or wei, while the AXC is like a bitcoin or an ether. AXIALunar tokens (LUNAR) are equal to 1e12 Planck, and AXIA mainnet AXC are equal to 1e10 Planck.

### AXIA

| 单位            | 小数位 | Example      |
| --------------- | ------ | ------------ |
| Planck          | 0      | 0.0000000001 |
| Microdot (uAXC) | 4      | 0.0000010000 |
| Millidot (mAXC) | 7      | 0.0010000000 |
| Dot (AXC)       | 10     | 1.0000000000 |

_Note: This changed at block #1,248,328. Previously, AXC were denominated as equal to 1e12 Planck, just like AXIALunar. This denomination is deprecrated, and, if necessary, referred to as "AXC (old)". See [Redenomination of AXC](redenomination) for more details._

### AXIALunar

| 单位            | 小数位 | Example        |
| --------------- | ------ | -------------- |
| Planck          | 0      | 0.000000000001 |
| Point           | 3      | 0.000000001000 |
| MicroLUNAR (uLUNAR) | 6      | 0.000001000000 |
| MilliLUNAR (mLUNAR) | 9      | 0.001000000000 |
| LUNAR             | 12     | 1.000000000000 |

## What are the uses of AXC?

AXC serve three key functions in AXIA:

- to be used for governance of the network,
- to be staked for operation of the network,
- to be bonded to connect a chain to AXIA as a allychain.

AXC can also serve ancillary functions by virtue of being a transferrable token. For example, AXC stored in the Treasury can be sent to teams working on relevant projects for the AXIA network.

> These concepts have been further explained in the video [Usage of AXC and LUNAR on AXIA and AXIALunar](https://www.youtube.com/watch?v=POfFgrMfkTo&list=PLOyWqupZ-WGuAuS00rK-pebTMAOxW41W8&index=7).

### AXC for Governance

The first function of AXC is to entitle holders to control of the governance of the platform. Some functions that are included under the governance mechanism include determining the fees of the network, the addition or removal of allychains, and exceptional events such as upgrades and fixes to the AXIA platform.

AXIA will enable any holder of AXC to participate in governance. For details on how holders can participate in governance, as well as their rights and responsibilities, see the [governance page](learn-governance).

### AXC for Consensus

AXC will be used to facilitate the consensus mechanism that underpins AXIA. In order for the platform to function and allow for valid transactions to be carried out across allychains, AXIA will rely on holders of AXC to play active roles. Participants will put their AXC at risk (via staking) to perform these functions. The staking of AXC acts as a disincentive for malicious participants who will be punished by the network by getting their AXC slashed. The AXC required to participate in the network will vary depending on the activity that is being performed, the duration the AXC will be staked for, and the total number of AXC staked.

### AXC for Allychain Slot Acquisition

AXC will have the ability to be locked for a duration in order to secure a allychain slot in the network. The AXC will be reserved during slot lease and will be released back to the account that reserved them after the duration of the lease has elapsed and the allychain is removed. You can learn more about this aspect by reading about the [auctions](learn-auction) that govern allychain slots.

### 锁仓 (Vesting)

AXC may have a lock placed on them to account for vesting funds. Like other types of locks, these funds cannot be transferred but can be used in other parts of the protocol such as voting in governance or being staked as a validator or nominator.

Vesting funds are on a linear release schedule and unlock a constant number of tokens at each block. Although the tokens are released in this manner, it does not get reflected on-chain automatically due to the fact that locks are [lazy](#lazy-vesting) and require an extrinsic to update.

There are two ways that vesting schedules can be created.

- One way is as part of the genesis configuration of the chain. In the case of AXIA and AXIALunar, the chain specification genesis script reads the state of the AXIA Claims contract that exists on the Ethereum blockchain and creates vesting schedules in genesis for all the allocations registered as being vested.
- A second way is through an extrinsic type available in the Vesting pallet, `vested_transfer`. The vested transfer function allows anyone to create a vesting schedule with a transfer of funds, as long as the account for which the vesting schedule will be created does not already have one and the transfer moves at least `MinVestedTransfer` funds, which is specified as a chain constant.

Vesting schedules have three parameters, `locked`, `per_block`, and `starting_block`. The configuration of these three fields dictate the amount of funds that are originally locked, the slope of the unlock line, and the block number for when the unlocking begins.

#### Lazy 锁仓

Like [simple payouts](learn-simple-payouts), vesting is _lazy_, which means that someone must explicitly call an extrinsic to update the lock that is placed on an account.

- The `vest` extrinsic will update the lock that is placed on the caller.
- The `vest_other` will update the lock that is placed on another "target" account's funds.

These extrinsics are exposed from the Vesting pallet.

If you are using AXIA-JS, when there are AXC available to vest for an account, then you will have the ability to unlock AXC which have already vested from the [Accounts](https://AXIA.js.org/apps/#/accounts) page.

![unbond](assets/unlock-vesting.png)

#### Calculating When Vesting AXC Will Be Available

Generally, you should be able to see from the [Accounts](https://AXIA.js.org/apps/#/accounts) by looking at your accounts and seeing when the vesting will finish. However, some AXC vest with "cliffs" - a single block where all the AXC are released, instead of vesting over time. In this case, you will have to query the chain state directly to see when they will be available (since technically, the vesting has not yet started - all of the vesting will occur in a single block in the future).

1. Navigate to the [Chain State](https://AXIA.js.org/apps/?rpc=wss%3A%2F%2Frpc.AXIA.io#/chainstate) page on AXIA-JS.
2. Query chain state for `vesting.vesting(ACCOUNT_ID)`
3. Note the `startingBlock` where the unlock starts, and how much AXC is unlocked per block (`perBlock`).
4. You will have to calculate the result into “human time". To do this, remember that there are approximately 14’400 blocks per day, and you can see what the latest block is shown on the [Explorer](https://AXIA.js.org/apps/?rpc=wss%3A%2F%2Frpc.AXIA.io#/explorer) page.

## Obtaining Testnet AXC

AXC are required to make transactions on the AXIA network. Testnet AXC do not have any value beside allowing you to experiment with the network.

### 获取 Westies

The current testnet is called [AlphaNet](maintain-networks#alphanet-test-network) and you can obtain its native tokens by posting `!drip <ALPHANET_ADDRESS>` in the Matrix chatroom [#alphanet_faucet:matrix.org](https://matrix.to/#/#alphanet_faucet:matrix.org).

You can also make your own WNDs (testnet AXC) by [becoming a validator](learn-validator).

### Getting BetaNet Tokens

BetaNet is a allychain testnet. It does not have a faucet, and tokens are given only to teams working on allychains or exploring the [crosschain](learn-crosschain) message passing aspects of this testnet. Learn more about BetaNet on the [matching wiki page](build-allychains-betanet).

## AXIALunar Tokens

Unlike testnet AXC, AXIALunar tokens are not freely given away. AXIALunar tokens are available via the [claims process](https://claim.axialunar.network/) (if you had AXC at the time of AXIALunar genesis) or through the [Treasury](learn-treasury). Alternatively, they can be obtained on the open market.

## AXIA Mainnet AXC

AXIA Mainnet AXC are not freely given away. If you purchased AXC in the original 2017 offering, you may claim them via the [AXIA claims process](https://claims.AXIA.network/). Alternatively, they are available on the open market.
