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
            color: "#212b31",
            backgroundColor: "#B3A369",
            boxShadow: "inset 0px 0px 50px 30px",
            gridArea: "tSection",
            padding: "10px",
            width: '100%',
            height: '26rem',
            margin: "auto",
        },
        section2Card: {
            display: "flex",
            color: "#212b31",
            backgroundColor: "#A9A9A9",
            boxShadow: "inset 0px 0px 50px 30px",
            gridArea: "tSection2",
            padding: "10px",
            width: '100%',
            height: '27rem',
            margin: "auto",
        },
        section3Card: {
            display: "flex",
            color: "#212b31",
            backgroundColor: "#2d855f",
            boxShadow: "inset 0px 0px 50px 30px",
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

            {/* GOLD Sponsors Section */}
            <Paper className={classes.sectionCard} elevation={24}>
            <div className="typeSection-Grid">
            {/* GOLD Sponsors Description */}
            <Typography align="center" className="desc cBlack" variant="h5" style={{marginLeft: 20, marginRight: 20}}>
                <p className="secTitle">Gold Level:<br/>($250+)</p><p className="leftAlign">Includes:</p>
                <ul>
                    <li>Your Companys Logo On Clubs Shirts</li>
                    <li>Logo On Club Merchendise</li>
                    <li>Same Benefits As The Silver &amp; Green level Sponsorship</li>
                </ul>
                </Typography>
            {/* GOLD Sponsors Cards */}   
            <SponsorCard style={{ gridArea: "gSpon1"}}>
                <Walmart classes={classes} />
            </SponsorCard>
            <SponsorCard style={{ gridArea: "gSpon2"}}>
                <SolidWork classes={classes} />
            </SponsorCard>
            <SponsorCard style={{ gridArea: "gSpon3"}}>
                <JoinTeam classes={classes} />
            </SponsorCard>
            </div>
            </Paper>


            <Paper className={classes.section2Card} elevation={24}>
            <div className="typeSection-Grid">
            {/* Silver Sponsors Description */}
            <Typography align="center" className="desc cBlack" variant="h5" style={{marginLeft: 20, marginRight: 20}}>
            <p className="secTitle">Silver Level:<br/>($100+)</p><p className="leftAlign">Includes:</p>
            <ul>
                <li>Logo On All Of Our Robots</li>
                <li>A shout out before any Robot Public Demonstrations</li>
                <li>Same Benefits as the Green level Sponsorship</li>
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
            <Typography align="center" className="desc cBlack" variant="h5" style={{marginLeft: 20, marginRight: 20}}>
                        <p className="secTitle">Green Level:<br/>(-$100)</p><p className="leftAlign">Includes:</p>
                        <ul>
                            <li>Logo &amp; Link To Your Company's Website Will Be Displayed On CAR'S Sponsors Page</li>
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
                    Please Contact Sam Luu  {<Email className="icon" fontSize="large" />}
                    </Link> 
                </Typography>
            </Paper>

        </div>
    );
}

export default Sponsors;