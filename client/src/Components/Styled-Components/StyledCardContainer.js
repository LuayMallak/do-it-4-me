import styled from "styled-components";
//import colors from "./General-Styles/colors";

export const StyledCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: gray;
  min-height: 100vh;
  @media screen and (min-width: 768px) {
    max-width: calc(100vw - 300px);
    min-height: 100vh;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
