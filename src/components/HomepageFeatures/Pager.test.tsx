import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import Pager from "./Pager";
import EngineContext from "../common/engineContext";
import { buildPager, buildQuerySummary } from "@coveo/headless";
import { Pagination } from "@mui/material";

// Mock the buildPager and buildQuerySummary functions from @coveo/headless
jest.mock("@coveo/headless", () => ({
  buildPager: jest.fn(),
  buildQuerySummary: jest.fn(),
}));

const mockPagerController = {
  state: {
    currentPage: 1,
    maxPage: 5,
  },
  subscribe: jest.fn((callback) => {
    callback();
    return () => {};
  }),
  selectPage: jest.fn(),
};

const mockQueryState = {
  hasResults: true,
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

describe("Pager", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    buildPager.mockReturnValue(mockPagerController);
    buildQuerySummary.mockReturnValue(mockQuerySummaryController);
  });

  const renderComponent = () => {
    return render(
      <EngineContext.Provider value={mockEngine}>
        <Pager />
      </EngineContext.Provider>
    );
  };

  it("renders the pager component", () => {
    renderComponent();
    const pager = screen.getByTestId("result-pagination");
    expect(pager).toBeInTheDocument();
  });

  it("displays the current page text", () => {
    renderComponent();
    const currentPageText = screen.getByTestId("results-current-page");
    expect(currentPageText).toBeInTheDocument();
    expect(currentPageText).toHaveTextContent("Current page");
  });

  it("does not render Pagination component when there are no results", () => {
    mockQuerySummaryController.state.hasResults = false;
    renderComponent();
    const pager = screen.queryByTestId("result-pagination");
    expect(pager).not.toBeInTheDocument();
  });

  it("updates query state when query controller state changes", () => {
    renderComponent();
    const newQueryState = { hasResults: false };
    act(() => {
      mockQuerySummaryController.state = newQueryState;
      mockQuerySummaryController.subscribe.mock.calls[0][0]();
    });
    const pager = screen.queryByTestId("result-pagination");
    expect(pager).not.toBeInTheDocument();
  });

  it("updates state when controller state changes", () => {
    renderComponent();
    const newState = { currentPage: 2, maxPage: 5 };
    act(() => {
      mockPagerController.state = newState;
      mockPagerController.subscribe.mock.calls[0][0]();
    });
  });
  
  it("subscribes to the controller state changes", () => {
    renderComponent();
    expect(mockPagerController.subscribe).toHaveBeenCalled();
    expect(mockQuerySummaryController.subscribe).toHaveBeenCalled();
  });
});
