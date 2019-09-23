import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import Bola from '@material-ui/icons/SportsSoccerSharp';

import './styles.css'

class Eventos extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //     }
    // }
    render() {
        return (
            <div class="div-eventos">
                <h2>Próximos rolês perto de você</h2>
                <Row>
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <h6><b>Nome do Evento 18:00</b></h6>
                            <hr className="barra-evento"></hr>
                            <Bola className="icone"/>
                        </div>
                        <div class="flip-card-back">
                            <div className="detalhe-evento">
                                <h6>Futebol</h6>
                                <p>Data: 20/09/2019  Hora: 00:00</p>
                                <p>Local: Em qualquer lugar</p>
                                <p>
                                    Descrição: blá blá 
                                </p>
                            </div>
                            <Button className="botao-evento">
                                    <Link><b>Detalhes</b></Link>
                            </Button>
                        </div>
                    </div>
                </div>
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <h6><b>Nome do Evento 18:00</b></h6>
                            <hr className="barra-evento"></hr>
                            <Bola className="icone"/>
                        </div>
                        <div class="flip-card-back">
                            <div className="detalhe-evento">
                                <h6>Futebol</h6>
                                <p>Data: 20/09/2019  Hora: 00:00</p>
                                <p>Local: Em qualquer lugar</p>
                                <p>
                                    Descrição: blá blá 
                                </p>
                            </div>
                            <Button className="botao-evento">
                                    <Link><b>Detalhes</b></Link>
                            </Button>
                        </div>
                    </div>
                </div>
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <h6><b>Nome do Evento 18:00</b></h6>
                            <hr className="barra-evento"></hr>
                            <Bola className="icone"/>
                        </div>
                        <div class="flip-card-back">
                            <div className="detalhe-evento">
                                <h6>Futebol</h6>
                                <p>Data: 20/09/2019  Hora: 00:00</p>
                                <p>Local: Em qualquer lugar</p>
                                <p>
                                    Descrição: blá blá 
                                </p>
                            </div>
                            <Button className="botao-evento">
                                    <Link><b>Detalhes</b></Link>
                            </Button>
                        </div>
                    </div>
                </div>
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <h6><b>Nome do Evento 18:00</b></h6>
                            <hr className="barra-evento"></hr>
                            <Bola className="icone"/>
                        </div>
                        <div class="flip-card-back">
                            <div className="detalhe-evento">
                                <h6>Futebol</h6>
                                <p>Data: 20/09/2019  Hora: 00:00</p>
                                <p>Local: Em qualquer lugar</p>
                                <p>
                                    Descrição: blá blá 
                                </p>
                            </div>
                            <Button className="botao-evento">
                                    <Link><b>Detalhes</b></Link>
                            </Button>
                        </div>
                    </div>
                </div>
                </Row>
                <Row>
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <h6><b>Nome do Evento 18:00</b></h6>
                            <hr className="barra-evento"></hr>
                            <Bola className="icone"/>
                        </div>
                        <div class="flip-card-back">
                            <div className="detalhe-evento">
                                <h6>Futebol</h6>
                                <p>Data: 20/09/2019  Hora: 00:00</p>
                                <p>Local: Em qualquer lugar</p>
                                <p>
                                    Descrição: blá blá 
                                </p>
                            </div>
                            <Button className="botao-evento">
                                    <Link><b>Detalhes</b></Link>
                            </Button>
                        </div>
                    </div>
                </div>
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <h6><b>Nome do Evento 18:00</b></h6>
                            <hr className="barra-evento"></hr>
                            <Bola className="icone"/>
                        </div>
                        <div class="flip-card-back">
                            <div className="detalhe-evento">
                                <h6>Futebol</h6>
                                <p>Data: 20/09/2019  Hora: 00:00</p>
                                <p>Local: Em qualquer lugar</p>
                                <p>
                                    Descrição: blá blá 
                                </p>
                            </div>
                            <Button className="botao-evento">
                                    <Link><b>Detalhes</b></Link>
                            </Button>
                        </div>
                    </div>
                </div>
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <h6><b>Nome do Evento 18:00</b></h6>
                            <hr className="barra-evento"></hr>
                            <Bola className="icone"/>
                        </div>
                        <div class="flip-card-back">
                            <div className="detalhe-evento">
                                <h6>Futebol</h6>
                                <p>Data: 20/09/2019  Hora: 00:00</p>
                                <p>Local: Em qualquer lugar</p>
                                <p>
                                    Descrição: blá blá 
                                </p>
                            </div>
                            <Button className="botao-evento">
                                    <Link><b>Detalhes</b></Link>
                            </Button>
                        </div>
                    </div>
                </div>
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <h6><b>Nome do Evento 18:00</b></h6>
                            <hr className="barra-evento"></hr>
                            <Bola className="icone"/>
                        </div>
                        <div class="flip-card-back">
                            <div className="detalhe-evento">
                                <h6>Futebol</h6>
                                <p>Data: 20/09/2019  Hora: 00:00</p>
                                <p>Local: Em qualquer lugar</p>
                                <p>
                                    Descrição: blá blá 
                                </p>
                            </div>
                            <Button className="botao-evento">
                                    <Link><b>Detalhes</b></Link>
                            </Button>
                        </div>
                    </div>
                </div>
                </Row>
            </div>
        );
    }
}

export default Eventos;