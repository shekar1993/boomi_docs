import React from "react";
import { render, screen, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import QuerySummary from "./QuerySummary";
import EngineContext from "../common/engineContext";
import { buildQuerySummary } from "@coveo/headless";
import { describe, expect, it } from "@jest/globals";

// Mock the buildQuerySummary function from @coveo/headless
jest.mock("@coveo/headless", () => ({
  buildQuerySummary: jest.fn(),
}));

const mockQuerySummaryController = {
  state: {
    firstResult: 1,
    lastResult: 10,
    total: 100,
    hasResults: true,
    hasQuery: true,
    query: "test query",
  },
  subscribe: jest.fn((callback) => {
    callback();
    return () => {};
  }),
};

// Mock the useContext hook for the EngineContext
const mockEngine = {};

describe("QuerySummary", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    buildQuerySummary.mockReturnValue(mockQuerySummaryController);
  });

  const renderComponent = () => {
    return render(
      <EngineContext.Provider value={mockEngine}>
        <QuerySummary />
      </EngineContext.Provider>
    );
  };

  it("subscribes to the controller state changes", () => {
    renderComponent();
    expect(mockQuerySummaryController.subscribe).toHaveBeenCalled();
  });

  it("updates state when controller state changes", () => {
    renderComponent();
    const newState = {
      firstResult: 11,
      lastResult: 20,
      total: 200,
      hasResults: true,
      hasQuery: true,
      query: "updated query",
    };
    act(() => {
      mockQuerySummaryController.state = newState;
      mockQuerySummaryController.subscribe.mock.calls[0][0]();
    });
    expect(screen.getByTestId("result-query")).toBeInTheDocument();
  });
  
  it("renders null when hasResults is false", () => {
    mockQuerySummaryController.state.hasResults = false;
    renderComponent();
    expect(screen.queryByTestId("result-query")).not.toBeInTheDocument();
  });
});
