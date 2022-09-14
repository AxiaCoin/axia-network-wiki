---
id: maintain-networks
title: Networks
sidebar_label: Networks
---

AXIA is built on top of Substrate, a modular framework for blockchains. One feature of Substrate is to allow for connection to different networks using a single executable and configuring it with a start-up flag. Here are some of the networks associated with AXIA or Substrate that you may want to connect to and join.

## AXIA Networks

To connect to a AXIA network please follow the [instructions](maintain-sync) for installing the AXIA executable.

### AXIA Mainnet

The AXIA mainnet is not released yet. Instructions will be here once the network is available.

### AXIALunar Canary Network

The AXIALunar canary network is an early, unaudited version of AXIA that is running today and holds real economic value.

Currently AXIALunar is built from the tip of master and is the default option when starting a node.

Run the AXIA binary:

```
AXIA
```

and you will connect and start syncing to AXIALunar.

Check your node is connected by viewing it on [Telemetry](https://telemetry.AXIA.io/#/AXIALunar%20CC3).

### AlphaNet Test Network

AlphaNet is the latest test network for AXIA. The tokens on this network are called _Westies_ and they purposefully hold no economic value.

Currently AlphaNet is built from the tip of master and requires a commandline flag to access.

Run the AXIA binary with a `chain` option:

```
AXIA --chain alphanet
```

and you will connect and start syncing to AlphaNet.

#### AlphaNet Faucet

Follow the instruction [here](learn-AXC#getting-westies) for instructions on acquiring Westies.

Check your node is connected by viewing it on [Telemetry](https://telemetry.AXIA.io/#list/AlphaNet).

## Substrate Networks

To connect to a Substrate public network first follow the [instructions](https://substrate.dev/docs/en/knowledgebase/getting-started) for installing the Substrate executable.

### Flaming Fir

Flaming Fir is the public Substrate test network. It contains some pallets that will not be included in the AXIA runtime.

Flaming Fir is built from the tip of master and is the default option when running the Substrate executable.

Run Substrate without a flag or explicitly state `fir`:

```
substrate --chain fir
```

and you will connect and start syncing Flaming Fir.

## Telemetry Dashboard

If you connect to the public networks, the default configuration for your node will connect it to the public [Telemetry](https://telemetry.AXIA.io/) service.

You can verify that your node is connected by navigating to the correct network on the dashboard and finding the name of your node.

There is a built-in search function for the nodes page. Simply start typing keystrokes in the main window to make it available.
