import styled from "styled-components";
import colors from "./General-Styles/colors";

export const StyledDealsContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  /*  border: 3px solid ${colors.middle}; */
  background-color: ${colors.light};
  width: 100%;
  padding: 0;
  @media screen and (min-width: 1000px) {
    width: 49%;
  }
  h2 {
    height: 50px;
    line-height: 50px;

    vertical-align: center;
    color: ${colors.light};
    font-weight: 700;
    width: 100%;
    margin: 0;
  }
  .searchersTitle {
    background-color: ${colors.primary};
  }
  .providersTitle {
    background-color: ${colors.secondary};
  }
`;
