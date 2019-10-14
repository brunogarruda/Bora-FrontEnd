import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Bola from '@material-ui/icons/SportsSoccerSharp';
import api from '../../services/api'
import './styles.css'

class Eventos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eventos: []
        }
    }

    componentDidMount() {
        try {
            api.get("eventos")
                .then(res => {
                    console.log(res);
                    this.setState({ eventos: res.data })
                })
        }catch(e){
            console.log('error: ',e)
        }
    }

    render() {
        return (
            <div className="container div-eventos">
                <h2>Ultimos rolês cadastrados</h2>
                <div className="col-lg-3 col-sm-12">
                    {this.state.eventos.map(item => (
                        <div className="flip-card">
                            {/* key={item.idEvento} */}
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <h6><b></b></h6>
                                    {/* {item.nome} */}
                                    <hr className="barra-evento"></hr>
                                    <Bola className="icone" />
                                </div>
                                <div className="flip-card-back">
                                    <div className="detalhe-evento">
                                        <h6></h6>
                                        <p>Data:  Hora: 00:00</p>
                                        <p>Local:</p>
                                        <p>
                                            Descrição: blá blá
                                    </p>
                                    </div>
                                    <button className="btn btn-default" classNameName="botao-evento">
                                        <Link ><b>Detalhes</b></Link>
                                        {/* to={`/eventoDetalhe/${evento.idEvento}`} */}
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

export default Eventos;
