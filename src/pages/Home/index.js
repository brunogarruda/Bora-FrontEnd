import React from "react";
import { Image } from "react-bootstrap";
import Eventos from "../../components/Eventos";
import CampoPesquisa from "../../components/CampoPesquisa";
import Login from "../../components/Modal-Login";
import bg from "../../assets/bg.svg";
import { Banner } from "./styles";
import {useModal} from "../../components/Modal/component/useModal";
import {Modal} from "../../components/Modal";

export const Home = ()=>{
  const { eventoModal,openEvento,closeEvento } = useModal();
  return(
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
          <button onClick={openEvento} className="bora">Bora</button>
          <Modal open={eventoModal} close={closeEvento} />
          <button className="criar-role">Criar um rolê</button>
        </div>
      </section>
    </Banner>
    <div className="faixa" />
    <Eventos />
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
