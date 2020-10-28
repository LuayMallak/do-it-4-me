import styled from "styled-components";
import colors from "./General-Styles/colors";

export const StyledSignupForm = styled.div`
  margin: 0;
  padding: 0;

  form {
    width: 80vw;
    max-width: 600px;
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    color: ${colors.dark};
    padding: 5rem 0;
    margin: 0;
    .city {
      display: flex;
      justify-content: stretch;
      align-items: stretch;
      div,
      input {
        flex-grow: 1;
      }
    }
    .provider {
      display: flex;
      justify-content: center;
      align-items: center;

      input {
        margin: 0 0.3rem 0 1rem;
        width: auto;
      }
    }

    input {
      height: 3.5rem;
      margin-bottom: 1rem;
      text-align: center;
      border: 1px solid ${colors.middle};
      color: ${colors.middle};
    }
    button {
      margin-top: 2rem;
      width: 100%;
    }
  }
`;
