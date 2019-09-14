import React from "react";
import { Typography, Link, Card, Paper, makeStyles, withStyles, createStyles, Theme, createMuiTheme, Divider, IconButton, Tooltip } from "@material-ui/core";
import logo from "../Images/CARLogoPrimary.png";
import "./Home.scss";
import { ThemeProvider } from "@material-ui/styles";
import { Instagram, Facebook } from "@material-ui/icons";

const theme = createMuiTheme({
    typography: {
        h4: {
            fontFamily: "Inconsolata",
            fontSize: "1.75rem",
            fontWeight: 700,
        },
        h5: {
            fontFamily: "Inconsolata",
            fontSize: "1rem",
            fontWeight: 700,
        },
    },
});

const SocialCard = withStyles({
    root: {
        padding: "10px",
        maxWidth: "15rem",
        fontFamily: "Inconsolata",
        gridArea: "social",
        backgroundColor: "#B3A369",
        color: "black",
        margin: "auto",
        textAlign: "center",
    },
})(Card);

const InterestCard = withStyles({
    root: {
        display: "flex",
        padding: "10px",
        maxWidth: "15rem",
        fontFamily: "Inconsolata",
        gridArea: "interest",
        backgroundColor: "#B3A369",
        color: "black",
        margin: "auto",
        textAlign: "center",
    },
})(Card);

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            maxWidth: "50rem",
            display: "flex",
            backgroundColor: "#212b31",
            gridArea: "text",
            padding: "10px",
            margin: "auto",
        },
        divider: {
            margin: "10px",
        },
    }),
);

function Home() {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <div className="grid-container">
                <SocialCard>
                    <Typography variant="h4">
                        Follow us on social media!
                    </Typography>
                    <Divider className={classes.divider} />
                    <Tooltip title="https://www.instagram.com/car_robotics/">
                        <IconButton href="https://www.instagram.com/car_robotics/">
                            <Instagram fontSize="large" color="action" />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="https://www.facebook.com/CharlotteAreaRobotics/">
                        <IconButton href="https://www.facebook.com/CharlotteAreaRobotics/">
                            <Facebook fontSize="large" color="action" />
                        </IconButton>
                    </Tooltip>
                </SocialCard>
                <img src={logo} className="logo" alt="Logo" />
                <InterestCard>
                    <Typography variant="h4">
                        Interested in joining CAR?{<><Divider className={classes.divider} /></>}
                        {<Tooltip title="https://ninerengage.uncc.edu/organization/car-robotics">
                            <Link href="https://ninerengage.uncc.edu/organization/car-robotics">Visit our Niner Engage page!</Link>
                        </Tooltip>}
                    </Typography>
                </InterestCard>
                <Paper className={classes.root} elevation={24}>
                    <Typography align="center" className="more-text" variant="h4">
                        Our mission is to educate and to learn about all aspects of mobile robotics.
                        From the novice to the experienced, we welcome all students who are excited to learn more about the field of robotics and apply the concepts they learn in the classroom to real world applications.
                    </Typography>
                </Paper>
            </div>
        </ThemeProvider>
    );
}

export default Home;