import {
    withStyles,
    Typography,
    makeStyles,
    createStyles,
} from "@material-ui/core";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";

import React, { Component } from "react";
import FeedBack from "./FeedBack";
import Avatar from "@material-ui/core/Avatar";

const useStyles = (theme) => ({
    root: {
        display: "grid",
        margin: "2em",
        gridTemplateColumns: "5fr 2fr",
        gridColumnGap: "80px",
    },

    paragraphStyling: {
        lineHeight: "1.5",
        padding: "20px",
        margin: "20px",
        textTransform: "full-width",
        fontFamily: "Times New Roman",
        boxSizing: "border-box",
    },


    Developers:{
        display: "flex",
        margin: "3em",
        gridTemplateColumns: "13fr 13fr",
        gridColumnGap: "280px",
    },
   large:{
        width: '100px',
       height: "100px",
   }

});
class About extends Component {
    onSubmit = (email, feedback) => {
        console.log(email, feedback);
    };

    render() {
        const { classes } = this.props;
        return (
            <div>
            <div className={classes.root}>
                <div style={{ background: "#eee" }}>
                    <div
                        className="aboutContent"
                        style={{ textAlign: "center", margin: "2em " }}>
                        <Typography variant="h4">Agenagn</Typography>
                        <Typography
                            variant="h6"
                            style={{ margin: "2em", lineHeight: "1.5" }}
                            className={classes.paragraphStyling}>
                            Agenagn is a solution for looking for house available for rent.
                            The system connects strangers who looking for house rent and
                            administrator of the system. The service capable of showing the
                            detailed information about the house such as number of bedrooms,
                            bathrooms, price of rent, location where the house is found. In
                            addition, the strangers can filter the available house with
                            respect to the ranges of price they can afford. The service would
                            not provide online payment since online payment is another
                            challenge in Ethiopia. The system reduces strangers’ time, energy
                            and money spent by looking for house. It reduces an additional
                            money spent for brokers from both strangers and owner.
                            Furthermore, it facilitates house rent to be taken earlier. In
                            terms of boundary Agenagn works for house found around Addis Ababa
                            for now. But, for sure Agenagn will expand to the rest of
                            Ethiopia.
                        </Typography>
                    </div>
                </div>
                <div className="feedback">
                    <FeedBack onSubmit={this.onSubmit} />
                </div>
            </div>
                <Typography variant="h4">Developers : </Typography>
                <div className={classes.Developers}>
                    <div>
                        <Typography variant="h6">Girmay</Typography>
                        <Avatar alt="Remy Sharp" src="/asset/Img/wow.jpg" className={classes.large}/>

                        <Typography
                            variant="h6"
                            style={{ margin: "2em", lineHeight: "1.5" }}
                            className={classes.paragraphStyling}>
                           Software Engineer
                        </Typography>
                    </div>
                    <div>
                        <Typography variant="h6">Kalab </Typography>
                        <Avatar alt="Remy Sharp" src="/asset/Img/kalab.jpg" className={classes.large}/>
                        <Typography
                            variant="h6"
                            style={{ margin: "2em", lineHeight: "1.5" }}
                            className={classes.paragraphStyling}>
                            Software Engineer
                        </Typography>
                    </div>
                    <div>
                        <Typography variant="h6">Desalegn </Typography>
                        <Avatar alt="Remy Sharp" src="/asset/Img/cmd.jpg"  className={classes.large}/>
                        <Typography
                            variant="h6"
                            style={{ margin: "2em", lineHeight: "1.5" }}
                            className={classes.paragraphStyling}>
                            Software Engineer
                        </Typography>
                    </div>

                </div>
            </div>
        );
    }
}

export default withStyles(useStyles, { withTheme: true })(About);
