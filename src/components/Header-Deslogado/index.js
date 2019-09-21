import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap';
import './header.css'

class Header extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    } 
    render(){
        return(
            <div>
                <Navbar>
                    <Navbar.Brand><Link className="logo" to='/'><b>Bora</b></Link></Navbar.Brand>
                    <Nav>
                        <Nav.Item>
                            <Link className="botaonav"><b>Login</b></Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link className="botaonav"><b>Cadastre-se</b></Link>
                        </Nav.Item>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}
export default Header;