/* eslint-disable no-useless-escape */
/* eslint-disable no-use-before-define */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable quotes */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import Icon from '@material-ui/core/Icon';
import { Link } from 'react-router-dom';
import './styles.css';
import InputMask from 'react-input-mask';
import { TextField } from '@material-ui/core';
import useForm from 'react-hook-form';
import { api } from '../../services/api';
import { login } from '../../services/auth';
import { useCustomForm } from '../hooks/useCustomForm';
import validade from './component/LoginFormValidationRules';
import { BotaoSubmit } from '../hooks/useBotao';

export const Modal = ({ open, close }) => {
  const { inputs, hanldeInputChange } = useCustomForm({
    titulo: '',
    descricao: '',
    endereco: '',
    dataInicio: '',
    categoria: '',
    usuario: ''
  });

  const cadastrarEvento = async () => {
    console.log(inputs);
    await api
      .post('eventos', inputs)
      .then(res => console.log(res))
      .catch(err => console.error(err));
  };

  return open ? (
    <div className="modal">
      <div className="modal-content">
        <Icon className="icon-close" onClick={close}>
          close
        </Icon>
        <div className="titulo-evento">Vamos criar seu evento</div>
        <form className="evento">
          <div className="input-titulo">
            <label className="label-evento">Titulo:</label>
            <input
              maxLength="20"
              className="input campo-titulo"
              placeholder="Digite o titulo do evento"
            />
          </div>

          <div className="input-endereco">
            <label className="label-evento">Endereco:</label>
            <input
              maxLength="20"
              className="input campo-endereco"
              placeholder="Digite o titulo do evento"
            />
          </div>

          <div className="input-dtInicio">
            <label className="label-evento">Data do evento:</label>
            <InputMask
              placeholder="Escolha o dia do role.Ex(dd/mm/aaaa)"
              mask="99/99/9999"
              className="input campo-dtIncio"
            />
          </div>

          <div className="input-horaInicio">
            <label className="label-evento">Horario do inicio:</label>
            <div className="campo-hora">
              <TextField defaultValue="00:00" type="time" />
            </div>
          </div>

          <div className="input-horaFim">
            <label className="label-evento">Termino:</label>
            <div className="campo-hora">
              <TextField defaultValue="00:00" type="time" />
            </div>
          </div>

          <div className="botoes">
            <button>Deixa pra lá</button>
            {/* <Teste /> */}
            {/* <button className="gb gb-bordered hover-slide hover-fill reverse" id="gb9"> */}
            <BotaoSubmit>Pronto</BotaoSubmit>
            {/* </button> */}
          </div>
        </form>
      </div>
    </div>
  ) : null;
  // return open ? (
  //   <div className="modal">
  //     <div className="modal-content">
  //       <div className="evento">
  //         <div className="icon-close">
  //           <Icon onClick={close}>close</Icon>
  //         </div>
  //         {/* <form onSubmit={onSubmit}> */}
  //         <form>
  //           <h2>Vamos criar seu evento</h2>
  //           <div className="input-login">
  //             <label htmlhtmlFor="nome">titulo</label>
  //             <input
  //               id="titulo"
  //               name="titulo"
  //               value={inputs.titulo}
  //               required="true"
  //               placeholder="Digite o titulo do evento"
  //               onChange={hanldeInputChange}
  //             />
  //           </div>
  //           <div className="input-login">
  //             <label htmlhtmlFor="dataInicio">Data Inicio</label>
  //             <input
  //               id="dataInicio"
  //               name="dataInicio"
  //               value={inputs.dataInicio}
  //               placeholder="Qual vai ser o dia do role?(Ex:dd/mm/aaaa)"
  //               onChange={hanldeInputChange}
  //             />
  //           </div>
  //           {/* <div className="input-login">
  //             <label htmlhtmlFor="dataFim">Data Fim</label>
  //             <input
  //               id="dataFim"
  //               name="dataFim"
  //               value={Evento.dataFim}
  //               placeholder="Digite a data fim do evento"
  //               onChange={onChange}
  //             />
  //           </div> */}
  //           <div className="input-login">
  //             <label htmlhtmlFor="descricao">Descricao do Evento</label>
  //             <input
  //               id="descricao"
  //               name="descricao"
  //               value={inputs.descricao}
  //               placeholder="Digite a descricao do evento"
  //               onChange={hanldeInputChange}
  //             />
  //           </div>
  //           {/* <div className="input-login">
  //             <label htmlhtmlFor="senha">senha do Evento</label>
  //             <input
  //               id="senha"
  //               name="senha"
  //               value={Evento.senha}
  //               placeholder="Digite a senha do evento"
  //               onChange={onChange}
  //             />
  //           </div> */}
  //           <div className="input-login">
  //             <label htmlhtmlFor="endereco">endereco do Evento</label>
  //             <input
  //               id="endereco"
  //               name="endereco"
  //               value={inputs.endereco}
  //               placeholder="Digite o endereco do evento"
  //               onChange={hanldeInputChange}
  //             />
  //           </div>
  //           <div className="input-login">
  //             <label htmlhtmlFor="categoria">categoria do Evento</label>
  //             <input
  //               id="categoria"
  //               name="categoria"
  //               value={inputs.categoria}
  //               placeholder="Digite a categoria do evento"
  //               onChange={hanldeInputChange}
  //             />
  //           </div>
  //           <div className="input-login">
  //             <label htmlhtmlFor="descricao">organizador do Evento</label>
  //             <input
  //               id="usuario"
  //               name="usuario"
  //               value={inputs.usuario}
  //               placeholder="organizador"
  //               onChange={hanldeInputChange}
  //             />
  //           </div>
  //           <button onClick={cadastrarEvento} type="button">
  //             salvar
  //           </button>
  //         </form>
  //       </div>
  //     </div>
  //   </div>
  // ) : null;
};

export const ModalLogin = ({ open, close }) => {
  const { inputs, hanldeInputChange } = useCustomForm({
    apelido: '',
    senha: ''
  });

  const logar = async () => {
    await api.post('login', inputs).then(res => {
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
  const { register, errors, handleSubmit, watch } = useForm();

  // const { inputs, hanldeInputChange, errors, handleSubmit } = useCustomForm(
  //   {
  //     nome: '',
  //     apelido: '',
  //     email: '',
  //     celular: '',
  //     senha: ''
  //   },
  //   validade
  // );

  const onSubmit = async () => {
    await api.post('auth/v1/api/usuarios', register).then(res => {
      console.log(res.data);
    });
  };

  const erros = () => {
    // const boxMsgErro = document.querySelector(".box-msg-erro");
    // boxMsgErro.classList.add('box-msg-erro');
    return alert('w');
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
        <Icon className="icon-close" onClick={close}>
          close
        </Icon>
        <h2 className="modal-title-cadastro">Cadastrar usuario</h2>
        <small
          className={
            (errors.apelido && errors.apelido.message) ||
            (errors.nome && errors.nome.message) ||
            (errors.email && errors.email.message) ||
            (errors.senha && errors.senha.message)
              ? 'box-msg-erro'
              : 'msg-error'
          }
        >
          {errors.apelido && errors.apelido.message}
          <br />
          {errors.nome && errors.nome.message}
          <br />
          {errors.email && errors.email.message}
          <br />
          {errors.senha && errors.senha.message}
        </small>
        {/* <form onSubmit={cadastrar} className="cadastro-usuario-form"> */}
        <form onSubmit={handleSubmit(onSubmit)} className="cadastro-usuario-form">
          {/* <form onSubmit={cadastrar} className="form-group"> */}
          <div className="input-apelido">
            <label htmlFor="apelido">Apelido</label>
            <input
              type="text"
              className="input-form"
              id="apelido"
              name="apelido"
              maxLength="20"
              ref={register({
                required: 'Escolha um apelido legal para voce ser conhecido mais facilmente',
                minLength: {
                  value: 2,
                  message: 'Tente um apelido mais comprido'
                },
                maxLength: {
                  value: 20,
                  message: 'Tamanho maximo é 20'
                }
              })}
              placeholder="Escolha um apelido"
            />
          </div>
          <div className="input-nome">
            <label htmlFor="apelido">Nome</label>
            <input
              type="text"
              className="input-form"
              maxLength="20"
              ref={register({
                pattern: {
                  value: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
                  message: 'Acho que seu nome não esta correto'
                }
              })}
              id="nome"
              name="nome"
              placeholder="Digite o seu nome"
            />
          </div>
          <div className="input-email">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="input-form"
              id="email"
              name="email"
              maxLength="30"
              placeholder="Informe seu email"
              ref={register({
                required: 'Por favor, informe seu email, precisamos dele',
                pattern: {
                  value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                  message: 'Acho que seu email nao esta correto, tente novamente'
                }
              })}
            />
          </div>
          <div className="input-celular">
            <label htmlFor="celular">Celular</label>
            <InputMask
              mask="(99) 9999-9999"
              type="text"
              className="input-form"
              ref={register}
              id="celular"
              name="celular"
              placeholder="Digite seu celular"
            />
          </div>
          <div className="input-senha">
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              // required="true"
              ref={register({
                required:"Sem senha voce nao ira acessar nosso site!",
                minLength: {
                  value: 8,
                  message: 'Senhas curtas são mais faceis de serem descobertas'
                },
                validate: value => value === watch('senha')
              })}
              className="input-form"
              id="senha"
              name="senha"
              placeholder="Digite sua senha"
            />
          </div>
          <div className="input-confSenha">
            <label htmlFor="email">Confimar Senha</label>
            <input
              type="password"
              // required="true"
              className="input-form"
              id="conf-senha"
              placeholder="Digite a senha novamente"
            />
          </div>
          {/* <div onClick={cadastrar} className="btn"> */}
          <div className="btn">
            {/* <BotaoSubmit onClick={handleSubmit}>Cadastrar</BotaoSubmit> */}
            <BotaoSubmit>Cadastrar</BotaoSubmit>
          </div>
          {/* <button onClick={cadastrar} type="button" className="btn"> */}

          {/* <button type="submit" className="btn"> */}
          {/* Cadastrar */}
          {/* </button> */}
          <small className="link-login">
            Já tem uma conta?
            <Link>Clique Aqui!</Link>
          </small>
        </form>
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
