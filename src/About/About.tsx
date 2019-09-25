import React, { Component } from "react";
import { Paper, withStyles } from "@material-ui/core";
import OfficerCard, {Officer} from "./OfficerCard";
import IntVP from "../Images/Officers/InterimVP.jpg";
import Outreach from "../Images/Officers/Outreach.jpg";
import Treasurer from "../Images/Officers/Treasurer.jpg";
import VP from "../Images/Officers/VP.jpg";
import President from "../Images/Officers/President.gif";
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
                <OfficerBackground elevation={24} className="card-group">
                    <OfficerCard
                        image={President}
                        name="Nathaniel Belles"
                        officer={Officer.President}
                        linkedIn="https://www.linkedin.com/in/nathaniel-belles-04a2894b/"
                    />
                    <OfficerCard
                        image={VP}
                        name="Matt Wells"
                        officer={Officer.VicePresident}
                        linkedIn="https://www.linkedin.com/in/mwells21/"
                    />
                    <OfficerCard
                        image={IntVP}
                        name="Nathan Langely"
                        officer={Officer.Interim}
                        linkedIn=""
                    />
                    <OfficerCard
                        image={Outreach}
                        name="Sam Luu"
                        officer={Officer.Outreach}
                        linkedIn="https://www.linkedin.com/in/sluu3/"
                    />
                    <OfficerCard
                        image={Treasurer}
                        name="Noel Mills"
                        officer={Officer.Treasurer}
                        linkedIn="https://www.linkedin.com/in/noel-mills-01362815a/"
                    />
                </OfficerBackground>
            </div>
        );
    }
}

export default About;