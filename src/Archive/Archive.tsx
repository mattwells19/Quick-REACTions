import React, { Component } from "react";
import './Archive.scss';
//import GroupPic from "./Resources/CAR_GroupPhoto.PNG";
import Iframe from 'react-iframe';


class Archive extends Component {

    
    render() {
        return (
            <div className="testing">
                <h2 id="archiveWelcome"> Welcome to The Archive</h2>
                    <h3>Check out pictures and videos from previous competitions and club activities</h3>
                    {/* <img src={GroupPic} alt="GroupPicGoesHere"/> */}
                    <Iframe 
                        url="https://www.youtube.com/embed/uVpk5vx2Kag"
                        width="450px"
                        height="450px"
                        id="vid1"
                        className="archiveVideos"
                        position="relative"
                        allowFullScreen
                    />
            </div>
        );
    }
}

export default Archive;