import React from "react";
import { Typography, Divider, Link } from "@material-ui/core";
import EasyToSeeTooltip from "../Main/EasyToSeeTooltip";
import "./Sponsors.scss";
import solidLogo from "../Images/solid.jpg";


export default function Interest(props: any) {
    const { classes } = props;
    return (
        <Typography>
            <Link style={{color: "#166837"}} href="https://www.solidworks.com/">
                <img src={solidLogo} className="sponsorLogo" alt="SolisWorks Software"/>
            </Link>
        </Typography>
    );
}    