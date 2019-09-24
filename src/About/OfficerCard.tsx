import React from "react";
import { Card, CardActionArea, CardMedia, CardContent, Typography } from "@material-ui/core";

export enum Officer{
    President="President",
    VicePresident="Vice President",
    Outreach="Outreach Officer",
    Treasurer="Treasurer",
    Interim="Interim Vice President"
}

interface OfficerCardProps{
    image: string;
    officer: Officer;
}

export default function OfficerCard(props: OfficerCardProps){
    return(
        <CardActionArea>
            <Card style={{height: "400px", width: "250px", margin: "20px", backgroundColor: "#2d855f"}}>
                <CardMedia
                    image={props.image}
                    style={{height: "300px"}}
                />
                    <CardContent>
                        <Typography align="center" variant="h4">
                            {props.officer}
                        </Typography>
                    </CardContent>
            </Card>
        </CardActionArea>
    );
}