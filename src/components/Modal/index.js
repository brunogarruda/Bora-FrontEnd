/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import Icon from "@material-ui/core/Icon";
import { Link } from "react-router-dom";
// import { ModalStyle } from "./styles";
import "./styles.css";
import { api } from "../../services/api";

export const Modal=({ open, close }) => {
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
return open?(
<div className="modal">
  <div className="modal-content modal-login">
    <div className="login">
      <div className="icon-close">
        <Icon onClick={close}>close</Icon>
      </div>
      <form onSubmit={onSubmit}>
        <h2>Cadastrar evento</h2>
        <div className="input-login">
        <label htmlhtmlFor="nome">nome</label>
        <input
          id="nome"
          name="nome"
          value={Evento.nome}
          placeholder="Digite o nome do evento"
          onChange={onChange}
        />
        </div>
        <div className="input-login">
        <label htmlhtmlFor="nome">Data Hora</label>
        <input
          id="dataHoraInicio"
          name="dataHoraInicio"
          value={Evento.dataHoraInicio}
          placeholder="Digite o dataHoraInicio do evento"
          onChange={onChange}
        />
        </div>
        <div className="input-login">
        <label htmlhtmlFor="nome">Data Fim</label>
        <input
          id="dataHoraFim"
          name="dataHoraFim"
          value={Evento.dataHoraFim}
          placeholder="Digite a dataHoraFim do evento"
          onChange={onChange}
        />
        </div>
        <button type="submit">salvar</button>
      </form>
    </div>
  </div>
</div>
):null;
};




export const ModalLogin = ({ open, close }) => {
  return open ? (
      <div className="modal">
        <div className="modal-content modal-login">
          <div className="login">

        <div className="icon-close">
        <Icon onClick={close}>close</Icon>
        </div>
        <form className="form-group">
          <h2 className="modal-title-login">Bem vindo</h2>
          <div className="input-login">
          <label htmlFor="login">Email ou Apelido</label>
            <input
              type="text"
              className="input-form"
              required="true"
              id="login"
              placeholder="Digite seu email ou apelido"
            />
          </div>
          <div className="input-login">
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              required="true"
              className="input-form"
              id="senha"
              placeholder="Digite sua senha"
            />
          </div>
          <div className="check">
          <input type="checkbox" id="lembrar" />
          <label className="" htmlFor="lembrar">
            Lembrar de mim
          </label>
          </div>
          <button type="submit" className="btn">
            Logar
          </button>
        </form>
          </div>
        </div>
      </div>
  ) : null;
};

export const ModalCadastro = ({ open, close }) => {
  return open ? (
<div className="modal">
    <div className="modal-content modal-cadastro">
        <div className="login">

        <div className="icon-close">
        <Icon onClick={close}>close</Icon>
        </div>
        <form className="form-group">
          <h2 className="modal-title-cadastro">Cadastro</h2>
          <div className="input-cadastro">
          <label htmlFor="apelido">Apelido</label>
            <input
              type="text"
              className="input-form"
              required="true"
              id="apelido"
              placeholder="Digite o seu usuário"
            />
          </div>
          <div className="input-cadastro">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              required="true"
              className="input-form"
              id="email"
              placeholder="Digite seu email"
            />
          </div>

          <div className="input-cadastro">
            <label htmlFor="celular">Celular</label>
            <input
              type="text"
              required="true"
              className="input-form"
              id="celular"
              placeholder="Digite seu celular"
            />
          </div>

          <div className="input-cadastro">
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              required="true"
              className="input-form"
              id="senha"
              placeholder="Digite sua senha"
            />
          </div>

          <div className="input-cadastro">
            <label htmlFor="email">Confimar Senha</label>
            <input
              type="text"
              required="true"
              className="input-form"
              id="conf-senha"
              placeholder="Digite a senha novamente"
            />
          </div>
          <button type="submit" className="btn">
          Cadastrar
          </button>
        <small>
           Já tem uma conta?
           <Link>Clique Aqui!</Link>
        </small>
        </form>
        </div>
    </div>
</div>
  ):null;
};



    // <form className="modal">
    //   <div className="modal-content">
    //     <h2>Crie sua conta</h2>
    //     <Icon onClick={close}>close</Icon>
    //     <ul>
    //       <li id="erroCadastro" />
    //     </ul>
    //     <div className="form-group">
    //       <label htmlFor="apelido">Apelido</label>
    //       <input
    //         type="text"
    //         required="true"
    //         className="form-control"
    //         id="apelido"
    //         placeholder="Digite o seu usuário"
    //       />
    //       <small />
    //     </div>
    //     <div className="form-group">
    //       <label htmlFor="email">Email</label>
    //       <input
    //         type="email"
    //         required="true"
    //         className="form-control"
    //         id="email"
    //         placeholder="Digite seu email"
    //       />
    //       <small />
    //     </div>
    //     <div className="form-group">
    //       <label htmlFor="celular">Celular</label>
    //       <input
    //         type="text"
    //         required="true"
    //         className="form-control"
    //         id="celular"
    //         placeholder="Digite seu celular"
    //       />
    //       <small />
    //     </div>
    //     <div className="form-group">
    //       <label htmlFor="senha">Senha</label>
    //       <input
    //         type="password"
    //         required="true"
    //         className="form-control"
    //         id="senha"
    //         placeholder="Digite sua senha"
    //       />
    //       <small />
    //     </div>
    //     <div className="form-group">
    //       <label htmlFor="confirmarSenha">Confirmar Senha</label>
    //       <input
    //         type="password"
    //         required="true"
    //         className="form-control"
    //         id="confirmarSenha"
    //         placeholder="Digite seu email ou apelido"
    //       />
    //       <small />
    //     </div>
    //     <button type="submit" className="btn btn-primary">
    //       Cadastrar
    //     </button>
    //     <small>
    //       Já tem uma conta?
    //       <Link>Clique Aqui!</Link>
    //     </small>
    //   </div>
    // </form>
 // ) : null;
// };


// return open ? (
  //   <ModalStyle>
  //     <div className="modal" />
  //     <Icon onClick={close}>close</Icon>

  //     <form onSubmit={onSubmit}>
  //       <label htmlhtmlFor="nome">nome</label>
  //       <input
  //         id="nome"
  //         name="nome"
  //         value={Evento.nome}
  //         placeholder="Digite o nome do evento"
  //         onChange={onChange}
  //       />
  //       <input
  //         id="dataHoraInicio"
  //         name="dataHoraInicio"
  //         value={Evento.dataHoraInicio}
  //         placeholder="Digite o dataHoraInicio do evento"
  //         onChange={onChange}
  //       />
  //       <input
  //         id="dataHoraFim"
  //         name="dataHoraFim"
  //         value={Evento.dataHoraFim}
  //         placeholder="Digite a dataHoraFim do evento"
  //         onChange={onChange}
  //       />
  //       <button type="submit">salvar</button>
  //     </form>
  //   </ModalStyle>
  // ) : null;
