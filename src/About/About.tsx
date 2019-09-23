import React, { Component } from "react";
import { Typography, CardActionArea, CardMedia, CardContent, Card } from "@material-ui/core";
import ReturningMembers from "../Images/ReturningMembers.jpg";
class About extends Component {
    render() {
        return (
            <div style={{marginTop: "5rem"}}>
                <Card style={{maxWidth: "800px", margin: "5rem"}}>
                    <CardActionArea>
                        <CardMedia
                            image={ReturningMembers}
                            style={{height: "350px"}}
                        />
                            <CardContent>
                                <Typography align="center" variant="h4">
                                    These are our returning members!
                                </Typography>
                            </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        );
    }
}

export default About;