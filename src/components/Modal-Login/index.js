import React, { Component } from 'react';
import { Modal, Button, Form} from 'react-bootstrap';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <>
                <Modal size="lg" show={this.props.mostrar}>
                    <Modal.Header closeButton>
                        <Modal.Title>Bem Vindo</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Label for="usuario"> Apelido ou Email</Form.Label>
                            <Form.Control type="text" placeholder="Digite seu Apelido ou Email"
                                    value={this.state.usuario} onChange={(e) => this.setState({ usuario: e.target.value })} />
                            
                            <Form.Label for="usuario">Senha</Form.Label>
                            <Form.Control type="password" placeholder="Digite sua senha"
                                    value={this.state.usuario} onChange={(e) => this.setState({ senha: e.target.value })} />  
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary">
                            Close
                        </Button>
                        <Button variant="primary">
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>

        );
    }
}

export default Login;