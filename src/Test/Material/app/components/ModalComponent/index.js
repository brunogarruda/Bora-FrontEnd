/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import {} from "../../../..";

import {
  Backdrop,
  CardMedia,
  Checkbox,
  Fab,
  Fade,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  Modal,
  OutlinedInput,
  TextField,
  ButtonBase
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import useForm from "react-hook-form";
import { useCustomForm } from "../../hooks/useCustomForm";
import cadastroBg from "../../../../../assets/bg-cadastro.jpg";
import loginBg from "../../../../../assets/bg-login.png";
import { api } from "../../services";

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  root: {
    flexGrow: 1,
    padding: "3%",
    display: "flex",
    justifyContent: "center",
    textAlign: "center"
  },
  paper: {
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: "70vw",
    height: "80vh"
  },
  bgModal: {
    backgroundImage: `url(${loginBg})`
  },
  bgModalCadastro: {
    backgroundImage: `url(${cadastroBg})`
  },
  bgInput: {
    backgroundColor: "rgb(239, 178, 89)",
    opacity: "0.8",
    margin: "3%"
  },
  btnCadastro: {
    width: "100%"
  }
}));

export const ModalLogin = ({ open, close }) => {
  const { register, errors, watch } = useForm();
  const [logado, setLogado] = useState(false);
  const { inputs, hanldeInputChange } = useCustomForm({
    apelido: "",
    senha: ""
  });

  const onSubmit = async () => {
    await api.post("v1/api/login", inputs).then(res => {
      if (res.status !== 200) {
        alert("erro");
      } else {
        alert("Sucesso");
      }
    });
  };

  const classes = useStyles();

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      onClose={close}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500
      }}
    >
      <Fade in={open}>
        <CardMedia className={classes.bgModal}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">BORA</h2>
            <Grid container className={classes.root}>
              <Grid item xs={12}>
                <FormControl>
                  <TextField
                    // onError={errors.apelido && errors.apelido.message}
                    id="apelido"
                    name="apelido"
                    maxLength="20"
                    label="Apelido"
                    onChange={hanldeInputChange}
                    value={inputs.apelido}
                    variant="outlined"
                    inputRef={register({
                      required:
                        "Informe o apelido que voce escolheu na hora que voce criou sua conta conosco",
                      minLength: {
                        value: 2,
                        message: "Tente um apelido mais comprido"
                      },
                      maxLength: {
                        value: 20,
                        message: "Tamanho maximo é 20"
                      }
                    })}
                  />
                  <p>{errors.apelido && errors.apelido.message}</p>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl>
                  <TextField
                    id="senha"
                    name="senha"
                    onChange={hanldeInputChange}
                    value={inputs.senha}
                    maxLength="20"
                    inputRef={register({
                      required: "Preencha com sua senha",
                      minLength: {
                        value: 2,
                        message: "Tente uma senha mais comprida"
                      },
                      maxLength: {
                        value: 20,
                        message: "Tamanho maximo é 20"
                      }
                    })}
                    label="Senha "
                    variant="outlined"
                  />
                </FormControl>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={(
                      <Checkbox
                        // checked={state.checkedB}
                        // onChange={handleChange('checkedB')}
                        value="checkedB"
                        color="primary"
                      />
                    )}
                    label="Lembrar de mim"
                  />
                </Grid>
                <Fab
                  onClick={onSubmit}
                  variant="extended"
                  color="primary"
                  aria-label="add"
                  className={classes.margin}
                >
                  Entrar
                </Fab>
              </Grid>
            </Grid>
            {/* <p id="transition-modal-description">react-transition-group animates me.</p> */}
          </div>
        </CardMedia>
      </Fade>
    </Modal>
  );
};

export const ModalCadastro = ({ open, close }) => {
  const { register, errors, handleSubmit, watch } = useForm();
  const { inputs, hanldeInputChange } = useCustomForm({
    nome: "",
    apelido: "",
    email: "",
    celular: "",
    senha: ""
  });

  const onSubmit = async () => {
    await api.post("v1/api/usuarios", inputs).then(res => {
      console.log(res.data);
    });
  };

  const classes = useStyles();

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      onClose={close}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500
      }}
    >
      <Fade in={open}>
        <CardMedia className={classes.bgModalCadastro}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">BORA</h2>
            <Grid container className={classes.root}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl>
                  <TextField
                    className={classes.bgInput}
                    // onError={errors.apelido && errors.apelido.message}
                    id="nome"
                    name="nome"
                    onChange={hanldeInputChange}
                    value={inputs.nome}
                    maxLength="20"
                    label="Nome"
                    variant="outlined"
                    inputRef={register({
                      required: "Diz ai pra gente, como voce se chama",
                      minLength: {
                        value: 2,
                        message: "Nome pequeno demais, coloque seu sobrenome junto se possivel"
                      },
                      maxLength: {
                        value: 20,
                        message: "Tamanho maximo é 20"
                      }
                    })}
                  />
                  <p>{errors.apelido && errors.apelido.message}</p>
                </FormControl>
                <FormControl>
                  <TextField
                    className={classes.bgInput}
                    // onError={errors.apelido && errors.apelido.message}
                    id="apelido"
                    name="apelido"
                    onChange={hanldeInputChange}
                    value={inputs.apelido}
                    maxLength="20"
                    label="Apelido "
                    variant="outlined"
                    inputRef={register({
                      required: "Como voce gostaria de ser conhecido, fala ai",
                      minLength: {
                        value: 2,
                        message: "Tente um apelido mais comprido"
                      },
                      maxLength: {
                        value: 20,
                        message: "Tamanho maximo é 20"
                      }
                    })}
                  />
                  <p>{errors.apelido && errors.apelido.message}</p>
                </FormControl>

                <FormControl>
                  <TextField
                    className={classes.bgInput}
                    id="email"
                    name="email"
                    onChange={hanldeInputChange}
                    value={inputs.email}
                    maxLength="20"
                    inputRef={register({
                      required: "Escolha seu melhor email para cadastrar",
                      minLength: {
                        value: 2,
                        message: "Tente um apelido mais comprido"
                      },
                      maxLength: {
                        value: 20,
                        message: "Tamanho maximo é 20"
                      }
                    })}
                    label="Email"
                    type="email"
                    variant="outlined"
                  />
                </FormControl>
                <Grid item xs>
                  <FormControl>
                    <TextField
                      className={classes.bgInput}
                      id="celular"
                      name="celular"
                      onChange={hanldeInputChange}
                      value={inputs.celular}
                      maxLength="15"
                      inputRef={register({
                        required: "Passa o whats rs.. So o numero do celular serve",
                        minLength: {
                          value: 2,
                          message:
                            "Voce deve ter colocados os digitos apenas, preencha com o celular valido"
                        },
                        maxLength: {
                          value: 20,
                          message: "Tamanho maximo é 20"
                        }
                      })}
                      label="Celular"
                      type="text"
                      variant="outlined"
                    />
                  </FormControl>

                  <FormControl>
                    <TextField
                      className={classes.bgInput}
                      label="Senha"
                      type="password"
                      variant="outlined"
                      id="senha"
                      name="senha"
                      onChange={hanldeInputChange}
                      value={inputs.senha}
                      maxLength="20"
                      inputRef={register({
                        required:
                          "Muito Importante colocar uma senha, se não, voce nao acessa a nossa plataforma",
                        minLength: {
                          value: 2,
                          message:
                            "Senha maiores, são mais fortes e tem baixa chance de quebrarem ela."
                        },
                        maxLength: {
                          value: 20,
                          message: "Tamanho maximo é 20"
                        }
                      })}
                      htmlFor="outlined-adornment-password"
                    >
                      Senha
                    </TextField>
                  </FormControl>
                  <FormControl>
                    <TextField
                      variant="outlined"
                      type="password"
                      className={classes.bgInput}
                      label="Confirmar Senha"
                      htmlFor="outlined-adornment-password"
                    >
                      Confirmar Senha
                    </TextField>
                  </FormControl>
                </Grid>
                <Fab variant="extended" color="primary" aria-label="add" className={classes.btnCadastro}>
                  <ButtonBase type="submit">
                    Cadastrar
                  </ButtonBase>
                </Fab>
              </form>
            </Grid>
          </div>
        </CardMedia>
      </Fade>
    </Modal>
  );
};
