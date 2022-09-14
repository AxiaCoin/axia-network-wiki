---
id: run_manually
title: AXIA Network Node
sidebar_label: AXIA Network Node
slug: ../run_manually
---

## Installation

In this tutorial, we will:
- Install AXgo, the GoLang implementation of the AXIA node,
- Connect to the main AXIA network.

### Download AXgo

Axia is an incredibly lightweight protocol, so the minimum computer requirements are quite modest.
Note that as network usage increases, hardware requirements may change.

The minimum recommended hardware specification for nodes connected to Mainnet is:

- CPU: Equivalent of 8 AWS vCPU
- RAM: 16 GiB
- Storage: 512 GiB
- OS: Ubuntu 18.04/20.04 or macOS >= 10.15 (Catalina)
- Network: Reliable IPv4 or IPv6 network connection, with an open public port.

If you plan to build AXgo from source, you will also need the following software:

- [Go](https://golang.org/doc/install) version >= 1.17.9
- [gcc](https://gcc.gnu.org/)
- g++

### Source Code Install

First install Go 1.18.1 or later. Follow the instructions  [here](https://golang.org/doc/install). You can verify by runing  `go version`.

Set  `$GOPATH`  environment variable properly for Go to look for Go Workspaces. Please read  [this](https://go.dev/doc/gopath_code)  for details. You can verify by running  `echo $GOPATH`.

Download the axia-network-v2 repository into your  `$GOPATH`:

```
cd $GOPATH
mkdir -p src/github.com/AxiaCoin
cd src/github.com/AxiaCoin
git clone https://github.com/AxiaCoin/axia-network-v2.git
cd axia-network-v2
```


Build axgo:

```
./scripts/build.sh
```

The binary, named  `axgo`, is in  `axia-network-v2/build`. If you've followed the instructions so far, this will be within your  `$GOPATH`  at:  `$GOPATH/src/github.com/AxiaCoin/axia-network-v2/build`.

To begin running AXIA, run the following (hit Ctrl+C to stop your node):

```
./build/axgo
```


### Binary Install

If you want to download a pre-built binary instead of building it yourself, go to our  [releases page](https://github.com/AxiaCoin/axia-network-v2/releases), and select the release you want (probably the latest one.)

Under  `Assets`, select the appropriate file.

For MacOS: Download:  `axgo-macos-<VERSION>.zip`  Unzip:  `unzip axgo-macos-<VERSION>.zip`  The resulting folder,  `axgo-<VERSION>`, contains the binaries.

For Linux on PCs or cloud providers: Download:  `axgo-linux-amd64-<VERSION>.tar.gz`  Unzip:  `tar -xvf axgo-linux-amd64-<VERSION>.tar.gz`  The resulting folder,  `axgo-<VERSION>-linux`, contains the binaries.

For Linux on RaspberryPi4 or similar Arm64-based computers: Download:  `axgo-linux-arm64-<VERSION>.tar.gz`  Unzip:  `tar -xvf axgo-linux-arm64-<VERSION>.tar.gz`  The resulting folder,  `axgo-<VERSION>-linux`, contains the binaries.

### Docker Install

Make sure docker is installed on the machine - so commands like `docker run` etc. are available.

Building the docker image of latest axgo branch can be done by running:

```sh
./scripts/build_image.sh
```

To check the built image, run:

```sh
docker image ls
```

The image should be tagged as `axiasystem/axgo:xxxxxxxx`, where `xxxxxxxx` is the shortened commit of the AXgo source it was built from. To run the AXgo node, run:

```sh
docker run -ti -p 9650:9650 -p 9651:9651 axiasystem/axgo:xxxxxxxx /axgo/build/axgo
```

## Running AXgo

### Connecting to Mainnet

To connect to the AXgo Mainnet, run:

```sh
./build/axgo
```

You should see some log messages.

You can use `Ctrl+C` to kill the node.

### Connecting to Test

To connect to the Test Testnet, run:

```sh
./build/axgo --network-id=test
```


## Bootstrapping

A node needs to catch up to the latest network state before it can participate in consensus and serve API calls. This process, called bootstrapping, currently takes several days for a new node connected to Mainnet.

A node will not report healthy until it is done bootstrapping.

Improvements that reduce the amount of time it takes to bootstrap are under development.

The bottleneck during bootstrapping is typically database IO. Using a more powerful CPU or increasing the database IOPS on the computer running a node will decrease the amount of time bootstrapping takes.
