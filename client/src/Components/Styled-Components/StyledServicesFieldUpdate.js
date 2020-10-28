import styled from "styled-components";
import colors from "./General-Styles/colors";

export const StyledServicesFieldUpdate = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-grow: 1;
  margin: 10px auto;
  @media screen and (min-width: 768px) {
    max-width: 100%;
  }
  label {
    width: 100px;
    height: 30px;
    font-weight: bold;
  }
  .serviceContainer {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    .serviceBTN {
      border-color: ${colors.middle};
      border-radius: 2px;
      outline: none;
      background-color: ${colors.middle};
      margin: 0 5px 5px 5px;
      color: ${colors.light};
      height: 30px;
      position: relative;
    }
    .activeBTN {
      border-color: ${colors.primary};
      background-color: ${colors.primary};
    }
    .deActiveBTN {
      border-color: rgb(245, 245, 245);
      background-color: rgb(245, 245, 245);
      color: rgb(144, 144, 144);
      svg {
        color: rgb(100, 100, 100);
      }
    }
    svg {
      position: absolute;
      top: center;
      right: 5px;
      color: rgb(24, 144, 24);
    }
  }
  .editButtons {
    width: 100px;
    height: 30px;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    button {
      width: 50px;
      border-color: ${colors.secondary};
      border-radius: 2px;
      outline: none;
      background-color: ${colors.secondary};
      margin: 0 5px;
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
