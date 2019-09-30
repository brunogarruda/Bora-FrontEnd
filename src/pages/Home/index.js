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
        </Banner>
        <div className="faixa"></div>
        <Container>
          <Eventos />
        </Container>
      </main>
    );
  }
}

export default Home;
