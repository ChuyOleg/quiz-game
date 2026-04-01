# Quiz Game — Business Logic (MVP)

## Entities

### User
- **Registered**: username, email, passwordHash, role (`admin` | `registered`)
- **Guest**: ephemeral session — can join rooms but cannot create them or propose questions

### Question
- Fields: text, canonicalAnswer, alternativeAnswers[], category, difficulty (`easy`|`medium`|`hard`), status (`pending_review`|`approved`|`rejected`)
- Only approved questions appear in games

### Room
- Short human-readable code (e.g. `TIGER-7`)
- Settings: maxPlayers (2–8), questionsPerRound (default 5), answerTimeLimitSeconds (30–120), category filter, difficulty filter
- Status: `waiting` → `in_progress` → `finished`

### RoomPlayer
- score, hasAnsweredCurrentQuestion

### GameQuestion
- Status: `active` → `judging` → `completed`
- PlayerAnswer: text, submittedAt, judgement (`pending`|`correct`|`incorrect`), pointsAwarded

---

## User Roles & Permissions

| Action | Guest | Registered | Host | Admin |
|---|---|---|---|---|
| Create room | ✗ | ✓ | — | ✓ |
| Join room via code | ✓ | ✓ | — | ✓ |
| Propose questions | ✗ | ✓ | — | ✓ |
| Approve/reject questions | ✗ | ✗ | ✗ | ✓ |
| Judge answers | ✗ | ✗ | ✓ | ✓ |
| Kick players | ✗ | ✗ | ✓ | ✓ |

---

## Game Flow

1. **Lobby** — Host creates room and shares code. Players join. Host starts when ready (min 2 players).

2. **Question Active** — Question shown to all. Players type answers (hidden from each other). Timer runs. When all submit or timer expires → Judging.

3. **Judging** — Host marks each answer `correct` or `incorrect`. Exact matches to canonical/alternative answers are auto-highlighted as suggestions.

4. **Answer Reveal** — All answers shown with judgements. Scoreboard updates.

5. **Game Over** — Final standings shown after all questions. Rematch option.

---

## Scoring

| Difficulty | Base Points |
|---|---|
| Easy | 100 |
| Medium | 200 |
| Hard | 300 |

---

## Question Lifecycle

1. Registered user proposes a question → enters `pending_review`
2. Admin approves or rejects it
3. Approved questions enter the question bank and are available for games

---

## Key Edge Cases

| Situation | Rule |
|---|---|
| Host disconnects | 30s grace, then game is abandoned |
| Player disconnects | Answer preserved if already submitted; subsequent questions score 0 |
| All answers wrong | Host can void the question (no points awarded) |
| Not enough approved questions | Game blocked at start; host notified to adjust filters |
| End-game tie | Tiebreak by average answer time on correct answers; if still tied: co-winners |
