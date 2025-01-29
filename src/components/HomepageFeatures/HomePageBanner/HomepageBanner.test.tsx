import React from "react";
import { render, screen } from "@testing-library/react";
import HomePageBanner from "./HomePageBanner";
import { describe, expect, it } from "@jest/globals";
import "@testing-library/jest-dom";

jest.mock("@docusaurus/Link", () => ({ children, href }) => (
  <a href={href}>{children}</a>
));
jest.mock("@docusaurus/useBaseUrl", () => jest.fn());

function renderComponent(homePageBanner) {
  render(<HomePageBanner homePageBanner={homePageBanner} />);
}

describe("HomePageBanner Component", () => {
  const homePageBanner = {
    showBanner: true,
    bannerImage: "light-mode-image.jpg",
    bannerImageDarkMode: "dark-mode-image.jpg",
    bannerHeadline: "This is a headline for the banner",
    bannerCTAtext: "Click here",
    bannerCTAlink: "https://example.com",
  };

  it("renders the banner content", () => {
    renderComponent(homePageBanner);
    expect(
      screen.getByTestId("home-page-banner-container")
    ).toBeInTheDocument();
  });
});
