import React from "react";
import { Typography, Link } from "@material-ui/core";
import EasyToSeeTooltip from "../Main/EasyToSeeTooltip";
import "./Sponsors.scss";
import ctcLogo from "../Images/child.png";


export default function Interest(props: any) {
    const { classes } = props;
    return (
        <Typography>
            <EasyToSeeTooltip title="https://www.ctcharlotte.org/Online/default.asp">
            <Link style={{color: "#166837"}} href="https://www.ctcharlotte.org/Online/default.asp">
                <img src={ctcLogo} className="sponsorLogo" alt="Advanced Circuits"/>
            </Link>
            </EasyToSeeTooltip>
        </Typography>
    );
}    