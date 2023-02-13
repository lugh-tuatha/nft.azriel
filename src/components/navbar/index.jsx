import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample() {
  return (
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
  );
}

export default BasicExample;