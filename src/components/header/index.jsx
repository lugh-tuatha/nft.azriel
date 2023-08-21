import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import azriel from '../../assets/image/logo/azreil.png';

import * as Bs from "react-icons/bs";

import './header.css'

import { Link } from 'react-router-dom';

function Header(){

  return (
    <Navbar expand="lg" className='header'>
      <Container fluid className='header-item'>
        <Navbar.Brand><Link to="/"><img src={azriel} alt="" /></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='nav-icon'/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto header-links text-light">
            <Nav.Link><Link to="/">Dashboard</Link></Nav.Link>
            <Nav.Link><Link to="/marketplace">Marketplace</Link></Nav.Link>
            <Nav.Link><Link to="/FAQ's">FAQs</Link></Nav.Link>
            <Nav.Link><Link to="/gamezone">Gamezone</Link></Nav.Link>
          </Nav>

          <Nav className='header-links'>
            <Nav.Link href='https://github.com/lugh-tuatha/nft.azriel' target='_blank'><Bs.BsGithub size={32}/></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;