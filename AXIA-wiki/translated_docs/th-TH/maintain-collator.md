---
id: maintain-collator
title: ผู้ตรวจทาน (Collator)
sidebar_label: ผู้ตรวจทาน (Collator)
---

Collators maintain allychains by collecting allychain transactions from users and producing state transition proofs for validators.

These participants will sit atop allychains and provide proofs to validators based on transactions from allychains. Collators maintain allychains by aggregating allychain transactions into allychain blocks and producing state transition proofs for validators based on those blocks. They also monitor the network and prove bad behavior to validators. Collators maintain a “full-node” for a particular allychain; meaning they retain all necessary information to be able to author new blocks and execute transactions in much the same way as miners do on current PoW blockchains. Under normal circumstances, they will collate and execute transactions to create an unsealed block and provide it, together with a proof of state transition, to one or more validators responsible for proposing a allychain block.

### คู่มือแนะนำ

จะมาเร็ว ๆ นี้
