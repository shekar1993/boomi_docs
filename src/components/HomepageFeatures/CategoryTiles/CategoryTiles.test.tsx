import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "@jest/globals";
import CategoryTiles from "./CategoryTiles";
import TilesLayout from "./TilesLayout/TilesLayout";
import "@testing-library/jest-dom";

jest.mock("./TilesLayout/TilesLayout", () => {
  return jest.fn(() => <div data-testid="tiles-layout">Tiles Layout</div>);
});

describe("CategoryTiles Component", () => {
  it("renders category tiles wrapper", () => {
    render(<CategoryTiles />);
    const categoryTilesWrapper = screen.getByTestId("category-tiles-wrapper");
    expect(categoryTilesWrapper).toBeInTheDocument();
  });
});
