import React from "react";
import { Typography, Tooltip, Divider, IconButton } from "@material-ui/core";
import { Instagram, Facebook } from "@material-ui/icons";

export default function Social(props: any) {
    const { classes } = props;
    return (
        <Typography variant="h4">
            Follow us on social media!
            <Divider className={classes.divider} />
            <Tooltip title="https://www.instagram.com/car_robotics/">
                <IconButton href="https://www.instagram.com/car_robotics/">
                    <Instagram fontSize="large" color="action" />
                </IconButton>
            </Tooltip>
            <Tooltip title="https://www.facebook.com/CharlotteAreaRobotics/">
                <IconButton href="https://www.facebook.com/CharlotteAreaRobotics/">
                    <Facebook fontSize="large" color="action" />
                </IconButton>
            </Tooltip>
        </Typography>
    );
}