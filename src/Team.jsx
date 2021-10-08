import React from 'react';
import json from './Resources/JSON/TeamBios.json';
import {Row, Col} from 'react-bootstrap';
import banner from './Resources/Images/Salon/10.jpg';
import { Carousel } from 'react-responsive-carousel';


function CustomCarousel({portfolio}){
  return(
      <Carousel style={{height: '100%'}} showThumbs={false} showIndicators={false} >
        {
          portfolio.map((media) =>
            <div key={media.key} style={{marginLeft:"auto", marginRight:"auto"}}>
              <media.tag src={process.env.PUBLIC_URL+`/TeamPictures/${media.src}`} alt={media.alt} style={{width:"60%", size:'cover'}} controls/>
            </div>
        )}
      </Carousel>
  );
}

function Bio({data}){
  var leftRight = data.key % 2 ===0;
  var hasBio = data.bio !=="";
    return (
        <div className={data.name} style={{maxHeight:70+"rem"}}>
            <div className="card" style={{maxHeight:"100%"}}>
              <h3 className="card-header" style={{textAlign: leftRight ? 'left' : 'right'}}>{data.name}</h3>
              {leftRight ?
               (<Row style={{maxWidth:"100%", maxHeight:"65rem"}}>
                  <div style={{width: hasBio ? "35%" : "100%", maxHeight:"65rem"}}>
                    <CustomCarousel portfolio={data.media} />
                  </div>
                <div className="card-body" style={{width: hasBio ? "55%" : "0px", maxHeight:"65rem", textAlign:"left", fontSize: "2rem"}}>
                    <p className="card-text bio">{data.bio}</p>
                </div>
              </Row>) 
               :
                (<Row style={{maxWidth:"100%", maxHeight:"65rem"}}>
                  <div className="card-body" style={{width: hasBio ? "55%" : "0px", maxHeight:"65rem", textAlign:"left", fontSize: "1.8rem"}}>
                      <p className="card-text bio">{data.bio}</p>
                  </div>
                  <div style={{width: hasBio ? "40%" : "100%", maxHeight:"65rem"}}>
                    <CustomCarousel portfolio={data.media} />
                  </div>
                </Row>)}
                <Row style={{maxWidth:"100%", maxHeight:"100%", width:"60%", marginLeft: (leftRight ? "auto" :"3%"), marginRight: (leftRight ? "3%" :"auto")}}>
                    {data.contacts.map((contact) =>{
                      if(contact.src ===""){
                        return null;
                      }
                      return(<Col key={contact.key}><span className="badge rounded-pill bg-primary"><a href={contact.src} className="card-link" style={{color:"white"}}>{contact.name}</a></span></Col>)
                    })} 
                </Row>
            </div>
        </div>
    );
}

function Team(){
    return(
        <div className="Team">
            <div className="jumbotron" style={{height:"10%", backgroundImage:`url(${banner})`, backgroundPosition: "center", backgroundRepeat: "no-repeat",backgroundSize: "cover", minHeight:"7.5rem"}}>
                <h1 className="display-4" style={{fontSize: "3em", textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000", color:"white"}}>Our Team</h1>
            </div>
            {json.map((data)=>{
               return(<Bio key={data.key} data={data} />);
            })}
        </div>
    );
}
export default Team;