import styled from "styled-components";
import colors from "./General-Styles/colors";

export const StyledSignup = styled.div`
  width: 100vw;
  min-height: 100vh;
  top: 0px;
  background-color: ${colors.light};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: ${colors.dark};
  padding-top: 10rem;
  margin: 0;

  a {
    margin-top: 2rem;

    .to-signup {
      font-size: 1.5rem;
    }
  }
`;
