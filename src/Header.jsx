import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import Home from './Home';
import About from './About';
import Contact from './Contact';
import Services from './Services';

import brandLogo from './Resources/Images/atmosphaire-logo.png';

function Header(){


    return(
        <header >
            <Router>
                <Navbar variant="dark" expand="lg">
                    <Navbar.Brand><Link to="/"><img src={brandLogo} /></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link><Link to="/">Home</Link></Nav.Link>
                        <Nav.Link><Link to="/about">about</Link></Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item><Link to="/services">Services</Link></NavDropdown.Item>
                        <NavDropdown.Item>Link 1</NavDropdown.Item>
                        <NavDropdown.Item>Link 2</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item>Separated link</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link><Link to="/contact">Contact</Link></Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Switch>
                    <Route path="/about">
                    <About />
                    </Route>
                    <Route path="/services">
                    <Services />
                    </Route>
                    <Route path="/contact">
                    <Contact />
                    </Route>
                    <Route path="/">
                    <Home />
                    </Route>
                </Switch>
            </Router>
        </header>
    )
}

export default Header;