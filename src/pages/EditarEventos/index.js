import React, { Component } from "react";
import banner from "../../assets/bg-editarEvento.png";
import { api } from "../../services/api";
import "./style.css";

export default class EditarEventos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            evento: [],
            endereco: [],
            categoria: [],
            nomeEvento: ""
        };
    }

    handleChange = (event) => {
        const state = Object.assign({}, this.state);
        let field = event.target.id;
        state[field] = event.target.value;
        console.log(state);
        this.setState(state);
      }

    componentDidMount() {
        const { id } = this.props.match.params;
        api.get('categoria').then(res => { this.setState({ categoria: res.data }) });
        api.get(`eventos/${id}`).then(res => {this.setState({evento: res.data,endereco: res.data.endereco})});
    }

    alterarEvento = () =>{

    }

    navigateBack = () =>{
        window.history.back()
      }



    render() {
        console.log(this.nomeEvento);
        return (
            <>
                <img src={banner} />
                <div className="container">
                    <h2 className="title-form"><b>Editar informações do evento</b></h2>
                    <form>
                        <div className="form-group">
                            <div className="groupinput">
                                <label className="labelForm" htmlFor="">Nome do evento</label>
                                <input className="inputForm" id="nomeEvento" type="text" className="form-control" onChange={this.handleChange} value={this.state.evento.nome} placeholder="Inclua um nome curto e claro" />
                            </div>
                            <div className="groupinput">
                                <label className="labelForm" htmlFor="">Descrição</label>
                                <textarea className="inputForm" type="text" className="form-control" value={this.state.evento.descricaoEvento} placeholder="Inclua o endereço do evento" rows="3" />
                            </div>
                            <div class="form-row">
                                <div className="form-group col-lg-10">
                                    <label className="labelForm" htmlFor="">Logradouro</label>
                                    <input className="inputForm" type="text" className="form-control" value={this.state.endereco.rua} placeholder="Inclua o endereço do evento" />
                                </div>
                                <div className="form-group col-lg-2">
                                    <label className="labelForm" htmlFor="">Numero</label>
                                    <input className="inputForm" type="text" className="form-control" value={this.state.endereco.numero} placeholder="Inclua o endereço do evento" />
                                </div>
                            </div>
                            <div class="form-row">
                                <div className="form-group col-lg-4">
                                    <label className="labelForm" htmlFor="">Bairro</label>
                                    <input className="inputForm" type="text" className="form-control" value={this.state.endereco.bairro} placeholder="Inclua o endereço do evento" />
                                </div>
                                <div className="form-group col-lg-4">
                                    <label className="labelForm" htmlFor="">Cidade</label>
                                    <input className="inputForm" type="text" className="form-control" value={this.state.endereco.cidade} placeholder="Inclua o endereço do evento" />
                                </div>
                                <div className="form-group col-lg-4">
                                    <label className="labelForm" htmlFor="">CEP</label>
                                    <input className="inputForm" type="text" className="form-control" value={this.state.endereco.cep} placeholder="Inclua o endereço do evento" />
                                </div>
                            </div>
                            <div className="groupinput">
                                <label className="labelForm">Categoria</label>
                                <select className="inputForm" className="custom-select">
                                    {this.state.categoria.map(item => (
                                        <option key={item.nomeCategoria}
                                        >{item.nomeCategoria}</option>

                                    ))};
                                </select>
                            </div>
                            <div className="groupinput">
                                <label className="labelForm">Frequencia</label>
                                <select className="inputForm" className="custom-select">
                                    <option>Ocorre uma vez</option>
                                </select>
                            </div>
                        </div>
                        <div className="groupinput groupinputButton">
                            <button className="botao-deixa-pra-la" type="button" onClick={this.navigateBack}>Não Vou</button>
                            <button className="botao-pronto">Pronto</button>
                        </div>

                    </form>
                </div>
            </>
        );
    }
}