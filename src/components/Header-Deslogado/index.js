import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import Login from '../Modal-Login';
import Cadastro from '../Modal-Cadastro';
import './header.css'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mostrarLogin: false,
            mostrarCadastro: false
        }
    }

mostrarModalLogin = (e) => {
    this.setState(prevState => ({
        mostrarLogin: !prevState.mostrarLogin
    }));
}

mostrarModalCadastro = (e) => {
    this.setState(prevState => ({
        mostrarCadastro: !prevState.mostrarCadastro
    }));
}

    render() {
        return (
            <>
            <Navbar>
                <Navbar.Brand><Link className="logo" to='/'><b>Bora</b></Link></Navbar.Brand>
                <Nav>
                    <Nav.Item>
                        <Link className="botaonav" onClick={(e) => {this.mostrarModalLogin()}}><b>Login</b></Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link className="botaonav" onClick={(e) => {this.mostrarModalCadastro()}}><b>Cadastre-se</b></Link>
                    </Nav.Item>
                </Nav>
            </Navbar>
            <Login mostrarFuncao={this.mostrarLogin} mostrar={this.state.mostrarModalLogin}/>
            <Cadastro mostrarFuncao={this.mostrarCadastro} mostrar={this.state.mostrarModalCadastro}/>
            </>
        );
    }
}
export default Header;
