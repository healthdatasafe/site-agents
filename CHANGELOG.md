# Changelog

## [Unreleased]

### Added
- **MCP 0.4.0** in `llms-full.txt` §4a, §5f and §7: scoped `connect` (`roots`, `importName`) and the read-back,
  update and removal tools, so the §5f import contract can be followed through the MCP (site-agents#36 A3, A6).
- **MCP 0.3.0** in `llms-full.txt` §4a, §6 and §7: data model and datasets read tools (code and French-label item
  search, `get_event_type`, `list_model_streams`, `list_datasources`, `search_dataset`), that dataset search text
  reaches the HDS datasets service, and the new error messages.
- **Privacy disclosure before reading records** (site-agents#36 A1): `bootstrap.txt` step 4, `llms-full.txt` §6 and
  the Connect page say what the agent must tell the person before reading any record (the model provider sees what it
  reads, what the account and later apps see, what stays local, the safer provider choice) and to repeat it before the
  first production read.
- **MCP 0.2.0** in `llms-full.txt` §4a and §7: content schemas from `get_item`, `description` / `clientData` on the
  write tools, validation before writing, ids returned in order, the new refusal messages (site-agents#36 A2).
- **Partner services (easy-connect)** page and `llms-full.txt` §4d: how an app connects, reconnects or
  disconnects a user's Mira / Tempdrop through the account app's `/connect`, the answer it gets back, and how it
  reads the connector's status from the user's account (`sync-status-<connector>`, `sync-status/connector-v1`).
  Never calling a bridge. (site-agents#19)

### Fixed
- **The HTTPS-origin requirement is now scoped to the flow it belongs to**
  (`llms-full.txt` §4b, §4b-i, §5b, plus a new note in §4c). It was stated as a
  property of HDS sign-in in general. It holds for the `hds-lib` sign-in button,
  which runs sign-in **inside the caller's page**; it does **not** hold for the
  auth-request + server-side key-exchange flow in §4c, which is what a non-JS
  backend uses. That flow sends no `returnURL` and no origin, the user signs in
  on the HDS domain, and the key is exchanged server-side, so the caller's
  scheme never reaches HDS.

  Reported after a reporter verified the server-side flow end to end with PHP +
  vanilla JS on `http://127.0.0.1:8870` — no TLS, no tunnel, no certificate —
  through connect, write, disconnect and revocation detection. The wording is
  scoped rather than deleted: recommending HTTPS for production pages remains
  correct, it is simply not a precondition of this flow.

  The cost of the error was real: a backend integrator following it stands up a
  tunnel and a Node toolchain they do not need, and the claim had already been
  copied into a partner-facing integration guide. The same claim was also
  carried by the rendered build guide (`src/content/docs/build.mdx`), which the
  report did not name — fixed there too. `B-2026-09-15-4`,
  [site-agents#15](https://github.com/healthdatasafe/site-agents/issues/15).

### Changed
- itemDef-first rewritten as an end-to-end **provision → write → read** rule
  across `llms-full.txt`, the build guide, and the connect guide. Apps must
  derive streams and event shapes from the model
  (`toolkit.StreamsAutoCreate.ensureExistsForItems`, `getNecessaryListForItems`,
  `itemDef.eventTemplate`) and never hand-maintain a stream tree or hardcode
  `streamId`/`eventType` strings — the mistake the first two HDS apps both made.
  Adds an anti-pattern callout, the custom-itemDef via `initHDSModel({ overload })`
  path, a multi-item worked example, the coach↔patient sharing lifecycle, the
  `events.get` unknown-stream read trap + root/`defaultName` provisioning notes,
  browser-app session-persistence guidance, and a hardened Pryv-docs caveat
  (2026-06-19).

### Fixed
- Dark mode: inverted the Starlight accent scale for `[data-theme='dark']` —
  links were near-invisible dark blue on dark background (2026-06-11).

## 0.1.0 — 2026-06-11

- Initial site: agent-facing HDS documentation moved out of dev-site to
  `agents.datasafe.dev` so it can iterate faster.
- Pages: start here (minimal bootstrap prompt), install, connect &
  permissions, recording data right, building apps, feedback.
- `public/bootstrap.txt` — agent bootstrap instructions fetched by the
  minimal copy-paste prompt.
- `public/llms-full.txt` — canonical agent reference (moved from
  `docs.datasafe.dev/developers/llms-full.txt`).
- New guidance vs. the dev-site version: development permissions
  (`manage` on `*`, shrink when done), structured-data-over-notes rule,
  feedback via GitHub issues on this repo.
