import React from "react";
import { Typography } from "@material-ui/core";
import Robot from "../Images/Robot2.jpg";

export default function DesignBuildCompete() {
    return(
        <>
            <Typography variant="h4" style={{margin: "auto"}}>
                And design, build, and test a robot to compete...
            </Typography>
            <img style={{margin: "auto"}} width="503px" height="503px" src={Robot} alt="Robot"/>
        </>
    );
}