import styled from "styled-components";
import colors from "./General-Styles/colors";
import image1 from "../../images/profileImage.jpg";

export const StyledCard = styled.div`
  position: relative;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 250px;
  height: 450px;
  margin: 2rem;
  -webkit-margin-collapse: collapse;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${colors.dark};
  background-color: rgb(206, 204, 204);
  overflow: hidden;

  .profilePic {
    background-image: url(${(props) => (props.image ? props.image : image1)});
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 231px;
  }
  .infoSection {
    .ratePrice {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      transition: all ease-in-out 0.5s;
      position: absolute;
      top: -30px;
      padding: 0 1rem;
      /* background-color: rgba(189, 181, 178, 0.8); */
      background: rgb(189,181,178);
      background: linear-gradient(0deg, rgba(189,181,178,0.7) 0%, rgba(189,181,178,0.7) 70%, rgba(189,181,178,0) 100%);
      .rateCounter{
        font-weight: 700;
        color:${colors.dark};
      }
      .price {
        font-weight: 700;
        color:${colors.dark};
      }
    }
    background-color: ${colors.middle};
    position: absolute;
    width: 100%;
    transition: all ease-in-out 0.5s;
    height: ${(props) => (props.extend ? "430px" : "230px")};
    max-height: ${(props) => (props.extend ? "430px" : "230px")};
    top: ${(props) => (props.extend ? "30px" : "230px")};
    display: flex;
    flex-direction: column;

    .more {
      height: 100%;
      display: flex;
      align-items: center;

      .arrow {
      transition: 0.2s ease;
      ${({ extend }) =>
        extend ? `transform: rotate(90deg);` : `transform: rotate(-90deg);`}
      cursor: pointer;
      color: ${colors.secondary};
      font-size: 20px;
    }
    }

    .bioText {
      height: ${(props) => (props.extend ? "270px" : "70px")};
      overflow: hidden;
    }

    .nameContainer {
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding: 1rem;
      margin-bottom: -1rem;

      h3 {
        font-weight: 700;
        font-size: 18px;
      }

      .fee {
        font-weight: 700;
        font-size: 18px;
      }
    }

    .servicesContainer {
      width: 100%;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      text-align: left;
      padding: 16px;
      flex-grow: 1;

      .skills {
        width: 100%;
        display: flex;
        flex-wrap: wrap;

        .skill {
          margin-right: 0.3rem;
          font-weight: 700;
          .dot {
            font-size: 0.7rem;
          }
        }
      }

      .text {
        font-size: 10px;
        line-height: 12px;
        margin-top: 8px;
        .more {
          font-size: 2rem;

          cursor: pointer;
          ${(props) =>
            props.extend ? `transform:rotate(90deg)` : `transform:rotate(0)`};
        
        }

      }
    }

    .__buttonContainer {
      width: 100%;
      position: absolute;
      bottom: 14px;
      display: flex;
      background-color:${colors.middle};

      .book {
        margin: 0.2rem;
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
      .contact {
        margin: 0.2rem;
        width: 50%;
        height: 30px;
        font-weight: 700;
        font-size: 14px;
        background-color: ${colors.secondary};
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
          a{
            color:${colors.dark}
          }
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
    }
  }
`;
