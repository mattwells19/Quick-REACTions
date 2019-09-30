import React from "react";
import { KeyboardArrowRight, KeyboardArrowLeft } from "@material-ui/icons";
import { IconButton, Paper, withStyles, Typography, Divider } from "@material-ui/core";
import SlideShowContent from "./SlideShowContent";
import Robot from "../Images/Robot2.jpg";
import SprintReview23 from "../Images/SprintReviews/EndofSprint2-3.jpg";
import ArduinoWksp from "../Images/Outreach/ArduinoWksp-2.jpg";
import Logo from "../Images/CARLogoPrimary.png";

export default function Slideshow(props: any) {
    const [slideIndex, setSlideIndex] = React.useState<number>(0);

    const handleLeftArrowClick = () => {

        if (slideIndex === 0)
            setSlideIndex(3);
        else
            setSlideIndex(slideIndex - 1);
    }
    const handleRightArrowClick = () => {
        if (slideIndex === 3)
            setSlideIndex(0);
        else
            setSlideIndex(slideIndex + 1);
    }

    const AboutBackground = withStyles({
        root: {
            backgroundColor: "#212B31",
        },
    })(Paper);

    const SlideShowContentItems = [
        {
            text: ["We are Charlotte Area Robotics", "- A Student Org of UNC Charlotte -", "- An IEEE club -"],
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

    return (
        <>
            <AboutBackground className="slideshow-container">
                <Typography align="center" variant="h3" style={{ gridArea: "title", color: "#B3A369" }}  >
                    Who We Are - What We Do
                </Typography>
                <Divider style={{ gridArea: "divider", backgroundColor: "#B3A369" }} />
                <IconButton style={{ margin: "auto" }} className="slideshow-leftArrow" onClick={handleLeftArrowClick}>
                    <KeyboardArrowLeft style={{ color: "white" }} />
                </IconButton>

                {slideIndex === 0 && <SlideShowContent {...SlideShowContentItems[0]} />}
                {slideIndex === 1 && <SlideShowContent {...SlideShowContentItems[1]} />}
                {slideIndex === 2 && <SlideShowContent {...SlideShowContentItems[2]} />}
                {slideIndex === 3 && <SlideShowContent {...SlideShowContentItems[3]} />}

                <IconButton style={{ margin: "auto" }} className="slideshow-rightArrow" onClick={handleRightArrowClick}>
                    <KeyboardArrowRight style={{ color: "white" }} />
                </IconButton>
            </AboutBackground>
        </>
    );
}