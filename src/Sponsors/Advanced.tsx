import React from "react";
import { Typography, Divider, Link } from "@material-ui/core";
import EasyToSeeTooltip from "../Main/EasyToSeeTooltip";
import "./Sponsors.scss";
import advLogo from "../Images/Adv.png";


export default function Interest(props: any) {
    const { classes } = props;
    return (
        <Typography variant="h5">
            <Link style={{color: "#166837"}} href="https://www.4pcb.com/">
                <img src={advLogo} className="sponsorLogo" alt="Advanced Circuits"/>
            </Link>
        </Typography>
    );
}    