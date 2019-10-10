import React from "react";
import { Typography, Link } from "@material-ui/core";
import EasyToSeeTooltip from "../Main/EasyToSeeTooltip";
import "./Sponsors.scss";
import solidLogo from "../Images/solid.jpg";


export default function Interest(props: any) {
    const { classes } = props;
    return (
        <Typography>
            <EasyToSeeTooltip title="https://www.solidworks.com/">
            <Link href="https://www.solidworks.com/">
                <img src={solidLogo} className="sponsorLogo borderColorGold" alt="SolisWorks Software"/>
            </Link>
            </EasyToSeeTooltip>
        </Typography>
    );
}    