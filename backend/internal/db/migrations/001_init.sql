-- 001_init.sql
-- Initial schema skeleton — to be expanded as features are built

CREATE TABLE IF NOT EXISTS users (
    id         BIGSERIAL PRIMARY KEY,
    username   TEXT        NOT NULL UNIQUE,
    email      TEXT        NOT NULL UNIQUE,
    password_hash TEXT     NOT NULL,
    role       TEXT        NOT NULL DEFAULT 'registered' CHECK (role IN ('admin', 'registered')),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
