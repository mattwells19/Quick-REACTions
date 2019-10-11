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
                <div className="container">
                    <img src={ctcLogo} className="sponsorLogo borderColorSilver" alt="Advanced Circuits"/>
                    <div className = "overlay backgroundSilver">
                            <div className = "middleText cBlack">Learn More</div>
                    </div>
                </div>
            </Link>
            </EasyToSeeTooltip>
        </Typography>
    );
}    