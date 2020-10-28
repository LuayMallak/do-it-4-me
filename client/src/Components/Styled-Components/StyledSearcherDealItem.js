import styled from "styled-components";
import colors from "./General-Styles/colors";

export const StyledSearcherDealItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  border: 1px solid ${colors.light};
  background-color: ${colors.middle};
  margin: 3px 0;
  padding: 3px;
  border-radius: 3px;
  min-height: 100px;
  h4 {
    font-weight: 700;
  }
  .userDataContainer {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    text-align: left;
  }
  .actionsContainer {
    width: 50%;
    position: relative;
    p {
      position: absolute;
      top: 0px;
      right: 5px;
      margin: 2px;
      font-weight: 700;
    }
    .pending {
      color: ${colors.light};
    }
    .canceled {
      color: ${colors.danger};
    }
    .approved {
      color: green;
    }
    .rate {
      position: absolute;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-end;
      bottom: 5px;
      right: 0px;
      margin: 2px;
      width: auto;
      .ant-rate {
        margin: 0;
        color: ${colors.dark};
      }
    }
    .clearBTN {
      height: 25px;
      font-weight: 700;
      font-size: 12px;
      background-color: ${colors.danger};
      color: ${colors.light};
      border-radius: 3px;
      border: none;
      transition: all ease-in-out 0.5s;

      padding: 0 5px;
      margin-right: 5px;
      cursor: pointer;
    }
    .rateBTN {
      height: 25px;
      font-weight: 700;
      font-size: 12px;
      background-color: ${colors.dark};
      color: ${colors.light};
      border-radius: 3px;
      border: none;
      transition: all ease-in-out 0.5s;

      padding: 0 5px;
      cursor: pointer;
      :disabled {
        background-color: ${colors.middle};
        text-decoration: line-through;
      }
    }
    .BTNContainer {
      position: absolute;
      bottom: 5px;
      right: 5px;
      width: 80%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      .confirm,
      .cancel {
        width: 48%;
        height: 25px;
        font-weight: 700;
        font-size: 12px;
        background-color: ${colors.danger};
        color: ${colors.light};
        border-radius: 3px;
        border: none;
        transition: all ease-in-out 0.5s;

        margin-right: 3px;
        cursor: pointer;
        span {
          cursor: pointer;
          display: inline-block;
          position: relative;
          transition: 0.5s;
          ::after {
            content: "»";
            position: absolute;
            opacity: 0;
            top: 0;
            right: -20px;
            transition: 0.5s;
          }
        }
        :hover span {
          padding-right: 25px;
        }
        :hover span:after {
          opacity: 1;
          right: 0;
        }
        :focus {
          outline: none;
        }
      }
      .confirm {
        background-color: ${colors.success};
      }
    }
  }
`;
