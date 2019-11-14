import React, {Component} from "react";
import banner from "../../assets/bg-editarEvento.png";
import { api } from "../../services/api";
import "./style.css";

export default class EditarEventos extends Component{
    constructor(props){
        super(props);
        this.state = {
            evento: [],
            endereco: []
        };
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        try {
            api.get(`eventos/${id}`)
                .then(res => {
                    this.setState({
                        evento: res.data,
                        endereco: res.data.endereco
                    });
                    console.log(res);
                });
        } catch (e) {
            console.log(e);
        }
    }

    render(){
        return(
            <>
            <img src={banner} />
                
                <div className="container">
                <h2 className="title-form"><b>Editar informações do evento</b></h2>
                    <form>
                        <div className="form-group">
                            <div className="groupinput">
                                <label className="labelForm" htmlFor="">Nome do evento</label>
                                <input className="inputForm" type="text" className="form-control" placeholder="Inclua um nome curto e claro" />
                            </div>
                            <div className="groupinput">
                                <label className="labelForm" htmlFor="">Localização</label>
                                <input className="inputForm" type="text" className="form-control" placeholder="Inclua o endereço do evento" />
                            </div>
                            <div className="groupinput">
                                <label className="labelForm" htmlFor="">Descrição</label>
                                <textarea className="inputForm" type="text" className="form-control" placeholder="Inclua o endereço do evento" rows="3" />
                            </div>
                            <div className="groupinput">
                                <label className="labelForm">Categoria</label>
                                <select className="inputForm" className="custom-select">
                                    <option>Selecione uma categoria</option>
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
                            <button className="botao-deixa-pra-la">Não Vou</button>
                            <button className="botao-pronto">Pronto</button>
                        </div>
                       
                    </form>
                </div>
            </>
        );
    }
}