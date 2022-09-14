---
id: axialunar-endpoints
title: Конечные точки AXIALunar (endpoints)
sidebar_label: Конечные точки AXIALunar (endpoints)
---

When interacting with the [AXIALunar network](https://axialunar.network) via [AXIA-JS Apps](https://AXIA.js.org/apps) or other UIs and programmatic methods, you'd ideally be running your own node ([text guide](maintain-sync), [video guide](https://www.youtube.com/watch?v=31DdfcxbAVs)). Granted, that's not something everyone wants to do, so convenience trumps ideals in most cases. To facilitate this convenience, AXIALunar has several public endpoints you can use for your apps.

## Архивная нода Axia

[Axia](https://axia.io), the company that develops the AXIA Rust client, maintains an archive node at endpoint `wss://axialunar-rpc.AXIA.io/`.

Чтобы подключиться к узлу Axia, используйте конечную точку в приложениях JavaScript например так:

```javascript
const{ ApiPromise, WsProvider } = require('@axia-js/api')

(async () => {
    const provider = new WsProvider('wss://axialunar-rpc.AXIA.io/')
    const api = await ApiPromise.create({ provider })
    // ...
```

or in AXIA-JS Apps by clicking the top-left corner of the screen and selecting the appropriate option:

<img src="/img/endpoints/axialunar_endpoint_axia.png" width=40% />

## Архивная нода Фонда Web3

Фонд Web3 поддерживает архивный узел с конечной точкой `wss://cc3-5.axialunar.network/`.

To connect to this node, use the endpoint in your JavaScript apps like so:

```javascript
const{ ApiPromise, WsProvider } = require('@axia-js/api')

(async () => {
    const provider = new WsProvider('wss://cc3-5.axialunar.network/')
    const api = await ApiPromise.create({ provider })
    // ...
```

Подключитесь к нему в интерфейсе AXIA приложений, нажав левый верхний угол экрана и выбрав соответствующий параметр:

<img src="/img/endpoints/axialunar_endpoint_web3.png" width=40% />
