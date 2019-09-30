import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap';
import './footer.css'

class Footer extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    } 
    render(){
        return(
            <div>
                <footer>
                    <div className="footer-item borda-teste">
                        <div className="logo-rodape borda-teste">
                            <p>BORA</p>
                        </div>
                        <p>FALE COM A GENTE</p>
                        <div className="redes-sociais-icons borda-teste">
                            <img  />
                            <img />
                            <img />
                        </div>
                    </div>
                    <div className="footer-item borda-teste">
                        <div className="newsletter borda-teste">
                            <p className="borda-teste">Newsletter</p>
                            <p className="borda-teste">Assine nossa newsletter e fique sabendo dos rolês</p>
                            <input type="text" name="newsletter" value="" placeholder="Digite seu e-mail" />
                        </div>
                    </div>

                </footer>
            </div>
        );
    }
}
export default Footer;