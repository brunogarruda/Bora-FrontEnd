import React,{Component} from 'react';
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
                    <div className="footer-item">
                        <div className="logo-rodape">
                            <p>BORA</p>
                        </div>
                        <p>Fale com a gente</p>
                        <div className="redes-sociais-icons">
                            <img  />
                            <img />
                            <img />
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}
export default Footer;