import React, { createContext, useState, useMemo } from "react";

export const SearchStringContext = createContext<any>("");

export const SearchStringProvider = ({ children }) => {
  const [searchString, setSearchString] = useState("");

  const [searchSubmitted, setSearchSubmitted ] = useState(false);

  const searchObj = useMemo(
    () => ({ searchString, setSearchString, searchSubmitted, setSearchSubmitted }),
    [searchString, searchSubmitted]
  );

  return (
    <SearchStringContext.Provider value={searchObj}>
      {children}
    </SearchStringContext.Provider>
  );
};
