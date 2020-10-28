import React from "react";
import SearcherDealItem from "./SearcherDealItem";
import { StyledDealsContainer } from "../../../Styled-Components/StyledDealsContainer";
const SearcherDealsContainer = ({ list, setChange }) => {
  return (
    <StyledDealsContainer>
      <h2 className="searchersTitle">Your Deals as Searcher</h2>
      {list&&list.length ?
        list.map((item) => (
          <SearcherDealItem key={item._id} setChange={setChange} deal={item} />
        )):<h4>You don't have deals yet</h4>}
    </StyledDealsContainer>
  );
};

export default SearcherDealsContainer;
