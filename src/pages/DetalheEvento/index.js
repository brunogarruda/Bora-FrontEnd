/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable block-scoped-var */
/* eslint-disable vars-on-top */
/* eslint-disable no-var */
/* eslint-disable no-unreachable */
/* eslint-disable prefer-const */
/* eslint-disable no-plusplus */
/* eslint-disable import/order */
import React, { useState, useEffect } from "react";
import { useRouteMatch, useParams } from "react-router-dom";
import { Image } from "react-bootstrap";
import bg from "../../assets/bg.svg";
import { api } from "../../services/api";
import "./style.css";
import banner from "../../assets/bg-editar-evento.jpg";
import { LocationOn, Today, QueryBuilder } from "@material-ui/icons";
import Maps from "../../components/Maps/map";
import { Carousel } from "../../components/Carousel/Carousel";
import data from "../../components/Eventos/data/eventos2.json";
import usuarios from "../../components/Eventos/data/usuariosLimit10";

export default function DetalheEvento(paramName, path) {
  var id = useRouteMatch().params;
  var id2 = parseInt(id.id);
  // const [usuario,setUsuario] = useState([]);
  // const [evento, setEvento] = useState({});

  for (let i = 0; i < data.length; i++) {
    if (data[i].idEvento === id2) {
      var element = data[i];
    }
  }

  // var te = usuarios;
  // for (let i = 199; i < usuarios.length; i++) {
  //   var sa = usuarios[i];
  // }

  // // const fun = ()=>{
  // //   setUsuario(sa);
  // // };
  // setUsuario(sa);

  // console.log(usuario);

  // let dados = data.filter(res=>{
  //   const final = res.idEvento==id;
  //   console.log(final);
  // });

  // const te = data;
  // for (let i = 0; i < te.length; i++) {
  //   var sa = te;
  // }

  // useEffect(() => {
  //   let eve = data.filter(d => {
  //     return d.idEvento === id;
  //   });
  //   const te = eve;
  //   for (let i = 0; i < te.length; i++) {
  //     const sa = te;
  //     setEvento(te);
  //   }
  // });

  // console.log(evento);

  return (
    <main>
      <Image src={banner} alt="detalhe-evento" />
      <section className="container conteudo-detalhe">
        <small className="data-detalhe-evento">Segunda-feira, 9 de Setembro de 2019</small>
        <h1 className="titulo-detalhe-evento">{element.titulo}</h1>
        <div className="icon-calendar">
          <Today style={{ fontSize: 100 }} amplitude />
        </div>
        <div className="botoes-detalhe-evento">
          <button className="botao-detalhe-evento-nao">Não vou</button>
          <button className="botao-detalhe-evento-bora">Bora</button>
        </div>
        <section className="descricao-detalhe-evento">{element.descricao}</section>
        <section className="info-horario-detalhe-evento">
          <div className="horario-detalhe-evento">
            <p>
              Data Inicio:
              {element.dataInicio}
              <br />
              Data fim:
              {element.dataFim}
              <br />
              19:30 ate 22:00
              <br />A cada 2ª Segunda-feira do mês
            </p>
            <span className="icon-relogio">
              <QueryBuilder />
            </span>
          </div>

          <div className="local-detalhe-evento">
            <p>
              Garoa Hacker CLube
              <br />
              Rua: {element.endereco}
              <br />
              São Paulo
            </p>
            <span className="icon-location">
              <LocationOn />
            </span>
          </div>
        </section>
        <section className="container google-maps-detalhe">
          <Maps />
        </section>
      </section>
      <section className="container section-car-detalhe">
      <Carousel>
        {usuarios.map((d,i)=>(
          <div key={i}>
          {d.apelido}
          </div>
        ))}
      </Carousel>
      </section>

      {/* <section className="container section-car-detalhe">
        {usuarios.map(res => (
          <div key={res.idUsuario}>
            <Carousel />
          </div>
        ))}
      </section> */}

      {/* <section className="container section-carousel">
        <h4 className="titulo-quem-vai">Quem vai ?</h4>
        <section className="carousel-section">
          <Carousel />
        </section>
      </section> */}
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
