import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import ResultsPerPage from "./ResultsPerPage";
import EngineContext from "../common/engineContext";
import { buildResultsPerPage, buildQuerySummary } from "@coveo/headless";

// Mock the buildResultsPerPage and buildQuerySummary functions from @coveo/headless
jest.mock("@coveo/headless", () => ({
  buildResultsPerPage: jest.fn(),
  buildQuerySummary: jest.fn(),
}));

const mockResultsPerPageController = {
  state: {
    numberOfResults: 5,
  },
  subscribe: jest.fn((callback) => {
    callback();
    return () => {};
  }),
  set: jest.fn(),
};

const mockQuerySummaryController = {
  state: {
    hasResults: true,
  },
  subscribe: jest.fn((callback) => {
    callback();
    return () => {};
  }),
};

// Mock the useContext hook for the EngineContext
const mockEngine = {};

describe("ResultsPerPage", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    buildResultsPerPage.mockReturnValue(mockResultsPerPageController);
    buildQuerySummary.mockReturnValue(mockQuerySummaryController);
  });

  const renderComponent = () => {
    return render(
      <EngineContext.Provider value={mockEngine}>
        <ResultsPerPage />
      </EngineContext.Provider>
    );
  };

  it("subscribes to the controller state changes", () => {
    renderComponent();
    expect(mockResultsPerPageController.subscribe).toHaveBeenCalled();
  });

  it("updates state when controller state changes", () => {
    renderComponent();
    const newState = {
      numberOfResults: 10,
    };
    act(() => {
      mockResultsPerPageController.state = newState;
      mockResultsPerPageController.subscribe.mock.calls[0][0]();
    });
    expect(screen.getByDisplayValue("10")).toBeInTheDocument();
  });

  it("renders results per page options when there are results", () => {
    renderComponent();
    expect(screen.getByTestId("results-per-page")).toBeInTheDocument();
  });

  it("does not render results per page options when there are no results", () => {
    mockQuerySummaryController.state.hasResults = false;
    renderComponent();
    expect(screen.queryByTestId("results-per-page")).not.toBeInTheDocument();
  });
});
