import React, {Component} from 'react';
import banner from '../../assets/bg-editarEvento.png';
import { api } from '../../services/api';
import './style.css';


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
            <img src={banner}/>
                <h2>Editar o Evento</h2>
                <div className="container">
                    <form>
                        <div className="form-group">
                            <label htmlFor="">Nome do evento</label>
                            <input type="text" className="form-control" placeholder="Inclua um nome curto e claro" />
                            <label htmlFor="">Localização</label>
                            <input type="text" className="form-control" placeholder="Inclua o endereço do evento" />
                            <label htmlFor="">Descrição</label>
                            <textarea type="text" className="form-control" placeholder="Inclua o endereço do evento" rows="3" />
                            <label>Categoria</label>
                            <select className="custom-select">
                                <option>Selecione uma categoria</option>
                            </select>
                            <label>Frequencia</label>
                            <select className="custom-select">
                                <option>Ocorre uma vez</option>
                            </select>
                        </div>

                    </form>
                </div>
            </>
        )
    }
}