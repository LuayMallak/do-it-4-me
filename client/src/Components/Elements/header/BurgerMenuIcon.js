import React from "react";
import { StyledBurgerMenuIcon } from "../../Styled-Components/StyledBurgerMenuIcon";
const BurgerMenuIcon = ({ onClick, extend }) => {
  return (
    <StyledBurgerMenuIcon extend={extend} onClick={onClick}>
      <div>
        <span />
        <span />
        <span />
        <span />
      </div>
    </StyledBurgerMenuIcon>
  );
};

export default BurgerMenuIcon;
