import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

function CustomCarousel({portfolio}){
  return(
      <Carousel style={{height: '100%'}} showThumbs={false}>
        {
          portfolio.map((media) =>
            <div key={media.key} style={{marginLeft:"auto", marginRight:"auto"}}>
              <media.tag src={process.env.PUBLIC_URL+`/TeamPictures/${media.src}`} alt={media.alt} style={{width:"100%", height:"100%"}} controls/>
              <p className="legend">{media.key}</p>
            </div>
        )}
      </Carousel>
  );
}

export default CustomCarousel;