import React from 'react';

import {Image} from 'react-bootstrap';
import banner from './Resources/Images/Salon/4.jpg';
import partners from './Resources/JSON/Partners.json';

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => images[item.replace('./', '')] = r(item));
  return images;
}

const images = importAll(require.context('./Resources/Images/Logos', false, /\.(png|jpe?g|svg)$/));

function Partners(){
  return(
  <div>
     <div className="jumbotron" style={{backgroundImage:`url(${banner})`, backgroundPosition: "center",backgroundRepeat: "no-repeat",backgroundSize: "cover", minHeight:"7.5rem"}}>
        <h1 className="display-4" style={{fontSize: "3em", textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000", color:"white"}}>Partners</h1>
        <hr className="my-4" />
      </div>
      <div>
        {
          partners.map((partner, index) => {
            return (
              <div key={index} className="card mb-3" style={{display:"inline-block", maxWidth:"50%", justifyContent: "center", height:"550px", marginBottom:"0"}}>
                <h3 className="card-header">{partner.name}</h3>
                <Image src={images[partner.src].default} className="d-block user-select-none" alt={partner.name} fluid style={{marginLeft:"auto", height:"20rem", marginRight:"auto" }}/>
                <div className="card-body">
                  <p className="card-text">{partner.description}</p>
                </div>
                <div className="card-body">
                  <a href={partner.link} className="card-link" target="_blank" rel="noreferrer">{partner.name}'s website</a>
                </div>
              </div>
            )
          })
        }
      </div>
  </div>)
}

export default Partners;