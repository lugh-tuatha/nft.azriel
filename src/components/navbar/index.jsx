import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Marketplace from '../../pages/Marketplace';
import GameZone from '../../pages/GameZone';


class BasicExample extends Component{
  constructor(props){
    super(props);
    this.state = {
      servePage: "dashboard"
    }
  }
  render(){
    let content = "";
    let nav = (
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link onClick={() => this.setState({servePage: "dashboard"})}>Dashboard</Nav.Link>
              <Nav.Link onClick={() => this.setState({servePage: "marketplace"})}>Marketplace</Nav.Link>
              <Nav.Link onClick={() => this.setState({servePage: "gamezone"})}>Game zone</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
    
    if (this.state.servePage == "dashboard"){
      content = (<p>Dashboard</p>);
    }else if (this.state.servePage == "marketplace"){
      content = <Marketplace />;
    }else if (this.state.servePage == "gamezone"){
      content = <GameZone />;
    }
    return (
      <div>
      {nav}
      {content}
      </div>
    );
  }
  
}

export default BasicExample;