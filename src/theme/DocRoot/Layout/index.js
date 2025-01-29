import React, {useState, useContext} from 'react';
import {useDocsSidebar} from '@docusaurus/plugin-content-docs/client';
import BackToTopButton from '@theme/BackToTopButton';
import DocRootLayoutSidebar from '@theme/DocRoot/Layout/Sidebar';
import DocRootLayoutMain from '@theme/DocRoot/Layout/Main';
import styles from './styles.module.css';
import FeedbackForm from "../../../components/FeedbackForm/FeedbackForm";
import SuccessMessage from "../../../components/FeedbackForm/SuccessMessage/SuccessMessage";
import { FeedbackFormContext } from "../../../context/FeedbackForm";

export default function DocRootLayout({children}) {
  const { showFeedbackForm, setShowFeedbackForm, showSuccessScreen } =
    useContext(FeedbackFormContext);
  const sidebar = useDocsSidebar();
  const [hiddenSidebarContainer, setHiddenSidebarContainer] = useState(false);

  return (
    <div className={styles.docsWrapper}>
      <div
        className={styles.feedbackFormButton}
        onClick={() => {
          setShowFeedbackForm(true)
          document.body.style.overflow = "hidden";
        }}
      >
                
        <div className={styles.feedbackButtonIcon}>       
            <ex-icon icon="note" ></ex-icon>
        </div> 
        Feedback
      </div>
      <BackToTopButton />
      <div className={styles.docRoot}>
        {sidebar && (
          <DocRootLayoutSidebar
            sidebar={sidebar.items}
            hiddenSidebarContainer={hiddenSidebarContainer}
            setHiddenSidebarContainer={setHiddenSidebarContainer}
          />
        )}
        <DocRootLayoutMain hiddenSidebarContainer={hiddenSidebarContainer}>
          {children}
        </DocRootLayoutMain>
        {showFeedbackForm && !showSuccessScreen && <FeedbackForm />}
        {showFeedbackForm && showSuccessScreen && <SuccessMessage />}
      </div>
    </div>
  );
}
