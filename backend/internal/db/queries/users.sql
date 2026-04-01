-- name: GetUserByEmail :one
SELECT id, username, email, password_hash, role, created_at
FROM users
WHERE email = $1;

-- name: CreateUser :one
INSERT INTO users (username, email, password_hash, role)
VALUES ($1, $2, $3, $4)
RETURNING id, username, email, password_hash, role, created_at;
