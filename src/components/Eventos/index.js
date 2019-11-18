import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import { api } from '../../services/api';
import './styles.css';

export default class Eventos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eventos: []
        }
    }

    componentDidMount() {
        try {
            api.get("/eventos/eventosHome")
                .then(res => {
                    this.setState({ eventos: res.data })
                })
        } catch (e) {
            console.log('error: ', e)
        }
    }

    render() {
        return (
            <div className="container div-eventos">
                <h1 className="eventos-titulo">Ultimos rolês cadastrados</h1>
                <div className="row">
                    {this.state.eventos.map(item => (
                        <div key={item.idEvento} className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <h6 id="topico-evento"><b>{item.nome}</b></h6>
                                    <hr className="barra-evento"></hr>
                                    <DirectionsRunIcon className="icone" />
                                </div>
                                <div className="flip-card-back">
                                    <div className="detalhe-evento-card">
                                        <p><b>Início:</b> {item.dataHoraInicio} <br />
                                            <b>Termino:</b> {item.dataHoraFim}
                                        </p>
                                        <p><b>Endereço: </b>
                                            {item.endereco.rua}, {item.endereco.numero} - {item.endereco.bairro} -
                                            {item.endereco.cidade}/{item.endereco.estado}
                                        </p>
                                    </div>
                                    <button className="btn btn-light btn-block botao-evento">
                                        <Link to={`/eventos/detalhe/${item.idEvento}`}><b>Detalhes</b></Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

