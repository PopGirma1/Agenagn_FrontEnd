import React from 'react'
import {AppBar, Button, Grid, Link, List, ListItem, Toolbar, Typography, withStyles} from "@material-ui/core/index";
import SearchBar from "material-ui-search-bar/lib/index";
import {Redirect} from "react-router-dom";


const useStyles = ((theme) => ({
    root: {
        "& ul": {
            padding: '0px',
            margin: '0px',
        },
        "& li": {
            display: 'inline',
            padding: '0px',
            "& a": {
                color: 'black',
                padding: '20px'

            },

            "& a:hover": {
                textDecoration: 'none',
                color:'red',
            },

        },
        backgroundColor: '#eee',
        maxHeight : '100px',
        zIndex: theme.zIndex.drawer + 1,


    },
    searchBar: {
        height : '40px',
        marginTop : '10px',

    },

}));

class NavTabs extends React.Component {
    onLogoutclicked = () =>{
        localStorage.clear();
        return <Redirect to='/'/>
    };

    isAuthnticated = () => {
        if(this.props.getToken()){
            return (
                <List>
                    <ListItem><Button  href={process.env.PUBLIC_URL + '/'}>Home</Button> </ListItem>
                    <ListItem><Button  href={process.env.PUBLIC_URL + '/addhouse'}>Add House</Button></ListItem>
                    <ListItem><Button  href={process.env.PUBLIC_URL + '/about'}>About</Button></ListItem>
                    <ListItem><Button  href={process.env.PUBLIC_URL + '/userdashboard'}>Dashboard</Button></ListItem>
                    <ListItem><Button  href='/' onClick={this.onLogoutclicked}>logout</Button></ListItem>
                </List>

            )
        }else{
            return (
                <List>
                    <ListItem><Button  href={process.env.PUBLIC_URL + '/'}>Home</Button> </ListItem>
                    <ListItem><Button  href={process.env.PUBLIC_URL + '/register'}>Register</Button></ListItem>
                    <ListItem><Button  href={process.env.PUBLIC_URL + '/about'}>About</Button></ListItem>
                    <ListItem><Button  href={process.env.PUBLIC_URL + '/Contact'}>Contact</Button></ListItem>
                    <ListItem><Button  href={process.env.PUBLIC_URL + '/login'}>login</Button></ListItem>
                </List>

            )
        }
    };

    render() {
        const {classes} = this.props;

        return (
            <AppBar className={classes.root} position='fixed'>
                <Toolbar>
                    <Grid container >
                        <Grid item sm={3} >
                            <Typography variant='h4'>Agenagn</Typography>
                        </Grid>

                        <Grid item sm={4} >
                            <SearchBar className={classes.searchBar}/>
                        </Grid>

                        <Grid item sm={5} align='right'>
                            {this.isAuthnticated()}
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>


        );
    }

}

export default withStyles(useStyles)(NavTabs);


