import React from 'react';
import AutoCarousel from './SlideShow';

function Home(){
    return(
        <div className="Home">
            <div className="jumbotron">
                <h1 className="display-4">Home</h1>
                <hr className="my-4" />
            </div>
            <AutoCarousel />
            
        </div>
        
    )
}

export default Home;