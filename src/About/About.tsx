import React, { Component } from "react";
import { Paper, withStyles, Typography } from "@material-ui/core";
import OfficerCard, {Officer} from "./OfficerCard";
import IntVP from "../Images/Officers/InterimVP.jpg";
import Outreach from "../Images/Officers/Outreach.jpg";
import Treasurer from "../Images/Officers/Treasurer.jpg";
import VP from "../Images/Officers/VP.jpg";
import President from "../Images/Officers/President.gif";
import "./About.scss";
import "../Themes.scss";
import Slideshow from "./Slideshow";

const AboutBackground = withStyles({
    root: {
        backgroundColor: "#B3A369",
        display: "block",
    },
})(Paper);

class About extends Component {
    render() {
        return (
            <>
                <div className="who-we-are-container">
                    <AboutBackground className="card-group">
                        <Typography align="center" variant="h4">
                            Who we are
                        </Typography>
                    </AboutBackground>
                    <Slideshow />
                </div>
                <div className="what-we-do-container">
                    <AboutBackground>
                        <Typography variant="h4">
                            What we do
                        </Typography>
                    </AboutBackground>
                </div>
                <div className="officer-container">
                    <AboutBackground style={{display: "flex"}} elevation={24} className="card-group">
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
                            name="Nathan Langley"
                            officer={Officer.Interim}
                            linkedIn="https://www.linkedin.com/in/nathan-langley"
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
                    </AboutBackground>
                </div>
            </>
        );
    }
}

export default About;