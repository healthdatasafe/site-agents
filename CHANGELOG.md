# Changelog

## [Unreleased]

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
