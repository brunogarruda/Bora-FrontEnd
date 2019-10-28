import React, { Component } from 'react';
import './style.css';
import { api } from '../../services/api';


export default class DetalheEvento extends Component {
    constructor(props) {
        super(props);
        this.state = {
            evento: [],
            participantes: [],
            endereco: []
        }
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        try {
            api.get(`eventos/${id}`)
                .then(res => {
                    this.setState({
                        evento: res.data,
                        endereco: res.data.endereco
                    });
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
                        <h1><b>{this.state.evento.nome}</b></h1>
                        <h5><b>Descrição</b></h5>
                        <p>{this.state.evento.descricaoEvento}</p>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <div className="col-lg-12 col-sm-12">
                            <button className="btn btn-danger btn-lg" >Não Vou</button>
                            <button className="btn btn-primary btn-lg"type="submit">Bora!</button>
                        </div>
                        <div className="row">
                            <div className="col-lg-2 col-sm-2">
                                icone
                                icone
                            </div>
                            <div className="col-lg-10 col-sm-10">
                                <h5><b>Data</b></h5>
                                <p><b>Inicio:  </b>{this.state.evento.dataHoraInicio}</p>
                                <p><b>Termino: </b>{this.state.evento.dataHoraFim}</p>
                                <h5><b>Endereço</b></h5>
                                <p>{this.state.endereco.rua},{this.state.endereco.numero} - {this.state.endereco.bairro} - {this.state.endereco.cidade}/{this.state.endereco.estado}</p>
                            </div>
                        </div>
                        <div className="col-lg-12 col-sm-12">
                            <h5>Mapa</h5>
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