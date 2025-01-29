import React from "react";
import "./HomePageBanner.css";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";

type HomePageBannerProps = {
  homePageBanner: {
    showBanner: boolean;
    bannerImage: string;
    bannerImageDarkMode: string;
    bannerHeadline: string;
    bannerCTAtext: string;
    bannerCTAlink: string;
  };
};

const BannerContent: React.FunctionComponent<HomePageBannerProps> = ({
  homePageBanner,
}) => {
  return (
    <div className="banner-content">
      <div className="banner-content-headline">
        {homePageBanner.bannerHeadline.substring(0, 40)}
      </div>
      <div className="banner-content-button">
        <Link
          href={homePageBanner?.bannerCTAlink}
          className="banner-content-button-link"
          aria-label="banner-content-button-link"
        >
          <ex-button
            type="primary"
            flavor="base"
            size="large"
            onClick={() => window.open(homePageBanner?.bannerCTAlink, "_blank")}
          >
            {homePageBanner.bannerCTAtext.substring(0, 30)}
          </ex-button>
        </Link>
      </div>
    </div>
  );
};

const HomePageBanner: React.FunctionComponent<HomePageBannerProps> = ({
  homePageBanner,
}) => {
  return (
    <div className="home-page-banner-container" data-testid="home-page-banner-container">
      <div
        className="home-page-banner home-page-banner-light-mode"
        style={{
          backgroundImage: `url(${useBaseUrl(homePageBanner?.bannerImage)})`,
        }}
      >
        <BannerContent homePageBanner={homePageBanner} />
      </div>
      <div
        className="home-page-banner home-page-banner-dark-mode"
        style={{
          backgroundImage: `url(${useBaseUrl(
            homePageBanner?.bannerImageDarkMode
          )})`,
        }}
      >
        <BannerContent homePageBanner={homePageBanner} />
      </div>
    </div>
  );
};

export default HomePageBanner;

