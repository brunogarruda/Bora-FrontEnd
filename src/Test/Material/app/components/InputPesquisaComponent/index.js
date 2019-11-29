import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton, Paper, InputBase } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import axios from 'axios'
import { CardMongo } from '../views/components/EventosCard_C'
import EventoCardList from '../views/components/EventosCard_C/components/EventoCardList'


const useStyles = makeStyles(theme => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  divider: {
    height: 28,
    margin: 4
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  }
}));

export default () => {
  const [eventos, setEventos] = useState([])
  const [value, setValue] = useState("")


  const classes = useStyles();

  const search = async val => {
    const resposta = await axios(`http://localhost:8080/gateway/pesquisa/v1/api/eventos/pesquisa/${val}`)
    const eventosList = await resposta.data
    console.log(eventosList)
    setEventos(eventosList)
  }

  const onHandleChange = async e => {
    search(e.target.value)
    setValue({
      ...value,
      [e.target.name]: e.target.value
    })
  }

  // const get = () => {
  //   let eve = <h1>Nenhum evento</h1>;
  //   if (eventos) {
  //     eve = <EventoCardList list={eventos} />
  //   }

  //   return eve;
  // }


  return (
    <>
      <Paper component="form" className={classes.root}>
        <InputBase
          name="pesquisa"
          onChange={e => onHandleChange(e)}
          className={classes.input}
          placeholder="Pesquisar eventos em Bora"
          inputProps={{ "aria-label": "search google maps" }}
        />
        <IconButton className={classes.iconButton} aria-label="search">
          <Search />
        </IconButton>
      </Paper>
      <CardMongo props={value} />
    </>
  );
};
