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
                            <hr></hr>
                            <Bola />
                            {/* <img src="img_avatar.png" alt="Avatar" style="width:300px;height:300px;" /> */}
                        </div>
                        <div class="flip-card-back">
                            <h2>Futebol  18:00</h2>
                            <p>Em qualquer lugar</p>
                            <p>Data: 20/09/2019</p>
                            <Button>
                                <Link>Clique aqui</Link>
                            </Button>
                        </div>
                    </div>
                </div>
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <Bola />
                            {/* <img src="img_avatar.png" alt="Avatar" style="width:300px;height:300px;" /> */}
                        </div>
                        <div class="flip-card-back">
                            <h2>Futebol  18:00</h2>
                            <p>Em qualquer lugar</p>
                            <p>Data: 20/09/2019</p>
                            <Button>
                                <Link>Clique aqui</Link>
                            </Button>
                        </div>
                    </div>
                </div>
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <Bola />
                            {/* <img src="img_avatar.png" alt="Avatar" style="width:300px;height:300px;" /> */}
                        </div>
                        <div class="flip-card-back">
                            <h2>Futebol  18:00</h2>
                            <p>Em qualquer lugar</p>
                            <p>Data: 20/09/2019</p>
                            <Button>
                                <Link>Clique aqui</Link>
                            </Button>
                        </div>
                    </div>
                </div>
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <Bola />
                            {/* <img src="img_avatar.png" alt="Avatar" style="width:300px;height:300px;" /> */}
                        </div>
                        <div class="flip-card-back">
                            <h2>Futebol  18:00</h2>
                            <p>Em qualquer lugar</p>
                            <p>Data: 20/09/2019</p>
                            <Button>
                                <Link>Clique aqui</Link>
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