import React from "react";
import "./DevDocsAlertBanner.css";
import homePageControls from "../../Controls";

const DevDocsAlertBanner: React.FunctionComponent = () => 
{
    return (
        <>
        {homePageControls.devDocsAlertBanner.showBanner && <div className="alert-banner-container">
        <div className="custom-alert-banner" data-testid="custom-alert-banner">
        <ex-alert-banner
         type="Information"
        open=""
        variant="subtle"
        hideclose=""
        tooltiptext="Action"
        >
        <div className="banner-text" data-testid="banner-text">{homePageControls.devDocsAlertBanner.bannerText}
            <a
            href={homePageControls.devDocsAlertBanner.bannerCTAlink}
            target="_blank"
            rel="noopener noreferrer"
             aria-label="banner-text"
            className="alert-banner-link"
            >
            {homePageControls.devDocsAlertBanner.bannerCTAtext}
            </a>
        </div>
        </ex-alert-banner> 
        </div>
        </div>}
        </>
    )
};

export default DevDocsAlertBanner;

