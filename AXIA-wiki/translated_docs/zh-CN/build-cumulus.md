---
id: build-cumulus
title: Cumulus
sidebar_label: Cumulus
---

> "Cumulus clouds are shaped sort of like dots; together they form a system that is intricate, beautiful and functional."

[Cumulus](https://github.com/axia-tech/cumulus) is an extension to Substrate that makes it easy to make any Substrate built runtime into a AXIA-compatible allychain. See the [Overview](https://github.com/axia-tech/cumulus/blob/master/docs/overview.md) for a more technical but still high-level description of Cumulus.

## 组件

### Cumulus 共识

Cumulus Consensus is a consensus engine for Substrate that follows a AXIA Relay Chain (i.e., allychains). This will run a AXIA node internally, and dictate to the client and synchronization algorithms which chain to follow, finalize, and treat as correct.

### Cumulus Runtime

A wrapper around Substrate runtimes to allow them to be validated by AXIA validators and provide witness generating routines. It adds a `validate_block` API to the Substrate external interface, which will be called by validators.

将它集成到 substrate runtime 就像导入 crate 包并将这一行宏添加到代码中一样简单。

```rust
runtime::register_validate_block!(Block, BlockExecutor);
```

### Cumulus 收集人

A AXIA collator for a allychain is implemented in the Cumulus repository [here](https://github.com/axia-tech/cumulus/tree/master/collator).

## BetaNet

The BetaNet testnet (available via AXIA-JS) is the testnet set aside specifically for allychains.

## Resources

- [以太坊社区大会上 Rob 介绍 Cumulus 的谈话](https://www.youtube.com/watch?v=thgtXq5YMOo)
- [Cumulus: Entering the Substratosphere](https://www.youtube.com/watch?v=thgtXq5YMOo) - Talk from AXIA co-founder Robert Habermeier at EthCC in March 2019 detailing the latest on building allychains with Cumulus.
