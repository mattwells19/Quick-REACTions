import React, { Component } from "react";
import { Grid,  } from "@material-ui/core"
import './Sponsors.scss';

class Sponsors extends Component {
    render() {
        return (
            <div>
                <h2>STUFF</h2>

                <Grid container>
                    <Grid item sm>Walmart  </Grid>
                    <Grid item sm>SolidWorks Software  </Grid>
                    <Grid item sm>Advanced Circuits  </Grid>
                    <Grid item sm>Children's Theater of Charlotte  </Grid>
                </Grid>

                <p>Interested In Sponsoring? Please contact Sam Luu (Car-robotics@uncc.edu) for questions.</p>
                <h3>Sponsorships are ranked as follows:</h3>
                <ol>
                    <li>Green Level: (Under $100) With the Green Level Sponsorship, CAR will Put your company's logo on the sponsors page of our website.</li>
                    <li>Silver Level: ($100 - $250) With the Silver Level Sponsorship, CAR will give your company the same benefits as the Green Level. In addition to the website, your logo will be added to our robot for everyone to see!</li>
                    <li>Gold Level: (More than $250) With the Gold Level Sponsorship, your company will recieve the benfits from the Green Silver Levels in addition to adding your logo onto our team's T-Shirts!</li>
                </ol>
            </div>
        );
    }
}

export default Sponsors;