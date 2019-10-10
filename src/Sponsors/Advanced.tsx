import React from "react";
import { Typography, Link } from "@material-ui/core";
import EasyToSeeTooltip from "../Main/EasyToSeeTooltip";
import "./Sponsors.scss";
import advLogo from "../Images/Adv.png";


export default function Interest(props: any) {
    const { classes } = props;
    return (
        <Typography>
            <EasyToSeeTooltip title="https://www.4pcb.com/">
            <Link style={{color: "#166837"}} href="https://www.4pcb.com/">
                <img src={advLogo} className="sponsorLogo borderColorGreen" alt="Advanced Circuits"/>
            </Link>
            </EasyToSeeTooltip>
        </Typography>
    );
}    