import React from "react";
import { render, screen } from "@testing-library/react";
import CardLayout from "./CardLayout";
import { describe, expect, it } from "@jest/globals";
import "@testing-library/jest-dom";

jest.mock("@docusaurus/useBaseUrl", () => ({
  __esModule: true,
  default: jest.fn((url) => url),
}));

jest.mock("@docusaurus/Link", () => {
  return jest.fn(() => <div data-testid="mock-link">Mock Link</div>);
});

const mockCardDetails = {
  id: 1,
  heading: "Release Notes",
  cardIcon: "img/sparkle.svg",
  darkModeCardIcon: "img/sparkle_dark.svg",
  footer: {
    footerTitle: "View previous Release Notes",
    footerDocLink:
      "docs/Atomsphere/Release%20Notes/Oct2023/atm-Whats_new_in_Oct_2023_257fa0c5-76dd-4fdf-a8b8-3adf1be5b7e0",
  },
  body: [
    {
      title: "May 25, 2024",
      titleContent: "New in June 2024",
      icon: "calendar",
      iconColor: "default",
      docLink: "docs/Atomsphere/Release%20Notes/Jun2024/Whats_new_in_Jun_2024",
    },
    {
      title: "April 27, 2024",
      titleContent: "New in May 2024",
      icon: "calendar",
      iconColor: "default",
      docLink: "docs/Atomsphere/Release%20Notes/May2024/Whats_new_in_May_2024",
    },
    {
      title: "April 8, 2024",
      titleContent: "New in April 2024",
      icon: "calendar",
      iconColor: "default",
      docLink: "docs/Atomsphere/Release%20Notes/Apr2024/Whats_new_in_Apr_2024",
    },
  ],
};

function renderComponent(cardDetails = mockCardDetails) {
  render(<CardLayout cardDetails={cardDetails} />);
}

describe("CardLayout Component", () => {
  it("renders the card footer", () => {
    renderComponent();
    expect(screen.getByTestId("card-footer")).toBeInTheDocument();
  });

  it("renders the card footer", () => {
    renderComponent();
    expect(screen.getByTestId("card-layout-wrapper")).toBeInTheDocument();
  });
});
