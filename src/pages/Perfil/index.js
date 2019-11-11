import React, { Component } from 'react';
import './index.css';
import { api } from '../../services/api';
import { getToken } from '../../services/auth';

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
                this.setState({usuario: res.data});
                this.setState({criado: res.data.eventosCriados})
                console.log(res.data);
            })
    }

    render() {
        return (
            <>
            <div className="container">
                <div className="row justify-content-around">
                    <div className="col-lg-7 col-sm-12" id="perfil-eventos">
                        <h4>Meus Eventos</h4>
                        <div className="row justify-content-around">
                            <div className="col-lg-6">
                                <h6>Eventos que eu participei</h6>
                            </div>
                            <div className="col-lg-6">
                                <h6>Eventos que eu criei</h6>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-4 col-sm-12" id="perfil-perfil">
                        <h4>Perfil</h4>
                        <label>Nome</label>
                        <p>{this.state.usuario.nome}</p>
                        <label>Apelido</label>
                        <p>{this.state.usuario.apelido}</p>
                        <label>Celular</label>
                        <p>{this.state.usuario.celular}</p>
                        <label>Email</label>
                        <p>{this.state.usuario.email}</p>

                    </div>
                </div>
            </div>
            </>
        );
    }
}