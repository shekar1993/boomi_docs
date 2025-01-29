import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TopNavigation from "./TopNavigation";
import MenuItems from "./MenuItems/MenuItems";

// Mock the MenuItems component to simplify tests
jest.mock("./MenuItems/MenuItems", () => {
  return ({ menuItems }) => (
    <div data-testid={`menu-item-${menuItems.id}`}>
      <div>{menuItems.label}</div>
      {menuItems.submenu.map((submenu) => (
        <div key={submenu.id}>{submenu.submenuLabel}</div>
      ))}
    </div>
  );
});

describe("TopNavigation Component", () => {
  it("renders the top navigation wrapper", () => {
    render(<TopNavigation />);
    expect(screen.getByTestId("top-navigation")).toBeInTheDocument();
  });
});
