import React from 'react';
import {Row, Col} from 'react-bootstrap';
import banner from "./Resources/Images/contactbanner.jpg";

function Contact(){
    return (
        <div className="Contact">
            <div className="jumbotron" style={{backgroundImage:`url(${banner})`, backgroundPosition: "center",backgroundRepeat: "no-repeat",backgroundSize: "cover"}}>
                <h1 className="display-4">Contact</h1>
                <p className="lead">This is where our banner will go</p>
                <hr className="my-4" />
                <p>This is a seperate section</p>
                <p className="lead">
                    <a className="btn btn-primary btn-lg" href="#Contact" role="button">This is a link</a>
                </p>
            </div>
            <div>
              <Row style={{maxWidth:"100%"}}>
              <Col>
                <Row>
                <h3>Booking</h3>
                </Row>
                <Row>
                  <p>Our studio is dedicated to your needs.
                          To book an appointment with one our stylists,
                    please refer to the table below</p>
                  </Row>
                  <Row>
                      <Col><strong>Stylist</strong></Col>
                      <Col><strong>Booking</strong></Col>
                  </Row>
                  <Row>
                      <Col>Lisa Cantwell</Col>
                      <Col>250-381-HAIR (4247)</Col>
                  </Row>
                  <Row>
                      <Col>Ryanne</Col>
                      <Col>250-381-HAIR (4247)</Col>
                  </Row>
                  <Row>
                      <Col>Dee Sanguyo</Col>
                      <Col><a href="https://Demanded.ca">Demanded.ca</a></Col>
                  </Row>
                  <Row>
                      <Col>Maurice St. Rose</Col>
                      <Col><a href="https://mocutz.com/">mocutz.com</a></Col>
                  </Row>
                  <Row>
                      <Col>Jed Dulin</Col>
                      <Col><a href="https://vagaro.com/dyepretty">vagaro.com</a></Col>
                  </Row>
                  <Row>
                      <Col xs={6}>Jennifer</Col>
                      <Col>
                      <Row>
                          <Col xs={6}>250-516-4479</Col>
                          <Col xs={6}><a href="https://www.instagram.com/jennifernicolehairartistry/">@jennifernicolehairartistry</a></Col>
                      </Row>
                      </Col>
                  </Row>
                  <Row>
                      <Col>Brae Carnes</Col>
                      <Col>
                      <Row>
                          <Col>250-888-2053</Col>
                          <Col><a href="https://www.instagram.com/BraeCarnes/">@BraeCarnes</a></Col>
                      </Row>
                      </Col>
                  </Row>
                  <Row>
                      <Col>Sophie Baines</Col>
                      <Col>
                          <Row>
                              <Col><a href="mailto:soph.hairartist@gmail.com">Email</a></Col>
                              <Col><a href="https://instagram.com/sophisticated.hair.artist">@sophisticated.hair.artist</a></Col>
                          </Row>
                      </Col>
                  </Row>
              </Col>
            <Col>
                <Row>
                  <h3>Visit Us</h3>
                </Row>
                <Row>
                        <h4>Hours of Operation</h4>
                        <Row>
                            <Col>Sunday</Col>
                            <Col><strong>12-8</strong></Col>
                        </Row>
                        <Row>
                            <Col>Monday</Col>
                            <Col><strong>10-8</strong></Col>
                        </Row>
                        <Row>
                            <Col>Tuesday</Col>
                            <Col><strong>9-8</strong></Col>
                        </Row>
                        <Row>
                            <Col>Wednesday</Col>
                            <Col><strong>9-8</strong></Col>
                        </Row>
                        <Row>
                            <Col>Thursday</Col>
                            <Col><strong>9-8</strong></Col>
                        </Row>
                        <Row>
                            <Col>Friday</Col>
                            <Col><strong>9-8</strong></Col>
                        </Row>
                        <Row>
                            <Col>Saturday</Col>
                            <Col><strong>9-8</strong></Col>
                        </Row>
                    <Row>
                        <h4>Street Address</h4>
                        <p>108-2940 Jutland Road<br />
                        Victoria, BC<br />
                        V8T 5K6</p>
                    </Row>
                </Row>
                <Row>
                  <p style={{textAlign :"left"}} >
                      Selkirk Waterfront is located along the Gorge Waterway at the end of Jutland Road—just minutes from downtown Victoria. Selkirk is easily accessible by car, bike, foot, kayak, harbour ferry or bus. There are also two Robbins Parking lots located within a minute’s walk of the salon. And 1 or 2-hour street parking is available (please refer to official signage for designated areas).
                  </p>
                </Row>
                </Col>
                </Row>
            </div>
        </div>
    );
}

export default Contact;