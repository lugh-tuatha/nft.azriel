import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

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
              <Nav.Link href="#home">Dashboard</Nav.Link>
              <Nav.Link href="#link">Marketplace</Nav.Link>
              <NavDropdown title="Game Zone" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Wheel of fortune</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Black Jack
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Dice</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
    
    if (this.state.servePage == "dashboard"){
      content = (<p>Dashboard</p>);
    }else if (this.state.servePage == "gamezone"){
      content = (<p>Gamezone</p>);
    }else if (this.state.servePage == "marketplace"){
      content = (<p>Marketplace</p>);
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