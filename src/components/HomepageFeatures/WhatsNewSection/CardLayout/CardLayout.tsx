import React from "react";
import "./CardLayout.css";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";

interface CardDetails {
  id: number;
  heading: string;
  cardIcon: string;
  darkModeCardIcon: string;
  footer?: {
    footerTitle: string;
    footerDocLink: string;
  };
  body: Array<{
    title: string;
    titleContent: string;
    icon: string;
    iconColor: string;
    docLink: string;
  }>;
}

interface CardLayoutProps {
  cardDetails: CardDetails;
}

const CardLayout: React.FunctionComponent<CardLayoutProps> = ({
  cardDetails,
}) => {
  return (
    <div className="card-layout-wrapper" data-testid="card-layout-wrapper">
      <div className="card-icon">
        <img
          src={cardDetails?.cardIcon}
          alt="card icon"
          className="light-mode-card-icon"
        />
        <img
          src={cardDetails?.darkModeCardIcon}
          alt="dark mode card icon"
          className="dark-mode-card-icon"
        />
      </div>
      <div className="card-heading">{cardDetails.heading}</div>
      <div className="card-body">
        {cardDetails.body.map((details, index) => {
          return (
            <div key={index} className="card-body-tile">
              <div className="body-tile-icon">
                <ex-icon icon={details?.icon} slot="prefix"></ex-icon>
              </div>
              <div className="body-tile-details">
                <div className="tile-details-title">{details.title}</div>
                <Link href={useBaseUrl(details?.docLink)}>
                  <div className="tile-details-title-content">
                    {details.titleContent}
                  </div>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      {cardDetails.footer && (
        <div className="card-footer" data-testid="card-footer">
          <Link href={useBaseUrl(cardDetails?.footer?.footerDocLink)}>
            <div className="card-footer-text">
              {cardDetails?.footer?.footerTitle}
            </div>
          </Link>
          <ex-icon icon="direction-arrow-right"></ex-icon>
        </div>
      )}
    </div>
  );
};

export default CardLayout;
