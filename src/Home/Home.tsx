import React from "react";
import {Paper, Typography} from "@material-ui/core";
import crown from "../Images/UNCCCrown.png";
import logo from "../Images/CARLogoPrimary.png";
import "./Home.scss";
import { withStyles } from "@material-ui/styles";

function Home() {
    return (
        <div>
            <img src={crown} className="backdrop" alt="Background Crown"/>
            <img src={logo} className="logo" alt="Logo"/>
            <Typography align="center" className="header" variant="h2">
                Charlotte Area Robotics
            </Typography>
        </div>
    );
}

export default Home;