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

## Step 2: Scaffold the Project

Once the stack is decided:
- Initialize repo structure
- Set up linting / formatting
- Configure CI
- "Hello world" that connects all layers end-to-end

---

## Step 3: Build Incrementally

| # | Feature | Notes |
|---|---|---|
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

## Claude Skills & Features to Learn in Parallel

### MCPs
| MCP | Status | Value |
|---|---|---|
| GitHub | Configured | Read issues/PRs, create PRs from conversation |
| PostgreSQL | Add later | Query DB schema and data while debugging |

### Claude Code Skills
| Skill | When to use |
|---|---|
| `/commit` | Generate proper commit messages and commit staged changes |
| `/simplify` | Review freshly written code for quality and over-engineering |
| `/update-config` | Configure hooks (auto-lint, auto-test, etc.) |

### Hooks
Automate actions on Claude Code events:
- **Pre-tool-use**: run linter before Claude edits files
- **Post-tool-use**: auto-run tests after Claude writes code

Set up with `/update-config` when the project has a working test suite.

### Parallel Agents
Claude Code can run subagents in parallel — useful for:
- Writing backend + frontend for the same feature simultaneously
- Running tests while writing the next feature
- Exploring multiple implementation options at once
