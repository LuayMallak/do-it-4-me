import React, { useContext } from "react";
import { StyledCardContainer } from "../../Styled-Components/StyledCardContainer";
import SearchResultContext from "../../../data/SearchResultContext";
import Card from "./Card";
import useSearchProviders from "../../../data/useSearchProviders" 
import Spinner from "../../Elements/shared/Spinner"
const CardContainer = () => {
  
  const {loading} = useSearchProviders()
  const { providers } = useContext(SearchResultContext);
  return (
    <StyledCardContainer>
        {loading ? <Spinner/> :(<>

      {providers.length ? (
        providers.map((item) => <Card key={item._id} data={item} />)
      ) : (
        <div>no result</div>
      )}</>)}

    </StyledCardContainer>
  );
};

export default CardContainer;
