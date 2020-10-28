import styled from "styled-components";
import colors from "./General-Styles/colors";

export const StyledAvailabilityUpdate = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 30px;
  flex-grow: 1;
  @media screen and (min-width: 768px) {
    max-width: 100%;
  }
  label {
    width: 100px;
    height: 30px;
    font-weight: bold;
  }

  .dateContainer {
    flex-grow: 1;
    display: flex;

    justify-content: center;
    align-items: stretch;
    width: 40%;
    padding: 0;
    flex-grow: 1;
    margin: 5px;
    background-color: ${colors.light};
    border-radius: 2px;
    border: solid 1px ${colors.middle};
    .ant-space {
      width: 100%;
      height: 30px;
      flex-grow: 1;
      margin: 5px;
      background-color: ${colors.light};
      border-radius: 2px;
      border: solid 1px ${colors.middle};
      .ant-picker {
        width: 100%;
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
