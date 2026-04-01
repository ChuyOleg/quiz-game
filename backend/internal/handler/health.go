package handler

import "github.com/gofiber/fiber/v2"

type HealthResponse struct {
	Status  string `json:"status"`
	Version string `json:"version"`
}

func HealthCheck(c *fiber.Ctx) error {
	return c.JSON(HealthResponse{
		Status:  "ok",
		Version: "0.1.0",
	})
}
