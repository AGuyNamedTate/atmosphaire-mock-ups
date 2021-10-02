import React from 'react';
import banner from './Resources/Images/servicesbanner.jpg';
import services from './Resources/JSON/Services.json';

function Services(){
    return(
        <div className="Services">
           <div className="jumbotron" style={{backgroundImage:`url(${banner})`, backgroundPosition: "center",backgroundRepeat: "no-repeat",backgroundSize: "cover"}}>
                <h1 className="display-4" >Services</h1>
                <hr className="my-4" />
            </div>
            <div className="container">
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
            </div>
        </div>

    );
}

export default Services;