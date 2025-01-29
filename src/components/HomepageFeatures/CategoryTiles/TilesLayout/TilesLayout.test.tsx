import React from "react";
import { render, screen } from "@testing-library/react";
import TilesLayout from "./TilesLayout";
import { describe, expect, it } from "@jest/globals";
import "@testing-library/jest-dom";

jest.mock("@docusaurus/useBaseUrl", () => ({
  __esModule: true,
  default: jest.fn((url) => url),
}));

jest.mock("@docusaurus/Link", () => {
  return jest.fn(() => <div data-testid="mock-link">Mock Link</div>);
});

describe("TilesLayout Component", () => {
  const mockProps = {
    title: "Mock Title",
    content: "Mock Content",
    iconName: "mock-icon",
    redirectLink: "/mock-link",
  };

  it("renders tiles layout wrapper", () => {
    render(<TilesLayout {...mockProps} />);
    expect(screen.getByTestId("tiles-layout-wrapper")).toBeInTheDocument();
  });
});
