import React, { Component } from "react";
import CountdownTimer from "./CountdownTimer";


class Competition extends Component {
    render() {
        return (
            <div style={{paddingTop: "8rem"}}>
                <CountdownTimer/>
                {/* http://www.africau.edu/images/default/sample.pdf */}
                <iframe title="Rules" src="http://www.africau.edu/images/default/sample.pdf" width="300px" height="600px" />
            </div>
        );
    }
}

export default Competition;