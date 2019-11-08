import React from "react";
import { Typography, Card, Paper, makeStyles, withStyles, createStyles, Theme, Divider, Grid } from "@material-ui/core";
import { useCurrentWidth } from "react-socks";
import {DocumentTitle} from "../Main/DocumentTitle";
import logo from "../Images/CARLogoPrimary.png";
import "./Home.scss";
import Social from "./Social";
import Interest from "./Interest";
import PayPal from "./PayPal";

const SideCard = withStyles({
    root: {
        display: "inline-flex",
        padding: "10px",
        fontFamily: "Inconsolata",
        backgroundColor: "#B3A369",
        color: "#212b31",
        margin: "auto",
        textAlign: "center",
        borderRadius: "1rem",
        maxWidth: "20rem",
    },
})(Card);

const CardDivider = withStyles({
    root: {
        margin: "1rem",
    },
})(Divider);

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        missionCard: {
            maxWidth: "50rem",
            display: "flex",
            backgroundColor: "#212b31",
            gridArea: "text",
            padding: "10px",
            margin: "auto",
            verticalAlign: "middle",
        },
        divider: {
            margin: "2rem",
        },
    }),
);

function Home() {
    const width = useCurrentWidth();
    const classes = useStyles();
    const max_width = width > 1000 ? "15rem" : "";
    const card_margin = width > 1000 ? "" : "10px";

    DocumentTitle({title: "Home"});

    return (
        <>
            <div className="electrical">
                <img src={logo} className="logo" alt="Logo" />
            </div>
            <div className="mechanical">
                <Paper className={classes.missionCard} elevation={24} style={{marginLeft: card_margin, marginRight: card_margin}}>
                    <Typography align="center" className="more-text" variant="h3">
                        Our mission is to educate and to learn about all aspects of mobile robotics.
                        From the novice to the experienced, we welcome all students who are excited
                        to learn more about the field of robotics and apply the concepts they learn
                        in the classroom to real world applications.
                    </Typography>
                </Paper>
            </div>
            <div className="computer">
                <Grid container justify="space-evenly" alignItems="center" style={{height: "100%"}}>
                    <Grid item>
                        <SideCard>
                            <Social CardDivider={CardDivider}/>
                        </SideCard>
                    </Grid>
                    <Grid item>
                        <SideCard>
                            <Interest CardDivider={CardDivider}/>
                        </SideCard>
                    </Grid>
                    <Grid item>
                        <SideCard>   
                            <PayPal CardDivider={CardDivider}/>
                        </SideCard>
                    </Grid>
                </Grid>
            </div>
        </>
    );
}

export default Home;