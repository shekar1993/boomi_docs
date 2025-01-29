import React from "react";
import { render, screen } from "@testing-library/react";
import WhatsNewSection from "./WhatsNewSection";
import { describe, expect, it } from "@jest/globals";
import "@testing-library/jest-dom";

jest.mock("./CardLayout/CardLayout", () => ({ cardDetails }) => (
  <div data-testid="card-layout">{cardDetails.heading}</div>
));

function renderComponent() {
  render(<WhatsNewSection />);
}

describe("WhatsNewSection Component", () => {
  it("renders the WhatsNewSection component", () => {
    renderComponent();
    expect(screen.getByTestId("whats-new-section-wrapper")).toBeInTheDocument();
  });
});
