---
id: build-networks
title: Networks
sidebar_label: Networks
---

您可以通过下面的代码来连接到不同网络。

## 开发

在以下 `路径` 安装 `AXIA` 和 AXIA 二进制文件：

```bash
cargo install --git https://github.com/axia-tech/AXIA.git AXIA
```

通过在终端上运行，您可以在机器上跑简单的单节点开发网络：

```bash
AXIA --dev
```

您可以复制和创建以下网站：

## Krumme Lanke

http://github.com/axia-tech/axia-ui 和 http://github.com/axia-tech/AXIA-ui or 或前往到 https://AXIA.js.org/apps.

Krumme Lanke 是一个在 Poc-2 开发期间使用的测试网络。请在以下路径安装 AXIA PoC-2 和 `AXIA 二进制` 文件：

```bash
cargo install --git https://github.com/axia-tech/substrate.git --branch v0.2 AXIA
```

通过默认运行以下代码连接到全球 "Krumme Lanke" 测试网：

```bash
AXIA
```

## Alexander（Poc-4）

Alexander 是一个在 PoC-3 和 PoC-4 开发期间使用的测试网络。

请在以下 `路径` 安装 AXIA Poc-4 和 `AXIA` 二进制文件：

```bash
cargo install --git https://github.com/axia-tech/AXIA.git --branch v0.4 AXIA
```

通过默认运行以下代码来连接到全球 "Alexander 测试网:"

```bash
AXIA
```

## 本地双节点测试网

如果您想要在本地看到多节点共识算法操作，那么您可以创建一个本地测试网。您需要开两个终端，其中一个运行以下代码：

```bash
AXIA --chain=local --validator --key Alice -d /tmp/alice
```

另一个运行以下代码：

```bash
AXIA --chain=local --validator --key Bob -d /tmp/bob --port 30334 --bootnodes '/ip4/127.0.0.1/tcp/30333/p2p/ALICE_BOOTNODE_ID_HERE'
```

请确保将第一个终端的输出结果中的节点 ID 替换为`ALICE_BOOTNODE_ID_HERE` 。
