import styled from "styled-components";
import colors from "./General-Styles/colors";

export const StyledSearchResult = styled.div`
  width: 100vw;
  min-height: 100vh;
  top: 0px;
  background-color: ${colors.light};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: ${colors.dark};
  padding: 7rem 0 0 0;
  margin: 0;
  position: relative;
  button {
    position: sticky;
    top: 7rem;

    width: 100vw;
    z-index: 60;
    div {
      color: ${colors.light};
      font-size: 2rem;
    }
    svg {
      margin-left: 1rem;
      transition: 0.2s ease;
      ${({ extend }) =>
        extend ? `transform: rotate(90deg);` : `transform: rotate(-90deg);`}
    }
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    min-height: auto;
    justify-content: flex-end;
    .filter-btn {
      display: none;
    }
  }
`;
