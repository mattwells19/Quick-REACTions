import React from "react";
import clsx from "clsx";
import { Card, CardActionArea, CardMedia, CardContent, Typography, makeStyles, Theme, createStyles, Divider, Collapse, IconButton, CardActions } from "@material-ui/core";
import { ExpandMore, ExpandLess } from "@material-ui/icons";
import EasyToSeeTooltip from "../Main/EasyToSeeTooltip";

export enum Officer {
    President = "President",
    VicePresident = "Vice President",
    Outreach = "Outreach",
    Treasurer = "Treasurer",
    Interim = "Interim VP",
    Developer = "Developer"
}

interface OfficerCardProps {
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
        expand: {
            transform: 'rotate(0deg)',
            marginLeft: 'auto',
            transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest,
            }),
        },
        expandOpen: {
            transform: 'rotate(180deg)',
        },
    }),
);

export default function OfficerCard(props: OfficerCardProps) {

    const [expanded, setExpanded] = React.useState<boolean>(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const classes = useStyles();
    return (
        <EasyToSeeTooltip title={props.linkedIn}>
            <Card className={classes.officerCard}>
                <CardActionArea href={props.linkedIn} target="_blank">
                    <CardMedia
                        image={props.image}
                        className={classes.officerPicture}
                    />
                    <CardContent>
                        <Typography align="center" variant="h4">
                            {props.officer}
                        </Typography>
                        <Divider />
                        <Typography align="center" variant="h5">
                            {props.name}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMore />
                    </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <Typography variant="h4">
                        Hello
                    </Typography>
                </Collapse>
            </Card>
        </EasyToSeeTooltip>
    );
}