import React from "react";
import ProviderDealItem from "./ProviderDealItem";
import { StyledDealsContainer } from "../../../Styled-Components/StyledDealsContainer";
const ProviderDealsContainer = ({ list, setChange }) => {
  return (
    <StyledDealsContainer>
      <h2 className="providersTitle">Your Deals as Provider</h2>
      {list&&list.length ?
        list.map((item) => (
          <ProviderDealItem key={item._id} setChange={setChange} deal={item} />
        )):<h4>You don't have deals yet</h4>}
    </StyledDealsContainer>
  );
};

export default ProviderDealsContainer;
