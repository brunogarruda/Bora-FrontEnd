import React, { Component } from "react";
import banner from "../../assets/bg-editarEvento.png";
import { api } from "../../services/api";
import "./style.css";

export default class EditarEventos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //evento
            nome: '',
            descricaoEvento: '',
            privado: '',
            senha: '',
            recorrencia: '',
            dataHoraFim: '',
            dataHoraInicio: '',
            //endereço
            bairro: '',
            cep: '',
            cidade: '',
            estado: '',
            numero: '',
            rua: '',
            categoria: [],
        };
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        api.get('categoria').then(res => { this.setState({ categoria: res.data }) });

        api.get(`eventos/${id}`).then(res => {
            console.log(res);
            this.setState({
                nome: res.data.nome,
                descricaoEvento: res.data.descricaoEvento,
                privado: res.data.privado,
                senha: res.data.senha,
                recorrencia: res.data.recorrencia,
                dataHoraFim: res.data.dataHoraFim,
                dataHoraInicio: res.data.dataHoraInicio,
                //endereço
                bairro: res.data.endereco.bairro,
                cep: res.data.endereco.cep,
                cidade: res.data.endereco.cidade,
                estado: res.data.endereco.estado,
                numero: res.data.endereco.numero,
                rua: res.data.endereco.rua
            })
            this.eventoPrivado();
        });
    }

    alterarEvento = () =>{
        const { id } = this.props.match.params;

        api.put(`eventos/${id}`)
    }

    eventoPrivado = () => {
        this.setState({
            privado: !this.state.privado
        });
        if (this.state.privado == false) {
            document.getElementById("div-senha").style.display = 'block';
        } else {
            document.getElementById("div-senha").style.display = 'none';
        }
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }
    navigateBack = () => {
        window.history.back()
    }

    render() {
        return (
            <>
                <img src={banner} />
                <div className="container">
                    <h2 className="title-form"><b>Editar informações do evento</b></h2>
                    <form>
                        <div className="form-group">
                            <div className="groupinput">
                                <label className="labelForm active" htmlFor="nomeEvento">Nome do evento</label>
                                <input className="inputForm" name="nome" type="text" className="form-control" onChange={this.handleInputChange} value={this.state.nome} placeholder="Inclua um nome curto e claro" />
                            </div>
                            <div className="groupinput">
                                <label className="labelForm" htmlFor="">Descrição</label>
                                <textarea className="inputForm" type="text" name="descricaoEvento" className="form-control" onChange={this.handleInputChange} value={this.state.descricaoEvento} placeholder="Inclua o endereço do evento" rows="3" />
                            </div>
                            <div className="form-row">
                                <div className="form-group col-lg-10">
                                    <label className="labelForm" htmlFor="">Logradouro</label>
                                    <input className="inputForm" name="rua" type="text" className="form-control" onChange={this.handleInputChange} value={this.state.rua} placeholder="Inclua o endereço do evento" />
                                </div>
                                <div className="form-group col-lg-2">
                                    <label className="labelForm" htmlFor="">Numero</label>
                                    <input className="inputForm" type="text" name="numero" className="form-control" onChange={this.handleInputChange} value={this.state.numero} placeholder="Inclua o endereço do evento" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-lg-4">
                                    <label className="labelForm" htmlFor="">Bairro</label>
                                    <input className="inputForm" type="text" name="bairro" className="form-control" onChange={this.handleInputChange} value={this.state.bairro} placeholder="Inclua o endereço do evento" />
                                </div>
                                <div className="form-group col-lg-4">
                                    <label className="labelForm" htmlFor="">Cidade</label>
                                    <input className="inputForm" type="text" className="form-control" name="cidade" onChange={this.handleInputChange} value={this.state.cidade} placeholder="Inclua o endereço do evento" />
                                </div>
                                <div className="form-group col-lg-4">
                                    <label className="labelForm" htmlFor="">CEP</label>
                                    <input className="inputForm" type="text" className="form-control" name="cep" onChange={this.handleInputChange} value={this.state.cep} placeholder="Inclua o endereço do evento" />
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
                            
                            <div className="form-row">
                                <div className="col-lg-4">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" checked={this.state.privado} onClick={this.eventoPrivado} id="privado" />
                                        <label className="form-check-label" for="privado">
                                            Evento Privado?
                                    </label>
                                    </div>
                                </div>
                                <div className="col-lg-4" id="div-senha">
                                    <label className="labelForm" htmlFor="senha">Senha</label>
                                    <input className="inputForm" type="text" className="form-control" name="senha" id="senha" onChange={this.handleInputChange} value={this.state.senha} placeholder="Insira a senha do seu evento privado" />
                                </div>
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