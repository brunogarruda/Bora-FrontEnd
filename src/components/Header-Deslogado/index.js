import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./header.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Navbar>
          <Navbar.Brand>Bora</Navbar.Brand>
          <Nav>
            <Nav.Item>
              <Nav.Link>Login</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>Cadastre-se</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar>
      </>
    );
  }
}
export default Header;
