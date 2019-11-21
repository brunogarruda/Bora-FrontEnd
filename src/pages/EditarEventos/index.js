import React, { Component } from "react";
import { Image } from "react-bootstrap";
import banner from "../../assets/bg.svg";
import { api } from "../../services/api";
import "./style.css";

export default function EditarEvento() {
  return (
    <main>
      <Image className="img-banner" src={banner} alt="img" />
      <h2 className="titulo-editar-evento" />
    </main>
  );
}

// export default class EditarEventos extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       //evento
//       nome: '',
//       descricaoEvento: '',
//       privado: '',
//       senha: '',
//       recorrencia: '',
//       dataHoraFim: '',
//       dataHoraInicio: '',
//       //endereço
//       bairro: '',
//       cep: '',
//       cidade: '',
//       estado: '',
//       numero: '',
//       rua: '',
//       categoria: 'Festas',
//       categorias: []
//     };
//   }

//   componentDidMount() {
//     const { id } = this.props.match.params;
//     api.get('categoria').then(res => {
//       this.setState({ categorias: res.data });
//     });

//     api.get(`eventos/${id}`).then(res => {
//       console.log(res);
//       this.setState({
//         nome: res.data.nome,
//         descricaoEvento: res.data.descricaoEvento,
//         privado: res.data.privado,
//         senha: res.data.senha,
//         recorrencia: res.data.recorrencia,
//         dataHoraFim: res.data.dataHoraFim,
//         dataHoraInicio: res.data.dataHoraInicio,
//         categoria: res.data.categoria,
//         //endereço
//         bairro: res.data.endereco.bairro,
//         cep: res.data.endereco.cep,
//         cidade: res.data.endereco.cidade,
//         estado: res.data.endereco.estado,
//         numero: res.data.endereco.numero,
//         rua: res.data.endereco.rua
//       });
//     });
//   }

//   alterarEvento = () => {
//     const { id } = this.props.match.params;

//     var dados = {
//       nome: this.state.nome,
//       descricaoEvento: this.state.descricaoEvento,
//       privado: this.state.privado,
//       senha: this.state.senha,
//       recorrencia: this.state.recorrencia,
//       dataHoraFim: this.state.dataHoraFim,
//       dataHoraInicio: this.state.dataHoraInicio,
//       categoria: this.state.categoria,
//       endereco: {
//         bairro: this.state.bairro,
//         cep: this.state.cep,
//         cidade: this.state.cidade,
//         estado: this.state.estado,
//         numero: this.state.numero,
//         rua: this.state.rua
//       }
//     };
//     debugger;

//     api.put(`eventos/${id}`, { dados }).then(res => {
//       console.log(res);
//     });
//   };

//   eventoPrivado = () => {
//     this.setState({
//       privado: !this.state.privado
//     });
//     if (this.state.privado === false) {
//       document.getElementById('div-senha').style.display = 'block';
//     } else {
//       document.getElementById('div-senha').style.display = 'none';
//     }
//   };

//   handleInputChange = event => {
//     const target = event.target;
//     const value = target.value;
//     const name = target.name;
//     this.setState({
//       [name]: value
//     });
//   };

//   navigateBack = () => {
//     window.history.back();
//   };

//   render() {
//     return (
//       <>
//         <img alt="Banner topo edição do evento" src={banner} />
//         <div className="container">
//           <h2 className="title-form">
//             <b>Editar informações do evento</b>
//           </h2>
//           <form>
//             <div className="form-group">
//               <div className="groupinput">
//                 <label className="labelForm active" htmlFor="nome">
//                   Nome do evento
//                 </label>
//                 <input
//                   name="nome"
//                   id="nome"
//                   type="text"
//                   className="form-control"
//                   onChange={this.handleInputChange}
//                   value={this.state.nome}
//                   placeholder="Inclua um nome curto e claro"
//                 />
//               </div>
//               <div className="groupinput">
//                 <label className="labelForm" htmlFor="descricaoEvento">
//                   Descrição
//                 </label>
//                 <textarea
//                   type="text"
//                   name="descricaoEvento"
//                   className="form-control"
//                   onChange={this.handleInputChange}
//                   value={this.state.descricaoEvento}
//                   placeholder="Inclua o endereço do evento"
//                   rows="3"
//                 />
//               </div>
//               <div className="form-row">
//                 <div className="form-group col-lg-10">
//                   <label className="labelForm" htmlFor="rua">
//                     Logradouro
//                   </label>
//                   <input
//                     name="rua"
//                     id="rua"
//                     type="text"
//                     className="form-control"
//                     onChange={this.handleInputChange}
//                     value={this.state.rua}
//                     placeholder="Inclua o endereço do evento"
//                   />
//                 </div>
//                 <div className="form-group col-lg-2">
//                   <label className="labelForm" htmlFor="numero">
//                     Numero
//                   </label>
//                   <input
//                     type="text"
//                     id="numero"
//                     name="numero"
//                     className="form-control"
//                     onChange={this.handleInputChange}
//                     value={this.state.numero}
//                     placeholder="Inclua o endereço do evento"
//                   />
//                 </div>
//               </div>
//               <div className="form-row">
//                 <div className="form-group col-lg-4">
//                   <label className="labelForm" htmlFor="bairro">
//                     Bairro
//                   </label>
//                   <input
//                     type="text"
//                     id="bairro"
//                     name="bairro"
//                     className="form-control"
//                     onChange={this.handleInputChange}
//                     value={this.state.bairro}
//                     placeholder="Inclua o endereço do evento"
//                   />
//                 </div>
//                 <div className="form-group col-lg-4">
//                   <label className="labelForm" htmlFor="cidade">
//                     Cidade
//                   </label>
//                   <input
//                     type="text"
//                     id="cidade"
//                     className="form-control"
//                     name="cidade"
//                     onChange={this.handleInputChange}
//                     value={this.state.cidade}
//                     placeholder="Inclua o endereço do evento"
//                   />
//                 </div>
//                 <div className="form-group col-lg-4">
//                   <label className="labelForm" htmlFor="cep">
//                     CEP
//                   </label>
//                   <input
//                     type="text"
//                     id="cep"
//                     className="form-control"
//                     name="cep"
//                     onChange={this.handleInputChange}
//                     value={this.state.cep}
//                     placeholder="Inclua o endereço do evento"
//                   />
//                 </div>
//               </div>
//               <div className="groupinput">
//                 <label className="labelForm">Categoria</label>
//                 <select
//                   name="categoria"
//                   onChange={this.handleInputChange}
//                   value={this.state.categoria}
//                   className="custom-select"
//                 >
//                   {this.state.categorias.map(item => (
//                     <option key={item.nomeCategoria}>{item.nomeCategoria}</option>
//                   ))}
//                   ;
//                 </select>
//               </div>
//               <div className="groupinput">
//                 <label className="labelForm">Frequencia</label>
//                 <select className="custom-select">
//                   <option>Ocorre uma vez</option>
//                 </select>
//               </div>

//               <div className="form-row">
//                 <div className="col-lg-4">
//                   <div className="form-check">
//                     <input
//                       className="form-check-input"
//                       type="checkbox"
//                       checked={this.state.privado}
//                       onClick={this.eventoPrivado}
//                       id="privado"
//                     />
//                     <label className="form-check-label" for="privado">
//                       Evento Privado?
//                     </label>
//                   </div>
//                 </div>
//                 <div className="col-lg-4" id="div-senha">
//                   <label className="labelForm" htmlFor="senha">
//                     Senha
//                   </label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     name="senha"
//                     id="senha"
//                     onChange={this.handleInputChange}
//                     value={this.state.senha}
//                     placeholder="Insira a senha do seu evento privado"
//                   />
//                 </div>
//               </div>
//             </div>
//             <div className="groupinput groupinputButton">
//               <button className="botao-deixa-pra-la" type="button" onClick={this.navigateBack}>
//                 Não Editar
//               </button>
//               <button className="botao-pronto" type="button" onClick={this.alterarEvento}>
//                 Pronto
//               </button>
//             </div>
//           </form>
//         </div>
//       </>
//     );
//   }
// }
