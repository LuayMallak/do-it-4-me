import styled from "styled-components";
import colors from "./General-Styles/colors";

export const StyledNotFound = styled.div`
  background-color: ${colors.secondary};
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    flex-direction: row;
  }
  h1 {
    font-size: 300px;
    font-weight: 700;
    color: ${colors.secondary};
    text-shadow: 1px 2px 10px ${colors.middle};
  }
  p {
    font-size: 48px;
    font-weight: 700;
    margin: 16px 0;
    color: ${colors.middle};
    text-shadow: 1px 2px 10px ${colors.dark};
  }
  a,
  a:active,
  a:link,
  a:visited a:hover {
    font-size: 24px;
    color: ${colors.primary};
  }
  .codeContainer {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (min-width: 768px) {
      width: 50%;
    }
  }
  .textContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (min-width: 768px) {
      width: 50%;
    }
  }
`;
