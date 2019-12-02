/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable import/order */
import { Modal, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import "../../styles/Home/home.css";
import { NavLink, Redirect } from "react-router-dom";
import useForm from "react-hook-form";
import Card from "react-materialize/lib/Card";
import Container from "react-materialize/lib/Container";
import { isAuthenticated } from "../../services/auth";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
}));

export default () => {
  const { register, handleSubmit, errors } = useForm();

  const classes = useStyles();
  const [error, setError] = useState("");

  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const [usuarioNaoLogado, setUsuarioNaoLogado] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenNotAutenticado = () => {
    setUsuarioNaoLogado(true);
  };

  const handleCloseNotAutenticado = () => {
    setUsuarioNaoLogado(false);
  };

  return (
        <main>
            <Modal
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              open={usuarioNaoLogado}
              onClose={handleCloseNotAutenticado}
            >
                <Container>
                    <Card
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        margin: "20%"
                      }}
                    >
                        <h4 className="center-align">
                            Para criar eventos, voce deve estar logado
                        </h4>
                        <div className="row">
                            <div className="col s12">
                                <div className="row" />
                                <div className="row">
                                    <div className="input-field col s6 m6 l6">
                                        <p className="margin medium-small">
                                            <NavLink to="/cadastro">
                                                Não tem conta? Crie agora é
                                                gratis!
                                            </NavLink>
                                        </p>
                                    </div>
                                    <div className="input-field col s6 m6 l6">
                                        <p className="margin right-align medium-small">
                                            <NavLink to="/login">
                                                Ja tem uma conta? Acesse aqui!
                                            </NavLink>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>
                </Container>
            </Modal>
            <Modal
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              open={open}
              onClose={handleClose}
            >
                <Container>
                    <Card>
                        <h4 className="center-align">
                            Preencha os campo para criar seu evento
                        </h4>
                        <div className="row">
                            <div className="col s12">
                                <form onSubmit={handleSubmit()}>
                                    <div className="row" />
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <i className="material-icons prefix">
                                                account_circle
                                            </i>
                                            <input
                                              className="validate"
                                              type="text"
                                              name="apelido"
                                              id="apelido"
                                              ref={register({
                                                required: true
                                              })}
                                            />
                                            <label htmlFor="apelido">
                                                Digite seu apelido
                                            </label>
                                            {errors.apelido && (
                                                <small>
                                                    Esqueceram de mim, fala ai
                                                    seu apelido
                                                </small>
                                            )}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <i className="material-icons prefix">
                                                lock
                                            </i>
                                            <input
                                              className="validate"
                                              type="password"
                                              name="senha"
                                              id="senha"
                                              ref={register({
                                                required: true
                                              })}
                                            />
                                            <label htmlFor="senha">
                                                Digite sua senha
                                            </label>
                                            {errors.senha && (
                                                <small>
                                                    Acho que esta faltando a
                                                    senha
                                                </small>
                                            )}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12 m12 l12  login-text">
                                            <input
                                              type="checkbox"
                                              id="remember-me"
                                            />
                                            <label htmlFor="remember-me">
                                                Lembrar de mim
                                            </label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <button
                                              disabled={
                                                    errors.apelido
                                                    || errors.senha
                                                }
                                              type="submit"
                                              name="btn_login"
                                              className="col s12 btn btn-large waves-effect indigo"
                                            >
                                                Acessar
                                            </button>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s6 m6 l6">
                                                {error && (
                                                    <p className="margin medium-small">
                                                        {error}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s6 m6 l6">
                                            <p className="margin medium-small">
                                                <NavLink to="/cadastro">
                                                    Não tem conta? Crie agora é
                                                    gratis!
                                                </NavLink>
                                            </p>
                                        </div>
                                        <div className="input-field col s6 m6 l6">
                                            <p className="margin right-align medium-small">
                                                <a href="#">
                                                    Esqueceu a senha?
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </Card>
                </Container>
            </Modal>
            <div className="row">
                <div className="header-home">
                    <h1>O que voce quer fazer ?</h1>
                    <div className="input-field col s12">
                        <input
                          type="text"
                          id="autocomplete-input"
                          className="input-home autocomplete search-box validate white search-circle"
                          placeholder="Pesquise eventos, roles, lugares, shows, Bora !"
                        />
                        <i className="material-icons prefix">search</i>
                    </div>
                    <div className="section-botoes section scrollspy">
                        {isAuthenticated() ? (
                            <a
                              onClick={handleOpen}
                              className="col s6 button-bora waves-effect waves-light btn-large"
                            >
                                <i className="material-icons left">cloud</i>
                                Criar Role
                            </a>
                        ) : (
                            <a
                              onClick={handleOpenNotAutenticado}
                              className="col s6 button-bora waves-effect waves-light btn-large"
                            >
                                <i className="material-icons left">cloud</i>
                                Criar Role
                            </a>
                        )}

                        <a className="col s5 button-bora waves-effect waves-light purple darken-4 btn-large">
                            <i className="material-icons left">cloud</i>
                            Bora
                        </a>
                    </div>
                </div>
            </div>
        </main>
  );
};
