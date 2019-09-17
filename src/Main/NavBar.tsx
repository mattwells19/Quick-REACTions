import React from "react";
import { AppBar, Tabs, Tab, withStyles, makeStyles, Theme, createStyles, IconButton, Popover } from "@material-ui/core";
import {Feedback} from "@material-ui/icons";
import { Link } from "react-router-dom";
import MainLogo from "../Images/CARLogoPrimary.png";
import EasyToSeeTooltip from "./EasyToSeeTooltip";
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
        feedback: {
            position: "absolute",
            right: "1rem",
            top: "1rem",
        },
    }),
);

const getTabWithPath = () => {
    const path = window.location.pathname;
    if (path === "/about") return 2;
    if (path === "/sponsors") return 3;
    if (path === "/competition") return 4;
    if (path === "/outreach") return 5;
    if (path === "/archive") return 6;  
    return 1;  
}

export default function NavBar() {
    const [value, setValue] = React.useState<number>(getTabWithPath()); //set index of 1 for default value which is Home tab
    const [showFeedback, setShowFeedback] = React.useState<boolean>(false);
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    const handleFeedbackClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setAnchorEl(event.currentTarget);
        setShowFeedback(true);
    }

    const handleFeedbackClose = () => {
        setAnchorEl(null);
        setShowFeedback(false);
    }

    const classes = useStyles();

    return (
        <>
        <AppBar className={classes.appbar}>
            <NavTabs scrollButtons="on" variant="scrollable" value={value} onChange={handleChange}>
                <img src={MainLogo} width="70" height="70" alt="logo" />
                <Tab className="NavBarSelection" label="Home" component={Link} to="/" />
                <Tab className="NavBarSelection" label="About" component={Link} to="/about" />
                <Tab className="NavBarSelection" label="Sponsors" component={Link} to="/sponsors" />
                <Tab className="NavBarSelection" label="Competition" component={Link} to="/competition" />
                <Tab className="NavBarSelection" label="Outreach" component={Link} to="/outreach" />
                <Tab className="NavBarSelection" label="Archive" component={Link} to="/archive" />
            </NavTabs>
            <EasyToSeeTooltip title="Feedback Button">
                <IconButton onClick={handleFeedbackClick} className={classes.feedback}>
                    <Feedback style={{color: "white"}} color="action"/>
                </IconButton>
            </EasyToSeeTooltip>
        </AppBar>
        <Popover 
            anchorEl={anchorEl} 
            anchorOrigin={{vertical: "center", horizontal: "center"}} 
            open={showFeedback}
            onClose={handleFeedbackClose}
        >
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeqmdcJt44fExwl5vgHrPZiYbLhaC70UGmg38OEvopaNqbISQ/viewform?embedded=true" title="Feedback" width="640px" height="765">Loading…</iframe>
        </Popover>
        </>
    )
}