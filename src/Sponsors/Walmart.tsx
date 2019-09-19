import React from "react";
import { Typography, Divider, Link } from "@material-ui/core";
import EasyToSeeTooltip from "../Main/EasyToSeeTooltip";
import "./Sponsors.scss";
import walmartLogo from "../Images/walmart.png";


export default function Interest(props: any) {
    const { classes } = props;
    return (
        <Typography variant="h4">
            <img src={walmartLogo} className="sponsorLogo" alt="Walmart"/>
                <Divider className={classes.divider} />
                <Link style={{color: "#166837"}} href="https://www.walmart.com/">
                    Walmart
                </Link>
        </Typography>
    );
}    