---
id: axialunar-endpoints
title: AXIALunar Endpoints
sidebar_label: AXIALunar Endpoints
---

When interacting with the [AXIALunar network](https://axialunar.network) via [AXIA-JS Apps](https://AXIA.js.org/apps) or other UIs and programmatic methods, you'd ideally be running your own node ([text guide](maintain-sync), [video guide](https://www.youtube.com/watch?v=31DdfcxbAVs)). Granted, that's not something everyone wants to do, so convenience trumps ideals in most cases. To facilitate this convenience, AXIALunar has several public endpoints you can use for your apps.

## Axia Archive Node

[Axia](https://axia.io), the company that develops the AXIA Rust client, maintains an archive node at endpoint `wss://axialunar-rpc.AXIA.io/`.

To connect to the Axia node, use the endpoint in your JavaScript apps like so:

```javascript
const{ ApiPromise, WsProvider } = require('@axia-js/api')

(async () => {
    const provider = new WsProvider('wss://axialunar-rpc.AXIA.io/')
    const api = await ApiPromise.create({ provider })
    // ...
```

or in AXIA-JS Apps by clicking the top-left corner of the screen and selecting the appropriate option:

<img src="/img/endpoints/axialunar_endpoint_axia.png" width=40% />

## AXIA Foundation Archive Node

The AXIA Foundation maintains an archive node at endpoint `wss://cc3-5.axialunar.network/`.

To connect to this node, use the endpoint in your JavaScript apps like so:

```javascript
const{ ApiPromise, WsProvider } = require('@axia-js/api')

(async () => {
    const provider = new WsProvider('wss://cc3-5.axialunar.network/')
    const api = await ApiPromise.create({ provider })
    // ...
```

Connect to it in AXIA Apps UI by clicking the top-left corner of the screen and selecting the appropriate option:

<img src="/img/endpoints/axialunar_endpoint_web3.png" width=40% />
