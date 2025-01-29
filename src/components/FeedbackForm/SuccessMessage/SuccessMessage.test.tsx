import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { describe, expect, it } from "@jest/globals";
import "@testing-library/jest-dom";
import SuccessMessage from "./SuccessMessage";

describe("SuccessMessage", () => {
  const renderComponent = () => {
    return render(<SuccessMessage />);
  };

  it("render feedback form wrapper", () => {
    renderComponent();
    expect(screen.getByTestId("feedback-form-wrapper")).toBeInTheDocument();
  });

  it("render Done button", () => {
    renderComponent();
    fireEvent.click(screen.getByText("Done"));
  });
});
