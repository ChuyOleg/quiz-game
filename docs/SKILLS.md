# Claude Code Skills & Tools — Quiz Game

A living reference of Claude Code features we use in this project and when to reach for each.

---

## MCPs (Model Context Protocol)

| MCP | Status | When to use |
|---|---|---|
| **GitHub** | Configured | Read issues/PRs, create branches, open PRs without leaving the conversation |
| **PostgreSQL** | Configured | Query live DB schema and data while debugging or planning migrations |

Both are enabled in `.claude/settings.local.json` (`enabledMcpjsonServers`).

---

## Slash Commands (Skills)

| Skill | Command | When to use |
|---|---|---|
| Commit | `/commit` | Generate a proper commit message and commit staged changes |
| Simplify | `/simplify` | Review freshly written code for over-engineering and quality issues — run after finishing a feature |
| Update Config | `/update-config` | Add or modify hooks, permissions, and other settings in `settings.json` |

---

## Hooks (Automated Checks)

Configured in `.claude/settings.json` — fire automatically on every file edit.

| Trigger | Scope | Command |
|---|---|---|
| PostToolUse (Write/Edit) | `backend/**` | `golangci-lint run` — catches lint errors immediately |
| PostToolUse (Write/Edit) | `frontend/**` | `npm run lint` (ESLint) — catches TS/React issues immediately |

> **Note:** `golangci-lint` must be installed at `/home/oleh/go/bin/golangci-lint`.
> Install: `go install github.com/golangci/golangci-lint/cmd/golangci-lint@v1.59.1`

---

## Parallel Agents

Claude Code can run subagents in parallel — useful for:
- Writing backend + frontend for the same feature simultaneously
- Running tests while writing the next feature
- Exploring multiple implementation options at once
