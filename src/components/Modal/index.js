/* eslint-disable no-console */
/* eslint-disable react/no-this-in-sfc */
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
import { login } from "../../services/auth";
import { useSignUpForm } from "./component/CustomHooks";
import validade from "./component/LoginFormValidationRules";

export const Modal = ({ open, close }) => {
  const [Evento, setEvento] = useState({
    nome: "",
    dataInicio: "",
    dataFim: "",
    descricaoEvento:"",
    senha:"",
    endereco:"",
    categoria:""
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
      .post("eventos/v1/api/eventos", Evento)
      .then(res => setEvento(res.data))
      .catch(err => console.error(err));
  }
  return open ? (
    <div className="modal">
      <div className="modal-content modal-login">
        <div className="login">
          <div className="icon-close">
            <Icon onClick={close}>close</Icon>
          </div>
          {/* <form onSubmit={onSubmit}> */}
          <form>
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
              <label htmlhtmlFor="dataInicio">Data Inicio</label>
              <input
                id="dataInicio"
                name="dataInicio"
                value={Evento.dataInicio}
                placeholder="Digite a data inicio do evento"
                onChange={onChange}
              />
            </div>
            <div className="input-login">
              <label htmlhtmlFor="dataFim">Data Fim</label>
              <input
                id="dataFim"
                name="dataFim"
                value={Evento.dataFim}
                placeholder="Digite a data fim do evento"
                onChange={onChange}
              />
            </div>
            <div className="input-login">
              <label htmlhtmlFor="descricaoEvento">Descricao do Evento</label>
              <input
                id="descricaoEvento"
                name="descricaoEvento"
                value={Evento.descricaoEvento}
                placeholder="Digite a descricao do evento"
                onChange={onChange}
              />
            </div>
            <div className="input-login">
              <label htmlhtmlFor="senha">senha do Evento</label>
              <input
                id="senha"
                name="senha"
                value={Evento.senha}
                placeholder="Digite a senha do evento"
                onChange={onChange}
              />
            </div>
            <div className="input-login">
              <label htmlhtmlFor="endereco">endereco do Evento</label>
              <input
                id="endereco"
                name="endereco"
                value={Evento.endereco}
                placeholder="Digite o endereco do evento"
                onChange={onChange}
              />
            </div>
            <div className="input-login">
              <label htmlhtmlFor="categoria">categoria do Evento</label>
              <input
                id="categoria"
                name="categoria"
                value={Evento.categoria}
                placeholder="Digite a categoria do evento"
                onChange={onChange}
              />
            </div>
            <button onClick={onSubmit} type="button">salvar</button>
          </form>
        </div>
      </div>
    </div>
  ) : null;
};

export const ModalLogin = ({ open, close }) => {
  const { inputs, hanldeInputChange } = useSignUpForm({
    apelido: "",
    senha: ""
  });

  const logar = async () => {
    await api.post("login", inputs).then(res => {
      console.log(res.data);
    });
  };

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
                name="apelido"
                id="apelido"
                onChange={hanldeInputChange}
                value={inputs.apelido}
                placeholder="Digite seu email ou apelido"
              />
            </div>
            <div className="input-login">
              <label htmlFor="senha">Senha</label>
              <input
                type="password"
                required="true"
                name="senha"
                onChange={hanldeInputChange}
                value={inputs.senha}
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
            <button type="button" onClick={logar} className="btn">
              Logar
            </button>
          </form>
        </div>
      </div>
    </div>
  ) : null;
};

export const ModalCadastro = ({ open, close }) => {
  const { inputs, hanldeInputChange, errors, handleSubmit } = useSignUpForm(
    {
      nome: "",
      apelido: "",
      email: "",
      celular: "",
      senha: ""
    },
    validade
  );


  const cadastrar = async () => {
    if (!handleSubmit()) {
      await api.post("auth/v1/api/usuarios", inputs).then(res => {
        console.log(res.data);
      });
    } else {
      handleSubmit();
    }
  };

  // const cadastrar = async () => {

  //     await api.post("/auth/v1/api/usuarios", inputs).then(res => {
  //       console.log(res.data);
  //     });
  //   // await api.post("/auth/v1/api/usuarios", inputs).then(res => {
  // };




  return open ? (
    <div className="modal">
      <div className="modal-content modal-cadastro">
        <div className="login">
          <div className="icon-close">
            <Icon onClick={close}>close</Icon>
          </div>
          <form className="form-group">
            {/* <form onSubmit={cadastrar} className="form-group"> */}
            <h2 className="modal-title-cadastro">Cadastro</h2>
            <div className="input-cadastro">
              <label htmlFor="apelido">Apelido</label>
              <input
                type="text"
                className="input-form"
                required
                id="apelido"
                name="apelido"
                onChange={hanldeInputChange}
                value={inputs.apelido || ""}
                placeholder="Digite o seu usuário"
              />
              {errors.apelido && <p>{errors.apelido}</p>}
            </div>
            <div className="input-cadastro">
              <label htmlFor="apelido">Nome</label>
              <input
                type="text"
                className="input-form"
                required="true"
                id="nome"
                name="nome"
                onChange={hanldeInputChange}
                value={inputs.nome}
                placeholder="Digite o seu nome"
              />
            </div>
            <div className="input-cadastro">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                required="true"
                className="input-form"
                onChange={hanldeInputChange}
                value={inputs.email || ""}
                id="email"
                name="email"
                placeholder="Digite seu email"
              />
              {errors.email && <p>{errors.email}</p>}
            </div>

            <div className="input-cadastro">
              <label htmlFor="celular">Celular</label>
              <input
                type="text"
                required="true"
                className="input-form"
                id="celular"
                name="celular"
                onChange={hanldeInputChange}
                value={inputs.celular}
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
                name="senha"
                onChange={hanldeInputChange}
                value={inputs.senha}
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
            <button onClick={cadastrar} type="button" className="btn">
              {/* <button type="submit" className="btn"> */}
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
  ) : null;
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
