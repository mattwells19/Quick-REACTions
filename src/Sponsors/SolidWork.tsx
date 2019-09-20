import React from "react";
import { Typography, Divider, Link } from "@material-ui/core";
import EasyToSeeTooltip from "../Main/EasyToSeeTooltip";
import "./Sponsors.scss";
import solidLogo from "../Images/solid.jpg";


export default function Interest(props: any) {
    const { classes } = props;
    return (
        <Typography variant="h6">
            <img src={solidLogo} className="sponsorLogo" alt="SolisWorks Software"/>
                <Divider className={classes.divider} />
                <Link style={{color: "#166837"}} href="https://www.solidworks.com/">
                    SolidWorks® Software
                </Link>
        </Typography>
    );
}    