import React from 'react';
import banner from './Resources/Images/servicesbanner.jpg';
function Services(){
    return(
        <div className="Services">
           <div className="jumbotron" style={{backgroundImage:`url(${banner})`, backgroundPosition: "center",backgroundRepeat: "no-repeat",backgroundSize: "cover"}}>
                <h1 className="display-4">Services</h1>
                <p className="lead">This is where our banner will go</p>
                <hr className="my-4" />
                <p>This is a seperate section</p>
                <p className="lead">
                    <a className="btn btn-primary btn-lg" href="#Services" role="button">This is a link</a>
                </p>
            </div>
        </div>

    );
}

export default Services;