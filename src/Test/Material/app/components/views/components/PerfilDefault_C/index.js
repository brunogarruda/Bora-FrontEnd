/* eslint-disable no-undef */
/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import { Grid, Avatar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import bg from "../../../../../../../assets/user.png";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    textAlign: "center"
  },
  bigAvatar: {
    width: "50%",
    height: "auto",
    left: "25%"
  }
}));

export const PerfilDefault = props => {
  const classes = useStyles();

  return (
    <Grid className={classes.root} alignItems="center">
      <Grid item xs={12}>
        <Avatar className={classes.bigAvatar} srcSet={bg} />
      </Grid>
      <Grid item xs={12}>
        <Typography>nome:{props.children}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>apelido:{props.children}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>email:{props.children}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>interesses:{props.children}</Typography>
      </Grid>
    </Grid>
  );
};
