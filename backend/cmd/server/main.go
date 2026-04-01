package main

import (
	"log"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/logger"
	"github.com/gofiber/fiber/v2/middleware/recover"

	"github.com/ChuyOleg/quiz-game/backend/internal/config"
	"github.com/ChuyOleg/quiz-game/backend/internal/handler"
)

func main() {
	cfg := config.Load()

	app := fiber.New(fiber.Config{
		AppName: "quiz-game v0.1.0",
	})

	app.Use(recover.New())
	app.Use(logger.New())

	api := app.Group("/api")
	v1 := api.Group("/v1")
	v1.Get("/health", handler.HealthCheck)

	log.Printf("Starting server on :%s (env=%s)\n", cfg.Port, cfg.AppEnv)
	log.Fatal(app.Listen(":" + cfg.Port))
}
