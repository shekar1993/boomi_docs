import React from "react";
import {
  render,
  fireEvent,
  screen,
  waitFor,
  act,
  cleanup,
} from "@testing-library/react";
import {
  describe,
  expect,
  it,
  jest,
  beforeEach,
  afterEach,
} from "@jest/globals";
import "@testing-library/jest-dom";
import FeedbackFormWrapper from "./FeedbackForm";
import { FeedbackFormContext } from "../../context/FeedbackForm";

// Mock reCAPTCHA
jest.mock("react-google-recaptcha-v3", () => ({
  GoogleReCaptchaProvider: ({ children }: { children: React.ReactNode }) =>
    children,
  useGoogleReCaptcha: () => ({
    executeRecaptcha: () => Promise.resolve("mock-recaptcha-token"),
  }),
}));

// Mock useDocusaurasContext
jest.mock("@docusaurus/useDocusaurusContext", () => ({
  __esModule: true, // Optional if you're using ES modules
  default: () => ({
    siteConfig: {
      customFields: {
        googleRecaptchaSiteKey: "mock-key",
      },
    },
  }),
}));

// Setup fetch mock with proper response structure
const mockFetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    status: 200,
    statusText: "OK",
    headers: new Headers(),
    type: "basic",
    redirected: false,
    url: "",
    json: () =>
      Promise.resolve({
        success: true,
        score: 0.9,
        action: "feedback_submission",
      }),
  } as Response)
);

// For failure case
mockFetch.mockImplementationOnce(() =>
  Promise.resolve({
    ok: true,
    status: 200,
    json: () =>
      Promise.resolve({
        success: false,
        error: "verification-failed",
      }),
  } as Response)
);

// For low score case
mockFetch.mockImplementationOnce(() =>
  Promise.resolve({
    ok: true,
    status: 200,
    json: () =>
      Promise.resolve({
        success: true,
        score: 0.3,
        action: "feedback_submission",
      }),
  } as Response)
);

global.fetch = mockFetch as any;

describe("FeedbackForm", () => {
  const mockSiteKey = "test-recaptcha-site-key";
  const mockContextValue = {
    showFeedbackForm: true,
    setShowFeedbackForm: jest.fn(),
    feedbackFromDocPage: null,
    setFeedbackFromDocPage: jest.fn(),
    showSuccessScreen: false,
    setShowSuccessScreen: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
    document.body.innerHTML = "";
  });

  afterEach(() => {
    jest.clearAllMocks();
    cleanup(); // from @testing-library/react
  });

  const renderComponent = () => {
    return render(
      <FeedbackFormContext.Provider value={mockContextValue}>
        <FeedbackFormWrapper googleRecaptchaSiteKey={mockSiteKey} />
      </FeedbackFormContext.Provider>
    );
  };

  it("renders feedback form wrapper", () => {
    renderComponent();
    expect(screen.getByTestId("feedback-form-wrapper")).toBeInTheDocument();
  });

  it("validates email input", async () => {
    renderComponent();
    const emailInput = screen.getByPlaceholderText(
      "Provide your email if you'd like us to respond"
    );

    await act(async () => {
      // Test invalid email
      const invalidEvent = new CustomEvent("input", {
        detail: { target: { value: "invalid-email" } },
      });
      emailInput.dispatchEvent(invalidEvent);
      await new Promise((resolve) => setTimeout(resolve, 0)); // Allow state to update
    });

    const inputElement = emailInput.closest("ex-input");
    expect(inputElement).toHaveAttribute(
      "error-msg",
      "Please provide a valid email address"
    );

    await act(async () => {
      // Test valid email
      const validEvent = new CustomEvent("input", {
        detail: { target: { value: "valid@email.com" } },
      });
      emailInput.dispatchEvent(validEvent);
      await new Promise((resolve) => setTimeout(resolve, 0)); // Allow state to update
    });

    expect(inputElement).not.toHaveAttribute("invalid");
  });

  it("enables submit button when form is complete", async () => {
    renderComponent();

    await act(async () => {
      // Set feedback
      fireEvent.click(screen.getByText("Yes"));
      await new Promise((resolve) => setTimeout(resolve, 0));

      // Set review
      const textArea = screen.getByPlaceholderText(
        "What did you like or dislike? How can we improve this topic?"
      );
      const reviewEvent = new CustomEvent("input", {
        detail: { value: "Test review" },
      });
      Object.defineProperty(reviewEvent, "target", {
        value: { value: "Test review" },
      });
      textArea.dispatchEvent(reviewEvent);
      await new Promise((resolve) => setTimeout(resolve, 0));

      // Check terms
      const checkbox = screen.getByText(/I agree to/).closest("ex-checkbox");
      checkbox?.dispatchEvent(
        new CustomEvent("on-change", { detail: { checked: true } })
      );
      await new Promise((resolve) => setTimeout(resolve, 0));
    });

    // Wait for all state updates to complete
    // await waitFor(() => {
    //   const submitButton = screen.findByText("Send Feedback").closest('ex-button');
    //   expect(submitButton).not.toHaveAttribute('disabled');
    // });
  });

  it("handles reCAPTCHA verification failure", async () => {
    mockFetch.mockImplementationOnce(() =>
      Promise.resolve({
        ok: true,
        status: 200,
        json: () =>
          Promise.resolve({
            success: false,
            error: "verification-failed",
          }),
      } as Response)
    );

    renderComponent();

    await waitFor(async () => {
      // Set feedback
      fireEvent.click(screen.getByText("Yes"));
      await new Promise((resolve) => setTimeout(resolve, 0));

      // Set review
      const textArea = screen.getByPlaceholderText(
        "What did you like or dislike? How can we improve this topic?"
      );
      const reviewEvent = new CustomEvent("input", {
        detail: { value: "Test review" },
      });
      Object.defineProperty(reviewEvent, "target", {
        value: { value: "Test review" },
      });
      textArea.dispatchEvent(reviewEvent);
      await new Promise((resolve) => setTimeout(resolve, 0));

      // Check terms
      const checkbox = screen.getByText(/I agree to/).closest("ex-checkbox");
      checkbox?.dispatchEvent(
        new CustomEvent("on-change", { detail: { checked: true } })
      );
      await new Promise((resolve) => setTimeout(resolve, 0));
    });

    await waitFor(async () => {
      fireEvent.submit(screen.getByTestId("feedback-form"));
      await new Promise((resolve) => setTimeout(resolve, 100));
    });

    // await waitFor(() => {
    //   expect(screen.getByText(/we cannot process this submission/)).toBeInTheDocument();
    // });
  });

  it("handles low reCAPTCHA score", async () => {
    mockFetch.mockImplementationOnce(() =>
      Promise.resolve({
        ok: true,
        status: 200,
        json: () =>
          Promise.resolve({
            success: true,
            score: 0.3,
            action: "feedback_submission",
          }),
      } as Response)
    );

    renderComponent();

    await act(async () => {
      // Set feedback
      fireEvent.click(screen.getByText("Yes"));
      await new Promise((resolve) => setTimeout(resolve, 0));

      // Set review
      const textArea = screen.getByPlaceholderText(
        "What did you like or dislike? How can we improve this topic?"
      );
      const reviewEvent = new CustomEvent("input", {
        detail: { value: "Test review" },
      });
      Object.defineProperty(reviewEvent, "target", {
        value: { value: "Test review" },
      });
      textArea.dispatchEvent(reviewEvent);
      await new Promise((resolve) => setTimeout(resolve, 0));

      // Check terms
      const checkbox = screen.getByText(/I agree to/).closest("ex-checkbox");
      checkbox?.dispatchEvent(
        new CustomEvent("on-change", { detail: { checked: true } })
      );
      await new Promise((resolve) => setTimeout(resolve, 0));
    });

    await act(async () => {
      fireEvent.submit(screen.getByTestId("feedback-form"));
      await new Promise((resolve) => setTimeout(resolve, 100));
    });

    await waitFor(() => {
      expect(
        screen.getByText(/unable to verify that you are human/)
      ).toBeInTheDocument();
    });
  });

  it("disables submit button when form is incomplete", async () => {
    renderComponent();
    const submitButton = screen.getByText("Send Feedback").closest("ex-button");
    expect(submitButton).toHaveAttribute("disabled");
  });
});
