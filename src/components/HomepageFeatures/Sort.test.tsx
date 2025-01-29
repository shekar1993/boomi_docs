import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Sort from "./Sort";
import {
  buildSort,
  buildRelevanceSortCriterion,
  buildDateSortCriterion,
  SortOrder,
  buildCriterionExpression,
  buildQuerySummary,
  Sort as HeadlessSort,
} from "@coveo/headless";
import EngineContext from "../common/engineContext";
import { InputLabel, MenuItem, Select } from "@mui/material";

// Mock the buildSort and buildQuerySummary functions
jest.mock("@coveo/headless", () => ({
  buildSort: jest.fn(),
  buildRelevanceSortCriterion: jest.fn().mockReturnValue("relevance"),
  buildDateSortCriterion: jest.fn((order) => `date_${order}`),
  buildQuerySummary: jest.fn(),
  buildCriterionExpression: jest.fn((criterion) => `expression:${criterion}`),
  SortOrder: { Ascending: "ascending", Descending: "descending" },
}));

describe("Sort Component", () => {
  const mockEngine = {};
  const mockController = {
    state: { sortCriteria: "relevance" },
    subscribe: jest.fn(),
    sortBy: jest.fn(),
  };

  const mockQueryController = {
    state: { hasResults: true },
    subscribe: jest.fn(),
  };

  const mockSortController = {
    state: {
      sortCriteria: "relevance",
    },
    subscribe: jest.fn((callback) => {
      callback();
      return () => {};
    }),
    sortBy: jest.fn(),
  };

  const criteria: [string, string][] = [
    ["Relevance", "relevance"],
    ["Date (Ascending)", "date_ascending"],
    ["Date (Descending)", "date_descending"],
  ];

  const state = {
    sortCriteria: "relevance",
  };

  beforeEach(() => {
    jest.clearAllMocks();
    (buildSort as jest.Mock).mockReturnValue(mockController);
    (buildQuerySummary as jest.Mock).mockReturnValue(mockQueryController);
  });

  const renderComponent = () => {
    return render(
      <EngineContext.Provider value={mockEngine}>
        <Sort />
      </EngineContext.Provider>
    );
  };

  it('renders the Sort component', () => {
    renderComponent();
    expect(screen.getByTestId('result-sortby')).toBeInTheDocument();
    expect(screen.getByTestId('sort-by-label')).toBeInTheDocument();
  });

  it("does not render the component if there are no results", () => {
    mockQueryController.state.hasResults = false;
    renderComponent();
    expect(screen.queryByTestId("result-sortby")).toBeNull();
  });

  it("subscribes to controller state updates", () => {
    renderComponent();
    expect(mockController.subscribe).toHaveBeenCalled();
    expect(mockQueryController.subscribe).toHaveBeenCalled();
  });
});
