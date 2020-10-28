import React, { useState } from "react";

import SearchFilter from "../Elements/searchResult/SearchFilter";

import { StyledButton } from "../Styled-Components/StyledButton";
import { Link } from "@reach/router";
import { StyledSearchResult } from "../Styled-Components/StyledSearchResult";
import CardContainer from "../Elements/searchResult/CardContainer";

const SearchResult = () => {
  
  const [extend, setExtend] = useState(false);
  const invertExtend = () => {
    setExtend(!extend);
  };

  return (
    <StyledSearchResult extend={extend}>

      <><StyledButton
        className="filter-btn"
        type="secondary"
        extend={extend}
        onClick={invertExtend}
      >
        <Link to="/search-result">
          <div>
            Search Filters 
          </div>
        </Link>
      </StyledButton>
      <SearchFilter extend={extend} invertExtend={invertExtend} />
      <CardContainer /></>

    </StyledSearchResult>
  );
};

export default SearchResult;
