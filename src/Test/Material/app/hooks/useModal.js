import { useState } from "react";

export const useModal = () => {
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openCadastroModal, setOpenCadastroModal]=useState(false);

  const openLogin = () => {
    setOpenLoginModal(true);
  };

  const closeLogin = () => {
    setOpenLoginModal(false);
  };

  const openCadastro = () => {
    setOpenCadastroModal(true);
  };

  const closeCadastro = () => {
    setOpenCadastroModal(false);
  };

  return {
    openLoginModal,
    openLogin,
    closeLogin,
    openCadastroModal,
    openCadastro,
    closeCadastro
  };
};
