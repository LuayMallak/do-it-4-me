import styled from "styled-components";
import colors from "./General-Styles/colors";

export const StyledUpdateProfile = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding-top:8rem;

  .updateProfileContainer {
    margin: 0 auto;
    width: 100%;
    max-width: 500px;
   
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    transition: all 0.2s ease;
    @media screen and (min-width: 900px) {
      flex-direction: row;
      justify-content: center;
      align-items: flex-start;
      max-width: 80%;
      margin-top: 20px;
    }
    .dataContainer {
      width: 100%;
      @media screen and (min-width: 900px) {
        max-width: 50%;
      }
    }
    .updateProfileNavigatorContainer{
      display:flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: column-reverse;
      margin-bottom: 30px;
    .BTNContainer{
      width: 80%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 45px;
      @media screen and (min-width: 900px) {
 
       flex-wrap:wrap;
      }
      a {
        width: 50%;
        display:flex;
        align-items:center;
        justify-content:center;
        button {
        width: 100%;
        margin: 5px;
        height: 40px;
        font-weight: bold;
        font-size: 20px;
        border-radius: 5px;

      }
      @media screen and (min-width: 900px) {
       width:100%;

      }
      }
    }
    .updateProfileNavigator {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: column;
      margin-bottom: 10px;
      button {
        width: 80%;
        margin: 5px;
        border: 2px solid ${colors.secondary};
        background-color: ${colors.middle};
        color: ${colors.light};
        height: 40px;
        font-weight: bold;
        font-size: 20px;
        border-radius: 5px;
      }
      .active {
        background-color: ${colors.primary};
      }
      
    }
    }
  }
`;
