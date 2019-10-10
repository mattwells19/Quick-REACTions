import React from "react";
import { Typography } from "@material-ui/core";
import EasyToSeeTooltip from "../Main/EasyToSeeTooltip";
import "./Sponsors.scss";
import joinTeam from "../Images/joinTeam.png";


export default function Interest(props: any) {
    const { classes } = props;
    return (
        <Typography>
                <img src={joinTeam} className="sponsorLogo borderColorGold" alt="Join Team"/>
        </Typography>
    );
}