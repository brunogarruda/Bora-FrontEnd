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
                    <p>teste</p>

                </footer>
            </div>
        );
    }
}
export default Footer;