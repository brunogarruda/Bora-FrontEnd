<<<<<<< HEAD
import React, { useState } from "react";
import Icon from "@material-ui/core/Icon";
import { ModalStyle } from "./styles";

import { api } from "../../services/api";

export default function Modal({ open, close }) {
  const [Evento, setEvento] = useState({
    nome: "",
    dataHoraInicio: "",
    dataHoraFim: ""
  });

  const onChange = event => {
    setEvento({
      ...Evento,
      [event.target.name]: event.target.value
    });
  };

  async function onSubmit(event) {
    event.preventDefault();
    console.log(Evento);

    await api
      .post("eventos",  Evento )
      .then(res => setEvento(res.data))
      .catch(err => console.error(err));
  }

  return open ? (
    <ModalStyle>
      <div className="modal" />
      <Icon onClick={close}>close</Icon>

      <form onSubmit={onSubmit}>
        <label htmlFor="nome">nome</label>
        <input
          id="nome"
          name="nome"
          value={Evento.nome}
          placeholder="Digite o nome do evento"
          onChange={onChange}
        />
        <input
          id="dataHoraInicio"
          name="dataHoraInicio"
          value={Evento.dataHoraInicio}
          placeholder="Digite o dataHoraInicio do evento"
          onChange={onChange}
        />
        <input
          id="dataHoraFim"
          name="dataHoraFim"
          value={Evento.dataHoraFim}
          placeholder="Digite a dataHoraFim do evento"
          onChange={onChange}
        />
        <button type="submit">salvar</button>
      </form>
    </ModalStyle>
  ) : null;
}
=======
import React from "react";
import Icon from "@material-ui/core/Icon";
import { ModalStyle } from "./styles";

export const Modal = ({ open, close }) =>
  open ? (
    <ModalStyle>
      <div>
        <div className="modal" />
        <Icon onClick={close}>close</Icon>
      </div>
      <p>teste</p>
    </ModalStyle>
  ) : null;
>>>>>>> 2dececf26d9c5d2c136e455d285135c19d2c2769
