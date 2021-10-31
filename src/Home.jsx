import React from 'react';
import {Carousel} from 'react-responsive-carousel';
import {Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => images[item.replace('./', '')] = r(item));
    return images;
}
  
const images = importAll(require.context('./Resources/Images/Promos', false, /\.(png|jpe?g|svg)$/));

function PromoPreview(){

    return(
        <div style={{maxHeight:"500px"}}>
            <Carousel autoplay={true} showThumbs={false} infiniteLoop={true} style={{maxHeight:"500px"}}>
                {
                Object.keys(images).map((key, index)=>{
            
                return(
                    <div key={index} style={{marginLeft:"auto", marginRight:"auto",maxHeight:"500px"}} >
                        <img src={images[key].default} alt={key} style={{width:"100%", height:"auto", maxHeight:"68rem", maxWidth:"70rem"}} />
                    </div>)})}
            </Carousel>
        </div>
    );
}

function Home(){
    return(
        <div className="Home">
            {/* <div className="jumbotron">
                <h1 className="display-4" style={{fontSize: "3em", textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000", color:"white"}}>Home</h1>
                <hr className="my-4" />
            </div> */}
            <PromoPreview />
            <div style={{marginTop:"1rem"}}>
                <Row style={{maxWidth:'100%'}}>
                    <div className="card border-primary mb-3" style={{minHeight:"12.9rem", maxWidth:"20rem", margin:"auto"}} >
                        <div className="card-body">
                            <h4 className="card-title">Our Team</h4>
                            <p className="card-text">Come learn more about our talented team of barbers & stylists</p>
                            <Link to="/team"><button type="button" className="btn btn-outline-primary">Team</button></Link>
                        </div>
                    </div>
                    <div className="card border-primary mb-3" style={{minHeight:"12.9rem", maxWidth:"20rem", margin:"auto"}} >
                        <div className="card-body">
                            <h4 className="card-title">About Us</h4>
                            <p className="card-text">Learn about AtmospHaire and our values</p>
                            <Link to="/about"><button type="button" className="btn btn-outline-primary">About</button></Link>
                        </div>
                    </div>
                    <div className="card border-primary mb-3" style={{minHeight:"12.9rem", maxWidth:"20rem", margin:"auto"}} >
                        <div className="card-body">
                            <h4 className="card-title">Our Work</h4>
                            <p className="card-text">Come see some of the work we've done and look at the services we offer</p>
                            <Link to="/gallery"><button type="button" className="btn btn-outline-primary">Gallery</button></Link>
                            <Link to="/services"><button type="button" className="btn btn-outline-primary">Services</button></Link>
                        </div>
                    </div>
                </Row>
            </div>
        </div>
        
    )
}

export default Home;