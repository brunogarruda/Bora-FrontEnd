/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unused-state */
import React, { Component } from "react";
import axios from "axios";
import EventoTeste from "./EventoTeste";

export default class Teste extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventos: null,
      value: ""
    };
  }

  // state = {
  //   eventos: null,
  //   value: ''
  // };

  // search = async val => {
  //   const res = await axios(`http://localhost:8080/api/eventos/${val}`);
  //   const eventos = await res.data;
  //   this.setState({ eventos });
  // };

  // onChangeHandler = async e => {
  //   this.search(e.target.value);
  //   this.setState({ value: e.target.value });
  // };

  // get renderEventos() {
  //   let eventos = <h1>Nenhum evento</h1>;
  //   if (this.state.eventos) {
  //     eventos = <EventoTeste list={this.state.eventos} />;
  //   }
  //   return eventos;
  // }

  // render() {
  //   return (
  //     <div>
  //       <input
  //         value={this.state.value}
  //         onChange={e => this.onChangeHandler(e)}
  //         placeholder="pesquisa um role"
  //       />
  //       {this.renderEventos}
  //     </div>
  //   );
  // }
  render() {
    return <div>ola mundo</div>;
  }
}
