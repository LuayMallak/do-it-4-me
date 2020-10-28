import React from "react";
import { Link } from "@reach/router";
import { StyledNotFound } from "../Styled-Components/StyledNotFound";
const NotFound = () => {
  return (
    <StyledNotFound>
      <div className="codeContainer">
        <h1>404</h1>
      </div>
      <div className="textContainer">
        <p>Something went wrong!</p>
        <Link to="/">back to homepage</Link>
      </div>
    </StyledNotFound>
  );
};

export default NotFound;
