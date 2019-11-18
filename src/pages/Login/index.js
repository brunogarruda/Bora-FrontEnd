import React, { Component } from "react";
import { api } from "../../services/api";
import { login, logout } from "../../services/auth";
import banner from '../../assets/bg-login.svg';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            senha: ''
        }
    }

    componentDidMount = () => {
        var login = localStorage.getItem('login');
        var senha = localStorage.getItem('senha');
        document.getElementById('apelido').value = login;
        document.getElementById('senha').value = senha;
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
                <div className="container">
                <div className="row">
                <div className="col-lg-7 col-md-7 col-sm-7">
                            <img alt="a" src={banner}></img>
                        </div>
                </div>

                </div>
        )
    }
}