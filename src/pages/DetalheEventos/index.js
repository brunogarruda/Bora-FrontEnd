import React, { Component } from 'react';
import './style.css'



export default class DetalheEvento extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eventos: []
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row" id="detalheEventos">
                    <div className="col-lg-6 col-sm-12">
                        <h1>Teste</h1>
                        <p>
                            descrição do evento
                            </p>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <div className="col-lg-6 col-sm-6">
                            <button className="btn btn-danger">Não Vou</button>
                            <button className="btn btn-primary">Bora!</button>
                        </div>
                        <div className="row">
                            <div className="col-lg-2 col-sm-2">

                                icone
                                icone
                            </div>
                            <div className="col-lg-2 col-sm-2">
                                data
                                endereço
                            </div>
                        </div>
                        <div className="col-lg-12 col-sm-12">
                            Mapa
                        </div>
                    </div>
                </div>
                <div className="row">
                    <h3>Quem vai</h3>
                </div>
            </div>
        )
    }
}