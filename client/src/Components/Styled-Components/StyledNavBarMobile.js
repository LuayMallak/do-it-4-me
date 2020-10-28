import styled from "styled-components";
import colors from "./General-Styles/colors";

export const StyledNavBarMobile = styled.div`
  position: fixed;
  margin-top: 7rem;
  padding-top: 10rem;
  top: 0;
  left: 0;
  font-size: 32px;
  width: 100vw;
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-end;
  align-items: center;
  height: 100vh;
  z-index: 99;
  background-color: ${colors.dark};
  transform: scaleX(0);
  transform-origin: right;
  transition: 0.2s ease;

  ${({ extend }) => extend && `transform: scaleX(1);`}
  a {
    width: 80%;
    margin-top: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    button {
      width: 100%;
      height: 7rem;
      font-size: 32px;
      margin-top: 3rem;
      /*     max-width: 160px;
    max-height: 40px;
    font-size: inherit; */
    }
  }
  a {
    width: 80%;
    margin-top: 3rem;
    display: flex;
    justify-content: content;
    align-items: color-interpolation-filters;
    div {
      margin-top: 3rem;
      position: relative;
      font-weight: bold;
      text-align: center;
      /* width: 20%; */
      color: ${colors.light};
      cursor: pointer;
      :hover {
        color: ${colors.secondary};
      }
    }
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
