import React from "react";
import { Typography, makeStyles, Theme, createStyles } from "@material-ui/core";
import Robot from "../Images/Robot2.jpg";
import SprintReview23 from "../Images/SprintReviews/EndofSprint2-3.jpg";
import ArduinoWksp from "../Images/Outreach/ArduinoWksp-2.jpg";
import Logo from "../Images/CARLogoPrimary.png";

interface SlideShowContentProps {
    // text: string[],
    // img: string,
    // size?: { width: string, height: string }
    contentIndex: number,
}

const getTextAlign = (i: number, length: number) => {
    if (length === 1) {
        return "center";
    } else if (i === 0) {
        return "flex-start";
    } else if (i === length-1) {
        return "flex-end";
    } else {
        return "center";
    }
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        text: {
            padding: "2rem",
            gridArea: "text",
            textAlign: "center",
            color: "#B3A369",
        },
        img: {
            margin: "auto",
            gridArea: "content",
        }
    }),
);

const SlideShowContentItems = [
    {
        text: ["We are Charlotte Area Robotics", "- A Student Organization -", "- An IEEE club -"],
        img: Logo,
        size: { width: "504px", height: "504px" }
    },
    {
        text: ["We educate other students..."],
        img: ArduinoWksp
    },
    {
        text: ["We educate each other..."],
        img: SprintReview23
    },
    {
        text: ["We design, build, and test a rboot to compete..."],
        img: Robot
    }
];

export default function SlideShowContent(props: SlideShowContentProps) {
    const classes = useStyles();

    const contentObject = SlideShowContentItems[props.contentIndex];

    return (
        <>
            {contentObject.text.map((x, index) => {
                const align = getTextAlign(index, contentObject.text.length);
                return (
                    <Typography variant="h3" className={classes.text} style={{ alignSelf: align }}>
                        {x}
                    </Typography>);
            })}
            <img className={classes.img} width={contentObject.size ? contentObject.size.width : "672px"} height={contentObject.size ? contentObject.size.height : "504px"} src={contentObject.img} alt="ContentImage" />
        </>
    );
}