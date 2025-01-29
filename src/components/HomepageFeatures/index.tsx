import React, { useContext, useEffect, useState } from "react";
import "./index.css";
import HomePageBanner from "./HomePageBanner/HomePageBanner";
import WhatsNewSection from "./WhatsNewSection/WhatsNewSection";
import CategoryTiles from "./CategoryTiles/CategoryTiles";
import OtherBoomiResources from "./OtherBoomiResources/OtherBoomiResources";
import BoomiExplore from "./BoomiExplore/BoomiExplore";
import { SearchStringContext } from "../../context/SearchString";
import homePageControls from "../Controls";
import DevDocsAlertBanner from "./DevDocsAlertBanner/DevDocsAlertBanner";

const SearchPage: React.FunctionComponent = () => 
{
  const { searchSubmitted } = useContext(SearchStringContext);

  return (
    <>
      {!searchSubmitted && (
        <>
        <DevDocsAlertBanner />
        <div className="home-page-content" data-testid="home-page-content">
          <header className="boomi-documentation-header"  data-testid="boomi-documentation-header">
            Boomi Documentation
          </header>
          {homePageControls?.homePageBanner?.showBanner && (
            <HomePageBanner homePageBanner={homePageControls?.homePageBanner} />
          )}
          <WhatsNewSection />
          <BoomiExplore />
          <CategoryTiles />
          <OtherBoomiResources />
        </div>
      </>
      )}
    </>
  );
};

export default SearchPage;
