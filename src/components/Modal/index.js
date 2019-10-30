// import React, { useState } from "react";
// import Icon from "@material-ui/core/Icon";
// import { ModalStyle } from "./styles";

// import { api } from "../../services/api";

// export default function Modal({ open, close }) {
//   const [Evento, setEvento] = useState({
//     nome: "",
//     dataHoraInicio: "",
//     dataHoraFim: ""
//   });

//   const onChange = event => {
//     setEvento({
//       ...Evento,
//       [event.target.name]: event.target.value
//     });
//   };

//   async function onSubmit(event) {
//     event.preventDefault();
//     console.log(Evento);

//     await api
//       .post("eventos",  Evento )
//       .then(res => setEvento(res.data))
//       .catch(err => console.error(err));
//   }

//   return open ? (
//     <ModalStyle>
//       <div className="modal" />
//       <Icon onClick={close}>close</Icon>

//       <form onSubmit={onSubmit}>
//         <label htmlhtmlFor="nome">nome</label>
//         <input
//           id="nome"
//           name="nome"
//           value={Evento.nome}
//           placeholder="Digite o nome do evento"
//           onChange={onChange}
//         />
//         <input
//           id="dataHoraInicio"
//           name="dataHoraInicio"
//           value={Evento.dataHoraInicio}
//           placeholder="Digite o dataHoraInicio do evento"
//           onChange={onChange}
//         />
//         <input
//           id="dataHoraFim"
//           name="dataHoraFim"
//           value={Evento.dataHoraFim}
//           placeholder="Digite a dataHoraFim do evento"
//           onChange={onChange}
//         />
//         <button type="submit">salvar</button>
//       </form>
//     </ModalStyle>
//   ) : null;
// }


import React from "react";
import Icon from "@material-ui/core/Icon";


// export const isVisivel = (<ModalLogin/>,<ModalCadastro/>)


export const ModalLogin = ({ open, close }) => {
  return open ? (
    <>
      <form id="js-modal" className="modal" style="display: block; opacity: 1; transform: translateY(0px);">
        <div id="js-close-button" className="modal__close">
          <div id="" title="" className="icon ">
          </div>
        </div>
        <div className="modal__header">Log In</div>
        <div className="modal__description">this is dumb modal window, click × to close it</div>
        <div className="modal__section">
          <div className="input-with-label">
            <input id="name" type="text" className="input-with-label__input" />
            <label htmlFor="name" className="input-with-label__label">username or email
<div className="input-with-label__label__corner"></div>
            </label>
          </div>
        </div>
        <div className="modal__section">
          <div className="input-with-label">
            <input id="password" type="password" className="input-with-label__input" />
            <label htmlFor="password" className="input-with-label__label">password
<div className="input-with-label__label__corner"></div>
            </label>
          </div>
        </div>
        <div className="modal__section grid grid--sliced grid--gutter-x2">
          <div className="grid-bit grid-bit--14-20">
            <button>log in</button>
          </div>
          <div className="grid-bit grid-bit--6-20">
            <button>cancel</button>
          </div>
        </div>
      </form>
    </>
  ) : null

}

export const ModalCadastro = ({ open, close }) => {
  return open ? (<div>cadastro <Icon onClick={close}>close</Icon></div>) : null
}


/*
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
*/