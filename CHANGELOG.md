# Changelog

## [Unreleased]

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
