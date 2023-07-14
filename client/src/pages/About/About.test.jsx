import React from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup } from "@testing-library/react";
import UserEvent from "@testing-library/user-event";
import matchers from "@testing-library/jest-dom/matchers";
import About from ".";

expect.extend(matchers);

describe("About Page", () => {
  beforeEach(() => {
    render(<About />);
  });

  afterEach(() => {
    cleanup();
  });

  it("Displays a heading with text", () => {
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    expect(heading.textContent).toBe("Pokémon Pokédex");
  });

  it("Displays a description with text", () => {
    const description = screen.getByRole("description");
    expect(description).toBeInTheDocument();
    expect(description.textContent).toBe(
      "The Pokédex section has a wealth of information on all the Pokémon creatures from the entire game series. On the main list pages you can see the various stats of each Pokémon. Click a Pokémon's name to see a detailed page with Pokédex data, descriptions from previous games, sprites, evolutions, moves and more!"
    );
  });
});
