import React, { Component } from "react";
import {Image } from "react-bootstrap";
import Eventos from "../../components/Eventos";
import CampoPesquisa from "../../components/CampoPesquisa";
import background from "../../assets/fundo.png";
import "./styles.css";
import { Botoes } from "./styles";
import Login from '../../components/Modal-Login'

class Home extends Component {
  render() {
    return (
      <>
        <header>
          <div className="barra-pesquisa">
            <CampoPesquisa />
          </div>
          <Botoes>
            <button className="bora">Bora</button>
            <button className="criar-role">Criar um rolê</button>
          </Botoes>

          <Image src={background} fluid />
        </header>
        <div className="faixa"></div>
          <Eventos />
          <Login />
      </>
    );
  }
}

export default Home;
