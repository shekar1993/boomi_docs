import React, { useEffect, useRef } from "react";
import "./Searchbox.css";
import { useHistory, useLocation } from "@docusaurus/router";

const SearchBoxInput = () => {
  const history = useHistory();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const inputRef = useRef<any>(null);

  useEffect(() => {
    let searchString = searchParams.get("q") || "";
    inputRef.current.value = searchString;
  }, []);

  const navigateToSearchPage = () => {
    const searchString = inputRef?.current?.value.trim();
    if (!searchString) {
      return;
    }
    const encodedSearchString = encodeURIComponent(searchString);
    history.push(`/searchResults?q=${encodedSearchString}`);
  };

  const searchSubmitHandler = (e: any) => {
    e.preventDefault();
    navigateToSearchPage();
  };

  return (
    <div className="ex-col-xs-12 search-box" data-testid="search-box">
      <ex-input
        class="search-box__input"
        placeholder="I need help with..."
        type="text"
        clearable
        size="default"
        flavor="default"
        ref={inputRef}
        onKeyDown={(e) => {
          if (e.keyCode == "13") {
            searchSubmitHandler(e);
          }
        }}
      >
        <ex-icon-button
          icon="magnifying-glass"
          variant="icon"
          slot="prefix"
          type="tertiary"
          flavor="branded"
          circular={true}
          data-testid="search-button"
          onClick={(e) => searchSubmitHandler(e)}
        ></ex-icon-button>
      </ex-input>
    </div>
  );
};

export default SearchBoxInput;
