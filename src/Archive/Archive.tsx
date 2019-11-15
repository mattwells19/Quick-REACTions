import React, { Component } from "react";
import './Archive.scss';
import Iframe from 'react-iframe';
import AdvancedGridList from './ImageGrid';


class Archive extends Component {
    render() {
        return (
            <div className="archivePageContent">
                <div id="msgs">
                <h1 id="archiveWelcome"> Welcome to The Archive</h1>
                    <h3 id="welcomeMsg">Check out our video compilation and photo gallery of previous competitions and club activities</h3>      
                <div id="video">
                    { <Iframe 
                        url="https://www.youtube.com/embed/QIC3dg53WWg"
                        width="950px"
                        height="550px"
                        id="CAR_CompilationVid"
                        className="archiveVideos"
                        
                        allowFullScreen
                    />    
                    }   
                </div>
                    <h3 id ="checkoutMore">Watch more videos on our <a href="https://www.youtube.com/results?search_query=Charlotte+Area+Robotics+" target="_blank">YouTube </a>channel</h3>
                </div> 
                <div id="photoSection">
                <h3 id="photoGal"> - Photo Gallery - </h3>
              
                    <AdvancedGridList/>   
                </div>
            </div>

        );
    }
}

export default Archive;