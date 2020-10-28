import { createGlobalStyle } from "styled-components";
import colors from "./General-Styles/colors";
export const GlobalStyle = createGlobalStyle`
:root {
  scroll-behavior: smooth;
  overflow-x: hidden;
  font-size: 62.5%;
  box-sizing: border-box;
  margin:none;
  width:100vw;
/*   @media screen and (min-width: 768px) and (orientation: portrait) {
    font-size: 100%;
  } */
/*   @media (min-width: 900px) {
    font-size: 100%;
  } */
  @media (min-width: 985px) {
    font-size: 100%;
  }
}
  body {
    position:relative;
    margin:none;
    padding: 0;
    box-sizing: border-box;
    text-align: center;
    background-color: ${colors.light};
    
    width:100vw;
    *{
      font-family: 'Assistant', sans-serif;
      padding: 0;
      margin: 0 ;
      box-sizing: border-box;

    }
  }
`;
