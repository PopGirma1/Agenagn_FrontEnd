import {
    withStyles,
    Typography,
} from "@material-ui/core";
import React, { Component } from "react";
import FeedBack from "./FeedBack";
import Avatar from "@material-ui/core/Avatar";
import { bounce } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = (theme) => ({

    bounce: {
        animation: 'x 1s',
        animationName: Radium.keyframes(bounce, 'bounce')
    }
    ,
    root: {
        width:'auto',
        display: "grid",
        margin: "2em",
        gridTemplateColumns: "4fr 2fr",
        gridColumnGap: "80px",
    },

    paragraphStyling: {
        padding:'0 3%',
        lineHeight:'1.5',
        textTransform: "full-width",
        fontSize:'20px',
        textIndent: '50px',
        textAlign: 'justify',
        letterSpacing: '2px',
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
    },
    developer:{
        marginLeft:"-10px",
        marginRight:'-10px'
    }

});
class About extends Component {
    onSubmit = (email, feedback) => {
        console.log(email, feedback);
    };

    render() {
        const { classes } = this.props;
        return (
            <Card  id={'container'}>
                <Card className={classes.root}>
                    <div style={{ background: "#eee" }}>
                        <div
                            className="aboutContent"
                            style={{ textAlign: "center", margin: "2em " }}>
                            <Typography variant="h4">Agenagn</Typography>
                            <Card><CardContent>
                                <Typography>
                                    <p className={classes.paragraphStyling}>
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
                                    </p>
                                </Typography>
                            </CardContent></Card>
                        </div>
                    </div>
                    <div className="feedback">
                        <FeedBack onSubmit={this.onSubmit} />
                    </div>
                </Card>
                <div className={classes.developer}>
                    <Card><CardContent>
                        <Typography variant="h5">Developers : </Typography>
                        <div className={classes.Developers}>
                            <Card><CardContent>
                                <div>
                                    <Typography variant="h6">Girmay</Typography>
                                    <Avatar alt="Remy Sharp" src="/asset/Img/wow.jpg" className={classes.large}/>
                                    <Card>
                                        Software Engineer (web developer and designer)
                                    </Card>
                                </div>
                            </CardContent></Card>
                            <Card><CardContent>
                                <div>
                                    <Typography variant="h6" >Desalegn </Typography>
                                    <Avatar alt="Remy Sharp" src="/asset/Img/cmd.jpg"  className={classes.large}/>
                                    <Card>
                                        Software Engineer (web developer and designer)
                                    </Card>
                                </div>
                            </CardContent></Card>
                            <Card><CardContent>
                                <div>
                                    <Typography variant="h6">Kalab </Typography>
                                    <Avatar alt="Remy Sharp" src="/asset/Img/kalab.jpg" className={classes.large}/>
                                    <Card>
                                        Software Engineer (web developer and designer)
                                    </Card>
                                </div></CardContent></Card>
                        </div>
                    </CardContent></Card>
                </div>
            </Card>
        );
    }
}

export default withStyles(useStyles, { withTheme: true })(About);
