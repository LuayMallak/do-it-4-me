import styled from "styled-components";
import colors from "./General-Styles/colors";

export const StyledBurgerMenuIcon = styled.div`
  z-index: 101;
  width: 2.4rem;
  height: 1.8rem;
  position: relative;
  cursor: pointer;
  :hover span {
    background-color: ${colors.light};
  }
  span {
    position: absolute;
    left: 0;
    height: 0.2rem;
    width: 100%;
    opacity: 1;
    background-color: ${colors.middle};
    border-radius: 0.2rem;
    pointer-events: none;
    transform: rotate(0deg);
    transition: 0.2s ease;

    :nth-child(1) {
      top: 0px;
      ${({ extend }) =>
        extend &&
        `
            top: 50%;
            left:50%;
            width:0px;
        `}
    }
    :nth-child(2) {
      top: 50%;
      ${(props) =>
        props.extend &&
        `
            transform: rotate(45deg)
        `}
    }
    :nth-child(3) {
      top: 50%;
      ${({ extend }) =>
        extend &&
        `
            transform: rotate(-45deg)
        `}
    }
    :nth-child(4) {
      top: 100%;
      ${({ extend }) =>
        extend &&
        `
            top: 50%;
            left:50%;
            width:0px;
        `}
    }
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
