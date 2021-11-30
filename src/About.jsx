import React from 'react';
import { Container, Row } from 'react-bootstrap';
import banner from './Resources/Images/Salon/2.jpg';
import Stack from 'react-bootstrap/Stack';

function About(){
    return (
        <Container fluid className="About" >
            <Container fluid className="jumbotron" style={{backgroundImage:`url(${banner})`, backgroundPosition: "center",backgroundRepeat: "no-repeat",backgroundSize: "cover", minHeight:"7.5rem"}}>
                <h1 className="display-4" style={{fontSize: "3em", textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000", color:"white"}}>About Us</h1>
                <hr className="my-4" />
            </Container>
            <Row style={{width: "100%", marginTop: "10px"}}>
              <Stack  style={{display:"flex", justifyContent: "center", alignItems: "center"}}>
                <Container fluid className="card border-primary mb-3 mx-5" style={{maxWidth: "50rem"}}>
                  <Container fluid className="card-body">
                    <h4 className="card-title">Who Are We?</h4>
                    <p className="card-text" style={{fontSize:"22px"}}>AtmospHAIRe is a fashion-forward salon — featuring a fabulous group of elite stylists who can satisfy every lock and strand of your hair-related desires. Whatever your age and gender, atmospHAIRe stylists will listen to you, offer cutting-edge advice when requested, and always pamper you with the best haircare products on the market. The floor-to-ceiling windows also create a unique atmosphere, allowing natural light to flood into this standout salon—which is conveniently located in the Selkirk Waterfront development.</p>
                  </Container>
                </Container>
                <Container fluid className="card border-primary mb-3 mx-5" style={{maxWidth: "50rem"}}>
                  <Container fluid className="card-body">
                    <h4 className="card-title">What Do We Offer?</h4>
                    <p className="card-text" style={{fontSize:"22px"}}>We offer new editions of a great selection of magazines for you to browse at your leisure—plus complimentary tea and coffee. Best-of-all is knowing how much our stylists care about the way you look and feel—and how driven they are to ensuring a Five-Star experience you’ll be sprinting from the salon to tell your friends about.
                  </p>
                  </Container>
                </Container>
              </Stack>
              </Row>   
              <h4>So treat yourself to a visit. It’ll be the start of a beautiful friendship. One your hair will forever thank you for.</h4>     
            </Container>
             
    );
}

export default About;