import React,{Component} from 'react';
import {Card,Button,Container, Row,Col, Jumbotron} from 'react-bootstrap';
import futebol from '../Futebol.png';
import Style from './index.css'

class Eventos extends Component{

    constructor(props){
        super(props);
        this.state = {
        
        }
        //this.apareceBodyCard = this.apareceBodyCard.bind(this);
    }    

    render(){
        return(
            <div>
                <Jumbotron>
                    <h1 className={Style.titulo}>Próximos rolês perto de você</h1>
                    <Container>
                        <Row>
                            <Col lg={3} md={4} xs={12}>
                            <Card className={Style.card} bg="primary">
                                <Card.Header><h5>Chutebola 18:00</h5></Card.Header>
                                <Card.Img src={futebol}></Card.Img>
                                
                                <Card.Footer><Button bg="secondary"></Button></Card.Footer>
                            </Card>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
            </div>
        );
    }
}

export default Eventos;