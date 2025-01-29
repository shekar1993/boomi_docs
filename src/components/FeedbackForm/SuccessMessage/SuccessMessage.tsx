import React, { useContext } from "react";
import "../FeedbackForm.css";
import { FeedbackFormContext } from "../../../context/FeedbackForm";

const SuccessMessage = () => {
  const { setShowFeedbackForm, setFeedbackFromDocPage, setShowSuccessScreen } =
    useContext(FeedbackFormContext);

  const closeFeedbackForm = () => {
    setShowFeedbackForm(false);
    setFeedbackFromDocPage(null);
    setShowSuccessScreen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="feedback-form-wrapper" data-testid="feedback-form-wrapper">
      <div className="overlay">
        <div className="feedback-form-layout">
          <div className="feedback-form-success">
            <div>
              <div className="feedback-form-success-header">
                <ex-icon
                  icon="status-success"
                  variant="icon"
                  class="feedback-form-success-icon"
                ></ex-icon>
                Feedback Sent
              </div>
              <div className="feedback-form-success-message">
                <div className="feedback-form-success-message-section-bold">
                  Thank you for your feedback!
                </div>
                <div className="feedback-form-success-message-section">
                  A member of the documentation team will review it & take any
                  necessary action.
                </div>
                <div className="feedback-form-success-message-section">
                  The Boomi Documentation Team
                </div>
              </div>
            </div>
            <div className="feedback-form-success-done-btn-wrapper">
              <span>
                <ex-button
                  type="primary"
                  flavor="branded"
                  onClick={closeFeedbackForm}
                >
                  Done
                </ex-button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessMessage;
