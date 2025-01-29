import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import Facet from "./Facet";
import EngineContext from "../common/engineContext";
import { buildFacet } from "@coveo/headless";

// Mock the buildFacet function from @coveo/headless
jest.mock("@coveo/headless", () => ({
  buildFacet: jest.fn(),
}));

// Mock the removeUnderscore function
jest.mock("../../MyCustomScript", () => ({
  removeUnderscore: (str) => str,
}));

const mockFacetController = {
  state: {
    values: [
      { value: "Value 1", numberOfResults: 10 },
      { value: "Value 2", numberOfResults: 5 },
    ],
    canShowMoreValues: true,
    canShowLessValues: false,
  },
  subscribe: jest.fn((callback) => {
    callback();
    return () => {};
  }),
  toggleSelect: jest.fn(),
  showMoreValues: jest.fn(),
  showLessValues: jest.fn(),
  isValueSelected: jest.fn().mockReturnValue(false),
};

const mockEngine = {};

describe("Facet", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    buildFacet.mockReturnValue(mockFacetController);
  });

  const renderComponent = (props) => {
    return render(
      <EngineContext.Provider value={mockEngine}>
        <Facet {...props} />
      </EngineContext.Provider>
    );
  };

  it("renders facet values", () => {
    renderComponent({ title: "Test Facet", field: "test_field" });

    expect(screen.getByText("Test Facet")).toBeInTheDocument();
    expect(screen.getByText("Value 1")).toBeInTheDocument();
    expect(screen.getByText("Value 2")).toBeInTheDocument();
  });

  it("calls toggleSelect when a facet value is clicked", () => {
    renderComponent({ title: "Test Facet", field: "test_field" });

    const valueItem = screen.getByText("Value 1");
    fireEvent.click(valueItem);

    expect(mockFacetController.toggleSelect).toHaveBeenCalledWith(
      expect.objectContaining({ value: "Value 1" })
    );
  });

  it('shows "Show More" button when canShowMoreValues is true', () => {
    renderComponent({ title: "Test Facet", field: "test_field" });
    expect(screen.getByText("Show More")).toBeInTheDocument();
  });

  it('calls showMoreValues when "Show More" button is clicked', () => {
    renderComponent({ title: "Test Facet", field: "test_field" });
    const showMoreButton = screen.getByText("Show More");
    fireEvent.click(showMoreButton);
    expect(mockFacetController.showMoreValues).toHaveBeenCalled();
  });

  it('shows "Show Less" button when canShowLessValues is true', () => {
    mockFacetController.state.canShowLessValues = true;
    renderComponent({ title: "Test Facet", field: "test_field" });
    expect(screen.getByText("Show Less")).toBeInTheDocument();
  });

  it('calls showLessValues when "Show Less" button is clicked', () => {
    mockFacetController.state.canShowLessValues = true;
    renderComponent({ title: "Test Facet", field: "test_field" });
    const showLessButton = screen.getByText("Show Less");
    fireEvent.click(showLessButton);
    expect(mockFacetController.showLessValues).toHaveBeenCalled();
  });
});
