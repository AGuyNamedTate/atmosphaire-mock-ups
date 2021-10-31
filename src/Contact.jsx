import React from 'react';
import {Row, Col} from 'react-bootstrap';
import json from './Resources/JSON/TeamBios.json';
import banner from "./Resources/Images/Salon/8.jpg";

function StylistRow({data}){
  return (
    <Row>
      <Col xs={4} md={4}>
        {data.name}
      </Col>
      {data.contacts.map((contact)=>{
        if(contact.primary && contact.src !==""){
          return(
            <Col xs={4} md={4} key={contact.key}>
              <a href={contact.src}>{contact.name}</a>
            </Col>
          );
        }
        return null;
      })}
    </Row>

  );
}

function Contact(){
    return (
        <div className="Contact">
            <div className="jumbotron" style={{backgroundImage:`url(${banner})`, backgroundPosition: "center",backgroundRepeat: "no-repeat", backgroundSize: "cover", minHeight:"7.5rem"}}>
                <h1 className="display-4" style={{fontSize: "3em", textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000", color:"white"}}>Contact</h1>
                <hr className="my-4" />
            </div>
            
          
            <Row style={{maxWidth:"100%"}}>
              <Col style={{marginTop:"10px"}}>
                <div className="card border-primary mb-3" style={{height:"500px"}}>
                  <div className="card-body">
                    <Row>
                    <h4 className="card-title">Booking</h4>
                    </Row>
                    <Row>
                      <p className="card-text">Our studio is dedicated to your needs.
                              To book an appointment with one our stylists,
                        please refer to the table below</p>
                      </Row>
                      <Row>
                          <Col sm={4}><strong>Stylist</strong></Col>
                          <Col sm={8}><strong>Booking</strong></Col>
                      </Row>
                      {json.map((data)=>
                        <StylistRow key={data.key.toString()} data={data}/>
                      )}
                      <br/>
                      <p className="card-text">Check us out on <a href="https://www.facebook.com/atmospHAIRe">Facebook</a></p>
                  </div>
                </div>
              </Col>
            
              <Col style={{marginTop:"10px"}}>
                <div className="card border-primary mb-3" style={{height:"500px"}}>
                  <div className="card-body">
                    <Row>
                    <h4 className="card-title">Visit Us</h4>
                    </Row>
                    <Row>
                      <h5 className="card-subtitle">Hours of Operation</h5>
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
                    <h5 className="card-subtitle">Street Address</h5>
                      <p>108-2940 Jutland Road<br />
                      Victoria, BC<br />
                      V8T 5K6</p>
                    </Row>
                  </Row>
                  <Row>
                    <p className="card-text" style={{textAlign :"left"}} >
                        Selkirk Waterfront is located along the Gorge Waterway at the end of Jutland Road—just minutes from downtown Victoria. Selkirk is easily accessible by car, bike, foot, kayak, harbour ferry or bus. There are also two Robbins Parking lots located within a minute’s walk of the salon. And 1 or 2-hour street parking is available (please refer to official signage for designated areas).
                    </p>
                  </Row>
                </div>
              </div>
            </Col>
                </Row>
            </div>

    );
}

export default Contact;