import styled from "styled-components";
import colors from "./General-Styles/colors";
import heroImage from "../../images/heroImage.jpg";

export const StyledInfoSection = styled.div`
  width: 100%;
  height: 93vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  justify-content: center;
  background-image: url(${heroImage});
  background-position: 50% 20%;
  background-attachment: fixed;
  background-size: cover;
  @media (min-width: 985px) {
    height: 50vh;
    background-image: url(${heroImage});
    background-position: 50% 20%;
    background-attachment: fixed;
    background-size: cover;
  }
  .infoItem {
    width: 100%;
    height: 40vh;
    margin-top: 1rem;
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(245, 245, 245, 0.9);

    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

    position: relative;
    border-radius: 4px;
    z-index: 0;
    overflow: hidden;

    &:before {
      content: "";
      position: absolute;
      z-index: -1;
      top: -16px;
      right: -16px;
      height: 32px;
      width: 32px;
      border-radius: 32px;
      transform: scale(1);
      transform-origin: 50% 50%;
      transition: transform 0.25s ease-out;
    }

    &:hover:before {
      transform: scale(50);
    }

    &:hover {
      p {
        transition: all 0.3s ease-out;
        color: ${colors.light};
      }
      h2 {
        transition: all 0.3s ease-out;
        color: ${colors.light};
      }
    }

    h2 {
      color: ${colors.dark};
      /* font-size: 32px; */
      line-height: 30px;
      font-weight: 700;
    }

    p {
      max-width: 50%;
      margin-top: 2rem;
      /* font-size: 16px; */
      font-weight: 700;
      line-height: 20px;
      color: ${colors.dark};
    }

    .go-corner {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      width: 32px;
      height: 32px;
      overflow: hidden;
      top: 0;
      right: 0;

      border-radius: 0 4px 0 32px;

      .go-arrow {
        margin-top: -4px;
        margin-right: -4px;
      }
    }
  }

  .infoItem1 {
    &:before {
      background: ${colors.primary};
    }

    h2 {
      color: ${colors.primary};
    }
    p {
      color: ${colors.primary};
    }

    .go-corner {
      background-color: ${colors.primary};
    }
  }

  .infoItem2 {
    &:before {
      background: ${colors.secondary};
    }

    h2 {
      color: ${colors.secondary};
    }
    p {
      color: ${colors.secondary};
    }
    .go-corner {
      background-color: ${colors.secondary};
    }
  }

  .infoItem3 {
    &:before {
      background: ${colors.middle};
    }

    h2 {
      color: ${colors.middle};
    }

    p {
      color: ${colors.middle};
    }

    .go-corner {
      background-color: ${colors.middle};
    }
  }

  @media screen and (min-width: 985px) {
    flex-direction: row;

    .infoItem {
      height: 40vh;

      h2 {
        font-size: 32px;
      }
      p {
        font-size: 16px;
      }

      &:hover:before {
        transform: scale(35);
      }

      /* .image2 {
        width: 240px;
        margin-top: 1rem;
      }
      .image4 {
        margin-left: 0rem;
        margin-bottom: 0rem;
        width: 180px;
      }
      .image7 {
        width: 200px;
        margin-top: -1rem;
      } */
    }

    .infoItem2 {
      margin-right: 1rem;
      margin-left: 1rem;
    }
    .infoItem3 {
      margin-right: 0.9rem;
    }
    /* } */
  }
`;
