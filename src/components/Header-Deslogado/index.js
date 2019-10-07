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
            MostarCadastro: true
        }
    }
    render() {
        return (
            <>
            <Navbar>
                <Navbar.Brand><Link className="logo" to='/'><b>Bora</b></Link></Navbar.Brand>
                <Nav>
                    <Nav.Item>
                        <Link className="botaonav"><b>Login</b></Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link className="botaonav" onClick={() => this.setState.mostrar = true}><b>Cadastre-se</b></Link>
                    </Nav.Item>
                </Nav>
            </Navbar>
            <Login mostrarLogin={this.state.MostarCadastro}/>
            <Cadastro MostarCadastro={this.state.MostarCadastro}/>
            </>
        );
    }
}
export default Header;
