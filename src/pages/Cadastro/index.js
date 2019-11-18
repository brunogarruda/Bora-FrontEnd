import React, { Component } from 'react';
import banner from '../../assets/bg-cadastro.svg';
import { api } from '../../services/api';
import { Link } from 'react-router-dom';
import "./style.css";

export default class DetalheEvento extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: '',
            login: '',
            senha: '',
            apelido: '',
            email: '',
            celular: ''
        };
    }

    handleChange = (event) => {
        const state = Object.assign({}, this.state);
        let field = event.target.id;
        state[field] = event.target.value;
        console.log(state);
        this.setState(state);
    }

    cadastrarUsuario = () => {

        // let dados = {
        //     "nome" : this.state.nome,
        //     "apelido" : this.state.apelido,
        //     "email" : this.state.email,
        //     "celular" : this.state.celular,
        //     "senha" : this.state.senha
        // }
        let nome = this.state.nome;
        let apelido = this.state.apelido;
        let email = this.state.email;
        let celular = this.state.celular;
        let senha = this.state.senha;
        try {
            debugger
            api.post("/usuarios",
                { nome, apelido, email, celular, senha })
                .then(res => {
                })
        } catch (e) {
            alert("Erro");
        }
    }

    render() {
        return (
            <div className="container cadastro-div">
                    <div className="row">
                        <div className="col-lg-7 col-md-7 col-sm-7">
                            <img alt="Teste" src={banner}></img>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4">
                        <h2 className="detalheEvento-titulo"><b>Crie sua conta</b></h2>
                            <form>
                                <div className="form-group">
                                    <label className="perfil-info" htmlFor="apelido">Nome</label>
                                    <input type="text" onChange={this.handleChange} required="true" className="form-control" id="nome" placeholder="Digite seu nome" />
                                    <small></small>
                                </div>
                                <div className="form-group">
                                    <label className="perfil-info" htmlFor="apelido">Apelido*</label>
                                    <input type="text" onChange={this.handleChange} required="true" className="form-control" id="apelido" placeholder="Digite seu usuário" />
                                    <small></small>
                                </div>
                                <div className="form-group">
                                    <label className="perfil-info" htmlFor="email">Email*</label>
                                    <input type="email" onChange={this.handleChange} required="true" className="form-control" id="email" placeholder="Digite seu email" />
                                    <small></small>
                                </div>
                                <div className="form-group">
                                    <label className="perfil-info" htmlFor="celular">Celular</label>
                                    <input type="text" onChange={this.handleChange} className="form-control" id="celular" placeholder="Digite seu celular" />
                                    <small></small>
                                </div>
                                <div className="form-group">
                                    <label className="perfil-info" htmlFor="senha">Senha*</label>
                                    <input type="password" onChange={this.handleChange} required="true" className="form-control" id="senha" placeholder="Digite sua senha" />
                                    <small></small>
                                </div>
                                <div className="form-group">
                                    <label className="perfil-info" htmlFor="confirmarSenha">Confirmar Senha</label>
                                    <input type="password" required="true" className="form-control" id="confirmarSenha" placeholder="Digite seu email ou apelido" />
                                    <small></small>
                                </div>
                                <button type="button" class="btn botao-bora" onClick={this.cadastrarUsuario} >Cadastrar</button>
                                <small>Já tem uma conta? <Link className="perfil-info" to="/login">Clique Aqui!</Link></small>
                            </form>
                        </div>
                    </div>
                </div>

        )
    }
}