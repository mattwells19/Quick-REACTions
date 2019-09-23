import React, { Component } from "react";
import { Paper } from "@material-ui/core";
import OfficerCard, {Officer} from "./OfficerCard";
import IntVP from "../Images/Officers/InterimVP.jpg";
import Outreach from "../Images/Officers/Outreach.jpg";
import Treasurer from "../Images/Officers/Treasurer.jpg";
import VP from "../Images/Officers/VP.jpg";
import "./About.scss";

class About extends Component {
    render() {
        return (
            <div className="container">
                <Paper className="card-group">
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
                </Paper>
            </div>
        );
    }
}

export default About;