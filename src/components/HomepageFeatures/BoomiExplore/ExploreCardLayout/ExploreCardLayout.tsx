import React from "react";
import "./ExploreCardLayout.scss";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";

interface CardDetails {
  id: number;
  icon: string;
  header: string;
  submenu: Array<{
    id: number;
    title: string;
    docLink: string;
  }>;
}

interface ExploreCardLayoutProps {
  cardDetails: CardDetails;
  responsiveView?: boolean;
}

const ExploreCardLayout: React.FunctionComponent<ExploreCardLayoutProps> = ({
  cardDetails,
  responsiveView,
}) => {
  return (
    <div
      className={`explore-card-layout-wrapper ${
        responsiveView
          ? "explore-card-layout-responsive"
          : "explore-card-layout-desktop"
      }`}
      data-testid="explore-card-layout-wrapper"
    >
      <div className="explore-card-body" data-testid="explore-card-body">
        <div className="explore-card-header-wrapper">
          <ex-icon
            icon={cardDetails?.icon}
            class="explore-card-header-icon"
          ></ex-icon>
          <div className="explore-card-header">{cardDetails?.header}</div>
        </div>
        <div
          className="explore-card-links-wrapper"
          data-testid="explore-card-links-wrapper"
        >
          {cardDetails?.submenu?.slice(0, 5).map((linkDetails) => {
            return (
              <Link href={useBaseUrl(linkDetails?.docLink)} key={linkDetails?.id}>
                <div key={linkDetails?.id} className="explore-card-link">
                  {linkDetails?.title}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ExploreCardLayout;
