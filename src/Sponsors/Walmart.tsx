import React from "react";
import { Typography, Link } from "@material-ui/core";
import EasyToSeeTooltip from "../Main/EasyToSeeTooltip";
import "./Sponsors.scss";
import walmartLogo from "../Images/walmart.png";


export default function Interest(props: any) {
    const { classes } = props;
    return (
        <Typography>
            <Link style={{color: "#166837"}} href="https://www.walmart.com/">
                <img src={walmartLogo} className="sponsorLogo borderColorGold" alt="Walmart"/>
            </Link>
        </Typography>
    );
}    