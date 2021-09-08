import React from 'react';
import AutoCarousel from './SlideShow';

function Home(){
    return(
        <div className="Home">
            <div className="jumbotron">
                <h1 className="display-4">Home</h1>
                <p className="lead">This is where our banner will go</p>
                <hr className="my-4" />
                <p>This is a seperate section</p>
                <p className="lead">
                    <a className="btn btn-primary btn-lg" href="#Home" role="button">This is a link</a>
                </p>
            </div>
            <AutoCarousel />
            
        </div>
        
    )
}

export default Home;