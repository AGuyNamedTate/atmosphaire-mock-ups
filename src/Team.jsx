import React from 'react';
import json from './Resources/JSON/TeamBios.json';
import  {Container, Row, Col} from 'react-bootstrap';
import Stack from 'react-bootstrap/Stack';
import banner from './Resources/Images/Salon/10.jpg';
import { Carousel } from 'react-responsive-carousel';


function CustomCarousel({portfolio}){
  return(
      <Carousel style={{height: '100%'}} showThumbs={false} showIndicators={false} >
        {
          portfolio.map((media) =>
            <Container fluid key={media.key} style={{marginLeft:"auto", marginRight:"auto"}}>
              <media.tag src={process.env.PUBLIC_URL+`/TeamPictures/${media.src}`} alt={media.alt} style={{width:media.tag ==='img' ? "100%" : "60%"}} controls={media.tag !=="img" ? true : false} playsInLine={media.tag !=="img" ? true : false} />
            </Container>
        )}
      </Carousel>
  );
}

function Bio({data}){
  var leftRight = data.key % 2 ===0;
  var hasBio = data.bio !=="";
  var stack = (window.innerWidth < 650 && data.media[0].tag === "img")
    return (
        <Container fluid className={data.name}>
            <Container fluid className="card" style={{maxHeight:"100%"}}>
              <h3 className="card-header" style={{textAlign: leftRight ? 'left' : 'right'}}>{data.name}</h3>
              {stack ?
               <Stack style={{maxWidth:"100%", }}>
                 {<Container fluid style={{width: hasBio ? "80%" : "100%" }}>
                    <CustomCarousel portfolio={data.media} />
                  </Container>}
                <Container fluid className="card-body" style={{width: hasBio ? "55%" : "0px", textAlign:"left", fontSize: "1.1em"}}>
                    <p className="card-text bio">{data.bio}</p>
                </Container>
              </Stack> : leftRight ?
               (<Row style={{maxWidth:"100%", }}>
                 {<Container fluid style={{width: hasBio ? "35%" : "100%" }}>
                    <CustomCarousel portfolio={data.media} />
                  </Container>}
                <Container fluid className="card-body" style={{width: hasBio ? "55%" : "0px", textAlign:"left", fontSize: "1.5em"}}>
                    <p className="card-text bio">{data.bio}</p>
                </Container>
              </Row>) 
               :
                (<Row style={{maxWidth:"100%",}}>
                  <Container fluid className="card-body" style={{width: hasBio ? "55%" : "0px", textAlign:"left", fontSize: "1.5em"}}>
                      <p className="card-text bio">{data.bio}</p>
                  </Container>
                  <Container fluid style={{width: hasBio ? "40%" : "100%"}}>
                    <CustomCarousel portfolio={data.media} />
                  </Container>
                </Row>)}
                <Row style={{maxWidth:"100%", maxHeight:"100%", width:"60%", marginLeft: (leftRight ? "auto" :"3%"), marginRight: (leftRight ? "3%" :"auto")}}>
                    {data.contacts.map((contact) =>{
                      if(contact.src ===""){
                        return null;
                      }
                      return(<Col key={contact.key}><span className="badge rounded-pill bg-primary"><a href={contact.src} className="card-link" style={{color:"white"}}>{contact.name}</a></span></Col>)
                    })} 
                </Row>
                <br/>
            </Container>
        </Container>
    );
}

function Team(){
    return(
        <Container fluid className="Team">
            <Container fluid className="jumbotron" style={{height:"10%", backgroundImage:`url(${banner})`, backgroundPosition: "center", backgroundRepeat: "no-repeat",backgroundSize: "cover", minHeight:"7.5rem"}}>
                <h1 className="display-4" style={{fontSize: "3em", textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000", color:"white"}}>Our Team</h1>
            </Container>
            <Stack gap={2}>
            {json.map((data)=>{
               return(<Bio key={data.key} data={data} />);
            })}
            </Stack>
        </Container>
    );
}
export default Team;