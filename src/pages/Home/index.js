import React, { Component } from 'react';
import Eventos from '../../components/Eventos';
// import Pesquisa from '../../components/CampoPesquisa/';
import { Container, Image, Figure } from 'react-bootstrap';
import background from '../../assets/fundo.png';
import "./styles.css";

class Home extends Component {
    render() {
        return (
            <div>
                <header>
                    
                    <Image src={background} fluid />
                    <div className="barra-pesquisa">
                    </div>
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