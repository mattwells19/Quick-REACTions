import React from "react";
import { Typography, Paper, makeStyles, createStyles, Theme, createMuiTheme } from "@material-ui/core";
import logo from "../Images/CARLogoPrimary.png";
import "./Home.scss";
import { ThemeProvider } from "@material-ui/styles";

const theme = createMuiTheme({
    typography: {
        h3: {
            fontFamily: "Tahamo, Geneva, sans-serif",
            fontSize: "3rem",
        },
        h4: {
            fontFamily: "Tahamo, Geneva, sans-serif",
            fontSize: "2rem",
        },
    },
});

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            backgroundColor: "#212b31",
            gridArea: "text2",
            padding: "10px"
        },
    }),
);

function Home() {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <div className="grid-container">
                <img src={logo} className="logo" alt="Logo" />
                <Paper className={classes.root}>
                    <Typography align="center" className="header" variant="h3">
                        Our Mission
                    </Typography>
                    <Typography align="center" className="more-text" variant="h4">
                        To educate and to learn about all aspects of mobile robotics.
                        From the novice to the experienced, we welcome all students who are excited to learn more about the field of robotics and apply the concepts they learn in the classroom to real world applications.
                    </Typography>
                </Paper>
            </div>
        </ThemeProvider>
    );
}

export default Home;