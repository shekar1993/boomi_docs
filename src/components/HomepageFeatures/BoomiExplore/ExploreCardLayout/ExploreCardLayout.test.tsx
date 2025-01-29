import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import ExploreCardLayout from "./ExploreCardLayout";
import homePageControls from "../../../Controls";

// Mocking docusaurus dependencies
jest.mock("@docusaurus/useBaseUrl", () => jest.fn());
jest.mock("@docusaurus/Link", () => ({ children, ...props }) => (
  <a {...props}>{children}</a>
));

const mockUseBaseUrl = useBaseUrl as jest.Mock;

describe("ExploreCardBody Component", () => {
  beforeEach(() => {
    mockUseBaseUrl.mockImplementation((link) => link);
  });

  it("render the explore card layout wrapper", () => {
    render(
      <ExploreCardLayout
        cardDetails={homePageControls?.homePageExploreSection?.exploreCards[0]}
      />
    );
    expect(
      screen.getByTestId("explore-card-layout-wrapper")
    ).toBeInTheDocument();
  });

  it("render the explore card body", () => {
    render(
      <ExploreCardLayout
        cardDetails={homePageControls?.homePageExploreSection?.exploreCards[0]}
      />
    );
    expect(screen.getByTestId("explore-card-body")).toBeInTheDocument();
  });

  it("render the explore card body link wrapper", () => {
    render(
      <ExploreCardLayout
        cardDetails={homePageControls?.homePageExploreSection?.exploreCards[0]}
      />
    );
    expect(
      screen.getByTestId("explore-card-links-wrapper")
    ).toBeInTheDocument();
  });
});
