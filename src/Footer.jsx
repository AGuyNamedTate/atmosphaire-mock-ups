import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import {
    Link
  } from "react-router-dom";

function Footer(){
  return(
    <footer style={{position: "absolute", left: 0, bottom: 0, height: "100px", width: "100%"}}>
        <Navbar className="navbar navbar-expand-lg navbar-dark bg-primary" expand="lg" style={{padding:"10px"}}>
            <Navbar.Toggle className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation"/>
            <Navbar.Collapse className="collapse navbar-collapse" id="basic-navbar-nav">
            <Nav className="navbar-nav me-auto">
                <Nav.Link className="nav-item"><Link to="/" className="nav-link active">Home</Link></Nav.Link>
                <Nav.Link className="nav-item"><Link to="/about" className="nav-link">About</Link></Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown" className="nav-item dropdown" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                    <NavDropdown.Item className="dropdown-item"><Link to="/services">Services</Link></NavDropdown.Item>
                    <NavDropdown.Item className="dropdown-item"><Link to="/team">Our Team</Link></NavDropdown.Item>
                    <NavDropdown.Item className="dropdown-item"><Link to="/gallery">Gallery</Link></NavDropdown.Item>
                    <NavDropdown.Divider className="dropdown-divider" />
                    <NavDropdown.Item className="dropdown-item"><Link to="/partners">Our Partners</Link></NavDropdown.Item>
                </NavDropdown>
                <Nav.Link className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    </footer>
  );
}
export default Footer;