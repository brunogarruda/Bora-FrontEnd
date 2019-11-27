/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import bg from "../../../../../assets/bg.svg";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  imageSrc:{
    position: "absolute",
    backgroundSize: "cover",
    left: 0,
    right: 0,
    backgroundPosition: "center 40%"
  }
}));

export const Banner = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <img className={classes.imageSrc} style={{ width: `${100}%` }} src={bg} />

      </Grid>
    </Grid>
  );
};

