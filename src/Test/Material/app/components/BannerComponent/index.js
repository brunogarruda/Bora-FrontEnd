import { Box, Fab, Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { AccountCircle } from "@material-ui/icons";
import React from "react";
import CampoPesquisa from "../InputPesquisaComponent";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  img: {
    width: "100%"
  },
  imageTitle: {
    position: "relative",
    padding: `${theme.spacing(1)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`
  },
  imageButton: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    justifyContent: "center",
    color: theme.palette.common.white
  },
  image: {
    position: "relative",
    height: "auto"
  },
  bg: {
    backgroundImage: "url(https://svgshare.com/i/GQQ.svg)",
    backgroundSize: "cover",
    width: "100%",
    height: 768,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 0
  },
  btn1: {
    position: "relative",
    right: "20%"
  },
  btn2: {
    position: "relative",
    left: "20%"
  },
  bannerTitulo: {
    position: "absolute",
    top: "15%",
    color: "white",
    padding: "4%",
    [theme.breakpoints.down("sm")]: {
      fontSize: "4em"
    }
  },
  cardEventoHome: {
    height: 400,
    width: 300,
    [theme.breakpoints.down("sm")]: {
      height: 300,
      width: 200
    }
  },
  inputPesquisa:{
    position:"absolute",
    top:"45%"
  }
}));

export const Banner = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Paper className={classes.bg}>
        <Typography color="#2196f3" style={{ display: "contents" }}>
          <Box fontWeight="fontWeightBold" fontSize="5em" className={classes.bannerTitulo}>
            O que voce quer fazer ?
          </Box>
          <section className={classes.inputPesquisa}>
            <CampoPesquisa />
          </section>
        </Typography>
        <section style={{ display: "flex" }}>
          <Fab
            className={classes.btn1}
            style={{ width: 100 }}
            variant="extended"
            size="medium"
            color="primary"
            aria-label="add"
          >
            <span className={classes.imageButton}>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                className={classes.imageTitle}
              >
                <Box fontSize={15}>Bora</Box>
              </Typography>
            </span>
          </Fab>
          <Fab
            className={classes.btn2}
            style={{ width: 150 }}
            variant="extended"
            size="medium"
            color="primary"
            aria-label="add"
          >
            <span className={classes.imageButton}>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                className={classes.imageTitle}
                noWrap
              >
                <Box fontSize={15}>Criar role</Box>
              </Typography>
            </span>
          </Fab>
        </section>
      </Paper>
    </Grid>
  );
};
