import React, { createContext, useState, useMemo } from "react";

export const FeedbackFormContext = createContext<any>({
  showFeedbackForm: false,
  setShowFeedbackForm: () => {},
  feedbackFromDocPage: null,
  setFeedbackFromDocPage: () => {},
  showSuccessScreen: false,
  setShowSuccessScreen: () => {},
});

export const FeedbackFormProvider = ({ children }) => {
  const [showFeedbackForm, setShowFeedbackForm] = useState<boolean>(false);
  const [feedbackFromDocPage, setFeedbackFromDocPage] = useState<null | string>(
    null
  );
  const [showSuccessScreen, setShowSuccessScreen] = useState<boolean>(false);

  const feedbackFormObj = useMemo(
    () => ({
      showFeedbackForm,
      setShowFeedbackForm,
      feedbackFromDocPage,
      setFeedbackFromDocPage,
      showSuccessScreen,
      setShowSuccessScreen,
    }),
    [showFeedbackForm, feedbackFromDocPage, showSuccessScreen]
  );

  return (
    <FeedbackFormContext.Provider value={feedbackFormObj}>
      {children}
    </FeedbackFormContext.Provider>
  );
};
