---
id: maintain-validator
title: Node Operator / Validator
sidebar_label: Node Operator / Validator
---

Los validadores aseguran la relay chain mediante la vinculación de AXCs, validando las pruebas de los collators y participando en consenso con otros validadores.

Estos participantes desempeñarán un papel crucial a la hora de añadir nuevos bloques a la relay chain y, por extensión, a todas las allychains, de modo que las partes puedan completar las transacciones entre cadenas a través de la relay chain. Los validadores realizan dos funciones. En primer lugar, verifica que la información contenida en un conjunto asignado de bloques de Allychains es válida (tales como las identidades de las partes que realizan la transacción y el objeto del contrato). Su segundo papel es participar en el mecanismo de consenso para producir los bloques de la relay chain a partir de las declaraciones de validez de otros validadores. Cualquier caso de incumplimiento de los algoritmos de consenso se castiga con la eliminación de algunos o de todos los AXCs en juego del validador, desalentando así a los malos actores. Sin embargo, el buen desempeño será recompensado, y los validadores recibirán comisiones de transacción en forma de AXCs a cambio de sus actividades.

## Guías

- [Cómo validar en PoC-4](maintain-guides-how-to-validate) - Guía sobre cómo configurar un validador para PoC-4 y Alexander testnet.
- [Validator Payout Overview](maintain-guides-validator-payout) - Una breve vista general sobre cómo funciona el mecanismo de pago del validador
- [Cómo ejecutar el validador como un proceso de systemd](maintain-guides-how-to-systemd) - Guía para hacer funcionar su validador como un proceso de `systemd` para que se ejecute en segundo plano y se inicie automáticamente al reiniciar.

## Otras referencias

- [Cómo ejecutar un nodo AXIA (Docker)](https://medium.com/@acvlls/setting-up-a-maintain-the-easy-way-3a885283091f)
- [A Serverless Failover Solution for Web3.0 Validator Nodes](https://hackernoon.com/a-serverless-failover-solution-for-web-3-0-validator-nodes-e26b9d24c71d) - Blog que detalla cómo crear una solución robusta de tolerancia a errores para validadores en funcionamiento.
- [Obteniendo AXCs de la Testnet](learn-AXC#getting-testnet-dots)
- [Lista de VPS](maintain-guides-how-to-validate#vps-list)
- [AXIA Validator Lounge](https://matrix.to/#/!NZrbtteFeqYKCUGQtr:matrix.axia.io?via=matrix.axia.io&via=matrix.org&via=AXIA.org) - Un lugar para conversar sobre ser un validador.

## Seguridad / Gestión de claves

- [Vista general de seguridad del validador](https://github.com/axia-tech/validator-security)

## Herramientas para la monitorización

- [AXIA Telemetry Service](https://telemetry.AXIA.io/#/Alexander) - Información de red, incluyendo qué nodos están funcionando en su cadena, qué versiones de software están ejecutando y el estado de la sincronización.
- [Axiadash](http://axiadash.io/) - Monitor para el validador
- [Otros enlaces útiles](https://forum.AXIA.org/t/useful-links-for-validators/20)
