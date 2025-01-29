import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";
import generatePdf from "./generatePdf";
import React from "react";
import { render, screen, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, expect, it } from "@jest/globals";

jest.mock("@docusaurus/ExecutionEnvironment", () => ({
  canUseDOM: true,
}));

const mockPdf = {
  internal: {
    getNumberOfPages: jest.fn().mockReturnValue(2),
    pageSize: {
      getWidth: jest.fn().mockReturnValue(8.5),
      getHeight: jest.fn().mockReturnValue(11),
    },
  },
  setPage: jest.fn(),
  setFontSize: jest.fn(),
  setTextColor: jest.fn(),
  text: jest.fn(),
  save: jest.fn(),
};

jest.mock("html2pdf.js", () =>
  jest.fn(() => ({
    from: jest.fn().mockReturnThis(),
    set: jest.fn().mockReturnThis(),
    toPdf: jest.fn().mockReturnThis(),
    get: jest.fn().mockImplementation((param) => ({
      then: (callback) => {
        if (param === "pdf") {
          callback(mockPdf);
        } else {
          throw new Error("PDF generation failed");
        }
      },
    })),
  }))
);

describe("generatePdf", () => {
  const combinedContent = "<div>Test Content</div>";
  const pdfOptions = {
    margin: [0.5, 0.5, 0.6, 0.5],
    filename: "Test.pdf",
    image: {
      type: "jpeg",
      quality: 0.98,
    },
    html2canvas: {
      scale: 2,
    },
    jsPDF: {
      unit: "in",
      format: "letter",
      orientation: "portrait",
    },
    pagebreak: {
      mode: ["css", "legacy"],
      before: ".page-break-before",
    },
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should not generate a PDF if ExecutionEnvironment.canUseDOM is false", () => {
    ExecutionEnvironment.canUseDOM = false;
    generatePdf(combinedContent, pdfOptions);
    expect(require("html2pdf.js")).not.toHaveBeenCalled();
    ExecutionEnvironment.canUseDOM = true;
  });

  it("should handle errors during PDF generation", async () => {
    require("html2pdf.js").mockImplementationOnce(() => ({
      from: jest.fn().mockReturnThis(),
      set: jest.fn().mockReturnThis(),
      toPdf: jest.fn().mockReturnThis(),
      get: jest.fn().mockImplementation(() => ({
        then: jest.fn().mockImplementationOnce(() => {
          throw new Error("PDF generation failed");
        }),
      })),
    }));
    expect(() => generatePdf(combinedContent, pdfOptions)).toThrow(
      "PDF generation failed"
    );
  });
});
