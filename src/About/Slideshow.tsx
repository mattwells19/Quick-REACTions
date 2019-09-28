import React from "react";
import { KeyboardArrowRight, KeyboardArrowLeft } from "@material-ui/icons";
import { IconButton, Paper, withStyles } from "@material-ui/core";
import EducateStudents from "./EducateStudents";
import EducateEachOther from "./EducateEachOther";
import {CSSTransition} from "react-transition-group";
import DesignBuildCompete from "./DesignBuildCompete";

export default function Slideshow(props: any) {
    const [slideIndex, setSlideIndex] = React.useState<number>(0);

    const handleLeftArrowClick = () => {

        if (slideIndex === 0)
            setSlideIndex(2);
        else
            setSlideIndex(slideIndex - 1);
    }
    const handleRightArrowClick = () => {
        if (slideIndex === 2)
            setSlideIndex(0);
        else
            setSlideIndex(slideIndex + 1);
    }
    
    const AboutBackground = withStyles({
        root: {
            backgroundColor: "#B3A369",
            display: "block",
        },
    })(Paper);

    return (
        <>
            <AboutBackground style={{display: "inline-flex", margin: "2rem auto", width: "100%", padding: "10px"}}>
                {slideIndex === 0 && <EducateStudents/>}
                {slideIndex === 1 && <EducateEachOther/>}
                {slideIndex === 2 && <DesignBuildCompete/>}
            </AboutBackground>
            <div style={{width: "100px", margin: "0 auto"}}>
                <IconButton onClick={handleLeftArrowClick}>
                    <KeyboardArrowLeft/>
                </IconButton>
                <IconButton onClick={handleRightArrowClick}>
                    <KeyboardArrowRight/>
                </IconButton>
            </div>
        </>
    );
}