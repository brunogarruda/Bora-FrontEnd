import React, { Component } from "react";
import { Image } from "react-bootstrap";
import Eventos from "../../components/Eventos";
import CampoPesquisa from "../../components/CampoPesquisa";
import Login from '../../components/Modal-Login'
import bg from "../../assets/bg.svg";
import { Banner } from "./styles";
import { api } from "../../services/api";
import { login, logout } from "../../services/auth";
import { Link } from "react-router-dom";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      senha: '',
      apelido: '',
      senha: '',
      email: '',
      celular: ''
    }
  }

  handleChange = (event) => {
    const state = Object.assign({}, this.state);
    let field = event.target.id;
    state[field] = event.target.value;
    console.log(state);
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

  componentDidMount = () => {
    var login = localStorage.getItem('login');
    var senha = localStorage.getItem('senha');
    document.getElementById('apelido').value = login;
    document.getElementById('senha').value = senha;
  }

  cadastrarUsuario = () => {
    let apelido = this.state.apelido;
    let email = this.state.email;
    let celular = this.state.celular;
    let senha = this.state.senha;
    try {
      api.post("/usuarios",
        { apelido, email, celular, senha })
        .then(res => {
          console.log(res);
        })
    } catch (e) {
      alert("Erro");
    }
  }


  render() {
    return (
      <main>
        <Banner>
          <form>
            <h2>Bem vindo</h2>
            <div className="form-group">
              <label htmlFor="login">Email ou Apelido</label>
              <input type="text" onChange={this.handleChange} required="true" className="form-control" id="apelido" placeholder="Digite seu email ou apelido" />
            </div>
            <div className="form-group">
              <label htmlFor="senha">Senha</label>
              <input type="password" onChange={this.handleChange} required="true" className="form-control" id="senha" placeholder="Digite sua senha" />
            </div>
            <div class="form-group form-check">
              <input type="checkbox" class="form-check-input" id="lembrar"></input>
              <label class="form-check-label" htmlFor="lembrar">Lembrar de mim</label>
            </div>
            <button type="submit" class="btn btn-primary" onClick={this.logar}>Logar</button>
          </form>

          <form>
            <h2>Crie sua conta</h2>
            <ul>
              <li id="erroCadastro"></li>
            </ul>
            <div className="form-group">
              <label htmlFor="apelido">Apelido</label>
              <input type="text" onChange={this.handleChange} required="true" className="form-control" id="apelido" placeholder="Digite o seu usuário" />
              <small></small>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" onChange={this.handleChange} required="true" className="form-control" id="email" placeholder="Digite seu email" />
              <small></small>
            </div>
            <div className="form-group">
              <label htmlFor="celular">Celular</label>
              <input type="text" onChange={this.handleChange} required="true" className="form-control" id="celular" placeholder="Digite seu celular" />
              <small></small>
            </div>
            <div className="form-group">
              <label htmlFor="senha">Senha</label>
              <input type="password" onChange={this.handleChange} required="true" className="form-control" id="senha" placeholder="Digite sua senha" />
              <small></small>
            </div>
            <div className="form-group">
              <label htmlFor="confirmarSenha">Confirmar Senha</label>
              <input type="password" required="true" className="form-control" id="confirmarSenha" placeholder="Digite seu email ou apelido" />
              <small></small>
            </div>
            <button type="submit" class="btn btn-primary" onClick={this.cadastrarUsuario} >Cadastrar</button>
            <small>Já tem uma conta? <Link>Clique Aqui!</Link></small>
          </form>

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
              <button className="criar-role">Criar um rolê</button>
            </div>
          </section>
        </Banner>
        <div className="faixa" />
        <Eventos />
        <Login />
      </main>
    );
  }
}
