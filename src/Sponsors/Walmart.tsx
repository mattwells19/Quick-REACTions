import React from "react";
import { Typography, Link } from "@material-ui/core";
import EasyToSeeTooltip from "../Main/EasyToSeeTooltip";
import "./Sponsors.scss";
import walmartLogo from "../Images/walmart.png";


export default function Interest(props: any) {
    const { classes } = props;
    return (
        <Typography variant="h6" gutterBottom>
                <Link style={{color: "#166837"}} href="https://www.walmart.com/">
                <img src={walmartLogo} className="sponsorLogo" alt="Walmart"/>
                <div className="middleWord">
                    <Typography className="middleText" variant="h5">Thank You</Typography>
                </div>
                
                </Link>
        </Typography>
    );
}    