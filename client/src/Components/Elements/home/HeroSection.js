import React from "react";
import { Link } from "@reach/router";

import { StyledHeroSection } from "../../Styled-Components/StyledHeroSection";
import { StyledButton } from "../../Styled-Components/StyledButton";
import SelectServices from "../forms/SelectServices";

import useSearchProviders from "../../../data/useSearchProviders";

import HeadlineSection from "./HeadlineSection";

const HeroSection = () => {
  const {
    handleServiceChange,
    handleCityChange,
    handlePreFetchSearchForm,
    
  } = useSearchProviders();

  return (
    <StyledHeroSection>
      <div className="heroSection">
        <div className="headlineSection">
          <HeadlineSection />
        </div>
        {/* <div className="searchSection"> */}
        <form className="searchSection">
          <SelectServices
            type="Service"
            onChange={(string, v) => handleServiceChange(v)}
            name="Service"
          />
          <SelectServices
            onChange={(string, v) => handleCityChange(v)}
            type="city"
            name="city"
          />
          <Link to="/search-result">
            <StyledButton
            onClick={() => handlePreFetchSearchForm()}
            type="primary"
          >
              Search
          </StyledButton></Link>
        </form>
        {/*    </div> */}
      </div>
      <div className="doubleDownIcon-container">
        <a href="#InfoSection">
          <span></span>
          <span></span>
          <span></span>
        </a>
      </div>
    </StyledHeroSection>
  );
};

export default HeroSection;
