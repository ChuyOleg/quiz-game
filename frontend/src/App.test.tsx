import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders the heading", () => {
    render(<App />);
    expect(screen.getByRole("heading", { name: /quiz game/i })).toBeInTheDocument();
  });

  it("shows connecting message before fetch resolves", () => {
    render(<App />);
    expect(screen.getByText(/connecting to backend/i)).toBeInTheDocument();
  });
});
