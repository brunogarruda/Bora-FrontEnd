import React, { Component } from 'react';
import './style.css';
import { api } from '../../services/api';
import { Link } from 'react-router-dom';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import homem from '../../assets/bg-perfil-homem.jpg';
import mulher from '../../assets/bg-perfil-mulher.png'

export default class Perfil extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usuario: [],
            criado: [],
            participante: []
        }
    }

    componentDidMount = () => {
        var login = localStorage.getItem('login');
        api.get(`/usuarios/usuario/${login}`)
            .then(res => {
                this.setState({
                    usuario: res.data,
                    criado: res.data.eventosCriados,
                    participante: res.data.eventosQueParticipo
                });
                console.log(res);
            })
    }

    eventosCriado = () => {
        document.getElementById("perfil-titulo-evento").innerHTML = "Eventos que eu criei"
    }

    eventosParticipados = () => {
        document.getElementById("perfil-titulo-evento").innerHTML = "Eventos que participei"
    }

    render() {
        console.log(this.participante);
        return (
            <>
                <div className="container div-perfil">
                    <div className="row justify-content-around">
                        <div className="col-lg-7 col-sm-12" id="perfil-eventos">
                            <h2 className="perfil-titulo">Meus Eventos</h2>
                            <div className="row">
                                <div id="eventosCriados" className="col-lg-12 col-md-12 col-sm-12 eventosParticipados">
                                    <h6 className="titulo-perfil-evento" id="perfil-titulo-evento">Eventos que eu criei</h6>
                                    <div className="row">
                                        {this.state.criado.map(item => (
                                            <div key={item.idEvento} className="flip-card">
                                                <div className="flip-card-inner">
                                                    <div className="flip-card-front">
                                                        <h6 id="topico-evento"><b>{item.nome}</b></h6>
                                                        <hr className="barra-evento"></hr>
                                                        <DirectionsRunIcon className="icone" />
                                                    </div>
                                                    <div className="flip-card-back">
                                                        <div className="detalhe-evento-card">
                                                            <p><b>Início:</b> {item.dataHoraInicio} <br />
                                                                <b>Termino:</b> {item.dataHoraFim}
                                                            </p>
                                                            <p><b>Endereço: </b>
                                                                {item.endereco.rua}, {item.endereco.numero} - {item.endereco.bairro} -
                                                                    {item.endereco.cidade}/{item.endereco.estado}
                                                            </p>
                                                        </div>
                                                        <button className="btn btn-light btn-block botao-evento">
                                                            <Link to={`/eventos/detalhe/${item.idEvento}`}><b>Detalhes</b></Link>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12">
                            <h2 className="perfil-titulo">Perfil</h2>
                            <div className="col-lg-12 col-sm-12 perfil-perfil">
                                <img src={this.state.usuario.apelido === "thi" ? homem : mulher} className='perfil-foto' />
                                <div>
                                    <label className="perfil-label">Nome</label>
                                    <p className="perfil-info">{this.state.usuario.nome}</p>
                                    <label className="perfil-label">Apelido</label>
                                    <p className="perfil-info">{this.state.usuario.apelido}</p>
                                    <label className="perfil-label">Celular</label>
                                    <p className="perfil-info">{this.state.usuario.celular}</p>
                                    <label className="perfil-label">Email</label>
                                    <p className="perfil-info">{this.state.usuario.email}</p>
                                    <div>
                                        <h5>Visualizar Eventos:</h5>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <button className="btn btn-sm botao-naovou" onClick={this.eventosCriado}>Eventos Criados</button>
                                            </div>
                                            <br/>
                                            <div className="col-lg-6">
                                                <button className="btn btn-sm botao-bora" onClick={this.eventosParticipados}>Eventos Participados</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}