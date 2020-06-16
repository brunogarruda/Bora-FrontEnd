import React, { Component } from 'react';
import banner from '../../assets/bg-login.svg';
import { api } from "../../services/api";
import { login, logout } from "../../services/auth";

export default class Login extends Component {
    constructor(props) {
        super(props);

    }

    handleChange = (event) => {
        const state = Object.assign({}, this.state);
        let field = event.target.id;
        state[field] = event.target.value;
        this.setState(state);
    }

    logar = () => {
        let apelido = this.state.apelido;
        let senha = this.state.senha;
        try {
            api.post("/auth",
                { apelido, senha })
                .then(res => {
                    localStorage.setItem('login', apelido);
                    localStorage.setItem('senha', senha);
                    login(res.data.token);
                    alert("Teste");
                })
        } catch (e) {
            alert("Errou");
        }
    }

    render() {
        return (
            <div class='container cadastro-div'>
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <img alt="banner login" src={banner} />
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-5">
                        <form>
                            <h2 className="detalheEvento-titulo"><b>Bem vindo</b></h2>
                            <div className="form-group">
                                <label className="perfil-info" htmlFor="apelido">Email ou Apelido</label>
                                <input type="text" onChange={this.handleChange} required="true" className="form-control" id="apelido" placeholder="Digite seu email ou apelido" />
                            </div>
                            <div className="form-group">
                                <label className="perfil-info" htmlFor="senha">Senha</label>
                                <input type="password" onChange={this.handleChange} required="true" className="form-control" id="senha" placeholder="Digite sua senha" />
                            </div>
                            <div class="form-group form-check">
                                <input type="checkbox" class="form-check-input" id="lembrar"></input>
                                <label class="form-check-label" htmlFor="lembrar">Lembrar de mim</label>
                            </div>
                            <button type="text" type="button" className="btn botao-bora" onClick={this.logar}>Logar</button>
                        </form>
                    </div>
                </div>

            </div>
        )
    }
}