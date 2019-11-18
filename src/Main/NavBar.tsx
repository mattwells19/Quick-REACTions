import React from "react";
import { AppBar, makeStyles, Theme, createStyles, Popover, SwipeableDrawer, IconButton, Typography } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import { Breakpoint } from "react-socks";
import NavBarContent from "./NavBarContent";
import "./Main.scss";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        appbar: {
            zIndex: theme.zIndex.drawer + 1,
            backgroundColor: "#212b31",
            height: "max-content",
            position: "fixed",
        },
        feedbackSidebar: {
            width: "fit-content",
            alignSelf: "center",
        },
        paper: {
            background: "#212b31",
            color: "white",
        },
        hamburgerMenu: {
            color: "white",
            position: "absolute",
            left: "2px",
            paddingTop: "2px",
        },
        mobileNavBar: {
            alignSelf: "center",
            margin: "auto",
        },
    }),
);

export default function NavBar() {
    const [showFeedback, setShowFeedback] = React.useState<boolean>(false);
    const [showSidebar, setShowSidebar] = React.useState<boolean>(false);
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handleFeedbackClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setAnchorEl(event.currentTarget);
        setShowFeedback(true);
    }

    const handleFeedbackClose = () => {
        setAnchorEl(null);
        setShowFeedback(false);
    }

    const handleDrawerToggle = () => {
        setShowSidebar(!showSidebar);
    }

    const classes = useStyles();

    return (
        <>
            <Breakpoint large up>
                <AppBar className={classes.appbar}>
                    <NavBarContent
                        isSidebar={false}
                        handleFeedbackClick={handleFeedbackClick}
                        classes={classes}
                    />
                </AppBar>
            </Breakpoint>
            <Breakpoint medium down>
                <AppBar className={classes.appbar}>
                    <IconButton className={classes.hamburgerMenu} onClick={handleDrawerToggle}>
                        <Menu fontSize="large" />
                    </IconButton>
                    <Typography className={classes.mobileNavBar} variant="h6">
                        Charlotte Area Robotics
                    </Typography>
                </AppBar>
                <SwipeableDrawer
                    onOpen={() => setShowSidebar(true)}
                    onClose={() => setShowSidebar(false)}
                    open={showSidebar}
                    classes={{ paper: classes.paper }}
                    variant="persistent"
                    anchor="left"
                >
                    <NavBarContent
                        isSidebar={true}
                        handleFeedbackClick={handleFeedbackClick}
                        classes={classes}
                    />
                </SwipeableDrawer>
            </Breakpoint>
            <Popover
                anchorEl={anchorEl}
                anchorOrigin={{ vertical: "center", horizontal: "center" }}
                open={showFeedback}
                onClose={handleFeedbackClose}
            >
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeqmdcJt44fExwl5vgHrPZiYbLhaC70UGmg38OEvopaNqbISQ/viewform?embedded=true" title="Feedback" width="640px" height="765">Loading…</iframe>
            </Popover>
        </>
    )
}