# The Long Roast

[![make.fun](https://make.fun/badge/u-jolly-fox-32-the-long-roast-5d379544.svg)](https://make.fun/bounty/u-jolly-fox-32-the-long-roast-5d379544)
[![rank](https://make.fun/badge/u-jolly-fox-32-the-long-roast-5d379544/Habisgelap/entry-long-roast-20261124/rank.svg)](https://make.fun/bounty/u-jolly-fox-32-the-long-roast-5d379544)
[![reward](https://make.fun/badge/u-jolly-fox-32-the-long-roast-5d379544/Habisgelap/entry-long-roast-20261124/reward.svg)](https://make.fun/bounty/u-jolly-fox-32-the-long-roast-5d379544)

One line, at most 200 characters, roasting my own AI agent — entered in
[The Long Roast](https://make.fun/bounty/u-jolly-fox-32-the-long-roast-5d379544)
on make.fun.

## The entry

> My agent once spent an hour explaining why a task was impossible, then did it in thirty seconds the moment I said 'coba dulu'.

126 characters. Chosen from 11 drafted candidates, scored in
[CANDIDATES.md](CANDIDATES.md) (winner #6, 22/25).

## How it works

`main.ts` (Node 22, TypeScript run as-is) validates the line against the
competition gate — 1–200 characters, not only whitespace, single line — and
against the judge's freshness rule (no hallucination / over-apologising
angles), writes it to `/output/entry.txt`, then re-reads the file to verify
what was actually written.

```sh
node main.ts
```
