import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import FacetList from "./FacetList";
import EngineContext from "../common/engineContext";
import Facet from "./Facet";

jest.mock("./Facet", () => {
  return jest.fn(() => <div data-testid="mock-facet"></div>);
});

const mockEngine = {};

describe("FacetList", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const renderComponent = () => {
    return render(
      <EngineContext.Provider value={mockEngine}>
        <FacetList />
      </EngineContext.Provider>
    );
  };

  it("renders FacetList component", () => {
    renderComponent();
    expect(screen.getByTestId("result-filters")).toBeInTheDocument();
  });

  it('renders "Refine By" heading', () => {
    renderComponent();
    expect(screen.getByTestId("result-filters-heading")).toBeInTheDocument();
    expect(screen.getByText("Refine By")).toBeInTheDocument();
  });

  it("renders Facet components with correct props", () => {
    renderComponent();
    expect(Facet).toHaveBeenCalledWith(
      expect.objectContaining({ field: "matter", title: "Topic" }),
      {}
    );
    expect(Facet).toHaveBeenCalledWith(
      expect.objectContaining({ field: "objecttype", title: "Content Type" }),
      {}
    );
  });
});



