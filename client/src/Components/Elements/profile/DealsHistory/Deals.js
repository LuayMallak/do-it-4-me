import React from "react";
import SearcherDealsContainer from "./SearcherDealsContainer";
import ProviderDealsContainer from "./ProviderDealsContainer";
import { StyledDeals } from "../../../Styled-Components/StyledDeals";

const Deals = ({ deals }) => {

  return (
    <StyledDeals>
  
      <SearcherDealsContainer
        list={deals && deals.searcherList}
      />
      <ProviderDealsContainer
        list={deals && deals.providerList}
      />
    </StyledDeals>
  );
};

export default Deals;
