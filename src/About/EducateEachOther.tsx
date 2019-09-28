import React from "react";
import { Typography } from "@material-ui/core";
import SprintReview23 from "../Images/SprintReviews/EndofSprint2-3.jpg";

export default function EducateEachOther() {
    return(
        <>
            <Typography variant="h4" style={{margin: "auto"}}>
                We educate each other...
            </Typography>
            <img style={{margin: "auto"}} width="672px" height="504px" src={SprintReview23} alt="SprintReview"/>
        </>
    );
}