import React, { useEffect, useState } from "react";
import { NavigateNext, NavigateBefore } from "@material-ui/icons";

import { Link } from "react-router-dom";
import Pagination from "pagination-react-hooks";
import { makeStyles } from "@material-ui/core/styles";
import { api } from "../../../../../../../services/api";
import "./styles/main.css";
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
// import fakeData from "../../../../../../../data/EventosHomeData.json";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    display: "flex",
    padding: "1%",
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
  const [evento, setEvento] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    api.get("eventos").then(res => {
      setEvento(res.data);
    });
  }, []);

  const classes = useStyles();
  const show = (value) => (
    <Grid container className={classes.root} justify="center">
      <Card key={value.idEvento} item className={classes.card}>
        <CardActionArea>
          <Link to={`/eventos/detalhe/${value.idEvento}`}>
            <CardMedia
              className={classes.media}
              image={bg}
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
            Participar
          </Button>
          {/* <Button size="small" color="primary">
            Learn More
                </Button> */}
        </CardActions>
      </Card>
    </Grid>
  );

  return (
    <Grid container>
      <Grid item xs={12}>
        <Pagination
          data={evento}
          Show={show}
          displayNumber="6"
          previousText={<NavigateBefore />}
          nextText={<NavigateNext />}
        />
      </Grid>
    </Grid>
  );
};

export const MiniCardDefault = ({ props }) => {
  const classes = useStyles();

  return (
    <Grid container>
      {/* <Grid item xs>
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
      </Grid> */}
    </Grid>
  );
};

export const CardMongo = ({ props }) => {
  return (
    <>
      {props.map(res => (
        <span key={res}>
          <p>{res}</p>
        </span>

      ))}
    </>
  );
};