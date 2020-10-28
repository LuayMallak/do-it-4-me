import styled from "styled-components";
import colors from "./General-Styles/colors";

export const StyledBooking = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-color: ${colors.light};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: ${(props) => (props.bookingExtend ? "100%" : "0")};
  visibility: ${(props) => (props.bookingExtend ? "1" : "0")};
  z-index: 50;
  overflow: hidden;
  transform-origin: left;
  transition: all 0.4s ease;
  textarea {
    width: 200px;
    height: 100px;
    resize: none;
  }
  .addressContainer {
    input {
      width: 200px;
      border: 1px solid ${colors.middle};
      height: 30px;
      border-radius: 2px;
      text-align: center;
    }
  }
  .title {
    background-color: ${colors.middle};
    width: 100%;
    color: ${colors.light};
  }
  .BTNContainer {
    width: 100%;
    margin: 5px;
    display: flex;
    .BTN {
      margin: 2px;
      width: 50%;
      height: 30px;
      font-weight: 700;
      font-size: 14px;
      background-color: ${colors.primary};
      border-radius: 3px;
      border: none;
      transition: all ease-in-out 0.5s;
      z-index: 40;
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
    .cancelBTN {
      background-color: ${colors.danger};
    }
  }
`;
