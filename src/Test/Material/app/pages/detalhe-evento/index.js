/* eslint-disable block-scoped-var */
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
/* eslint-disable vars-on-top */
/* eslint-disable radix */
/* eslint-disable no-var */
import { Box, Button, CardMedia, Grid, Typography, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { EventAvailable, Today, LocationOn, QueryBuilder } from "@material-ui/icons";
import React from "react";
import { useRouteMatch, useParams } from "react-router-dom";
import bg from "../../../../../assets/bg-detalheEventos.png";
import { Carousel } from "../../components/views/components/Carousel/Carousel";
import fakeData from "../../../../../data/EventosHomeData.json";
import GoogleMaps from "../../components/views/components/Maps/map";

const useStyles = makeStyles({
  root: {
    padding: "7%"
  },
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  },
  carouselGrid: {
    position: "relative",
    marginTop:"35%"
  }
});

export default function DetalheEvento() {
  var id = useRouteMatch().params;
  var id2 = parseInt(id.id);
  for (let i = 0; i < fakeData.length; i++) {
    if (fakeData[i].idEvento === id2) {
      var element = fakeData[i];
    }
  }

  const classes = useStyles();

  return (
    <div>
      <CardMedia className={classes.media} image={bg} title="Contemplative Reptile" />
      <Grid
        container
        direction="row"
        className={classes.root}
        justify="space-around"
        alignItems="center"
      >
        <Grid item xs={2}>
          <EventAvailable style={{ fontSize: 80 }} />
        </Grid>
        <Grid item xs={6}>
          <Typography>
            <Box fontWeight="fontWeightBold" m={1}>
              Segunda-feira, 9 de Setembro de 2019
              <Typography>{element.titulo}</Typography>
            </Box>
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Button variant="contained" color="secondary">
            Nao vou
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button variant="contained" color="primary">
            Bora
          </Button>
        </Grid>

        <Grid item xs={6}>
          <Typography>{element.descricao}</Typography>
        </Grid>
        <Grid item xs={2}>
          <Paper>
            <QueryBuilder amplitude />
            <Typography>{element.dataInicio}</Typography>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper>
            <LocationOn amplitude />
            <Typography>{element.endereco}</Typography>
          </Paper>
        </Grid>
        <Grid itm xs={12}>
          <Paper>
            <GoogleMaps />
          </Paper>
        </Grid>
        <Grid className={classes.carouselGrid} itm xs={12}>
          <Paper>
            <Carousel>
              {fakeData.map((d, i) => (
                <div key={i}>{d.apelido}</div>
              ))}
            </Carousel>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
