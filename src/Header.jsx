import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import {
    Link
  } from "react-router-dom";

import brandLogo from './Resources/Images/atmosphaire-logo.png';

function Header(){

    return(
      <header id="top">
      <Navbar className="navbar navbar-expand-lg navbar-dark bg-primary" expand="lg" style={{padding:"10px"}}>
          <Navbar.Brand className="navbar-brand"><Link to="/"><img src={brandLogo} alt="AtmosHaire.com" /></Link></Navbar.Brand>
          <Navbar.Toggle className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation"/>
          <Navbar.Collapse className="collapse navbar-collapse" id="basic-navbar-nav">
          <Nav className="navbar-nav me-auto">
              <Nav.Link className="nav-item"><Link to="/" className="nav-link">Home</Link></Nav.Link>
              <Nav.Link className="nav-item"><Link to="/about" className="nav-link">About</Link></Nav.Link>
              <NavDropdown title="More" id="basic-nav-dropdown" className="nav-item dropdown nav-link" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                  <NavDropdown.Item className="dropdown-item"><Link to="/services">Services</Link></NavDropdown.Item>
                  <NavDropdown.Item className="dropdown-item"><Link to="/team">Our Team</Link></NavDropdown.Item>
                  <NavDropdown.Item className="dropdown-item"><Link to="/gallery">Gallery</Link></NavDropdown.Item>
                  <NavDropdown.Divider className="dropdown-divider" />
                  <NavDropdown.Item className="dropdown-item"><Link to="/partners">Our Partners</Link></NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></Nav.Link>
          </Nav>
          </Navbar.Collapse>
          {/* <form className="d-flex">
                  <input className="form-control me-sm-2" type="text" placeholder="Search" />
                  <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
          </form> */}
      </Navbar>
    </header>
    )
}

export default Header;