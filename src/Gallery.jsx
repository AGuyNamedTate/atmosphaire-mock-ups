import React from 'react';
import banner from './Resources/Images/Salon/12.jpg';
import { Carousel } from 'react-responsive-carousel';

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => images[item.replace('./', '')] = r(item));
  return images;
}

const images = importAll(require.context('./Resources/Images/Gallery', false, /\.(png|jpe?g|svg)$/));


function Gallery(){
  return(
    <div>
      <div className="jumbotron" style={{backgroundImage:`url(${banner})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover", minHeight:"7.5rem"}}>
        <h1 className="display-4" style={{fontSize: "3em", textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000", color:"white"}}>Gallery</h1>

        <hr className="my-4" />
      </div>
      <div class="card border-light mb-3">
        <div class="card-body">
          <p class="card-text">Thanks for coming to take a look at some of the work out stylists have done. Click through the the gallery below to see pictures of what we can do for you.</p>
        </div>
      </div>
      <div className="container">
      <Carousel  style={{maxHeight:"70rem"}}>
        {
          Object.keys(images).map((key, index)=>{
            console.log(key);
            console.log(images[key]);
          
            return(<div key={index} style={{marginLeft:"auto", marginRight:"auto"}}>
               <img src={images[key].default} alt={key} style={{width:"100%", height:"auto", maxHeight:"68rem", maxWidth:"70rem"}} />
               <p className="legend">{index+1}</p>
            </div>)
          })
        }
      </Carousel>
      </div>

    </div>
  );
}
export default Gallery;