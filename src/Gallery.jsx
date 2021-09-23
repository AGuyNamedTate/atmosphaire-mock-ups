import React from 'react';
import banner from './Resources/Images/servicesbanner.jpg';
import { Carousel } from 'react-responsive-carousel';

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => images[item.replace('./', '')] = r(item));
  return images;
}

const images = importAll(require.context('./Resources/Images/Gallery', false, /\.(png|jpe?g|svg)$/));


function Gallery(){
  console.log(images);
  return(
    <div>
      <div className="jumbotron" style={{backgroundImage:`url(${banner})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
        <h1 className="display-4">Gallery</h1>

        <hr className="my-4" />
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