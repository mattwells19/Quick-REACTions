import React from "react";
import { Typography, Card, Paper, makeStyles, withStyles, createStyles, Theme, Link, Divider } from "@material-ui/core";
import support from "../Images/roboSuport.png";
import {DocumentTitle} from "../Main/DocumentTitle";
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
            gridArea: "type",
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


    DocumentTitle({title: "Sponsors"});

    return (
        //Create a div for page container
        <div className="grid-box">

            {/* Banner Image */}
            {/*"https://www.pngkey.com/detail/u2q8i1w7q8w7e6w7_04-apr-robotic-process-automation-robot-and-human/*/}
            <img src={support} className="support" alt="Support"/>

            <Typography className="ty-text" variant="h4">
                - Thank You to Our Sponsors for their Support! -
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
                <Typography align="left" className="more-text" variant="h5">
                    Interested In Sponsoring? Please contact Sam Luu (Car-robotics@uncc.edu) for questions.
                    Sponsorships are ranked as follows:
                </Typography>
            </Paper>

        
            <Paper className={classes.typeCard} elevation={24}>
                <Typography align="center" className="sponsor-type" variant="h6" style={{marginLeft: 20, marginRight: 20}}>
                        Green Level:<br/>(Under $100)<br/>With the Green<br/>Level Sponsorship,<br/>CAR will place<br/>your company's<br/>logo on the<br/>sponsors page<br/>of our website.
                        <Divider/>
                </Typography>
                <Typography align="center" className="sponsor-type 1" variant="h6" style={{marginLeft: 20, marginRight: 20}}>
                        Silver Level:<br/>($100 - $250)<br/>With the Silver<br/>Level Sponsorship,<br/>CAR will give your<br/>company the same<br/>benefits as the<br/>Green Level.<br/>In addition to the<br/>website, your logo<br/>will be added to<br/>our robot for<br/>everyone to see!
                </Typography>
                <Typography align="center" className="sponsor-type" variant="h6" style={{marginLeft: 20, marginRight: 20}}>        
                        Gold Level:<br/>(More than $250)<br/>With the Gold<br/>Level Sponsorship,<br/>your company will<br/>recieve the benfits<br/>from the Green &amp;<br/>Silver Levels in<br/>addition to adding<br/>your logo onto<br/>our team's T-Shirts!
                </Typography>
            </Paper>

        </div>
    );
}

export default Sponsors;