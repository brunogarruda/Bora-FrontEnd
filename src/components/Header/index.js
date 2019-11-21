/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import { Header } from "./styles";
import { ModalCadastro, ModalLogin } from "../Modal";
import { useModal } from "../hooks/useModal";

const toggleMenu = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  nav.classList.toggle("nav-active");
  burger.classList.toggle("toggle");

  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.25}s `;
    }
  });
};

export default function NavBar() {
  const { login, openLogin, closeLogin, cadastro, openCadastro, closeCadastro } = useModal();

  const ativaLogin = () => {
    if (cadastro) {
      closeCadastro();
      return openLogin();
    }
  };

  const ativaCadastro = () => {
    if (login) {
      closeLogin();
      return openCadastro();
    }
  };
  return (
    <Header>
      <nav>
        <div className="logo">
          <h4>BORA</h4>
        </div>
        <ul className="nav-links">
          <li>
            <p onClick={cadastro ? ativaLogin : openLogin}>
              <PersonIcon />
              Entrar
            </p>
          </li>
          <li>
            <p onClick={login ? ativaCadastro : openCadastro}>
              <PersonAddIcon />
              Cadastrar
            </p>
          </li>
        </ul>
        <div onClick={() => toggleMenu()} className="burger">
          <div className="line1" />
          <div className="line2" />
          <div className="line3" />
        </div>
      </nav>
      <ModalLogin open={login} close={closeLogin} />
      <ModalCadastro open={cadastro} close={closeCadastro} />
    </Header>
  );
}

// /* eslint-disable consistent-return */
// /* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
// /* eslint-disable jsx-a11y/click-events-have-key-events */
// /* eslint-disable jsx-a11y/no-static-element-interactions */
// import React from "react";
// import { Link } from "react-router-dom";
// import { Header } from "./styles";
// import { ModalCadastro, ModalLogin } from "../Modal";
// import { useModal } from "../hooks/useModal";
// import {logout} from "../../services/auth";

// const toggleMenu = () => {
//   const burger = document.querySelector(".burger");
//   const nav = document.querySelector(".nav-links");
//   const navLinks = document.querySelectorAll(".nav-links li");

//   nav.classList.toggle("nav-active");
//   burger.classList.toggle("toggle");

//   navLinks.forEach((link, index) => {
//     if (link.style.animation) {
//       link.style.animation = "";
//     } else {
//       link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.25}s `;
//     }
//   });
// };

// export default function NavBar() {
//   const { login, openLogin, closeLogin, cadastro, openCadastro, closeCadastro } = useModal();

//   const ativaLogin = () => {
//     if (cadastro) {
//       closeCadastro();
//       return openLogin();
//     }
//   };

//   const ativaCadastro = () => {
//     if (login) {
//       closeLogin();
//       return openCadastro();
//     }
//   };

//   const deslogar = () => {
//     logout();
//   };

//   return (
//     <Header>
//       <nav>
//         <div className="logo">
//           <Link to='/'><h4>BORA</h4></Link>
//         </div>
//         <ul className="nav-links">
//           <li>
//             <Link to={`/perfil/${localStorage.getItem("login")}`}>Perfil</Link>
//           </li>
//           <li>
//             <p onClick={deslogar}>Sair</p>
//           </li>
//         </ul>
//         <div onClick={() => toggleMenu()} className="burger">
//           <div className="line1" />
//           <div className="line2" />
//           <div className="line3" />
//         </div>
//       </nav>
//       <ModalLogin open={login} close={closeLogin} />
//       <ModalCadastro open={cadastro} close={closeCadastro} />
//     </Header>
//   );
// }
