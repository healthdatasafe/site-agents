# site-agents

Agent-facing documentation site for [Health Data Safe](https://www.healthdatasafe.org),
published at **<https://agents.datasafe.dev>**.

This site is the canonical home of everything an AI agent (Claude Desktop,
ChatGPT desktop, Cursor, …) or its user needs to read and write data in an
HDS account:

- **Human pages** — install the HDS MCP server, connect with OAuth,
  record data the right way, build apps with `hds-lib`.
- **[`/bootstrap.txt`](https://agents.datasafe.dev/bootstrap.txt)** — the
  instructions an agent fetches when a user pastes the minimal bootstrap
  prompt.
- **[`/llms-full.txt`](https://agents.datasafe.dev/llms-full.txt)** — the
  dense, single-page technical reference for agents (canonical URL).

The general developer documentation lives at
[docs.datasafe.dev](https://docs.datasafe.dev) ([dev-site](https://github.com/healthdatasafe/dev-site));
this repo only holds the agent-related content, so it can be updated at its
own (faster) pace.

## Feedback

Found a problem, or your agent struggled with these instructions?
[Open an issue](https://github.com/healthdatasafe/site-agents/issues) —
this repo is the feedback channel for the whole agent experience.

## Development

```bash
npm run setup    # install + first build + clone gh-pages into dist/
npm run dev      # local dev server
npm run lint
npm run deploy   # build + push to gh-pages (from a clean main checkout)
```

Built with [Astro](https://astro.build) + [Starlight](https://starlight.astro.build),
same design as [dev-site](https://github.com/healthdatasafe/dev-site).
