import React from "react";
import { Image } from "react-bootstrap";
// import { Link } from "react-router-dom";
import { EventosCard } from "../../components/Eventos";
import CampoPesquisa from "../../components/CampoPesquisa";
import Login from "../../components/Modal-Login";
import bg from "../../assets/bg.svg";
import { Banner, EventosContainer } from "./styles";
// import { api } from "../../services/api";
// import { login } from "../../services/auth";
import { useModal } from "../../components/hooks/useModal";
import { Modal } from "../../components/Modal";



export default function Home(){
  const { eventoModal, openEvento, closeEvento } = useModal();
  return (
    <main>
      <Banner>
        <section className="context">
          <Image className="img" src={bg} fluid />
          <div className="banner">
            <h2 className="titulo">O que você quer fazer ?</h2>
            <div className="barra-pesquisa">
              <CampoPesquisa />
            </div>
          </div>
          <div className="butoes">
            <button className="bora">Bora</button>
            <Modal open={eventoModal} close={closeEvento} />
            <button onClick={openEvento} className="criar-role">Criar um rolê</button>
          </div>
        </section>
      </Banner>
      <div className="faixa" />
      <EventosContainer>
        <EventosCard />
      </EventosContainer>
      <Login />
    </main>
  );
};

// export default class Home extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       login: '',
//       senha: '',
//       apelido: '',
//       senha: '',
//       email: '',
//       celular: ''
//     };
//   }


//   handleChange = event => {
//     const state = Object.assign({}, this.state);
//     let field = event.target.id;
//     state[field] = event.target.value;
//     console.log(state);
//     this.setState(state);
//   };

//   logar = () => {
//     let apelido = this.state.login;
//     let senha = this.state.senha;

//     api.post('auth', { apelido, senha }).then(res => {
//       login(res.data.token);
//     });
//   };

//   cadastrarUsuario = () => {
//     let apelido = this.state.apelido;
//     let email = this.state.email;
//     let celular = this.state.celular;
//     let senha = this.state.senha;
//     try {
//       api.post('/api/usuarios', { apelido, email, celular, senha }).then(res => {
//         console.log(res);
//       });
//     } catch (e) {}
//   };

//   render() {
//     return (
//       <main>
//         <Banner>
//           <section className="context">
//             <Image className="img" src={bg} fluid />
//             <div className="banner">
//               <h2 className="titulo">O que você quer fazer ?</h2>
//               <div className="barra-pesquisa">
//                 <CampoPesquisa />
//               </div>
//             </div>
//             <div className="butoes">
//               <button className="bora">Bora</button>
//               <button className="criar-role">Criar um rolê</button>
//             </div>
//           </section>
//         </Banner>
//         <div className="faixa" />
//         <Eventos />
//         <Login />
//       </main>
//     );
//   }
// }
