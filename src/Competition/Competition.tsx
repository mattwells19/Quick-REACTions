import React, { Component } from "react";
import CountdownTimer from "./CountdownTimer";
import { Paper, withStyles, Typography, Divider } from "@material-ui/core";

const RulesBackground = withStyles({
    root: {
        backgroundColor: "#212B31",
        width: "max-content",
        padding: "2rem",
        margin: "2rem auto"
    },
})(Paper);

const RulesText = withStyles({
    root: {
        color: "#B3A369",
    },
})(Typography);

class Competition extends Component {
    render() {
        return (
            <div style={{ paddingTop: "8rem" }}>
                <CountdownTimer />
                <RulesBackground>
                    <RulesText variant="h2" align="center">
                        The Rules: Pi Day 2020
                    </RulesText>
                    <Divider style={{ backgroundColor: "#B3A369", margin: "1rem"}} variant="middle" />
                    <iframe title="rules" src="https://drive.google.com/file/d/1rc0wpz5IDh3fPyaSZwz_TqPAv9dnhEcB/preview" width="1024" height="768"></iframe>
                </RulesBackground>
            </div>
        );
    }
}

export default Competition;