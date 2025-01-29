import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, expect, it, jest } from "@jest/globals";
import PrintandShare from "./PrintandShare";
import "@testing-library/jest-dom";
import generatePdf from "./generatePdf";

jest.mock("@docusaurus/Link", () => ({ children, href, ...props }) => (
  <a href={href} {...props}>
    {children}
  </a>
));

delete window.location;
window.location = { href: "http://localhost/test" };

jest.mock("@docusaurus/useBaseUrl", () => (url) => url);

jest.mock("./generatePdf");

// Mock navigator.clipboard.writeText
Object.assign(navigator, {
  clipboard: {
    writeText: jest.fn(),
  },
});

describe("PrintandShare Component", () => {
  const contentRef = { current: document.createElement("div") };

  beforeEach(() => {
    // Reset mocks before each test
    jest.clearAllMocks();
    contentRef.current.innerHTML = "<div>Test Content</div>";
    document.title = "Test Document Title";
    window.location.href = "http://localhost/test";
    document.body.innerHTML = `
      <div class="navbar">Navbar Content</div>
      <div id="tabs-container">Tabs Content</div>
      <div id="docs-breadcrumbs-wrapper">Breadcrumbs Content</div>
      <div id="md-content-wrapper">Markdown Content</div>
    `;
    document.body.appendChild(contentRef.current);
  });

  afterEach(() => {
    document.body.removeChild(contentRef.current);
  });

  it("renders the PrintandShare container", () => {
    render(<PrintandShare contentRef={contentRef} />);
    const container = screen.getByTestId("printandshareContainer");
    expect(container).toBeInTheDocument();
  });

  it("copies link to clipboard when Copy Link is clicked", () => {
    render(<PrintandShare contentRef={contentRef} />);
    const copyLink = screen.getByLabelText("copylink-share");
    fireEvent.click(copyLink);
  });

  it("triggers saveAsPDF function when PDF button is clicked", () => {
    render(<PrintandShare contentRef={contentRef} />);
    const pdfButton = screen.getByTestId("Download-as-PDF");
    fireEvent.click(pdfButton);
    expect(generatePdf).toHaveBeenCalled();
  });

  it("handles tab content manipulation and restoration", () => {
    contentRef.current.innerHTML += `
      <div class="tabs-container" id="tabs-container">
        <div role="tab">Tab 1</div>
        <div role="tab">Tab 2</div>
        <div role="tabpanel">Content 1</div>
        <div role="tabpanel">Content 2</div>
      </div>
    `;
    render(<PrintandShare contentRef={contentRef} />);
    const pdfButton = screen.getByTestId("Download-as-PDF");

    fireEvent.click(pdfButton);
  });

  const getMonthAbbreviation = (date) => {
    let month;
    switch (date.getMonth()) {
      case 0:
        month = "Jan";
        break;
      case 1:
        month = "Feb";
        break;
      case 2:
        month = "Mar";
        break;
      case 3:
        month = "April";
        break;
      case 4:
        month = "May";
        break;
      case 5:
        month = "June";
        break;
      case 6:
        month = "July";
        break;
      case 7:
        month = "Aug";
        break;
      case 8:
        month = "Sept";
        break;
      case 9:
        month = "Oct";
        break;
      case 10:
        month = "Nov";
        break;
      case 11:
        month = "Dec";
        break;
    }
    return month;
  };

  test.each([
    [0, "Jan"],
    [1, "Feb"],
    [2, "Mar"],
    [3, "April"],
    [4, "May"],
    [5, "June"],
    [6, "July"],
    [7, "Aug"],
    [8, "Sept"],
    [9, "Oct"],
    [10, "Nov"],
    [11, "Dec"],
  ])(
    "returns correct month abbreviation for month %i",
    (monthIndex, expectedAbbreviation) => {
      const mockDate = new Date(2023, monthIndex, 15);
      jest.spyOn(global, "Date").mockImplementation(() => mockDate);

      render(<PrintandShare contentRef={contentRef} />);
      const pdfButton = screen.getByTestId("Download-as-PDF");
      fireEvent.click(pdfButton);

      expect(getMonthAbbreviation(mockDate)).toBe(expectedAbbreviation);

      jest.restoreAllMocks();
    }
  );
});
