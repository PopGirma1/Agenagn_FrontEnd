import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { ExternalLink } from 'react-external-link';
import FacebookIcon from "@material-ui/icons/Facebook";
import TelegramIcon from '@material-ui/icons/Telegram';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";


const useStyles = makeStyles((theme) => ({
    root: {
        width:'auto',
        marginTop:'10vh',
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },

    titile:{
        color:'red',
        textAlign:'center',
    },
    btn:{
        marginTop:'0px',
        height:'20px'

    },
    paragraph:{
        padding:'0 3%',
        lineHeight:'1.5',
        textTransform: "full-width",
    },
    contactUs:{
        marginTop:'20px',
        display:'flex',
        padding:'60px',
        justifyContent:'flex-end'

    }
}));

export default function Common() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const handleViewBtnClick=()=>{

    };

    return (
        <Card className={classes.root}>
            <CardHeader className={classes.titile}
                        title="Agenagn "
                        subheader="Agenagn Background!                                                             "
            />
            <CardContent>
                <Typography className={classes.paragraph}>
                    Agenagn is a solution for looking for house available for rent.
                    The system connects strangers who looking for house rent and
                    administrator of the system. The service capable of showing the
                    detailed information about the house such as number of bedrooms,
                    bathrooms, price of rent, location where the house is found.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>

                    <Typography className={classes.paragraph}>
                        In addition, the strangers can filter the available house with
                        respect to the ranges of price they can afford. The service would
                        not provide online payment since online payment is another
                        challenge in Ethiopia.

                    </Typography>
                    <Typography className={classes.paragraph}>
                        Mentorship Dates for applicants:
                        Session 1: February 17 - 18/2022, for students based in Addis Ababa
                        Session 2: February 21 - 22/2022. For students based in other parts of
                        Ethiopia& abroad.
                    </Typography>
                    <Typography className={classes.paragraph}>
                        The system reduces strangers’ time, energy
                        and money spent by looking for house. It reduces an additional
                        money spent for brokers from both strangers and owner.
                    </Typography>
                    <Typography className={classes.paragraph}>
                        Furthermore, it facilitates house rent to be taken earlier. In
                        terms of boundary Agenagn works for house found around Addis Ababa
                        for now. But, for sure Agenagn will expand to the rest of
                        Ethiopia.
                    </Typography>
                    <div className={classes.contactUs}>
                        <Typography style={{marginTop:'-20px'}}>Follow Us</Typography>
                        <ExternalLink href="https://www.facebook.com/">
                            <span><FacebookIcon color="primary"></FacebookIcon></span>
                        </ExternalLink>

                        <ExternalLink href="https://web.telegram.org/">
                            <span><TelegramIcon color="primary"></TelegramIcon></span>
                        </ExternalLink>
                        <ExternalLink href="https://www.linkedin.com/">
                            <span><LinkedInIcon color="primary"></LinkedInIcon></span>
                        </ExternalLink>
                        <ExternalLink href="https://twitter.com/">
                            <span><TwitterIcon color="primary"></TwitterIcon></span>
                        </ExternalLink>
                        <ExternalLink href="https://www.instagram.com/">
                            <span><InstagramIcon color="primary"></InstagramIcon></span>
                        </ExternalLink>

                    </div>

                </CardContent>
            </Collapse>
        </Card>
    );
}
