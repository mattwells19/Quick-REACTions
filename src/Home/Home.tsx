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
            fontFamily: "Inconsolata",
            fontSize: "1.75rem",
            fontWeight: 700,
        },
    },
});

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            maxWidth: "50rem",
            display: "flex",
            backgroundColor: "#212b31",
            gridArea: "text2",
            padding: "10px",
            margin: "auto",
        },
    }),
);

function Home() {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <div className="grid-container">
                <img src={logo} className="logo" alt="Logo" />
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