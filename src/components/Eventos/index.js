/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-console */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Bola from "@material-ui/icons/SportsSoccerSharp";
import { api } from "../../services/api";
import "./styles.css";

export default class Eventos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventos: []
    };
  }

  componentDidMount() {
    try {
      api.get("eventos").then(res => {
        this.setState({ eventos: res.data });
      });
    } catch (e) {
      console.log("error: ", e);
    }
  }

  render() {
    return (
      <div className="container div-eventos">
        <h2>Ultimos rolês cadastrados</h2>
        <div className="row">
          {this.state.eventos.map(item => (
            <div key={item.idEvento} className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <h6>
                    <b>{item.nome}</b>
                  </h6>
                  <hr className="barra-evento" />
                  <Bola className="icone" />
                </div>
                <div className="flip-card-back">
                  <div className="detalhe-evento">
                    <h6 />
                    <p>
                      <b>Início:</b> {item.dataHoraInicio} <br />
                      <b>Termino:</b> {item.dataHoraFim}
                    </p>
                    <p>
                      <b>Endereço: </b>
                      {item.endereco.rua}, {item.endereco.numero} - {item.endereco.bairro} -
                      {item.endereco.cidade}/{item.endereco.estado}
                    </p>
                  </div>
                  <button className="btn btn-light btn-block" classNameName="botao-evento">
                    <Link to={`/detalheEventos/${item.idEvento}`}>
                      <b>Detalhes</b>
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
