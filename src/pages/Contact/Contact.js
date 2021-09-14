import React from 'react';
import { FormControl } from '@material-ui/core';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import {makeStyles} from "@material-ui/core/styles";
import {red} from "@material-ui/core/colors";
import ContactCard from "./ContactCard";
import Link from '@material-ui/core/Link';
import Icon from '@material-ui/core/Icon';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';


const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "row",
        flexWrap: 'nowrap',
        flexFlow: "column wrap",
    },
    contact:{
        marginBottom:'5px',
        marginTop:'5px'
    },

    contact1:{
        padding:'10px'
    },
    root1: {
        display: "flex",
        flexDirection: "row",
        flexWrap: 'nowrap',
        flexFlow: "column wrap",
    },

    main:{
        margin:'-12px'
    }
}));


function Contact(props) {
    const classes = useStyles();
    return (
        <div>
            <div>
            </div>
        <div className={classes.root}>
        <div className={classes.main}>
            <Typography style={{color:'green'}}>We are searching for you! Let’s get in touch!</Typography>
            <form>
            <Card className={classes.contact1}><CardContent className="frmctl">
                <FormControl>
                <InputLabel htmlFor="my-input">  Name</InputLabel>
                <Input id="name" type={"text"} aria-describedby="my-helper-text" />
                </FormControl>
                <FormControl>
                <InputLabel htmlFor="my-input">Email address</InputLabel>
                <Input id="email" type={"email"} aria-describedby="my-helper-text" />
                </FormControl>
                <FormControl>
                <InputLabel htmlFor="my-input">Phone Number</InputLabel>
                <Input id="phone" type={"number"} aria-describedby="my-helper-text" />
                </FormControl>
                <FormControl>
                <InputLabel htmlFor="my-input">Company</InputLabel>
                <Input id="company" type={"text"} aria-describedby="my-helper-text" />
                </FormControl>
                <FormControl>
                <InputLabel htmlFor="my-input">Country</InputLabel>
                <Input id="country" type={"text"} aria-describedby="my-helper-text" />
                </FormControl>
            </CardContent>
                <Button id="submit" variant="contained" color="primary" href="#contained-buttons" className="btn">Subimit</Button>
            </Card>
           </form>
            <div className={classes.root1}>
                <div>
                    <ContactCard></ContactCard>
                </div>
                <div>
                    <Card><CardContent>
                        Contact Information

                            <Card><CardContent>
                                Company: Agenagn
                                Trading P.L;C
                                Address:   Agenagn Commercial,Addis Ababa
                                Building, 3rd Floor
                                Office no 300.
                                P.O.box: 54100
                                Tel: 1  +251-940-651-252
                            </CardContent></Card>
                        <Card className={classes.contact}><CardContent>
                            Email:
                            <Link
                                component="button"
                                onClick={() => {
                                    console.info("I'm a button.");
                                }}
                            >
                                papa@gmail.com
                            </Link>
                            <Link
                                component="button"
                                onClick={() => {
                                    console.info("I'm a button.");
                                }}
                            >
                                kalab@gmail.com
                            </Link>
                            <Typography>What’s up No:     +251 974082037</Typography>
                            <Link
                                component="button"
                                onClick={() => {
                                    console.info("I'm a button.");
                                }}
                            >
                               cmd@gmail.com
                            </Link>
                        </CardContent></Card>

                        <Card><CardContent>
                            <Typography>Follow us on: </Typography>
                            <FacebookIcon color="primary"></FacebookIcon>
                            <YouTubeIcon color="primary"></YouTubeIcon>
                            <LinkedInIcon color="primary"></LinkedInIcon>
                            <TwitterIcon color="primary"></TwitterIcon>
                            <InstagramIcon color="primary"></InstagramIcon>
                        </CardContent></Card>

                    </CardContent></Card>
                </div>
            </div>
        </div>
        </div>
        </div>
    );
}

export default Contact;
