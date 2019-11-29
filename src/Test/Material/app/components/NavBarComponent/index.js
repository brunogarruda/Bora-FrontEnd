import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AccountCircle } from "@material-ui/icons";
import { AppBar, Typography, Button, IconButton, Toolbar, Avatar } from "@material-ui/core";
import { useModal } from "../../hooks/useModal";
import { ModalLogin, ModalCadastro } from "../ModalComponent";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    textAlignLast: "center"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export const NavBarComponent = () => {
  const {
    openLoginModal,
    openLogin,
    closeLogin,
    openCadastroModal,
    openCadastro,
    closeCadastro
  } = useModal();

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <Avatar>
              <AccountCircle />
            </Avatar>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Bora
          </Typography>
          <Button onClick={openLogin} color="inherit">
            Login
          </Button>
          <Button onClick={openCadastro} color="inherit">
            Cadastrar
          </Button>
        </Toolbar>
        <ModalLogin open={openLoginModal} close={closeLogin} />
        <ModalCadastro open={openCadastroModal} close={closeCadastro} />
      </AppBar>
    </div>
  );
};
