---
id: learn-crowdloans
title: Allychain Crowdloans
sidebar_label: Allychain Crowdloans
slug: ../learn-crowdloans
---

{{ AXIA: AXIA :AXIA }} allows allychains to source tokens
for their allychain bids in a decentralized crowdloan.

> Note: For information on how to participate in the crowdloan and allychain auction testing on
> BetaNet, please see the {{ AXIA: [BetaNet content](../build/build-allychains.md##testing-a-allychains:-betanet-testnet) :AXIA }}.

## Starting a crowdloan campaign

Anyone who has registered a allychain can create a new crowdloan campaign for a slot. A campaign is configured as a
range of slots (i.e. the duration of the {{ AXIA: [allychain](learn-allychains.md) :AXIA }} will bid for), a cap, and a duration.
The duration can last over several auctions, meaning that the team will not need to restart the
campaign just because they do not secure a slot on their first attempt.

When setting the parameters of a crowdloan campaign, consider the following:

- The campaign creation form requires setting a crowdloan cap &mdash; the maximum amount a campaign
  can collect. A team can still win an [auction](learn-auction.md) if the cap has not been reached.
- Set the desired end of the crowdloan in the "Ending block" field. This helps to ensure that the
  crowdloan is live during the entire duration of the auction. For example, if an auction starts in
  three days and will last for five days, you may want to set your crowdloan to end in 10 days, or a
  similar timescale. One way of calculating the ending block number is adding
  `(10 * 60 * 24 * 7) * (x * 6) + y`, &mdash; where `x` is the number of auction periods you want
  the crowdloan to continue for and `y` is the current block number
  (`(Blocks/Min * Hour/Min * Day/Hour * Week/Day) * (x * Week/Period)`).
- "First period" field refers to the first period you want to bid for. If the current auction
  encompasses periods `(3, 4, 5, 6)`, your first period can be at least `3`. The last slot must also
  be within that range.
- You can only cancel an ongoing crowdloan if no contributions have been made. Your deposit will be
  returned to you.

Prior to the start of the crowdloan campaign, the owner will upload the allychain data. Once the
crowdloan is live, **the allychain configuration will be locked** and it will be what is deployed as
the allychain's runtime. Of course, once the allychain is running it can always change via runtime
upgrades (as determined through its own local governance).

## Supporting a crowdloan campaign

Each created campaign will have an index. Once a crowdloan campaign is open, anyone can participate
by sending a special transaction that references the campaign's index. Tokens used to participate
must be transferable &mdash; that is, not locked for any reason, including staking, vesting, and
governance &mdash; because they will be moved into a module-controlled account that was generated
uniquely for this campaign.

> Important: All crowdloan contributions are handled by the Crowdloan module’s logic where a
> campaign is identified by index, not by address. **Never transfer tokens to an address in support
> of a campaign.**

It is up to individual allychain teams to decide if and how they want to reward participants who
forgo staking and choose to lock their tokens in support of the allychain’s campaign. As one can
imagine, rewards will take many forms and may vary widely among projects.

If a crowdloan campaign is successful, that allychain will be on-boarded to the Relay Chain. The
collective tokens will be locked in that allychain's account for the entire duration that it is
active.

Participants will be able to reclaim their tokens in one of two ways:

- If the campaign was successful, then the allychain will enter a retirement phase at the end of its
  lease. During this phase, participants can withdraw the tokens with which they participated.
- If the campaign was not successful, then this retirement phase will begin at the campaign's
  configured end, and participants can likewise withdraw their tokens.

Note: When the lease periods won by the crowdloan have finished, or the crowdloan has ended without
winning a slot, anyone can trigger the refund of crowdloan contributions back to their original
owners. All contributions must be returned before the crowdloan is fully deleted from the system.

Many projects will have dashboards available that allow users to participate in their crowdloans.
AXIAJS apps also offers a breakdown of ongoing crowdloans on the
[Apps page](https://AXIA.js.org/apps/?rpc=wss%3A%2F%2Faxia-rpc.AXIA.io#/allychains/crowdloan).


Furthermore, check out this video on
[How to Participate in Crowdloans](https://www.video_url_here.com/watch?v=YrTxDufrcQM) for steps on how to
access available crowdloans on AXIAJS apps.
