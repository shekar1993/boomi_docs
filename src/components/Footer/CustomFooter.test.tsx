import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { describe, expect, it } from "@jest/globals";
import "@testing-library/jest-dom";
import CustomFooter from "./CustomFooter";

describe("CustomFooter", () => {
  const renderComponent = () => {
    return render(<CustomFooter />);
  };

  it("render doc page bottom feedback wrapper", () => {
    renderComponent();
    expect(screen.getByTestId("footer-wrapper")).toBeInTheDocument();
  });

  it("render Providefeedback button", () => {
    renderComponent();
    expect(screen.getByText("Platform Status")).toBeInTheDocument();
  });
});
