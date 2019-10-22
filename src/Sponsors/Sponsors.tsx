import React from "react";
import { Typography, Card, Paper, makeStyles, withStyles, createStyles, Theme, Divider, Link } from "@material-ui/core";
import { Email } from "@material-ui/icons";
import support from "../Images/roboSuport.png";
import bannerImg from "../Images/bannerCHA.jpg";
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
            display: "initial",
            backgroundColor: "#212b31",
            gridArea: "TY",
            textAlign: "center",
            padding: "10px",
            margin: "auto",
            width: "75rem",
        },
        sectionCard: {
            display: "flex",
            color: "#212b31",
            backgroundColor: "#B3A369",
            boxShadow: "inset 0px 0px 50px 30px",
            opacity: .97,
            gridArea: "tSection",
            padding: "10px",
            width: '85rem',
            height: '23rem',
            margin: "auto",
        },
        section2Card: {
            display: "flex",
            color: "#212b31",
            backgroundColor: "#A9A9A9",
            boxShadow: "inset 0px 0px 50px 30px",
            opacity: .96,
            gridArea: "tSection2",
            padding: "10px",
            width: '85rem',
            height: '23rem',
            margin: "auto",
        },
        section3Card: {
            display: "flex",
            color: "#212b31",
            backgroundColor: "#2d855f",
            boxShadow: "inset 0px 0px 50px 30px",
            opacity: .95,
            gridArea: "tSection3",
            padding: "10px",
            width: '85rem',
            height: '23rem',
            margin: "auto",
        },
        leftSideCard: {
            gridArea: "leftSideTxt",
            display: "flex",
            color: "#212b31",
            backgroundColor: "#B3A369",
            boxShadow: "inset 0px 0px 23px 10px",
            padding: "10px",
            margin: "auto auto auto 10px",
            height: "10rem",
            width: "auto",
         },
        rightSideCard: {
            gridArea: "rightSideTxt",
            display: "flex",
            color: "#212b31",
            backgroundColor: "#B3A369",
            boxShadow: "inset 0px 0px 23px 10px",
            padding: "10px",
            margin: "auto 10px auto auto",
            height: "10rem",
            width: "auto",
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
            <Typography align="center" className="desc cBlack" style={{marginLeft: 20, marginRight: 20}}>
            <Typography component="p" className="secTitle" variant="h4">Gold Level:<br/>($250+)</Typography>
                <Typography component="p" variant="h5" className="leftAlign">Includes:</Typography>
                    <Typography component="ul">
                        <Typography component="li">Your Companys Logo On Clubs Shirts</Typography>
                        <Typography component="li">Logo On Club Merchendise</Typography>
                        <Typography component="li">Same Benefits As The Silver &amp; Green Level Sponsorship</Typography>
                    </Typography>
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
            <Typography align="center" className="desc cBlack" style={{marginLeft: 20, marginRight: 20}}>
            <Typography component="p" className="secTitle" variant="h4">Silver Level:<br/>($100+)</Typography>
                <Typography component="p" variant="h5" className="leftAlign">Includes:</Typography>
                    <Typography component="ul">
                        <Typography component="li">Logo On All Of Our Robots</Typography>
                        <Typography component="li">A Shout Out Before Any Robot Public Demonstrations</Typography>
                        <Typography component="li">Same Benefits As The Green Level Sponsorship</Typography>
                    </Typography>
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
            <Typography component="p" className="secTitle" variant="h4">Green Level:<br/>($-100)</Typography>
                <Typography component="p" variant="h5" className="leftAlign">Includes:</Typography>
                    <Typography component="ul">
                        <Typography component="li">Logo &amp; Link To Your Company's Website Will Be Displayed On CAR'S Sponsors Page</Typography>
                    </Typography>
            </Typography>
            {/* Sponsors Cards */}   
            <SponsorCard style={{ gridArea: "gSpon1"}}>
                <Advanced classes={classes} />
            </SponsorCard>
            <SponsorCard style={{ gridArea: "gSpon2"}}>
                <JoinTeam classes={classes} />
            </SponsorCard>
            </div>
            </Paper>    
                
            <Paper className={classes.leftSideCard} elevation={24}>
                <Typography align="left" className="contactTxt" variant="h5">
                    Interested In Sponsoring?<br/>
                    <Link color="inherit" style={{ textDecoration: "none" }} href="mailto:car-robotics@uncc.edu"> 
                    Please Contact<br/>Sam Luu  {<Email className="icon" fontSize="large" />}
                    </Link> 
                </Typography>
            </Paper>

            <Paper className={classes.rightSideCard} elevation={24}>
                <Typography align="left" className="otherTxt" variant="h5">
                    Placeholder for optional text to be displayed on the right side of the screen
                </Typography>
            </Paper>

        </div>
    );
}

export default Sponsors;