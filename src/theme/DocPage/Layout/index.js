import React, { useState, useContext } from "react";
import { useDocsSidebar } from "@docusaurus/theme-common/internal";
import Layout from "@theme/Layout";
import BackToTopButton from "@theme/BackToTopButton";
import DocPageLayoutSidebar from "@theme/DocPage/Layout/Sidebar";
import DocPageLayoutMain from "@theme/DocPage/Layout/Main";
import styles from "./styles.module.css";
import FeedbackForm from "../../../components/FeedbackForm/FeedbackForm";
import SuccessMessage from "../../../components/FeedbackForm/SuccessMessage/SuccessMessage";
import { FeedbackFormContext } from "../../../context/FeedbackForm";

export default function DocPageLayout({ children }) {
  const { showFeedbackForm, setShowFeedbackForm, showSuccessScreen } =
    useContext(FeedbackFormContext);
  const sidebar = useDocsSidebar();
  const [hiddenSidebarContainer, setHiddenSidebarContainer] = useState(false);
  return (
    <Layout wrapperClassName={styles.docsWrapper}>
      <div
        className={styles.feedbackFormButton}
        onClick={() => setShowFeedbackForm(true)}
      >
        <ex-icon icon="note" className={styles.feedbackButtonIcon}></ex-icon>
        Feedback
      </div>
      <BackToTopButton />
      <div className={styles.docPage}>
        {sidebar && (
          <DocPageLayoutSidebar
            sidebar={sidebar.items}
            hiddenSidebarContainer={hiddenSidebarContainer}
            setHiddenSidebarContainer={setHiddenSidebarContainer}
          />
        )}
        <DocPageLayoutMain hiddenSidebarContainer={hiddenSidebarContainer}>
          {children}
        </DocPageLayoutMain>
        {showFeedbackForm && !showSuccessScreen && <FeedbackForm />}
        {showFeedbackForm && showSuccessScreen && <SuccessMessage />}
      </div>
    </Layout>
  );
}
