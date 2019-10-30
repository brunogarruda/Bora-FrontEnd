import { useState } from "react";

export const useModal = () => {
  const [login, setLogin] = useState(false);
  const [cadastro,setCadastro]=useState(false)

  const openLogin = () => {
    setLogin(true);
  };

  const closeLogin = () => {
    setLogin(false);
  };

  const openCadastro = () => {
    setCadastro(true);
  };

  const closeCadastro = () => {
    setCadastro(false);
  };
  
  return {
    login,
    openLogin,
    closeLogin,
    cadastro,
    openCadastro,
    closeCadastro
  };
};
