import React from "react";
import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { screen, render, cleanup } from "@testing-library/react";
import UserEvent from "@testing-library/user-event";
import matchers from "@testing-library/jest-dom/matchers";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";

expect.extend(matchers);
import Pokemon from ".";

describe("Pokemon Page", () => {
  afterEach(() => {
    cleanup();
  });

  it("Displays one Pokemon with appropriate information", async () => {
    vi.spyOn(axios, "get").mockResolvedValueOnce({
      data: [
        {
          abilities: [{}],
          base_experience: 64,
          forms: [{}],
          game_indices: [{}],
          height: 7,
          held_items: [],
          id: 1,
          is_default: true,
          location_area_encounters: "",
          moves: [{}],
          name: "bulba",
          order: 1,
          past_types: [],
          species: {},
          sprites: {},
          stats: [{}],
          types: [{}],
          weight: 69,
        },
      ],
    });
    render(
      <BrowserRouter>
        <Pokemon />
      </BrowserRouter>
    );
    // const title = await screen.getAllByRole("heading")[0];
    // console.log(title.textContent);
    // expect(title).toHaveTextContent("bulba");

    const title = await screen.getByRole("name");

    expect(title).toBeInTheDocument();
  });
});
