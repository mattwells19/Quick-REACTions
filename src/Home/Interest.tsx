import React from "react";
import { Typography, Tooltip, Divider, Link } from "@material-ui/core";

export default function Interest(props: any) {
    const { classes } = props;
    return (
        <Typography variant="h4">
            Interested in joining CAR?
            <Divider className={classes.divider} />
            <Tooltip title="https://ninerengage.uncc.edu/organization/car-robotics">
                <Link href="https://ninerengage.uncc.edu/organization/car-robotics">
                    Visit our Niner Engage page!
                </Link>
            </Tooltip>
        </Typography>
    );
}