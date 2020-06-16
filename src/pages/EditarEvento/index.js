import React from "react";
import "./style.css";
import { Image } from "react-bootstrap";
import InputMask from "react-input-mask";
import { TextField } from "@material-ui/core";
import banner from "../../assets/bg-editar-evento.jpg";
import { BotaoSubmit } from "../../components/hooks/useBotao";

export default function DetalheEvento() {
  return (
    <main>
      <Image src={banner} alt="editar-evento" />
      <div className="content">
        <div className="titulo-editar-evento">Editar informações do evento</div>
        <form className="evento-editar">
          <div className="input-titulo-editar">
            <label className="label-evento-editar">Titulo:</label>
            <input
              maxLength="20"
              className="input-editar campo-titulo-editar"
              placeholder="Digite o titulo do evento"
            />
          </div>

          <div className="input-endereco-editar">
            <label className="label-evento-editar">Endereco:</label>
            <input
              maxLength="20"
              className="input-editar campo-endereco-editar"
              placeholder="Digite o titulo do evento"
            />
          </div>

          <div className="input-descricao-editar">
            <label className="label-evento-editar">Descricao:</label>
            <textarea
              maxLength="20"
              className="input-editar campo-decricao-editar"
              placeholder="Digite o titulo do evento"
            />
          </div>

          <div className="input-dtInicio-editar">
            <label className="label-evento-editar">Data do evento:</label>
            <InputMask
              placeholder="Escolha o dia do role.Ex(dd/mm/aaaa)"
              mask="99/99/9999"
              className="input campo-dtIncio-editar"
            />
          </div>

          <div className="input-horaInicio-editar">
            <label className="label-evento-editar">Horario do inicio:</label>
            <div className="campo-hora-editar">
              <TextField defaultValue="00:00" type="time" />
            </div>
          </div>

          <div className="input-horaFim-editar">
            <label className="label-evento-editar">Termino:</label>
            <div className="campo-hora-editar">
              <TextField defaultValue="00:00" type="time" />
            </div>
          </div>

          <div className="botoes">
            <button>Deixa pra lá</button>
            {/* <Teste /> */}
            {/* <button className="gb gb-bordered hover-slide hover-fill reverse" id="gb9"> */}
            <BotaoSubmit>Pronto</BotaoSubmit>
            {/* </button> */}
          </div>
        </form>
      </div>
    </main>
  );
}

// import React, { Component } from "react";
// import "./style.css";
// import { api } from "../../services/api";
// import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
// import LocationOnIcon from '@material-ui/icons/LocationOn';
// import banner from '../../assets/bg-detalheEventos.png';
// import { Link } from 'react-router-dom';

// export default class DetalheEvento extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             evento: [],
//             participantes: [],
//             endereco: []
//         };
//     }

//     componentDidMount() {
//         const { id } = this.props.match.params;
//         try {
//             api.get(`eventos/${id}`)
//                 .then(res => {
//                     this.setState({
//                         evento: res.data,
//                         endereco: res.data.endereco,
//                         participantes: res.data.participantes
//                     });
//                 });
//         } catch (e) {
//             console.log(e);
//         }
//     }

//     navigateBack = () =>{
//         window.history.back()
//     }

//     render() {
//         return (
//             <>
//                 <img alt="Banner Topo edição evento"src={banner} />
//                 <div className="container div-detalheEventos">
//                     <h2 className='detalheEvento-titulo'><b>{this.state.evento.nome}</b></h2>
//                     <div className="row" id="detalheEventos">
//                         <div className="col-lg-6 col-md-12 col-sm-12">

//                             <h5><b>Descrição</b></h5>
//                             <p>{this.state.evento.descricaoEvento}</p>
//                         </div>
//                         <div className="col-lg-6 col-md-12 col-sm-12">
//                             <div className='row'>
//                                 <div className="col-lg-6 col-md-6 col-sm-6">
//                                     <Link onClick={this.navigateBack}>
//                                         <button className="btn btn-lg botao-naovou">Não Vou</button>
//                                     </Link>
//                                 </div>
//                                 <div className="col-lg-6 col-md-6 col-sm-6">
//                                     <button className="btn btn-primary btn-lg botao-bora" type="submit">Bora!</button>
//                                 </div>
//                             </div>
//                             <div className="row detalheEventos-data">
//                                 <div className="col-lg-1 col-md-1 col-sm-1">
//                                     <QueryBuilderIcon className="detalheEvento-icone" />
//                                 </div>
//                                 <div className="col-lg-11 col-md-11 col-sm-11">
//                                     <h5><b>Data</b></h5>
//                                     <p>
//                                         <b>Inicio:  </b>
//                                         {this.state.evento.dataHoraInicio}
//                                     </p>
//                                     <p>
//                                         <b>Termino: </b>
//                                         {this.state.evento.dataHoraFim}
//                                     </p>
//                                 </div>
//                             </div>
//                             <div className="row">
//                                 <div className="col-lg-1 col-sm-1">
//                                     <LocationOnIcon />
//                                 </div>
//                                 <div className="col-lg-11 col-md-11 col-sm-11">
//                                     <h5><b>Endereço</b></h5>
//                                     <p>
//                                         {this.state.endereco.rua}
//                                         ,
//                                         {this.state.endereco.numero}
//                                         -
//                                         {this.state.endereco.bairro}
//                                         -
//                                         {this.state.endereco.cidade}
//                                         /
//                                         {this.state.endereco.estado}
//                                     </p>
//                                 </div>
//                             </div>
//                             <div className="col-lg-12 col-sm-12">
//                                 <h5>Mapa</h5>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="row">
//                         <h3>Quem vai</h3>
//                             {/* {this.state.participantes.map(participante => (
//                                 <ul>
//                                     <li>{participante.nome}</li>
//                                 </ul>
//                             ))} */}
//                     </div>
//                 </div>
//             </>
//         );
//     }
// }
