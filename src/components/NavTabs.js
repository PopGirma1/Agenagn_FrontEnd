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
                    <ListItem><Button  href={process.env.PUBLIC_URL + '/comment'}>Feed back</Button></ListItem>
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

<<<<<<< HEAD
                        <Grid item sm={7} align='right'>
                            <List>
                                <ListItem><Button  href={process.env.PUBLIC_URL + '/'}>Home</Button> </ListItem>
                                <ListItem><Button  href={process.env.PUBLIC_URL + '/AddedHouse'}>Add Home</Button></ListItem>
                                <ListItem><Button  href={process.env.PUBLIC_URL + '/login'}>Register</Button></ListItem>
                                <ListItem><Button  href={process.env.PUBLIC_URL + '/About'}>About</Button></ListItem>
                                <ListItem><Button  href={process.env.PUBLIC_URL + '/comment'}>Feed back</Button></ListItem>
                                <ListItem><Button  href={process.env.PUBLIC_URL + '/ListHouse'}>List House </Button></ListItem>
                            </List>

=======
                        <Grid item sm={5} align='right'>
                            {this.isAuthnticated()}
>>>>>>> 8b33aa3957aea824e7fb74e704c5400ca5665e91
                        </Grid>


                        <Grid item sm={2} >
                            <SearchBar className={classes.searchBar}/>
                        </Grid>


                    </Grid>



                </Toolbar>
            </AppBar>

        );
    }

}

export default withStyles(useStyles)(NavTabs);
<<<<<<< HEAD
=======


>>>>>>> 8b33aa3957aea824e7fb74e704c5400ca5665e91
