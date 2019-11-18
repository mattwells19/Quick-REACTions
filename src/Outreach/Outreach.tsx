import React from "react";
import { Typography, Card, Paper, makeStyles, withStyles, createStyles, Theme } from "@material-ui/core";
import { useCurrentWidth } from "react-socks";
import {DocumentTitle} from "../Main/DocumentTitle";
import banner from "../Images/outreachBan1.jpg";
import arduino1 from "../Images/Outreach/ArduinoWksp-1.jpg";
import bobsBash from "../Images/Outreach/BobsBash1-2.jpg";
import discoveryplace1 from "../Images/Outreach/DiscoveryPlace1.jpg";
import discoveryplace2 from "../Images/Outreach/DiscoveryPlace2.jpg";
import elementary1 from "../Images/Outreach/Elementary1.jpg";
import elementary2 from "../Images/Outreach/Elementary2.jpg";
import ncscience1 from "../Images/Outreach/NCScience1.jpg";
import "./Outreach.scss";

//Used to define a variable of type card and style it
const SideCard = withStyles({
    root: {
        display: "flex",
        padding: "10px",
        fontFamily: "Inconsolata",
        backgroundColor: "#B3A369",
        color: "#212b31",
        width: "20rem",
        height: "20rem",
        textAlign: "center",
        borderRadius: "1rem",
    },
})(Card);


//Used For styling
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        bottomCard: {
            maxWidth: "50rem",
            display: "flex",
            backgroundColor: "#212b31",
            gridArea: "bottomTxt",
            padding: "10px",
            margin: "auto",
        },
        divider: {
            margin: "10px",
        },
    }),
);

//Function that actually creates the website
function Outreach() {
    //Set the default sizing only used for (mobile version)
    const width = useCurrentWidth();
    const classes = useStyles();
    const max_width = width > 1000 ? "15rem" : "";
    const card_margin = width > 1000 ? "" : "10px";

    //Used to set website tab name 
    DocumentTitle({title: "Outreach"});

    return (
        //Created a div to hold the entire website container
        <div className={width > 1000 ? "outReach-container" : "outReach-container-mobile"}>

            {/* Banner Image */}
            <img src={banner} className="banner" alt="Banner" />

            {/* Top Section */}
           

            <Paper className={classes.bottomCard} elevation={25} style={{marginLeft: card_margin, marginRight: card_margin}}>
                <Typography align="center" className="more-text" variant="h4">
                    We enjoy helping and reaching out to our community. Volunteering is very important to us
                    and we strive to make our community better every chance we get. 
                </Typography>
            </Paper>



            
            {/*Arduino 1 Image */}
            <Paper className="ImgBox" style={{gridArea: "ard1", backgroundColor: "inherit"}}>
                <img src={arduino1} className = "arduino1" alt = "Arduino1" />
                <Typography align = "center" className="more-text" variant="h5" style={{fontFamily: "Inconsolata"}}> This is just a placeholder for text under the Image</Typography>
            </Paper>
            
            
                

            {/*Bobs Bash Image*/}
            <img src={bobsBash} className = "bobsBash" alt = "BobsBash" />
            <Typography align = "center" className="more-text" variant="h5" style={{fontFamily: "Inconsolata"}}> This is just a placeholder for text under the Image</Typography>





            <div style={{display: "inline-flex"}}>

            {/*Discovery Place 1 Image */}
            <img src={discoveryplace1} className = "discoveryplace1" alt = "Discoveryplace1" />
            
            {/*Discovery Place 2 Image */}
            <img src={discoveryplace2} className = "discoveryplace2" alt = "Discoveryplace2" />

            </div>

            <Typography align = "center" className="more-text" variant="h5" style={{fontFamily: "Inconsolata"}}> This is just a placeholder for text under the Image</Typography>




            <div style={{display: "inline-flex"}}>

            {/*Elementary school 1 Image */}
            <img src = {elementary1} className = "elementary1" alt = "Elementary1" />

             {/*Elementary school 2 Image */}
             <img src = {elementary2} className = "elementary2" alt = "Elementary2" />

             </div>

             <Typography align = "center" className="more-text" variant="h5" style={{fontFamily: "Inconsolata"}}> This is just a placeholder for text under the Image</Typography>




             {/*NC Science */}
             <img src = {ncscience1} className = "ncscience1" alt = "Ncscience1" />
             <Typography align = "center" className="more-text" variant="h5" style={{fontFamily: "Inconsolata"}}> This is just a placeholder for text under the Image</Typography>




        



            


        </div> //Closed the website container Div
    );
}

export default Outreach;