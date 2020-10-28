import styled from "styled-components";
import colors from "./General-Styles/colors";

export const StyledBiography = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;

  align-items: flex-start;
  
  flex-grow: 1;
  @media screen and (min-width: 768px) {
    max-width: 100%;
  }
  label {
    width: 100px;
    height: 30px;
    font-weight: bold;
  }
  .inputContainer {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    textarea {
      flex-grow: 1;
      background-color: ${colors.light};
      border-radius: 2px;
      border-color: ${colors.middle};
      height: 200px;
      margin: 5px;
    }
  }
  .editButtons {
    width: 100px;
    height: 30px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 7px 0;
    button {
      width: 50px;
      border-color: ${colors.secondary};
      border-radius: 2px;
      outline: none;
      background-color: ${colors.secondary};
      margin: 5px;
      color: ${colors.light};
      height: 30px;
    }
    .cancel {
      border-color: ${colors.danger};
      background-color: ${colors.danger};
    }
    .save {
      border-color: ${colors.primary};
      background-color: ${colors.primary};
    }
  }
`;
