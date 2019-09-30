import React, { Component } from "react";
import { Paper, withStyles, Typography, Divider } from "@material-ui/core";
import OfficerCard, { Officer } from "./OfficerCard";
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
        backgroundColor: "#212B31",
        width: "max-content",
    },
})(Paper);

class About extends Component {
    render() {
        return (
            <>
                <div className="who-we-are-container">
                    <Slideshow />
                </div>
                <div>
                    <AboutBackground elevation={24} className="card-group">
                        <Typography style={{color: "#B3A369", gridArea: "t"}} variant="h3" align="center">
                            Officers
                        </Typography>
                        <Divider style={{backgroundColor: "#B3A369", gridArea: "d"}} variant="middle" />
                        <div className="card-container">
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
                        </div>
                    </AboutBackground>
                    <AboutBackground elevation={24} className="card-group">
                        <Typography style={{color: "#B3A369", gridArea: "t"}} variant="h3" align="center">
                            Web Team
                        </Typography>
                        <Divider style={{backgroundColor: "#B3A369", gridArea: "d"}} variant="middle" />
                        <div className="card-container">
                            <OfficerCard
                                image={President}
                                name="Matt Wells"
                                officer={Officer.Developer}
                                linkedIn="https://www.linkedin.com/in/nathaniel-belles-04a2894b/"
                            />
                            <OfficerCard
                                image={President}
                                name="Ashley Harmon"
                                officer={Officer.Developer}
                                linkedIn="https://www.linkedin.com/in/mwells21/"
                            />
                            <OfficerCard
                                image={President}
                                name="Pedro Millan Perez"
                                officer={Officer.Developer}
                                linkedIn="https://www.linkedin.com/in/nathan-langley"
                            />
                            <OfficerCard
                                image={President}
                                name="Teng Lee"
                                officer={Officer.Developer}
                                linkedIn="https://www.linkedin.com/in/sluu3/"
                            />
                            <OfficerCard
                                image={President}
                                name="Aaron Yow"
                                officer={Officer.Developer}
                                linkedIn="https://www.linkedin.com/in/noel-mills-01362815a/"
                            />
                        </div>
                    </AboutBackground>
                </div>
            </>
        );
    }
}

export default About;