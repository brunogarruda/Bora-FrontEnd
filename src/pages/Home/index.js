import React, { Component } from "react";
import { Container, Image } from "react-bootstrap";
import Eventos from "../../components/Eventos";
import CampoPesquisa from "../../components/CampoPesquisa";
import bg from "../../assets/bg.png";
import { Banner } from "./styles";

class Home extends Component {
  render() {
    return (
      <main>
        <Banner>
          <section className="context">
            <Image className="img" src={bg} fluid />
            <div className="banner">
              <h2 className="titulo">O que você quer fazer ?</h2>
              <div className="barra-pesquisa">
                <CampoPesquisa />
              </div>
            </div>
            <div className="butoes">
              <button className="bora">Bora</button>
              <button className="criar-role">Criar um rolê</button>
            </div>
          </section>
          {/* <div className="context">
            <div className="banner">
              <h2 className="titulo">O que voce quer fazer ?</h2>
              <Image className="img" src={bg} fluid />
              <div className="barra-pesquisa">
                <CampoPesquisa />
              </div>
              <button className="bora">Bora</button>
              <button className="criar-role">Criar um rolê</button>
            </div>
          </div> */}
        </Banner>
      </main>
      /* <div className="faixa"></div>
        <Container>
          <Eventos />
        </Container> */
    );
  }
}

export default Home;
