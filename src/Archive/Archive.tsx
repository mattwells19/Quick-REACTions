import React, { Component } from "react";
import './Archive.scss';
import Iframe from 'react-iframe';
import AdvancedGridList from './ImageGrid';

class Archive extends Component {

    
    render() {
        return (
            <div className="testing">
                <h2 id="archiveWelcome"> Welcome to The Archive</h2>
                    <h3>Check out pictures and videos from previous competitions and club activities</h3>
                    {/* <img src={GroupPic} alt="GroupPicGoesHere"/> */}
                    { <Iframe 
                        url="https://www.youtube.com/embed/uVpk5vx2Kag"
                        width="450px"
                        height="450px"
                        id="vid1"
                        className="archiveVideos"
                        position="relative"
                        allowFullScreen
                    />    
                    }   
                    <AdvancedGridList/>   
                    <h3>Check out more videos on our <a href="https://www.youtube.com/results?search_query=Charlotte+Area+Robotics+" target="_blank">YouTube channel</a></h3>    
            </div>
            
            
        );
    }
}

export default Archive;