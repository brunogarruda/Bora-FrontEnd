import React, { Component } from 'react';
import './style.css';
import { api } from '../../services/api';
import { getToken } from '../../services/auth';
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
        var token = getToken();
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

    render() {
        return (
            <>
                <div className="container div-perfil">
                    <div className="row justify-content-around">
                        <div className="col-lg-7 col-sm-12" id="perfil-eventos">
                            <h2 className="perfil-titulo">Meus Eventos</h2>
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 eventosParticipados">
                                    <h6 className="titulo-perfil-evento">Eventos que eu participei</h6>
                                    <div className="row">
                            

                                        {/* <Eventos/> */}
                                        {/* <div className="perfil-card">
                                            <div className="perfil-card-front">
                                                <h6 id="topico-evento"><b>aaaaaa</b></h6>
                                                <hr className="barra-evento"></hr>
                                                <DirectionsRunIcon className="icone" />
                                            </div>
                                        </div> */}
                                    </div>

                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 eventosCriados">
                                    <h6 className="titulo-perfil-evento">Eventos que eu criei</h6>
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}