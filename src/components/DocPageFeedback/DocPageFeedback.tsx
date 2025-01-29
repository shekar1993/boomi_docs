import React, { useContext } from "react";
import "./DocPageFeedback.css";
import { FeedbackFormContext } from "../../context/FeedbackForm";

const DocPageFeedback: React.FC = () => {
  const { setShowFeedbackForm, setFeedbackFromDocPage } =
    useContext(FeedbackFormContext);
  const openFeedbackForm = (feedback) => {
    setFeedbackFromDocPage(feedback);
    setShowFeedbackForm(true);
    document.body.style.overflow = "hidden";
  };

  return (
    <div className="doc-page-bottom-feedback-wrapper" data-testid="doc-page-bottom-feedback-wrapper">
      <div
        className="doc-page-feedback-button-mobile"
        onClick={() => {
          setShowFeedbackForm(true);
          document.body.style.overflow = "hidden";
        }}
      >
        <ex-icon icon="note"></ex-icon>
        Provide Feedback
      </div>
      <div className="doc-page-feedback-button-desktop">
        <div>Was this topic helpful?</div>
        <span className="doc-page-feedback-yes-btn">
          <ex-button
            type="secondary"
            flavor="branded"
            onClick={() => openFeedbackForm("Yes")}
          >
            Yes
          </ex-button>
        </span>
        <span className="doc-page-feedback-no-btn">
          <ex-button
            type="secondary"
            flavor="branded"
            onClick={() => openFeedbackForm("No")}
          >
            No
          </ex-button>
        </span>
      </div>
    </div>
  );
};

export default DocPageFeedback;
