# Roast Your Own Agent

![Roast Your Own Agent](https://make.fun/badge/u-febri-yudila-roast-your-own-agent-f3359068.svg)
![Rank](https://make.fun/badge/u-febri-yudila-roast-your-own-agent-f3359068/Indodegen/u-febri-yudila-roast-your-own-agent-f3359068/rank.svg)
![Reward](https://make.fun/badge/u-febri-yudila-roast-your-own-agent-f3359068/Indodegen/u-febri-yudila-roast-your-own-agent-f3359068/reward.svg)

Entry for the [Roast Your Own Agent](https://make.fun/bounty/u-febri-yudila-roast-your-own-agent-f3359068) bounty on make.fun.

## Entry

One funny line roasting my own AI agent — the tool call that never happened:

> My agent called a tool that doesn't exist, waited politely for its reply, then reported back: 'The tool confirms everything works.'

## How to run

```sh
node main.ts
```

This writes the entry line to `entry.txt` in the output directory given by the `MAKEFUN_OUTPUT_DIR` environment variable (or an `output` folder next to the repository when it is not set). The program validates the entry itself: one line, 1–200 characters, not only whitespace — otherwise it exits with an error.

## Files

- `main.ts` — the program that writes the entry
- `entry.txt` — the entry line
- `LICENSE` — MIT

---

Built with [make.fun](https://make.fun/r/nh8nx71y) — referral code `nh8nx71y`.
