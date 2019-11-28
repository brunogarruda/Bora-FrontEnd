import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  Grid,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Avatar,
  Paper
} from "@material-ui/core";
import bg from "../../../../../../../assets/sport.png";
import fakeData from "../../../../../../../data/EventosHomeData.json";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    display: "flex",
    padding: "6%",
    justifyContent: "space-around"
  },
  card: {
    width: 300,
    margin: "2%",
    [theme.breakpoints.down("sm")]: {
      height: 300,
      width: 200
    }
  },
  media: {
    height: 140
  },
  cardPaper: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center"
  }
}));

export const CardDefault = ({ props }) => {
  // const { titulo, local, horario, resumo, organizador, avaliacoes } = props.item;

  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid container className={classes.root} justify="center">
          {fakeData.map(value => (
            <Card key={value.idEvento} item className={classes.card}>
              <CardActionArea>
                <Link to={`/eventos/detalhe/${value.idEvento}`}>
                  <CardMedia
                    className={classes.media}
                    image={bg}
                    // title={titulo}
                  />
                </Link>

                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {value.titulo}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {value.dataInicio}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {props}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {props}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {props}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {props}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export const MiniCardDefault = ({ props }) => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs>
        <Grid container className={classes.root} justify="center">
          {fakeData.map(value => (
            <span key={value} item className={classes.card}>
              <Paper className={classes.cardPaper}>
                <Avatar srcSet={bg} />
                <Typography variant="h6">{value.titulo}</Typography>
              </Paper>
            </span>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};
