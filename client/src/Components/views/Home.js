import React from "react";

import { StyledHome } from "../Styled-Components/StyledHome";
import HeroSection from "../Elements/home/HeroSection";
import InfoSection from "../Elements/home/InfoSection.js";

const Home = () => {
  return (
    <StyledHome>
      <HeroSection />

      <InfoSection />
    </StyledHome>
  );
};

export default Home;
