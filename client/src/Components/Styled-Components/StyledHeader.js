import styled from "styled-components";
import colors from "./General-Styles/colors";

export const StyledHeader = styled.div`
  z-index: 10000;
  position: fixed;
  width: 100vw;
  height: 7rem;
  top: 0px;
  left: 0;
  right: 0;
  background-color: ${colors.dark};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.light};
  filter: drop-shadow(0px 0.7rem 0.7rem rgba(0, 0, 0, 0.25));
  padding: 0;
  margin: 0;
  z-index: 100;

  .navBarContainer {
    font-size: 1.6rem;
    padding: 0;
    margin: 0;
    max-width: 1920px;
    width: 90%;
    height: 7rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logoContainer {
      height: 6rem;
      width: 12rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      img {
        display: block;
        height: 4rem;
      }
    }
    .navigationContainer {
      height: 6rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;
