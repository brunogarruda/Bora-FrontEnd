import React, { Component } from 'react';
import './style.css';
import {api} from '../../services/api';


export default class DetalheEvento extends Component {
    constructor(props) {
        super(props);
        this.state = {
            evento: [],
            participantes: []
        }
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        try {
            api.get(`eventos/${id}`)
                .then(res => {
                    console.log(res.data);
                    this.setState({ evento: res.data });
                })
        } catch (e) {
            console.log(e);
        }
        try {
            api.get(`participantes/${id}`)
                .then(res => {
                    this.setState({ participante: res.data });
                })
        } catch (e) {
            console.log(e);
        }


    }

    render() {
        return (
            <div className="container">
                <div className="row" id="detalheEventos">
                    <div className="col-lg-6 col-sm-12">
                        <h1>{this.state.evento.nome}</h1>
                        <h6>Descrição</h6>
                        <p>{this.state.evento.descricaoEvento}</p>
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
                            <div className="col-lg-10 col-sm-10">

                                <p>
                                    <b>Data:</b> {this.state.evento.dataHoraInicio}
                                </p>
                                <p>
                                    <b>Endereço:</b>
                                </p>
                                {/*                                     
                                {this.state.evento.endereco.rua}, {this.state.evento.endereco.numero} - {this.state.evento.endereco.bairro} -
                                {this.state.evento.endereco.cidade}/{this.state.evento.endereco.estado}
                                */}

                            </div>
                        </div>
                        <div className="col-lg-12 col-sm-12">
                            Mapa
                        </div>
                    </div>
                </div>
                <div className="row">
                    <h3>Quem vai</h3>
                    <ul>
                        {this.state.participantes.map(participante => (
                            <>
                                <p>Participantes</p>
                                <li>{participante.nome}</li>
                            </>
                        ))}
                        <li></li>
                    </ul>
                </div>
            </div>
        )
    }
}