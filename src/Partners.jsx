import React from 'react';
import banner from './Resources/Images/servicesbanner.jpg'
import partners from './Resources/JSON/Partners.json'

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => images[item.replace('./', '')] = r(item));
  return images;
}

const images = importAll(require.context('./Resources/Images/Logos', false, /\.(png|jpe?g|svg)$/));

function Partners(){
  return(
  <div>
     <div className="jumbotron" style={{backgroundImage:`url(${banner})`, backgroundPosition: "center",backgroundRepeat: "no-repeat",backgroundSize: "cover"}}>
        <h1 className="display-4">Partners</h1>
        <hr className="my-4" />
      </div>
      <div>
        {
          partners.map((partner, index) => {
            
            return (
              <div className="card mb-3" style={{display:"inline-block", maxWidth:"50rem", minHeight:"30rem", maxHeight:"40rem"}}>
                <h3 className="card-header">{partner.name}</h3>
                <img src={images[partner.src].default} className="d-block user-select-none" alt={partner.name} style={{maxWidth:"30rem"}} />
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