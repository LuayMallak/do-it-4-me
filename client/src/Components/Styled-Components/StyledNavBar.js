import styled from "styled-components";
import colors from "./General-Styles/colors";

export const StyledNavBar = styled.div`
  font-size: 16px;
  width: 50vw;
  display: none;
  justify-content: flex-end;
  align-items: center;
  button {
    max-width: 160px;
    max-height: 40px;
    font-size: inherit;
    margin-right: 3rem;
  }
  div {
    position: relative;
    font-weight: bold;
    text-align: center;
    margin-right: 3rem;
    color: ${colors.light};
    cursor: pointer;
    transition: all .2s ease-in-out;
    :hover {
      color: ${colors.secondary};
    }
  }
  @media screen and (min-width: 768px) {
    display: flex;
  }
  @media screen and (min-width: 1400px) {
    width: 40vw;
  }
`;
