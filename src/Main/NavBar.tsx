import React from "react";
import { AppBar, Tabs, Tab, withStyles, makeStyles, Theme, createStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import MainLogo from "../Images/CARLogoPrimary.png";
import "./Main.scss";

//Custom Tabs component for styling
const NavTabs = withStyles({
    root: {
        margin: "auto",
    },
    indicator: {
        backgroundColor: '#B3A369',
        height: "4px",
    },
})(Tabs); //<- Uses Material UI Tabs component but overrides what's above

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        appbar: {
            backgroundColor: "#212b31",
            height: "75px",
            position: "fixed",
        },
    }),
);

export default function NavBar() {
    const [value, setValue] = React.useState(1); //set index of 1 for default value which is Home tab

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    const classes = useStyles();

    return (
        <AppBar className={classes.appbar}>
            <NavTabs className="TabIndicator" centered value={value} onChange={handleChange}>
                <img src={MainLogo} width="70" height="70" alt="logo" />
                <Tab className="NavBarSelection" label="Home" component={Link} to="/" />
                <Tab className="NavBarSelection" label="About" component={Link} to="/about" />
                <Tab className="NavBarSelection" label="Sponsors" component={Link} to="/sponsors" />
                <Tab className="NavBarSelection" label="Competition" component={Link} to="/competition" />
                <Tab className="NavBarSelection" label="Archive" component={Link} to="/archive" />
            </NavTabs>
        </AppBar>
    )
}