import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MenuItems from "./MenuItems";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from "@docusaurus/Link";

// Mocking docusaurus dependencies
jest.mock("@docusaurus/useBaseUrl", () => jest.fn());
jest.mock("@docusaurus/Link", () => ({ children, ...props }) => (
  <a {...props}>{children}</a>
));

const mockUseBaseUrl = useBaseUrl as jest.Mock;

describe("MenuItems Component", () => {
  beforeEach(() => {
    mockUseBaseUrl.mockImplementation((link) => link);
  });

  it("renders a dropdown with submenu items correctly", () => {
    const menuItems = {
      id: 1,
      label: "Docs",
      icon: "doc-icon",
      submenu: [
        { id: 1, submenuLabel: "Introduction", docLink: "/docs/intro" },
        { id: 2, submenuLabel: "Setup", docLink: "/docs/setup" },
      ],
    };
    render(<MenuItems menuItems={menuItems} />);
    const dropdown = screen.getByTestId("menuitems-label");
    expect(dropdown).toBeInTheDocument();
  });
  
  it("render the item wrapper component", () => {
    const menuItems = {
      id: 1,
      label: "Docs",
      icon: "doc-icon",
      link: "/docs",
      submenu: [],
    };
    render(<MenuItems menuItems={menuItems} />);
    expect(screen.getByTestId("item-wrapper")).toBeInTheDocument();
  });
});
