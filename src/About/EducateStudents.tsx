import React from "react";
import { Typography } from "@material-ui/core";
import ArduinoWksp from "../Images/Outreach/ArduinoWksp-2.jpg";

export default function EducateStudents() {
    return(
        <>
            <Typography variant="h4" style={{margin: "auto"}}>
                We educate other students...
            </Typography>
            <img style={{margin: "auto"}} width="672px" height="504px" src={ArduinoWksp} alt="Arduino"/>
        </>
    );
}