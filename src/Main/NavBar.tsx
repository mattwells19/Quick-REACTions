import React from "react";
import { AppBar, makeStyles, Theme, createStyles, Popover, Drawer } from "@material-ui/core";
import {Breakpoint} from "react-socks";
import NavBarContent from "./NavBarContent";
import "./Main.scss";

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

export default function NavBar() {
    const [showFeedback, setShowFeedback] = React.useState<boolean>(false);
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

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
                <Drawer open={true} variant="persistent" anchor="left">
                    <NavBarContent
                        isSidebar={true}
                        handleFeedbackClick={handleFeedbackClick}
                        classes={classes}
                    />
                </Drawer>
            </Breakpoint>
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