import React from 'react';
import json from './Resources/JSON/TeamBios.json';
import {Row, Col} from 'react-bootstrap';
import banner from './Resources/Images/teambanner.jpg';
import CustomCarousel from './Carousel';

function Bio({data}){
  var leftRight = data.key % 2 ===0;
  var hasBio = data.bio !=="";
    return (
        <div className={data.name} style={{maxHeight:70+"rem"}}>
            <div className="card" style={{maxHeight:"100%"}}>
              <h3 className="card-header" style={{textAlign: leftRight ? 'left' : 'right'}}>{data.name}</h3>
              {leftRight ?
               (<Row style={{maxWidth:"100%", maxHeight:"65rem"}}>
                  <div style={{width: hasBio ? "40%" : "100%", maxHeight:"65rem"}}>
                    <CustomCarousel portfolio={data.media} />
                  </div>
                <div className="card-body" style={{width: hasBio ? "55%" : "0px", maxHeight:"65rem", textAlign:"left", fontSize: "22px"}}>
                    <p className="card-text bio">{data.bio}</p>
                </div>
              </Row>) 
               :
                (<Row style={{maxWidth:"100%", maxHeight:"65rem"}}>
                  <div className="card-body" style={{width: hasBio ? "55%" : "0px", maxHeight:"65rem", textAlign:"left", fontSize: "22px"}}>
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
              {/* <div className="card-footer text-muted">
                  Footer Text
              </div> */}
            </div>
        </div>
    );
}

function Team(){
    return(
        <div className="Team">
            <div className="jumbotron" style={{height:"10%", backgroundImage:`url(${banner})`, backgroundPosition: "center", backgroundRepeat: "no-repeat",backgroundSize: "cover"}}>
                <h1 className="display-4" style={{margin:"auto"}}>Our Team</h1>
            </div>
            {json.map((data)=>{
               return(<Bio key={data.key} data={data} />);
            })}
        </div>
    );
}
export default Team;