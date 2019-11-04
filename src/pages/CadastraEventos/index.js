import React, { Component } from 'react';


export default class CadastraEventos extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <>
                <h2>Cadastrar um novo Evento</h2>
                <div class="container">
                    <form>
                        <div className="form-group">
                            <label htmlFor="">Nome do evento</label>
                            <input type="text" class="form-control" placeholder="Inclua um nome curto e claro" />
                            <label htmlFor="">Localização</label>
                            <input type="text" class="form-control" placeholder="Inclua o endereço do evento" />
                            <label htmlFor="">Descrição</label>
                            <textarea type="text" class="form-control" placeholder="Inclua o endereço do evento" rows="3" />
                            <label>Categoria</label>
                            <select className="custom-select">
                                <option>Selecione uma categoria</option>
                            </select>
                            <label>Frequencia</label>
                            <select className="custom-select">
                                <option>Ocorre uma vez</option>
                            </select>
                        </div>
                        <div className="">

                        </div>
                    </form>


                </div>
            </>
        )
    }

}