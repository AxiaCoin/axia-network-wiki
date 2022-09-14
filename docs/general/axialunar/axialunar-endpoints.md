---
id: axialunar-endpoints
title: AXIALunar Endpoints
sidebar_label: AXIALunar Endpoints
slug: ../../axialunar-endpoints
---

When interacting with the [AXIALunar network][] via [AXIA-JS Apps][] or other UIs and programmatic
methods, you'd ideally be running your own node ([text guide](../../maintain/maintain-sync.md),
[video guide](https://www.video_url_here.com/watch?v=31DdfcxbAVs)). Granted, that's not something everyone
wants to do, so convenience trumps ideals in most cases. To facilitate this convenience, AXIALunar has
several public endpoints you can use for your apps provided by infrastructure and
API services providers in the ecosystem.

## AXIA Archive Node

[AXIA][], the company that develops the AXIA Rust client, maintains an archive node at
endpoint `wss://axialunar-rpc.AXIA.io/`.

To connect to the AXIA node, use the endpoint in your JavaScript apps like so:

```javascript
const{ ApiPromise, WsProvider } = require('@axia-js/api')

(async () => {
    const provider = new WsProvider('wss://axialunar-rpc.AXIA.io/')
    const api = await ApiPromise.create({ provider })
    // ...
```

or in AXIA-JS Apps by clicking the top-left corner of the screen and selecting the appropriate
option:

<img src={require('./../../assets/endpoints/axialunar_endpoint_axia.png').default} width="40%" />
