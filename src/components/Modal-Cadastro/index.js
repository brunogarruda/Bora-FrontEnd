import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/FormControl';

class Cadastro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            apelido: '',
            celular: '',
            senha: '',
            email: ''
        }
    }

    onClose = (e) => {
        this.props.mostrar = false;
    }

    render() {
        return (
            <>
                <Modal size='lg' show={this.props.mostrar}>
                    {this.props.children}
                    <Modal.Header closeButton>
                        <Modal.Title>Crie sua Conta</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Label>Apelido</Form.Label>
                            <Form.Control type="text" placeholder="Digite seu nickname"
                                value={this.state.apelido} onChange={(e) => this.setState({ apelido: e.target.value })} />
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Digite seu email"
                                value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
                            <Form.Label>Celular</Form.Label>
                            <Form.Control type="email" placeholder="Digite seu telefone"
                                value={this.state.celular} onChange={(e) => this.setState({ celular: e.target.value })} />
                            <Form.Label>Senha</Form.Label>
                            <Form.Control type="password" placeholder="Digite seu telefone"
                                value={this.state.senha} onChange={(e) => this.setState({ celular: e.target.senha })} />
                            <Form.Label>Confirmar Senha</Form.Label>
                            <Form.Control />
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={(e) => { this.onClose(e) }}>
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

export default Cadastro;