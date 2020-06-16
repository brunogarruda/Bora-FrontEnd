import React, { useState } from "react";
import { EventAvailable, Today, LocationOn, QueryBuilder } from "@material-ui/icons";
import DateFnsUtils from "@date-io/date-fns";

import {
  Input,
  FormHelperText,
  FormControl,
  InputLabel,
  Grid,
  CardMedia,
  TextField,
  MenuItem,
  Button,
  Typography
} from "@material-ui/core";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
  TimePicker,
  KeyboardTimePicker
} from "@material-ui/pickers";
import { makeStyles } from "@material-ui/core/styles";

import bg from "../../../../../assets/bg-detalheEventos.png";

const currencies = [
  {
    value: "USD",
    label: "$"
  },
  {
    value: "EUR",
    label: "€"
  },
  {
    value: "BTC",
    label: "฿"
  },
  {
    value: "JPY",
    label: "¥"
  }
];

const useStyles = makeStyles(theme => ({
  root: {
    padding: "7%",
    display: "flex",
    flexDirection: "column"
  },
  media: {
    height: 140
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  menu: {
    width: 200
  },
  groupData: {
    display: "flex",
    justifyContent: "space-between"
  },
  groupBotoes: {
    marginLeft: "6%"
  },
  buttonPronto: {
    width: "480%",
    marginLeft: "50%"
  },
  tituloPag: {
    fontSize: "2em",
    color: "#FF7200",
    fontWeight: "bold"
  }
}));

export default function EditarEventoPage(props) {
  const classes = useStyles();
  const [currency, setCurrency] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  const handleChange = event => {
    setCurrency(event.target.value);
  };

  return (
    <>
      <CardMedia className={classes.media} image={bg} title="Contemplative Reptile" />

      <Grid container className={classes.root} justify="space-around">
        <Typography className={classes.tituloPag}>
          Gostaria de mexer em alguma informação do seu evento
        </Typography>
        <FormControl>
          <InputLabel htmlFor="titulo">Titulo do Evento: </InputLabel>
          <Input id="titulo" aria-describedby="helper-text-titulo" />
          <FormHelperText id="helper-text-titulo" />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="local">Local: </InputLabel>
          <Input id="local" aria-describedby="helper-text-local" />
          <FormHelperText id="helper-text-local" />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="descricao">Descricao: </InputLabel>
          <Input id="descricao" aria-describedby="helper-text-descricao" />
          <FormHelperText id="helper-text-descricao" />
        </FormControl>
        <Grid item xs={6}>
          <FormControl>
            <TextField
              id="standard-select-currency"
              select
              label="Categoria"
              className={classes.textField}
              value={currency}
              onChange={handleChange}
              SelectProps={{
                MenuProps: {
                  className: classes.menu
                }
              }}
              helperText="Selecione uma categoria"
              margin="normal"
            >
              {currencies.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </FormControl>
          <FormControl>
            <TextField
              id="standard-select-currency"
              select
              label="Frequencia"
              className={classes.textField}
              value={currency}
              onChange={handleChange}
              SelectProps={{
                MenuProps: {
                  className: classes.menu
                }
              }}
              helperText="Quantas vezes vai rolar o evento"
              margin="normal"
            >
              {currencies.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </FormControl>
        </Grid>
        <Grid className={classes.groupData} item xs={6}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <FormControl>
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="dd/MM/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Data de inicio do evento"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date"
                }}
              />
            </FormControl>
            <FormControl>
              <KeyboardTimePicker
                label="Começa às: "
                placeholder="08:00"
                mask="__:__"
                ampm={false}
                margin="normal"
                value={selectedDate}
                onChange={date => handleDateChange(date)}
              />
            </FormControl>
          </MuiPickersUtilsProvider>
        </Grid>

        <Grid className={classes.groupData} item xs={6}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <FormControl>
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="dd/MM/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Data do fim evento"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date"
                }}
              />
            </FormControl>
            <FormControl>
              <KeyboardTimePicker
                label="Termina às: "
                placeholder="08:00"
                mask="__:__"
                ampm={false}
                margin="normal"
                value={selectedDate}
                onChange={date => handleDateChange(date)}
              />
            </FormControl>
          </MuiPickersUtilsProvider>
        </Grid>
      </Grid>
      <Grid container className={classes.groupBotoes}>
        <Grid>
          <Button className={classes.buttonNao} variant="contained" color="secondary">
            Deixa pra lá
          </Button>
        </Grid>
        <Grid>
          <Button className={classes.buttonPronto} variant="contained" color="primary">
            Pronto
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
