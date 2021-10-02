import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import {
    Link
  } from "react-router-dom";

function Footer(){
  return(
    <footer style={{position: "absolute", left: 0, bottom: 0, height: "86.75px", width: "100%", marginTop:'-86.75px'}}>
        <Navbar className="navbar navbar-expand-lg navbar-dark bg-primary" expand="lg" style={{padding:"10px"}}>
            <Navbar.Toggle className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation"/>
            <Navbar.Collapse className="collapse navbar-collapse" id="basic-navbar-nav">
            <Nav className="navbar-nav me-auto">
                <Nav.Link className="nav-item"><Link to="/" className="nav-link active">Home</Link></Nav.Link>
                <Nav.Link className="nav-item"><Link to="/about" className="nav-link">About</Link></Nav.Link>
                <Nav.Link className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></Nav.Link>
                <Nav.Link role="button" className="nav-item" tabIndex="0" href="#top" ><a className="nav-link" href="#top" >Top</a></Nav.Link>
            </Nav>
            </Navbar.Collapse>
            <div style={{display:'inline-block'}}>
              <p>108-2940 Jutland Road</p>
              <p>Victoria, BC   &emsp;&emsp; V8T 5K6</p>
              <p className="text-center">&copy; Copyright 2021 - All Rights Reserved</p>
            </div>
        </Navbar>
    </footer>
  );
}
export default Footer;