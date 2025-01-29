import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import DevDocsAlertBanner from "./DevDocsAlertBanner";
import homePageControls from "../../Controls";

// Mock the homePageControls object to manipulate its state
jest.mock("../../Controls", () => ({
  devDocsAlertBanner: {
    showBanner: false,
    bannerText: "This is a banner text",
    bannerCTAtext: "Learn More",
    bannerCTAlink: "https://example.com",
  },
}));

describe("DevDocsAlertBanner Component", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("does not render the banner if showBanner is false", () => {
    render(<DevDocsAlertBanner />);
    const banner = screen.queryByTestId("custom-alert-banner");
    expect(banner).toBeNull();
  });

  it("renders the banner when showBanner is true", () => {
    homePageControls.devDocsAlertBanner.showBanner = true;
    render(<DevDocsAlertBanner />);
    const banner = screen.getByTestId("custom-alert-banner");
    expect(banner).toBeInTheDocument();
  });

  it("displays the correct banner text", () => {
    homePageControls.devDocsAlertBanner.showBanner = true;
    render(<DevDocsAlertBanner />);
    const bannerText = screen.getByTestId("banner-text");
    expect(bannerText).toHaveTextContent(
      homePageControls.devDocsAlertBanner.bannerText
    );
  });
});
