# Quiz Game — Development Plan

## Current State
- Business logic fully documented (`docs/BUSINESS-LOGIC.md`)
- GitHub MCP configured (`.mcp.json`)
- Tech stack: **TBD**
- Code: none yet

---

## Step 1: Decide Tech Stack — DONE

| Layer | Choice |
|---|---|
| Backend | Go + Fiber |
| Real-time | Gorilla WebSocket |
| Database | PostgreSQL + sqlc |
| Frontend | React + Vite (TypeScript) |
| Auth | JWT + bcrypt |

---

## Step 2: Scaffold the Project — DONE

- Repo structure initialized
- Linting / formatting configured (golangci-lint + ESLint + Prettier)
- CI configured (`.github/workflows/ci.yml`)
- Hello world connecting all layers end-to-end
- Post-edit lint hooks configured (`.claude/settings.json`)

---

## Step 3: Build Incrementally

| # | Feature | Notes |
|---|---|---|
| 0 | DB migrations | Set up goose; create first migration (`users` table) |
| 1 | Auth | Register/login, JWT, roles (guest / registered / admin) |
| 2 | Question bank | CRUD, status lifecycle, admin approval flow |
| 3 | Room management | Create/join with human-readable room code |
| 4 | Game engine | Core loop: lobby → active → judging → reveal → game over |
| 5 | Real-time sync | WebSocket events for all game state transitions |
| 6 | Frontend | UI on top of the working backend |

---

## Step 4: Keep `CLAUDE.md` Up to Date

As decisions are made, fill in the empty sections:
- Tech Stack
- Project Structure
- Development Guidelines
- Testing strategy
- Common commands (build, run, test)

This is how Claude carries context across sessions without re-explanation.

---

## Claude Skills & Features — DONE

### MCPs
| MCP | Status | Value |
|---|---|---|
| GitHub | Configured | Read issues/PRs, create PRs from conversation |
| PostgreSQL | Configured | Query DB schema and data while debugging |

### Claude Code Skills
| Skill | When to use |
|---|---|
| `/commit` | Generate proper commit messages and commit staged changes |
| `/simplify` | Review freshly written code for quality and over-engineering |
| `/update-config` | Configure hooks (auto-lint, auto-test, etc.) |

### Hooks
Configured in `.claude/settings.json` — fire automatically on every file edit:
- **PostToolUse** `backend/**`: runs `golangci-lint run`
- **PostToolUse** `frontend/**`: runs `npm run lint`

### Parallel Agents
Claude Code can run subagents in parallel — useful for:
- Writing backend + frontend for the same feature simultaneously
- Running tests while writing the next feature
- Exploring multiple implementation options at once
