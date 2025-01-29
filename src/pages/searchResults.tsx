import React, { useContext, useMemo, useEffect, useCallback } from "react";
import { buildSearchBox, SearchBoxOptions } from "@coveo/headless";
import Layout from "@theme/Layout";
import { useLocation } from "@docusaurus/router";
import EngineContext from "../components/common/engineContext";
import SearchResultsPage from "../components/HomepageFeatures/SearchResultsPage/SearchResultsPage";

const SearchResults = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const engine = useContext(EngineContext)!;

  const options: SearchBoxOptions = { numberOfSuggestions: 0 };

  const controller = useMemo(
    () => buildSearchBox(engine, { options }),
    [engine]
  );

  useEffect(() => {
    let searchString = searchParams.get("q") || "";
    controller.updateText(searchString);
    triggerSearch();
  }, [searchParams]);

  const triggerSearch = useCallback(() => { 
    setTimeout(() => controller.submit(), 0);
  }, [controller]);

  return (
    <Layout title="Search">
      <SearchResultsPage />
    </Layout>
  );
};

export default SearchResults;
