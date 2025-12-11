import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import App from "../App";

describe("Portfolio smoke tests", () => {
  test("renders hero CTA buttons", () => {
    render(<App />);
    expect(screen.getByRole("link", { name: /book a call/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /view services/i })).toBeInTheDocument();
  });

  test("renders services cards", () => {
    render(<App />);
    const services = screen.getAllByText(/weeks/i);
    expect(services.length).toBeGreaterThan(0);
  });

  test("renders project cards", () => {
    render(<App />);
    const projects = screen.getAllByRole("heading", { level: 3 });
    expect(projects.length).toBeGreaterThan(3);
  });
});

