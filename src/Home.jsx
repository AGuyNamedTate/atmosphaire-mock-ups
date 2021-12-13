import React from 'react';
import {Carousel} from 'react-responsive-carousel';
import { Container, Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => images[item.replace('./', '')] = r(item));
    return images;
}
  
const images = importAll(require.context('./Resources/Images/Home', false, /\.(png|jpe?g|svg)$/));

function PromoPreview(){

    return(
        <Container fluid style={{maxHeight:"500px"}}>
            <Carousel autoplay={true} showThumbs={false} infiniteLoop={true} style={{maxHeight:"500px"}} dynamicHeight={false}>
                {
                Object.keys(images).map((key, index)=>{
            
                return(
                    <Container fluid key={index} style={{marginLeft:"auto", marginRight:"auto", maxHeight:"500px"}} >
                        <img src={images[key].default} alt={key} style={{ maxWidth:"900px", objectFit: 'contain'}} />
                    </Container>)})}
            </Carousel>
        </Container>
    );
}

function Home(){
    return(
        <Container fluid className="Home">
            <PromoPreview />
            <Container fluid style={{marginTop:"1rem"}}>
                <Row style={{maxWidth:'100%'}}>
                    <Container fluid className="card border-primary mb-3" style={{minHeight:"12.9rem", maxWidth:"20rem", margin:"auto"}} >
                        <Container fluid className="card-body">
                            <h4 className="card-title">Our Team</h4>
                            <p className="card-text">We'd love to introduce you to our talented team of barbers & stylists</p>
                            <Link to="/team"><button type="button" className="btn btn-outline-primary">Team</button></Link>
                        </Container>
                    </Container>
                    <Container fluid className="card border-primary mb-3" style={{minHeight:"12.9rem", maxWidth:"20rem", margin:"auto"}} >
                        <Container fluid className="card-body">
                            <h4 className="card-title">About Us</h4>
                            <p className="card-text">Learn about AtmospHaire and our values</p>
                            <Link to="/about"><button type="button" className="btn btn-outline-primary">About</button></Link>
                        </Container>
                    </Container>
                    <Container fluid className="card border-primary mb-3" style={{minHeight:"12.9rem", maxWidth:"20rem", margin:"auto"}} >
                        <Container fluid className="card-body">
                            <h4 className="card-title">Our Work</h4>
                            <p className="card-text">Come see some of the work we've done and look at the services we offer</p>
                            <Link to="/gallery"><button type="button" className="btn btn-outline-primary">Gallery</button></Link>
                            <Link to="/services"><button type="button" className="btn btn-outline-primary">Services</button></Link>
                        </Container>
                    </Container>
                </Row>
            </Container>
        </Container>
        
    )
}

export default Home;