import React from "react";
import { Typography, Card, Paper, makeStyles, withStyles, createStyles, Theme, Link } from "@material-ui/core";
import support from "../Images/roboSuport.png";
import "./Sponsors.scss";
import Walmart from "./Walmart";
import SolidWork from "./SolidWork";
import Advanced from "./Advanced";
import Ctc from "./CTC";


const SponsorCard = withStyles({
    root: {
         display: "flex",
         padding: "10px",
         maxWidth: "15rem",
         fontFamily: "Inconsolata",
         backgroundColor: "#B3A369",
         color: "#212b31",
         margin: "auto",
         textAlign: "center",
         borderRadius: "1rem",
        },
})(Card);

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        //Format sponsorType card
        typeCard: {
            maxWidth: "50rem",
            display: "flex",
            backgroundColor: "#212b31",
            gridArea: "text",
            padding: "10px",
            margin: "auto",
        },
        sideCard: {
                maxWidth: "50rem",
                display: "flex",
                backgroundColor: "#212b31",
                gridArea: "text",
                padding: "10px",
                margin: "auto",
         },
        divider: {
            margin: "10px",
        },
    }),
);


function Sponsors() {
    //Call the useStyles format
    const classes = useStyles();
    return (
        //Create a div for page container
        <div className="grid-box">

            {/* Banner Image */}
            {/*"https://www.pngkey.com/detail/u2q8i1w7q8w7e6w7_04-apr-robotic-process-automation-robot-and-human/*/}
            <img src={support} className="support" alt="Support"/>

            <Typography className="ty-text" variant="h4">
                - Thank you to Our Sponsors for their Support! -
                </Typography>
                
            {/* Sponsors Cards */}   
            <SponsorCard style={{ gridArea: "walmart"}}>
                <Walmart classes={classes} />
            </SponsorCard>
            <SponsorCard style={{ gridArea: "solid"}}>
                <SolidWork classes={classes} />
            </SponsorCard>
            <SponsorCard style={{ gridArea: "adv"}}>
                <Advanced classes={classes} />
            </SponsorCard>
            <SponsorCard style={{ gridArea: "child"}}>
                <Ctc classes={classes} />
            </SponsorCard>
                
            <Paper className={classes.sideCard} elevation={24}>
                <Typography align="center" className="more-text" variant="h4">
                    Interested In Sponsoring? Please contact Sam Luu (Car-robotics@uncc.edu) for questions.
                    Sponsorships are ranked as follows:
                </Typography>
            </Paper>

        
            <Paper className={classes.typeCard} elevation={3}>
                <Typography align="left" className="sponsor-type" variant="h5">
                        <ol>
                            <li>Green Level: (Under $100) With the Green Level Sponsorship, CAR will Put your company's logo on the sponsors page of our website.</li>
                            <li>Silver Level: ($100 - $250) With the Silver Level Sponsorship, CAR will give your company the same benefits as the Green Level. In addition to the website, your logo will be added to our robot for everyone to see!</li>
                            <li>Gold Level: (More than $250) With the Gold Level Sponsorship, your company will recieve the benfits from the Green Silver Levels in addition to adding your logo onto our team's T-Shirts!</li>
                        </ol>
                </Typography>
            </Paper>

        </div>
    );
}

export default Sponsors;