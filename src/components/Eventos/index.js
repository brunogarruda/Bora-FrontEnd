import React,{Component} from 'react';
import {Card,Button,Container, Row,Col, Jumbotron} from 'react-bootstrap';
import './styles.css'

class Eventos extends Component{

    constructor(props){
        super(props);
        this.state = {
            eventos: []
        }
    }    
    render(){
        return(
            <div>
                <Jumbotron>
                    <h2>Próximos rolês perto de você</h2>
                    <Container>
                        <Row>
                            <Col lg={3} md={4} xs={12}>
                            <Card>
                                <Card.Header>Chutebola<span id="horario">18:00</span></Card.Header>
                                <Card.Body><i>Teste</i></Card.Body>
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