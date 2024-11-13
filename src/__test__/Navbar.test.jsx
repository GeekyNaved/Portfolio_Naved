import {describe, expect, test} from "vitest";
import Navbar from "../components/Navbar";
import {render, screen} from "@testing-library/react";

describe("Navbar component", () => {
  test("renders the navbar with correct title", () => {
    render(<Navbar />);
    // Look for the text "NK" inside the h4 element
    const nameElement = screen.getByRole("heading", {level: 4});
    expect(nameElement).toHaveTextContent("NK");
    // const buttonElement = screen.getByText("Resume");
    // expect(buttonElement).toBeInTheDocument();

    // const buttonElement = screen.getByRole("button", {name: "Resume"});
    // expect(buttonElement).toBeInTheDocument();
  });
});
