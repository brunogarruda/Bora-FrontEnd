import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';


class Cadastro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usuario: '',
            senha: ''            
        }
    }

    render() {
        return (
            <>
                <Modal show={this.props.MostarCadastro}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            <label for="usuario"> Apelido ou Email
                            <input type="text" placeholder="Digite seu Apelido ou Email" 
                                value={this.state.usuario} onChange={ (e) => this.setState({usuario: e.target.value})}/>
                            </label>
                            <label for="usuario"> Senha>
                            <input type="password" placeholder="Digite sua senha" 
                                    value={this.state.usuario} onChange={(e) => this.setState({senha: e.target.value})}/>
                            </label>
                        </form>
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

export default Cadastro;