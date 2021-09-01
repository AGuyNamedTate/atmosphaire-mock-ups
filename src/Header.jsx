import React from 'react';
import { Row, Col, Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
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

function Header(){


    return(
        <header >
            <Router>
                <Container>
                    <Row>
                        <Col xs={1}>
                            <Container>IMG</Container>    
                        </Col>
                        <Col>
                            <Navbar bg="light" expand="lg">
                                <Container>
                                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                    <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="me-auto">
                                        <Nav.Link><Link to="/">Home</Link></Nav.Link>
                                        <Nav.Link><Link to="/about">about</Link></Nav.Link>
                                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                        </NavDropdown>
                                    </Nav>
                                    </Navbar.Collapse>
                                </Container>
                            </Navbar>
                        </Col>
                    </Row>
                </Container>
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