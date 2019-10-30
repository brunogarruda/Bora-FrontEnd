/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/label-has-associated-control */
// import React, { useState } from "react";
// import Icon from "@material-ui/core/Icon";
// import { ModalStyle } from "./styles";

// import { api } from "../../services/api";

// export default function Modal({ open, close }) {
//   const [Evento, setEvento] = useState({
//     nome: "",
//     dataHoraInicio: "",
//     dataHoraFim: ""
//   });

//   const onChange = event => {
//     setEvento({
//       ...Evento,
//       [event.target.name]: event.target.value
//     });
//   };

//   async function onSubmit(event) {
//     event.preventDefault();
//     console.log(Evento);

//     await api
//       .post("eventos",  Evento )
//       .then(res => setEvento(res.data))
//       .catch(err => console.error(err));
//   }

//   return open ? (
//     <ModalStyle>
//       <div className="modal" />
//       <Icon onClick={close}>close</Icon>

//       <form onSubmit={onSubmit}>
//         <label htmlhtmlFor="nome">nome</label>
//         <input
//           id="nome"
//           name="nome"
//           value={Evento.nome}
//           placeholder="Digite o nome do evento"
//           onChange={onChange}
//         />
//         <input
//           id="dataHoraInicio"
//           name="dataHoraInicio"
//           value={Evento.dataHoraInicio}
//           placeholder="Digite o dataHoraInicio do evento"
//           onChange={onChange}
//         />
//         <input
//           id="dataHoraFim"
//           name="dataHoraFim"
//           value={Evento.dataHoraFim}
//           placeholder="Digite a dataHoraFim do evento"
//           onChange={onChange}
//         />
//         <button type="submit">salvar</button>
//       </form>
//     </ModalStyle>
//   ) : null;
// }

import React from "react";
import Icon from "@material-ui/core/Icon";
import "./styles.css";
import { Link } from "react-router-dom";

export const ModalLogin = ({ open, close }) => {
  return open ? (
    <form className="modal">
      <div className="modal-content">
        <h2>Bem vindo</h2>
        <Icon onClick={close}>close</Icon>

        <div className="form-group">
          <label htmlFor="login">Email ou Apelido</label>
          <input
            type="text"
            required="true"
            className="form-control"
            id="login"
            placeholder="Digite seu email ou apelido"
          />
        </div>
        <div className="form-group">
          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            required="true"
            className="form-control"
            id="senha"
            placeholder="Digite sua senha"
          />
        </div>
        <div className="form-group form-check">
          <input type="checkbox" className="form-check-input" id="lembrar" />
          <label className="form-check-label" htmlFor="lembrar">
            Lembrar de mim
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Logar
        </button>
      </div>
    </form>
  ) : null;
};

export const ModalCadastro = ({ open, close }) => {
  return open ? (
    <form className="modal">
      <div className="modal-content">
        <h2>Crie sua conta</h2>
        <Icon onClick={close}>close</Icon>
        <ul>
          <li id="erroCadastro" />
        </ul>
        <div className="form-group">
          <label htmlFor="apelido">Apelido</label>
          <input
            type="text"
            required="true"
            className="form-control"
            id="apelido"
            placeholder="Digite o seu usuário"
          />
          <small />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            required="true"
            className="form-control"
            id="email"
            placeholder="Digite seu email"
          />
          <small />
        </div>
        <div className="form-group">
          <label htmlFor="celular">Celular</label>
          <input
            type="text"
            required="true"
            className="form-control"
            id="celular"
            placeholder="Digite seu celular"
          />
          <small />
        </div>
        <div className="form-group">
          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            required="true"
            className="form-control"
            id="senha"
            placeholder="Digite sua senha"
          />
          <small />
        </div>
        <div className="form-group">
          <label htmlFor="confirmarSenha">Confirmar Senha</label>
          <input
            type="password"
            required="true"
            className="form-control"
            id="confirmarSenha"
            placeholder="Digite seu email ou apelido"
          />
          <small />
        </div>
        <button type="submit" className="btn btn-primary">
          Cadastrar
        </button>
        <small>
          Já tem uma conta?
          <Link>Clique Aqui!</Link>
        </small>
      </div>
    </form>
  ) : null;
};
