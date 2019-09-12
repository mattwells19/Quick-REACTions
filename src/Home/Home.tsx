import React, { Component } from "react";
import {Card, CardContent, CardMedia, Typography} from "@material-ui/core";
import logo from "../Images/CARLogoPrimary.png";
import crown from "../Images/UNCCCrown.png";
import "./Home.scss";

class Home extends Component {
    render() {
        return (
            <div style={{backgroundImage: crown}}>
                <Card className="Card">
                    <CardMedia
                        className="Logo"
                        image={logo}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica 
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

export default Home;