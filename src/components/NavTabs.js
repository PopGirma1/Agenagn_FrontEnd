import React from 'react'
import {AppBar, Button, Grid, Link, List, ListItem, Toolbar, Typography, withStyles} from "@material-ui/core/index";
import SearchBar from "material-ui-search-bar/lib/index";

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

    render() {
        const {classes} = this.props;

        return (
            <AppBar className={classes.root} position='fixed'>
                <Toolbar>
                    <Grid container >
                        <Grid item sm={3} >
                            <Typography variant='h4'>Agenagn</Typography>

                        </Grid>

                        <Grid item sm={7} align='right'>
                            <List>
                                <ListItem><Button  href={process.env.PUBLIC_URL + '/'}>Home</Button> </ListItem>
                                <ListItem><Button  href={process.env.PUBLIC_URL + '/AddedHouse'}>Add Home</Button></ListItem>
                                <ListItem><Button  href={process.env.PUBLIC_URL + '/login'}>Register</Button></ListItem>
                                <ListItem><Button  href={process.env.PUBLIC_URL + '/About'}>About</Button></ListItem>
                                <ListItem><Button  href={process.env.PUBLIC_URL + '/comment'}>Feed back</Button></ListItem>
                                <ListItem><Button  href={process.env.PUBLIC_URL + '/ListHouse'}>List House </Button></ListItem>
                            </List>

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
