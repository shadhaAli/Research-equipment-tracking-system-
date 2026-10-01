# EquipUse — Research Equipment Tracking System

A full-stack prototype for tracking shared research equipment across university
departments: who has what, what's free to borrow, what's overdue for reuse,
what's broken, and an assistant that plans a project from existing inventory
before anyone buys something new.

## Features

- **Registry** — searchable/filterable inventory across 5 departments.
- **Requests** — researchers ask to check something out; managers approve, deny,
  or mark it returned.
- **Bookings** — reserve a future time slot on an item, even if it's currently
  in use by someone else. Conflicting time slots on the same day are rejected.
- **Issue reporting** — flag a fault on any item, with a severity level. A
  **Critical** report automatically takes the item out of service (status →
  Maintenance) until a manager resolves it.
- **Dashboard & Reports** — live KPI tiles, charts, idle-equipment candidates
  for reassignment, and most-requested items — all computed from real data.
- **AI assistant** — a floating chat widget that answers "what's available in
  X", plans a project from existing kit, and estimates reuse savings.
- **Dark / light theme** — toggle in the top-right of the login card, the
  mobile top bar, and the sidebar, so it's available everywhere in the app,
  not just before signing in. Persisted across visits.
- **English / Arabic** — language toggle in the same three places, with full
  RTL layout, an Arabic-aware font, and a translated UI. Persisted across
  visits. (Equipment names, categories, and free-text purposes/descriptions
  stay as entered — those are user data, not app chrome, so they aren't
  auto-translated.)

## Stack

- **Backend:** Node.js + Express (`server.js`) — a REST API backed by a JSON
  file (`data/db.json`) that acts as a lightweight database. No external
  services or API keys required.
- **Frontend:** Static HTML/CSS/vanilla JS (`public/`) — no build step, no
  framework. Talks to the backend over `fetch()`.
- **"AI" assistant:** a small rule/keyword engine on the backend
  (`assistantReply` in `server.js`) that reasons over the *live* equipment,
  booking, and issue data — no external LLM call, so it works fully offline.
  Swap that one function for a real model call (Anthropic API, etc.) if you
  want true natural-language understanding later. Note: the assistant's quick
  reply chips always send their query to the backend in English under the
  hood (translated only for on-screen display), so they work correctly in
  either language; free-typed questions while in Arabic may fall back to a
  generic answer since the keyword matching itself is English-only for now.

## Running it

Requires [Node.js](https://nodejs.org) 18+.

```bash
npm install
npm start
```

Then open **http://localhost:3000** in your browser.

## Opening in VS Code

1. Unzip the project.
2. `File → Open Folder…` and select the `equipuse` folder.
3. Open a terminal inside VS Code (`` Ctrl/Cmd+` ``) and run `npm install && npm start`.
4. Open `http://localhost:3000` in your browser.

## Logging in

There's a simple username/password flow — not real security, just enough to
demonstrate accounts. On the login screen:

- Enter any **username** and **password**, and pick a role (Researcher or
  Lab Manager).
- If that username doesn't exist yet, it's created automatically with the
  password and role you entered.
- If it does exist, the password has to match — you'll get an "incorrect
  password" message otherwise.
- Passwords are stored in plain text in `data/db.json`. That's fine for a
  local demo but **do not reuse a real password here**, and don't treat this
  as production-grade auth.

Two demo accounts are seeded so you can see both roles immediately —
`amal` / `squ2026` (Researcher) and `salim` / `squ2026` (Manager) — or just
tap one of the "pick up an existing card" chips, which signs you in instantly
without typing the password (a demo shortcut, not part of the real auth
check).

There's no department field on login — departments belong to *equipment*,
not to people, so a Lab Manager already sees every department and a
Researcher's requests are just tied to whichever item they pick.

## Project structure

```
equipuse/
├── server.js            # Express app + REST API + assistant logic
├── package.json
├── data/
│   └── db.json           # created on first run — the "database"
├── public/
│   ├── index.html
│   ├── styles.css         # includes dark theme + RTL rules
│   └── app.js             # frontend logic + i18n dictionary, talks to /api/*
└── README.md
```

## API summary

| Method | Route                 | Purpose                                          |
|--------|------------------------|---------------------------------------------------|
| GET    | `/api/state`            | Full snapshot: equipment, users, requests, trend, bookings, issues |
| POST   | `/api/login`             | Create/update a demo identity                      |
| POST   | `/api/requests`          | Submit a new equipment request                     |
| PATCH  | `/api/requests/:id`      | `{action: "approve" \| "deny" \| "return"}`        |
| POST   | `/api/bookings`          | Reserve a future time slot (rejects overlaps)      |
| PATCH  | `/api/bookings/:id`      | `{action: "cancel"}`                               |
| POST   | `/api/issues`            | Report a fault; `Critical` sets equipment to Maintenance |
| PATCH  | `/api/issues/:id`        | `{action: "resolve"}` — restores Available if nothing else is open |
| POST   | `/api/assistant`         | `{query, department}` → structured answer          |

## Notes for extending this

- Swap `data/db.json` for a real database (Postgres, SQLite, Mongo) by
  replacing `loadDb`/`saveDb` in `server.js` — the route handlers don't need
  to change much.
- Add real authentication (sessions, JWT) in place of `/api/login`.
- Replace `assistantReply()` with a call to an actual LLM if you want free-form
  natural-language project planning instead of keyword matching, in either
  language.
- To add another UI language, add a new key (e.g. `fr`) to the `I18N` object
  at the top of `public/app.js` with the same keys as `en`, then add a toggle
  option next to the existing EN/AR ones.
