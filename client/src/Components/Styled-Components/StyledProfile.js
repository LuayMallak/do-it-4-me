import styled from "styled-components";
import colors from "./General-Styles/colors";

export const StyledProfile = styled.div`
  width: 100vw;
  min-height: 100vh;
  top: 0px;
  background-color: ${colors.light};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: ${colors.dark};
  padding-top: 7rem;
  margin: 0;

  .ImageUploadComponentContainer {
    z-index: 100;
    position: fixed;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .ImageUploadComponentBG {
      position: fixed;
      width: 100vw;
      height: 100vh;
      -webkit-filter: blur(8px);
      filter: blur(8px);
      z-index: 100;
      background-color: ${colors.dark};
      opacity: 90%;
    }
    .uploadImageComponent {
      z-index: 101;
      position: relative;
      .close {
        position: absolute;
        top: 0;
        right: 0;
        font-weight: 700;
        cursor: pointer;
        color: ${colors.light};
      }
    }
  }
  .profileContainer {
    margin: 0 auto;
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    @media (min-width: 768px) {
      flex-direction: row-reverse;
      justify-content: space-between;
      align-items: flex-start;
    }
    .profileHeader {
      width: 100%;
      max-width: 340px;
      margin: 10px auto;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      background-color: ${colors.middle};
      padding-bottom: 5px;
      @media (min-width: 768px) {
        margin: 0;
        position: sticky;
        top: 7rem;
        height: calc(100vh - 7rem);
      }
      .imageContainer {
        width: 100%;
        max-width: 340px;
        max-height: 340px;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow: hidden;
        img {
          display: block;
          width: 100%;
        }
        .uploadImageIcon {
          position: absolute;
          top: 1rem;
          right: 1rem;
          svg {
            font-size: 2rem;
            color: ${colors.secondary};
          }
        }
      }
      .shortInfoContainer {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        max-width: 340px;

        .addressContainer,
        .name {
          background-color: ${colors.middle};
          width: 100%;
        }
        h2 {
          font-weight: 600;
        }
        .rateContainer {
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          background-color: ${colors.middle};
          padding-bottom: 1rem;

          .ratersQuantity {
            color: ${colors.dark};
            margin: 0 0 0 1rem;
          }
        }
      }
    }
  }
  .profileBody {
    width: 100%;
    max-width: 340px;
    margin: 10px auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    @media (min-width: 768px) {
      padding: 20px;
      max-width: 100%;
    }
    .servicesContainer {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
      .services {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 1rem;
        width: 100%;
        /* max-width: 340px; */
        .service {
          background-color: ${colors.primary};
          margin: 0.2rem;
          border-radius: 0.2rem;
          padding: 0.2rem;
          width: 100%;
        }
        .date {
          background-color: ${colors.secondary};
          margin: 0.2rem;
          border-radius: 0.2rem;
          padding: 0.2rem;
          width: 100%;
        }

        .bioContainer {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          margin: 1rem;
          width: 100%;
          text-align: left;
        }
      }
    }
  }
  .profileUpdateContainer {
    z-index: 20;
    position: absolute;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    .profileUpdateBG {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      -webkit-filter: blur(8px);
      filter: blur(8px);
      z-index: 19;
      background-color: ${colors.dark};
      opacity: 30%;
    }
    .signupFormContainer {
      z-index: 201;
      position: relative;
      background-color: ${colors.light};
      border-radius: 10px;
      padding: 10px;
      div {
        z-index: 201;
      }
      .close {
        position: absolute;
        font-size: 32px;
        top: 10px;
        right: 30px;
        font-weight: 700;
        cursor: pointer;
        color: ${colors.danger};
      }
    }
  }
`;
