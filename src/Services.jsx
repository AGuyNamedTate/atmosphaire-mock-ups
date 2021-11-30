import React from 'react';
import banner from './Resources/Images/Salon/11.jpg';
import services from './Resources/JSON/Services.json';
import {Container} from 'react-bootstrap';

function Services(){
    return(
        <Container fluid className="Services">
           <Container fluid className="jumbotron" style={{backgroundImage:`url(${banner})`, backgroundPosition: "center",backgroundRepeat: "no-repeat",backgroundSize: "cover", minHeight:"7.5rem"}}>
                <h1 className="display-4" style={{fontSize: "3em", textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000", color:"white"}}>Services</h1>
                <hr className="my-4" />
            </Container>
            <Container fluid className="container">
            <Container fluid class="card border-light mb-3">
              <Container fluid class="card-body">
                <p class="card-text">Below is a list of services our stylists provide. Please inquire with individual stylists for estimates.</p>
              </Container>
            </Container>
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">Service</th>
                  </tr>
                </thead>
                <tbody>
                  {services.map((service)=>{
                      return(
                        <tr className={service.key % 2===0 ? "table-primary":"table-secondary"}>
                          <th scope="row">{service.name}</th>
                        </tr>
                      )
                  })}
                  </tbody>
              </table>
            </Container>
        </Container>

    );
}

export default Services;