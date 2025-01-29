import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "./Hero";
import { describe, expect, it } from "@jest/globals";

describe("Hero Component", () => {
  const logos = ["logo1.png", "logo2.png"];
  const welcomeMessage = "Welcome to the sample search page!";

  it("renders the header correctly", () => {
    render(<Hero logos={logos} welcome={welcomeMessage} />);
    const headerElement = screen.getByTestId("App-header");
    expect(headerElement).toBeInTheDocument();
  });
  
});
