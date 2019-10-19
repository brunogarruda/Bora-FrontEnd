import styled from "styled-components";

export const Banner = styled.div`
  .context {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 10vh 26vh 26vh 25vh;
  }
  .banner {
    display: flex;
    justify-content: center;
    text-align: center;
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 3;
    grid-row-end: 3;
    margin-top: -11%;
  }
  .titulo {
    position: absolute;
    font-size: 3.5em;
    font-weight: 700;
    color: white;
    margin-top: 3%;
    font-family: 'Lobster', cursive;
    font-style: normal;
    font-weight: normal;
    line-height: 94px;
    font-size: 75px;
    align-items: center;
    display: flex;
    text-align: justify;
  }

  .img {
    grid-column-start: 1;
    grid-column-end: 4;
  }

  .barra-pesquisa {
    margin-top: 12%;
    width: 60%;
    height: 5vh;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  button {
    width: 24%;
    height: 7vh;
    margin: -3% 3%;
  }

  .butoes {
    display: flex;
    justify-content: center;
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 3;
  }
  .bora {
    font-size: 1.5em;
    text-align: center;
    border-radius: 20px;
    background: #00a526;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: none;
    margin-top: 9%;
  }
  .criar-role {
    font-size: 1.5em;
    text-align: center;
    background: #081b33;
    box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    border: none;
    margin-top: 9%;
  }

  @media screen and (max-width: 1024px) {
    button {
      width: 37%;
    }
    .banner {
      margin-top: -19%;
    }

    .barra-pesquisa {
      height: 9vh;
      width: 86%;
    }
    .criar-role {
      margin-top: 7%;
    }
    .bora {
      margin-top: 7%;
    }
  }

  @media screen and (max-width: 768px) {
    .banner {
      margin-top: -31%;
    }
    .titulo {
      font-size: 2.5em;
      font-weight: 700;
      margin: 0;
    }
    .barra-pesquisa {
      height: 8vh;
    }
    .bora {
      margin-top: -3%;
    }
    .criar-role {
      margin-top: -3%;
    }
  }
`;
