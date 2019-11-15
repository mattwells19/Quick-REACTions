import React from "react";
import { Typography, Card, Paper, makeStyles, withStyles, createStyles, Theme, Divider, Link } from "@material-ui/core";
import { Email } from "@material-ui/icons";
import { useCurrentWidth } from "react-socks";
import support from "../Images/roboSuport.png";
import bannerImg from "../Images/bannerCHA.jpg";
import {DocumentTitle} from "../Main/DocumentTitle";
import "./Sponsors.scss";
import Walmart from "./Walmart";

const SponsorCard = withStyles({
    root: {
        display: "flex",
        padding: "10px",
        fontFamily: "Inconsolata",
        backgroundColor: "inherit",
        minWidth: "250px",
        textAlign: "center",
        borderRadius: "1rem",
        alignItems: "Center",
    },
})(Card);

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        //Format sponsorType card
        tyCard: {
            width: "85%",
            height: "3rem",
            display: "initial",
            gridArea: "tyTxt",
            padding: "10px",
            margin: "auto",
            backgroundColor: "#212b31",
            color: "#B3A369",
        },
        sectionCard: {
            display: "flex",
            color: "#212b31",
            boxShadow: "inset 0px 0px 50px 30px",
            opacity: .97,
            padding: "10px",
            margin: "auto",
        },
        SideCard: {
            display: "flex",
            color: "#212b31",
            backgroundColor: "#B3A369",
            boxShadow: "inset 0px 0px 23px 10px",
            padding: "10px",
            height: "10rem",
            width: "auto",
         },
        divider: {
            margin: "10px",
        },
    }),
);


function Sponsors() {
    //Set the default sizing only used for (mobile version)
    const width = useCurrentWidth();
    const classes = useStyles();
    const max_width = width > 1000 ? "19rem" : "";
    const card_margin = width > 1000 ? "" : "10px";

    //Used to set website tab name
    DocumentTitle({title: "Sponsors"});

    return (
        //Create a div for page container
        <div className={width > 1000 ? "sponsors-container" : "sponsors-container-mobile"}>

            {/* Banner Image */}
            <img src={bannerImg} className="banner" alt="Banner"/>

            {/* Thank You Text */}
            <Paper className={classes.tyCard} elevation={24} style={{marginLeft: card_margin, marginRight: card_margin}}>
                <Typography align="center" className="ty-text" variant="h4">
                - Thank You To Our Sponsors For Their Support! -</Typography>
            </Paper>

            {/* HandShake Image */}
            {/*"https://www.pngkey.com/detail/u2q8i1w7q8w7e6w7_04-apr-robotic-process-automation-robot-and-human/*/}
            <img src={support} className="handshakeImg" alt="HandShake"/>

            {/* leftSide Card */}
            <SponsorCard className = "leftCard" style={{ gridArea: "leftCard", backgroundColor: "#B3A369", maxWidth: max_width, marginLeft: card_margin, marginRight: card_margin}}>
                <Typography align="left" variant="h5">
                    Interested In Sponsoring?<br/>
                    <Link color="inherit" style={{ textDecoration: "none" }} href="mailto:car-robotics@uncc.edu"> 
                    Please Contact<br/>Sam Luu  {<Email className="icon" fontSize="large" />}</Link> 
                </Typography>
            </SponsorCard>

            {/* rightSide Card */}
            <SponsorCard className = "rightCard" style={{ gridArea: "rightCard", backgroundColor: "#B3A369", maxWidth: max_width, marginLeft: card_margin, marginRight: card_margin}}>
                <Typography align="left" variant="h5">
                    Placeholder for optional text to be displayed on the right side of the screen
                </Typography>
            </SponsorCard>

            
            {/* GOLD Sponsors Section */}
            <Paper className={classes.sectionCard} style={{ gridArea: "sec1", backgroundColor: "#B3A369", maxWidth: max_width, marginLeft: card_margin, marginRight: card_margin}}>
                {/* GOLD Sponsors Description */}
                <Typography align="center" className="desc cBlack">
                    <Typography component="p" className="secTitle" variant="h4">Gold Level:<br/>($250+)</Typography>
                        <Typography component="p" variant="h5" className="leftAlign">Includes:</Typography>
                        <Typography component="ul">
                            <Typography component="li">Your Companys Logo On Clubs Shirts</Typography>
                            <Typography component="li">Logo On Club Merchendise</Typography>
                            <Typography component="li">Same Benefits As The Silver &amp; Green Level Sponsorship</Typography>
                        </Typography>
                </Typography>
            </Paper>
                {/* GOLD Sponsors*/}
                <SponsorCard className = "gSpon" style={{ gridArea: "gSpon1", maxWidth: max_width, marginLeft: card_margin, marginRight: card_margin}}>
                    <Walmart classes={classes} />
                </SponsorCard>
                <SponsorCard className = "gSpon" style={{ gridArea: "gSpon2", maxWidth: max_width, marginLeft: card_margin, marginRight: card_margin}}>
                    <Walmart classes={classes} />
                </SponsorCard>
                <SponsorCard className = "gSpon" style={{ gridArea: "gSpon3", maxWidth: max_width, marginLeft: card_margin, marginRight: card_margin}}>
                    <Walmart classes={classes} />
                </SponsorCard>



        </div>
    );
}

export default Sponsors;