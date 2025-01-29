import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { describe, expect, it } from "@jest/globals";
import DocPageFeedback from "./DocPageFeedback";
import "@testing-library/jest-dom";

describe("DocPageFeedback", () => {
  const renderComponent = () => {
    return render(<DocPageFeedback />);
  };

  it("render doc page bottom feedback wrapper", () => {
    renderComponent();
    expect(
      screen.getByTestId("doc-page-bottom-feedback-wrapper")
    ).toBeInTheDocument();
  });

  it("render doc feedback button", () => {
    renderComponent();
    expect(screen.getByText("Was this topic helpful?")).toBeInTheDocument();
  });

  it("render Providefeedback button", () => {
    renderComponent();
    fireEvent.click(screen.getByText("Provide Feedback"));
  });

  it("render yes button", () => {
    renderComponent();
    fireEvent.click(screen.getByText("Yes"));
  });
  
  it("render no button", () => {
    renderComponent();
    fireEvent.click(screen.getByText("No"));
  });
});
