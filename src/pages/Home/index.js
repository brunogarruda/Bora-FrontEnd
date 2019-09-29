import React, { Component } from "react";
import { Container, Image } from "react-bootstrap";
import Eventos from "../../components/Eventos";
import CampoPesquisa from "../../components/CampoPesquisa";
import background from "../../assets/bg.png";
import "./styles.css";
import { Botoes } from "./styles";

class Home extends Component {
  render() {
    return (
      <>
        <section className="banner">
          <h2 className="titulo">O que voce quer fazer ?</h2>
          <div className="barra-pesquisa">
            <CampoPesquisa />
          </div>
          <Botoes>
            <div className="butoes">
              <button className="bora">Bora</button>
              <button className="criar-role">Criar um rolê</button>
            </div>
          </Botoes>
          <Image src={background} fluid />
        </section>
        {/* <div className="faixa"></div>
        <Container>
          <Eventos />
        </Container> */}
      </>
    );
  }
}

export default Home;
