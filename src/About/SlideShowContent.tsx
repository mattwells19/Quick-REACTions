import React from "react";
import { Typography, makeStyles, Theme, createStyles } from "@material-ui/core";

interface SlideShowContentProps {
    text: string[],
    img: string,
    size?: { width: string, height: string }
}

const getTextAlign = (i: number, length: number) => {
    if (length === 1) {
        return "center";
    } else if (i === 0) {
        return "flex-start";
    } else if (i === 1) {
        return "center";
    } else {
        return "flex-end";
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

export default function SlideShowContent(props: SlideShowContentProps) {
    const classes = useStyles();
    return (
        <>
            {props.text.map((x, index) => {
                const align = getTextAlign(index, props.text.length);
                return (
                    <Typography variant="h4" className={classes.text} style={{ alignSelf: align }}>
                        {x}
                    </Typography>);
            })}
            <img className={classes.img} width={props.size ? props.size.width : "672px"} height={props.size ? props.size.height : "504px"} src={props.img} alt="ContentImage" />
        </>
    );
}