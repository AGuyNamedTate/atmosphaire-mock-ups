import React from 'react';
import banner from './Resources/Images/servicesbanner.jpg'

function Gallery(){
  return(
    <div>
      <div className="jumbotron" style={{backgroundImage:`url(${banner})`, backgroundPosition: "center",backgroundRepeat: "no-repeat",backgroundSize: "cover"}}>
        <h1 className="display-4">Gallery</h1>
        <p className="lead">This is where our banner will go</p>
        <hr className="my-4" />
      </div>
    </div>
  );
}
export default Gallery;