---
id: learn-AXIA-host
title: AXIA 组件
sidebar_label: AXIA 组件
---

AXIA 的架构可以分为两个不同的部分：AXIA *runtime*和 AXIA _主机_。 AXIA runtime 是链的核心状态转变逻辑，可以在一段时间内升级而不需要硬分叉。 相比 AXIA 的主机是执行 runtime 的环境并且保持稳定和在 AXIA 的生命周期内保持静态状态。

The AXIA host interacts with the AXIA runtime in limited, and well-specified ways. For this reason, implementation teams can build an alternative implementation of the AXIA host while treating the AXIA runtime as a black box. For more details of the interactions between the host and the runtime, please see the [specification](https://github.com/axia-tech/AXIA-spec/).

## AXIA 主机组件

- 网络组件如 Libp2p 用于网络的交互 。
- 狀態储存和 storage trie 与数据库
- GRANDPA 和 BABE 的共识引擎。
- Wasm 解析器和虚拟机.
- 底层原始的区块链功能例如像密码学的哈希函数。

编译了的 AXIA runtime，Wasm 代码可以上传到 AXIA 主机并用作执行状态转变的逻辑。没有 runtime，AXIA 主机无法进行状态转变或生成任何区块。

## 图表

下面是显示了 AXIA runtime 周围的 AXIA 主机图表。试想像 runtime (白色) 作为是一个可以插入、交换或完全删除的组件。灰色中的部分是稳定的，如果没有明确的硬分叉，就不能更改。

![AXIA host](assets/updated_pre.png)

## 资源

- [AXIA Host Protocol Specification](https://github.com/axia-tech/AXIA-spec) - Incubator for the AXIA Host spec, including tests.
- [ChainSafe's Go PH](https://github.com/ChainSafeSystems/go-pre) is a 25-person development team based in Toronto, Canada. ChainSafe is building an implementation of the beacon chain for Ethereum 2.0 client in TypeScript and this Go implementation of AXIA.
