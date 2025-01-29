import React, { useState, useEffect } from "react";
import { SearchStringProvider } from "../context/SearchString";
import { FeedbackFormProvider } from "../context/FeedbackForm";
import { EngineProvider } from "../components/common/engineContext";
import { initializeHeadlessEngine } from "../components/common/Engine";
import { loadFieldActions } from "@coveo/headless";
import { useLocation } from "@docusaurus/router";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

const ScrollToHash = () => {
  const { hash } = useLocation();
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    // Ensure the page is fully loaded
    const handlePageLoad = () => {
      setIsPageLoaded(true);
    };

    if (document.readyState === "complete") {
      handlePageLoad();
    } else {
      window.addEventListener("load", handlePageLoad);
    }

    return () => window.removeEventListener("load", handlePageLoad);
  }, []);

  useEffect(() => {
    if (hash && isPageLoaded) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          // const headerOffset = window.innerWidth <= 996 ? 170 : 105; // 170px for responsive view, 105px for desktop view
          // const elementPosition =
          //   element.getBoundingClientRect().top + window.scrollY;
          // const offsetPosition = elementPosition - headerOffset;

          // window.scrollTo({
          //   top: offsetPosition,
          //   behavior: "smooth",
          // });
        }
      }, 1000); // Adjust delay if necessary
    }
  }, [hash, isPageLoaded]);

  return null;
};

export default function Root({ children }) {
  const [engine, setEngine] = useState(null);
  const [exosphereLoaded, seExosphereLoaded] = useState(false)
  const { siteConfig } = useDocusaurusContext();

  useEffect(() => {
    // Loading Exosphere
    import("@boomi/exosphere").then(() => {
      seExosphereLoaded(true);
    })
  }, []);

  useEffect(() => {
    initializeHeadlessEngine(
      siteConfig?.customFields?.CoveoOrgIdProd,
      siteConfig?.customFields?.CoveoOrgIdNonProd,
      siteConfig?.customFields?.CoveoAccessTokenProd,
      siteConfig?.customFields?.CoveoAccessTokenNonProd
    ).then((engineConfig) => {
      setEngine(engineConfig);
      const FieldActionCreators = loadFieldActions(engineConfig);
      const action = FieldActionCreators.registerFieldsToInclude([
        "sfdatacategoryservices",
        "topic",
        "matter",
      ]);
      engineConfig.dispatch(action);
    });
  }, []);

  useEffect(() => {
    if (engine) {
      engine.executeFirstSearch();
    }
  }, [engine]);

  if (engine && exosphereLoaded) {
    return (
      <EngineProvider value={engine}>
        <SearchStringProvider>
          <ScrollToHash />
          <FeedbackFormProvider>{children}</FeedbackFormProvider>
        </SearchStringProvider>
      </EngineProvider>
    );
  } else {
    return <div id="waiting-placeholder" style={{ display: "none" }}></div>;
  }
}
