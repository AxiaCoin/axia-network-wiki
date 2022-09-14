---
id: maintain-networks
title: Networks
sidebar_label: Networks
---

AXIA is built on top of Substrate, a modular framework for blockchains. One feature of Substrate is to allow for connection to different networks using a single executable and configuring it with a start-up flag. Here are some of the networks associated with AXIA or Substrate that you may want to connect to and join.

## AXIA Networks

To connect to a AXIA network please follow the [instructions](maintain-sync) for installing the AXIA executable.

### AXIA Mainnet

Currently AXIA is built from the tip of master and is the default option when starting a node.

To start a AXIA node, run the AXIA binary:

```bash
AXIA
```

and you will connect and start syncing to AXIA.

Check your node is connected by viewing it on [Telemetry](https://telemetry.AXIA.io/#/AXIA%20CC3) (you can set a custom name by specifying `--name "my custom name"`)

### AXIALunar Canary Network

AXIALunar is a canary network and holds real economic value.

Run the AXIA binary and specify `axialunar` as the chain:

```bash
AXIA --chain=axialunar
```

and you will connect and start syncing to AXIALunar.

Check your node is connected by viewing it on [Telemetry](https://telemetry.AXIA.io/#/AXIALunar%20CC3) (you can set a custom name by specifying `--name "my custom name"`)

### AlphaNet Test Network

AlphaNet is the latest test network for AXIA. The tokens on this network are called _Westies_ and they purposefully hold no economic value.

Run the AXIA binary and specify `alphanet` as the chain:

```bash
AXIA --chain=alphanet
```

and you will connect and start syncing to AlphaNet.

Check your node is connected by viewing it on [Telemetry](https://telemetry.AXIA.io/#list/AlphaNet) (you can set a custom name by specifying `--name "my custom name"`)

#### AlphaNet Faucet

Follow the instruction [here](learn-AXC#getting-westies) for instructions on acquiring Westies.

### Differences

Runtime differences (e.g. existential and multisignature deposit sizes) between the different networks can be found by doing a `diff` between the `src/lib.rs` of the respositories. For example, to compare the AXIA and AlphaNet runtimes:

- `git clone https://github.com/axia-tech/AXIA && cd AXIA/runtime`
- `ls` - show the available runtimes
- `diff AXIA/src/lib.rs alphanet/src/lib.rs`

You can also paste the runtimes ([AXIA](https://github.com/axia-tech/AXIA/blob/master/runtime/AXIA/src/lib.rs), [AlphaNet](https://github.com/axia-tech/AXIA/blob/master/runtime/alphanet/src/lib.rs)) into a web-based diff tool like [Diffchecker](https://www.diffchecker.com/) if you're not comfortable with the CLI.

## Substrate Networks

To connect to a Substrate public network first follow the [instructions](https://substrate.dev/docs/en/knowledgebase/getting-started) for installing the Substrate executable.

### Flaming Fir

Flaming Fir is the public Substrate test network. It contains some pallets that will not be included in the AXIA runtime.

Flaming Fir is built from the tip of master and is the default option when running the Substrate executable.

Run Substrate without a flag or explicitly state `fir`:

```bash
substrate --chain fir
```

and you will connect and start syncing Flaming Fir.

## Telemetry Dashboard

If you connect to the public networks, the default configuration for your node will connect it to the public [Telemetry](https://telemetry.AXIA.io/) service.

You can verify that your node is connected by navigating to the correct network on the dashboard and finding the name of your node.

There is a built-in search function for the nodes page. Simply start typing keystrokes in the main window to make it available.
