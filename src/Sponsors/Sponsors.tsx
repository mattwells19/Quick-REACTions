import React from "react";
import { Typography, Card, Paper, makeStyles, withStyles, createStyles, Theme, Divider, Link } from "@material-ui/core";
import { Email } from "@material-ui/icons";
import support from "../Images/roboSuport.png";
import bannerImg from "../Images/banner.jpg";
import {DocumentTitle} from "../Main/DocumentTitle";
import "./Sponsors.scss";
import Walmart from "./Walmart";
import SolidWork from "./SolidWork";
import Advanced from "./Advanced";
import Ctc from "./CTC";
import JoinTeam from "./JoinTeam";


const SponsorCard = withStyles({
    root: {
         display: "flex",
         padding: "10px",
         minWidth: "250px",
         fontFamily: "Inconsolata",
         textAlign: "center",
         backgroundColor: "inherit",
         borderRadius: "1rem",
         margin: "auto",
         alignItems: "Center",
        },
})(Card);

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        //Format sponsorType card
        TYCard: {
            display: "flex",
            backgroundColor: "#212b31",
            gridArea: "TY",
            padding: "10px",
            margin: "auto",
        },
        sectionCard: {
            display: "flex",
            backgroundColor: "#212b31",
            gridArea: "tSection",
            padding: "10px",
            width: '100%',
            margin: "auto",
        },
        section2Card: {
            display: "flex",
            backgroundColor: "#212b31",
            gridArea: "tSection2",
            padding: "10px",
            width: '100%',
            margin: "auto",
        },
        section3Card: {
            display: "flex",
            backgroundColor: "#212b31",
            gridArea: "tSection3",
            padding: "10px",
            width: '100%',
            margin: "auto",
        },
        sideCard: {
                gridArea: "text",
                display: "flex",
                backgroundColor: "#B3A369",
                color: "#212b31",
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
            <img src={bannerImg} className="banner" alt="Banner"/>

            {/* Thank You Text */}
            <Paper className={classes.TYCard} elevation={24}>
            <Typography className="ty-text" variant="h4">
                - Thank You To Our Sponsors For Their Support! -
                </Typography>
            </Paper>

            {/* HandShake Image */}
            {/*"https://www.pngkey.com/detail/u2q8i1w7q8w7e6w7_04-apr-robotic-process-automation-robot-and-human/*/}
            <img src={support} className="handshakeImg" alt="HandShake"/>

            {/* Sponsors Section */}
            <Paper className={classes.sectionCard} elevation={24}>
            <div className="typeSection-Grid">
            {/* Gold Sponsors Description */}
            <Typography align="center" className="desc cGold" variant="h5" style={{marginLeft: 20, marginRight: 20}}>
                Gold Level:<br/>(More than $250)<br/>With the Gold Level Sponsorship, your company will recieve the benfits from the Green &amp; Silver Levels in addition to adding your logo onto our team's T-Shirts!
                </Typography>
            {/* Sponsors Cards */}   
            <SponsorCard style={{ gridArea: "gSpon1"}}>
                <Walmart classes={classes} />
            </SponsorCard>
            <SponsorCard style={{ gridArea: "gSpon2"}}>
                <SolidWork classes={classes} />
            </SponsorCard>
            <SponsorCard style={{ gridArea: "gSpon3"}}>
                <SolidWork classes={classes} />
            </SponsorCard>

            </div>
            </Paper>

            <Paper className={classes.section2Card} elevation={24}>
            <div className="typeSection-Grid">
            {/* Silver Sponsors Description */}
            <Typography align="center" className="desc cSilver" variant="h5" style={{marginLeft: 20, marginRight: 20}}>
            Silver Level:<br/>($100 - $250)<br/>
            <ul>
                <li>Logo and link to Website displayed on the CAR Website</li>
                <li>Logo on any of our Robots</li>
                <li>A shout out before any Robot Demonstrations</li>
            </ul>
                </Typography>
            {/* Sponsors Cards */}   
            <SponsorCard style={{ gridArea: "gSpon1"}}>
                <Ctc classes={classes} />
            </SponsorCard>
            <SponsorCard style={{ gridArea: "gSpon2"}}>
                <JoinTeam classes={classes} />
            </SponsorCard>
            </div>
            </Paper>

            <Paper className={classes.section3Card} elevation={24}>
            <div className="typeSection-Grid">
            {/* Green Sponsors Description */}
            <Typography align="center" className="desc cGreen" variant="h5" style={{marginLeft: 20, marginRight: 20}}>
                        Green Level:<br/>(Under $100)
                        <ul>
                            <li>Logo &amp; Link To Company Website Will Be Displayed On CAR Website</li>
                        </ul>
                </Typography>
            {/* Sponsors Cards */}   
            <SponsorCard style={{ gridArea: "gSpon1"}}>
                <Advanced classes={classes} />
            </SponsorCard>

            </div>
            </Paper>    
                
            <Paper className={classes.sideCard} elevation={24}>
                <Typography align="left" className="contactTxt" variant="h5">
                    Interested In Sponsoring?<br/>
                    <Link color="inherit" style={{ textDecoration: "none" }} href="mailto:car-robotics@uncc.edu"> 
                    Please Contact Sam Luu  {<Email className="icon" fontSize="large" />}<br/>
                    for questions.
                    </Link> 
                </Typography>
            </Paper>

        </div>
    );
}

export default Sponsors;