import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import PersonIcon from '@material-ui/icons/Person';
import HouseIcon from '@material-ui/icons/House';

import Checkout from './HomeRegistrationForm/Checkout'
import Profile from './UserProfile/Profile'

const drawerWidth = 240;

const useStyles = ((theme) => ({
    root: {
        display: 'flex',

    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerContainer: {
        overflow: 'auto',
        paddingTop: ' 50px'
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));


class UserHome extends React.Component {

    state = {activePage: ''};
    onButoonClick = (e) => {
        e.preventDefault();
        const value = e.target.innerHTML.replace(/\s/g, "");
        this.setState({activePage: value})
    };
    sideBarSelector = () => {
        switch (this.state.activePage) {
            case 'RegisterHome':
                return <Checkout/>;
            case 'Profile':
                return <Profile/>
            default:
                return <Checkout/>
        }
    };

    render() {
        const {classes} = this.props;
        return (

            <div className={classes.root}>

                <CssBaseline/>

                <Drawer
                    className={classes.drawer}
                    variant="permanent"
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <Toolbar/>
                    <div className={classes.drawerContainer}>
                        <Grid container justify='center'>
                            <Grid item><Avatar></Avatar></Grid></Grid>
                        <List>
                            <ListItem button
                                      onClick={this.onButoonClick}>
                                <ListItemIcon> <HouseIcon/></ListItemIcon>
                                <ListItemText primary='Register Home'/>
                            </ListItem>
                            <ListItem button onClick={this.onButoonClick}>
                                <ListItemIcon> <PersonIcon/></ListItemIcon>
                                <ListItemText primary='Profile'/>
                            </ListItem>
                        </List>
                        <Divider/>
                        <Box mt={8}></Box>
                        <List>
                            {['All mail', 'Trash', 'Spam'].map((text, index) => (
                                <ListItem button>
                                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}</ListItemIcon>
                                    <ListItemText primary={text}/>
                                </ListItem>
                            ))}
                        </List>
                    </div>
                </Drawer>
                <main className={classes.content}>
                    {this.sideBarSelector()}
                </main>

            </div>
        );
    }

}

export default withStyles(useStyles)(UserHome);