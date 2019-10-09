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
    this.setState({mostrarLogin: true});
}

mostrarModalCadastro = (e) => {
    this.setState({mostrarCadastro: true});
}

    render() {
        return (
            <>
            <Navbar>
                <Navbar.Brand><Link className="logo" to='/'><b>Bora</b></Link></Navbar.Brand>
                <Nav>
                    <Nav.Item>
                        <a className="botaonav" onClick={(e) => {this.mostrarModalLogin()}}><b>Login</b></a>
                    </Nav.Item>
                    <Nav.Item>
                        <a className="botaonav" onClick={(e) => {this.mostrarModalCadastro()}}><b>Cadastre-se</b></a>
                    </Nav.Item>
                </Nav>
            </Navbar>
            <Login mostrar={this.state.mostrarLogin}/>
            <Cadastro mostrar={this.state.mostrarCadastro}/>
            </>
        );
    }
}
export default Header;
