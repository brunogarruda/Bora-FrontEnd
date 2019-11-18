import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PersonIcon from '@material-ui/icons/Person';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import './styles.css';

export default class NavBarDeslogado extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav>
                <div className="logo">
                    <Link to='/'><h4>BORA</h4></Link>
                </div>
                <ul className="nav-links">
                    <li>
                        <Link to="/cadastro">
                            <PersonAddIcon/>Cadastrar
                        </Link>
                    </li>
                    <li>
                        <Link to="/login">
                            <PersonIcon/>Login
                        </Link>
                    </li>
                </ul>
            </nav>
        )
    }
}