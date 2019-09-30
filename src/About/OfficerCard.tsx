import React from "react";
import { Card, CardActionArea, CardMedia, CardContent, Typography, makeStyles, Theme, createStyles, Divider } from "@material-ui/core";
import EasyToSeeTooltip from "../Main/EasyToSeeTooltip";

export enum Officer{
    President="President",
    VicePresident="Vice President",
    Outreach="Outreach",
    Treasurer="Treasurer",
    Interim="Interim VP",
    Developer="Developer"
}

interface OfficerCardProps{
    image: string;
    officer: Officer;
    linkedIn: string;
    name: string;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        officerCard: {
            height: "400px",
            width: "250px",
            margin: "20px",
            backgroundColor: "#B3A369",
        },
        officerPicture: {
            height: "300px",
            backgroundColor: "#424242",
        },
    }),
);

export default function OfficerCard(props: OfficerCardProps){
    const classes = useStyles();
    return(
        <EasyToSeeTooltip title={props.linkedIn}>
            <CardActionArea href={props.linkedIn} target="_blank">
                <Card className={classes.officerCard}>
                    <CardMedia
                        image={props.image}
                        className={classes.officerPicture}
                    />
                        <CardContent>
                            <Typography align="center" variant="h4">
                                {props.officer}
                            </Typography>
                            <Divider/>
                            <Typography align="center" variant="h5">
                                {props.name}
                            </Typography>
                        </CardContent>
                </Card>
            </CardActionArea>
        </EasyToSeeTooltip>
    );
}