# Quiz Game — Claude Instructions

## Project Overview
A fun multiplayer quiz app for friends, built with an AI agentic-driven development approach.

## Business Logic
See [docs/BUSINESS-LOGIC.md](docs/BUSINESS-LOGIC.md) for full domain rules, entities, game flow, scoring, and edge cases.

## Tech Stack

| Layer | Choice |
|---|---|
| Backend | Go + Fiber |
| Real-time | Gorilla WebSocket |
| Database | PostgreSQL + sqlc |
| Frontend | React + Vite (TypeScript) |
| Auth | JWT + bcrypt |

## Project Structure

```
quiz-game/
├── backend/                  # Go + Fiber API
│   ├── cmd/server/main.go    # Entry point
│   ├── internal/
│   │   ├── config/           # Env var loading
│   │   ├── handler/          # HTTP handlers
│   │   ├── middleware/        # JWT auth, etc.
│   │   ├── model/            # Domain structs
│   │   ├── ws/               # WebSocket hub
│   │   └── db/
│   │       ├── migrations/   # .sql migration files
│   │       ├── queries/      # .sql files for sqlc
│   │       └── sqlc/         # sqlc-generated Go code
│   ├── go.mod
│   └── sqlc.yaml
├── frontend/                 # React + Vite (TypeScript)
│   ├── src/
│   │   ├── api/              # Typed fetch wrappers
│   │   ├── components/
│   │   ├── pages/
│   │   └── ws/               # WebSocket client hook
│   ├── package.json
│   └── vite.config.ts        # Proxies /api and /ws to backend
├── docker-compose.yml        # PostgreSQL for local dev
├── .env.example              # Required env vars
└── .github/workflows/ci.yml  # Go + Node CI
```

## Development Guidelines

### Go (backend)
- **Formatter:** `gofmt` (built into Go toolchain) — run automatically by `golangci-lint`
- **Linter:** `golangci-lint` with config in `backend/.golangci.yml`
  - Enabled: `errcheck`, `govet`, `staticcheck`, `unused`, `gosimple`, `ineffassign`
  - Run: `cd backend && golangci-lint run`
- All errors must be handled — `errcheck` will catch ignored errors
- No unused variables, functions, or imports

### TypeScript / React (frontend)
- **Formatter:** Prettier with config in `frontend/.prettierrc`
  - 2-space indent, double quotes, semicolons, trailing commas (ES5), max line width 100
  - Run: `cd frontend && npm run format` (fix) or `npm run format:check` (CI check)
- **Linter:** ESLint with config in `frontend/.eslintrc.cjs`
  - Extends: `eslint:recommended`, `@typescript-eslint/recommended`, `react-hooks/recommended`
  - Run: `cd frontend && npm run lint`
- Strict TypeScript: no unused locals/parameters, no implicit any

## Testing

- Backend: `go test ./... -race` from `backend/`
- Frontend: `npm run typecheck` + `npm run lint` from `frontend/`

## Common Commands

```bash
# Local dev
docker compose up -d           # Start PostgreSQL
cd backend && go run ./cmd/server   # Start backend (port 8080)
cd frontend && npm run dev    # Start frontend (port 5173)

# Backend
cd backend
go build ./...
go test ./... -race
go vet ./...
sqlc generate                 # Regenerate DB code from SQL files

# Frontend
cd frontend
npm install
npm run dev
npm run typecheck
npm run lint
npm run build
```
