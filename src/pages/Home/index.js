import React, { Component } from 'react';
import Eventos from '../../components/Eventos';
import Pesquisa from '../../components/CampoPesquisa/Pesquisa';
import { Container, Image } from 'react-bootstrap';
import background from '../../assets/fundo.png';
import "./styles.css";

class Home extends Component {
    render() {
        return (
            <div>
                <header>
                    <Pesquisa />
                    <Image src={background} fluid />
                    <input className="barra-pesquisa" />
                </header>
                <div className="faixa"></div>
                <Container>
                    <Eventos />
                </Container>
            </div>
        );
    }
}

export default Home;