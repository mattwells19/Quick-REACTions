import React, { Component } from "react";
import { Paper, withStyles } from "@material-ui/core";
import OfficerCard, {Officer} from "./OfficerCard";
import IntVP from "../Images/Officers/InterimVP.jpg";
import Outreach from "../Images/Officers/Outreach.jpg";
import Treasurer from "../Images/Officers/Treasurer.jpg";
import VP from "../Images/Officers/VP.jpg";
import "./About.scss";

const OfficerBackground = withStyles({
    root: {
        backgroundColor: "#B3A369",
    },
})(Paper);

class About extends Component {
    render() {
        return (
            <div className="container">
                <OfficerBackground className="card-group">
                    <OfficerCard
                        image={IntVP}
                        officer={Officer.Interim}
                    />
                    <OfficerCard
                        image={Outreach}
                        officer={Officer.Outreach}
                    />
                    <OfficerCard
                        image={Treasurer}
                        officer={Officer.Treasurer}
                    />
                    <OfficerCard
                        image={VP}
                        officer={Officer.VicePresident}
                    />
                </OfficerBackground>
            </div>
        );
    }
}

export default About;