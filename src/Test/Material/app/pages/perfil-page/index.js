/* eslint-disable react/jsx-closing-tag-location */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";
import { MiniCardDefault } from "../../components/views/components/EventosCard_C";
import {PerfilDefault} from "../../components/views/components/PerfilDefault_C";
import fakeData from "../../../../../data/EventosHomeData.json";


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: "3%"
  },
  cxPerfil:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start"
  }
}));

export default function PerfilPage() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid style={{ marginBottom: "5%" }} item xs={12}>
        <h1>Meus Eventos:</h1>
      </Grid>
      <Grid item xs={8}>
        <Paper className={classes.paper}>
          <h4>Eventos que eu participei: </h4>
          <MiniCardDefault />
        </Paper>
      </Grid>
      <Grid className={classes.cxPerfil} item xs>
        <Paper className={classes.paper}>
          <PerfilDefault>ggg</PerfilDefault>
        </Paper>
      </Grid>
      <Grid item xs={8}>
        <Paper className={classes.paper}>
          <h4>Eventos que eu Organizei: </h4>
          <MiniCardDefault />
        </Paper>
      </Grid>
    </Grid>
  );
}
