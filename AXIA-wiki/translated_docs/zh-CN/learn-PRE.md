---
id: learn-PRE
title: AXIA Runtime 环境 (PRE)
sidebar_label: AXIA Runtime 环境 (PRE)
---

AXIA Runtime 环境是 AXIA 协议的重要组成部分。 它由网络层，共识和 Wasm VM 子系统组成，并充当 AXIA runtime 和平行链 runtime 的基础堆栈底层。AXIA RE 可以视为运行 AXIA 中继链的虚拟机的同义词（尽管如下所述，链逻辑本身与其运行的 PRE 之间有明显的分隔）。

AXIA RE 组件为：

- 网络交互
- 状态存储和 Trie 树
- 共识引擎
- Wasm 虚拟机 (VM)

Runtime（定义为实现链逻辑的代码）与 AXIA RE 分离。 这两个组件的分离使 runtime 可以轻松升级，而无需升级 AXIA RE。

AXIA runtime（以及平行链 runtime）必须编译成 WebAssembly(Wasm) Blob。 AXIA runtime 将 "插件" 放到 AXIA RE 并且可以通过治理机制进行交换。

下图取自 Gavin Wood 在 Substrate 上展示的[ PPT ](https://slides.com/axia-tech/axiasubstrate#/8)，并演示了 AXIA 堆栈的四 层 。

![PRE](assets/PRE.png)

## 资源

- [AXIA Runtime Environment Protocol Specification](https://github.com/axia-tech/AXIA-spec) - Incubator for the PRE spec, including tests.
