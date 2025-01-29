import OtherBoomiResources from "./OtherBoomiResources";
import { describe, expect, test } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("OtherBoomiResources", () => {
  const renderComponent = () => {
    return render(<OtherBoomiResources />);
  };

  test("Other Boomi Resources Wrapper ", () => {
    renderComponent();
    expect(
      screen.getByTestId("other-boomi-resources-wrapper")
    ).toBeInTheDocument();
  });

  test("Other Boomi Resources Text", () => {
    renderComponent();
    expect(screen.getByText("Other Boomi Resources")).toBeInTheDocument();
  });
});
