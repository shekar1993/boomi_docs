import React, { useState, useContext, useEffect, useRef } from "react";
import "./FeedbackForm.css";
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { FeedbackFormContext } from "../../context/FeedbackForm";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const FeedbackFormWrapper: React.FunctionComponent = () => {
  const {siteConfig} = useDocusaurusContext();
  const googleRecaptchaSiteKey = siteConfig?.customFields?.googleRecaptchaSiteKey ?? '';

  return (
      <GoogleReCaptchaProvider
          reCaptchaKey={googleRecaptchaSiteKey}
          container={{
            element: "feedback-form-recaptcha-badge",
            parameters: {
              badge: 'inline',
              size: 'invisible'
            }
          }}
          scriptProps={{
            async: true,
            defer: true,
            appendTo: 'body',
          }}
      >
        <FeedbackForm googleRecaptchaSiteKey={googleRecaptchaSiteKey} />
      </GoogleReCaptchaProvider>
  );
};

const FeedbackForm: React.FunctionComponent<{ googleRecaptchaSiteKey: string }> = ({
                                                                                     googleRecaptchaSiteKey
                                                                                   }) => {
  const [feedback, setFeedback] = useState<string | null>(null);
  const [review, setReview] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [checkboxTicked, setCheckboxTicked] = useState<boolean>(false);
  const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false);
  const [showLoader, setShowLoader] = useState<boolean>(false);
  const [isEmailValid, setIsEmailValid] = useState<boolean>(true);
  const [recaptchaError, setRecaptchaError] = useState<string>("");

  const checkRef = useRef<any>(null);
  const emailInputRef = useRef<any>(null);

  const {
    feedbackFromDocPage,
    setShowFeedbackForm,
    setFeedbackFromDocPage,
    setShowSuccessScreen,
  } = useContext(FeedbackFormContext);

  const { executeRecaptcha } = useGoogleReCaptcha();

  useEffect(() => {
    if (executeRecaptcha) {
    }
  }, [executeRecaptcha]);

  useEffect(() => {
    checkRef.current?.addEventListener("on-change", (e: any) =>
        setCheckboxTicked(e.detail.checked)
    );
  }, []);

  useEffect(() => {
    if(!isEmailValid && email){
      emailInputRef.current?.setAttribute('invalid', true);
    } else {
      emailInputRef.current?.removeAttribute('invalid');
    }
  }, [isEmailValid, email]);

  useEffect(() => {
    if (feedbackFromDocPage) {
      setFeedback(feedbackFromDocPage);
    }
  }, [feedbackFromDocPage]);

  const validateEmailOnChange = (emailValue: string) => {
    const isValid = emailValue === '' || validateEmail(emailValue);
    setIsEmailValid(isValid);
    setEmail(emailValue);
  };

  const validateEmail = (email: string): boolean => {
    const regex = /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const topicName = document.querySelector('meta[property="og:title"]')?.content ?? "";

  const onSubmitFeedback = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowLoader(true);
    setRecaptchaError("");

    if (!executeRecaptcha) {
      setShowErrorMessage(true);
      setShowLoader(false);
      return;
    }

    try {

      const token = await executeRecaptcha('feedback_submission');

      // Verify reCAPTCHA token
      const verifyResponse = await fetch("/.netlify/functions/verifyRecaptcha", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });

      const verifyResult = await verifyResponse.json();

      if (!verifyResult.success) {
        setShowErrorMessage(true);
        setShowLoader(false);
        return;
      }

      if (verifyResult.score < 0.5) {
        setShowErrorMessage(true);
        setShowLoader(false);
        return;
      }

      const feedbackData = {
        "form-name": "FeedbackForm",
        feedback,
        review,
        email,
        pageURL: window.location.href,
        topicName,
        recipientMail:
            window.location.hostname === "help.boomi.com"
                ? "docs@boomi.com"
                : "docs_non_prod_feedback_mails@boomi.com",
      };
      
      // Send feedback and acknowledgement email
      const emailResponse = await fetch("/.netlify/functions/sendFeedbackAcknowledgementMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(feedbackData),
      });

      const emailData = await emailResponse.json();
      if (!emailResponse.ok) {
        throw new Error(`Feedback submission failed: ${emailResponse.status}`);
      }

      setShowSuccessScreen(true);
      setShowLoader(false);
    } catch (error) {
      setShowErrorMessage(true);
      setShowLoader(false);
    }
  };

  const closeFeedbackForm = () => {
    setShowFeedbackForm(false);
    setFeedbackFromDocPage(null);
    setShowSuccessScreen(false);
    setShowErrorMessage(false);
    document.body.style.overflow = "auto";
  };

  const isFormValid = () => {
    return (
      feedback !== null &&  // Has rating
      review !== null &&    // Has review
      review.trim() !== "" && // Review is not empty
      checkboxTicked &&     // Terms accepted
      (!email || isEmailValid) && // Email is valid if provided
      !showLoader          // Not currently submitting
    );
  };

  return (
      <div className="feedback-form-wrapper" data-testid="feedback-form-wrapper">
        <div className="overlay">
          <div className="feedback-form-layout">
            {showLoader && (
                <div className="loader-wrapper">
                  <div className="loader">
                    <ex-loader label="" size="medium" inline=""></ex-loader>
                  </div>
                </div>
            )}
            <form
                className="feedback-form"
                id="Feedback"
                method="post"
                name="FeedbackForm"
                data-netlify="true"
                data-testid="feedback-form"
                onSubmit={onSubmitFeedback}
            >
              <input type="hidden" name="form-name" value="FeedbackForm" />
              <input type="hidden" name="pageURL" value={window.location.href} />
              <input type="hidden" name="topicName" value={topicName} />
              <div>
                <div className="feedback-form-header">
                  <ex-icon
                      icon="note"
                      variant="default"
                      class="feedback-form-header-icon"
                  ></ex-icon>
                  Provide feedback for this topic
                </div>
                <div className="feedback-form-feedback">
                  <div className="feedback-form-feedback-text">
                    Was this topic helpful?
                  </div>
                  <span className="feedback-form-feedback-yes-btn">
                  <ex-button
                      type={feedback === "Yes" ? "primary" : "secondary"}
                      flavor="branded"
                      onClick={() => setFeedback("Yes")}
                      name="feedback"
                  >
                    Yes
                  </ex-button>
                </span>
                  <span className="feedback-form-feedback-no-btn">
                  <ex-button
                      type={feedback === "No" ? "primary" : "secondary"}
                      flavor="branded"
                      onClick={() => setFeedback("No")}
                      name="feedback"
                  >
                    No
                  </ex-button>
                </span>
                </div>
                <div className="feedback-form-review">
                  <div className="feedback-form-review-text">
                    Write your review
                  </div>
                  <ex-textarea
                      placeholder="What did you like or dislike? How can we improve this topic?"
                      label=""
                      info-text="Please write your review for this topic"
                      name="review"
                      resize=""
                      rows="8"
                      help-text="Do not include any personal or sensitive information"
                      minlength="0"
                      maxlength="4000"
                      onInput={(e: any) => setReview(e.target.value)}
                      value={review}
                      className="feedback-form-review-text-area"
                  ></ex-textarea>
                </div>
                <div className="feedback-form-email">
                  <div className="feedback-form-email-text">
                    Your email{" "}
                    <span className="feedback-form-optional-text">{`(optional)`}</span>
                  </div>
                  <ex-input
                      input-id="email"
                      type="email"
                      placeholder="Provide your email if you'd like us to respond"
                      info-text="Please enter full email"
                      label=""
                      flavor="default"
                      onInput={(e: any) => validateEmailOnChange(e.target.value)}
                      value={email}
                      error-msg="Please provide a valid email address"
                      name="email"
                      ref={emailInputRef}
                  ></ex-input>
                </div>
                <div className="feedback-form-checkbox">
                  <ex-checkbox ref={checkRef}>
                    <div className="feedback-form-checkbox-text">
                      <span>I agree to</span>
                      <a
                          href="https://help.boomi.com/docs/atomsphere/platform/atm-terms_of_use"
                          target="_blank"
                          rel="noopener noreferrer"
                      >
                        Boomi Documentation Feedback Code of Conduct and Terms.
                      </a>
                    </div>
                  </ex-checkbox>
                </div>
                <div id="feedback-form-recaptcha-badge" className="feedback-form-recaptcha-section"></div>
                {showErrorMessage && (
                    <div className="feedback-form-error-message">
                      <ex-alert-banner type="Error" open="">
                        {recaptchaError || "We were unable to verify that you are human. For security reasons, we cannot submit your feedback at this time. Please try again later."}
                      </ex-alert-banner>
                    </div>
                )}
              </div>
              <div className="feedback-form-button-wrapper">
              <span>
                <ex-button
                  type="secondary"
                  flavor="branded"
                  onClick={closeFeedbackForm}
                >
                  Cancel
                </ex-button>
              </span>
              <span>
                <ex-button
                  type="primary"
                  flavor="branded"
                  onClick={onSubmitFeedback}
                  {...(!isFormValid() ? { disabled: "" } : {})}
                >
                  {showLoader ? "Submitting..." : "Send Feedback"}
                </ex-button>
              </span>
            </div>
            </form>
          </div>
        </div>
      </div>
  );
};

export default FeedbackFormWrapper;