import React from "react";
import { render, screen, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import ResultList, { filterProtocol } from "./ResultList";
import FieldValue from "./ResultList";
import EngineContext from "../common/engineContext";
import {
  buildResultList,
  buildInteractiveResult,
  buildResultTemplatesManager,
} from "@coveo/headless";
import { describe, expect, it } from "@jest/globals";
import { removeUnderscore } from "../../MyCustomScript";

// Mock the required functions and components from headless
jest.mock("@coveo/headless", () => ({
  buildResultList: jest.fn(),
  buildInteractiveResult: jest.fn(),
  buildResultTemplatesManager: jest.fn(),
}));

const mockResultListController = {
  state: {
    results: [
      {
        uniqueId: "1",
        title: "Result 1",
        excerpt: "Result 1 excerpt",
        clickUri: "http://example.com/1",
        raw: {
          objecttype: "Knowledge_Article",
          sfdatacategoryservices: ["Category1", "Category2"],
        },
      },
      {
        uniqueId: "2",
        title: "Result 2",
        excerpt: "Result 2 excerpt",
        clickUri: "http://example.com/2",
        raw: {
          objecttype: "Documentation",
          matter: "Topic1",
        },
      },
    ],
  },
  subscribe: jest.fn((callback) => {
    callback();
    return () => {};
  }),
};

const mockEngine = {};

describe("ResultList", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    buildResultList.mockReturnValue(mockResultListController);
    buildInteractiveResult.mockReturnValue({
      select: jest.fn(),
      beginDelayedSelect: jest.fn(),
      cancelPendingSelect: jest.fn(),
    });
    buildResultTemplatesManager.mockReturnValue({
      registerTemplates: jest.fn(),
      selectTemplate: jest.fn((result) => (result) => (
        <div key={result.uniqueId}>{result.title}</div>
      )),
    });
  });

  const renderComponent = () => {
    return render(
      <EngineContext.Provider value={mockEngine}>
        <ResultList />
      </EngineContext.Provider>
    );
  };

  it("subscribes to the controller state changes", () => {
    renderComponent();
    expect(mockResultListController.subscribe).toHaveBeenCalled();
  });

  it("updates state when controller state changes", () => {
    renderComponent();
    const newState = {
      results: [
        {
          uniqueId: "3",
          title: "Updated Result",
          excerpt: "Updated Result excerpt",
          clickUri: "http://example.com/3",
          raw: {
            objecttype: "Knowledge_Article",
            sfdatacategoryservices: ["Category3"],
          },
        },
      ],
    };
    act(() => {
      mockResultListController.state = newState;
      mockResultListController.subscribe.mock.calls[0][0]();
    });
    expect(screen.getByText("Updated Result")).toBeInTheDocument();
  });

  it("filters dangerous URIs correctly", () => {
    expect(filterProtocol('javascript:alert("XSS")')).toBe("");
    expect(filterProtocol("http://example.com")).toBe("http://example.com");
    expect(filterProtocol("/relative/path")).toBe("/relative/path");
  });
});
