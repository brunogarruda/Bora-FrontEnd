import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './index.css';

export default class Eventos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eventos: []
        }
    }

    render() {
        return (
            <div id="notfound">
                <div className="notfound">
                    <div className="notfound-404">
                        <h1>Oops!</h1>
                    </div>
                    <h2>404 - Página não encontrada</h2>
                    <p>Essa página não existe em nosso sistema ou foi removida.</p>
                    <Link to="/">Ir para Home</Link>
                </div>
            </div>
        )
    }

}