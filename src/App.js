import React from 'react';
import {Link, Route, HashRouter, BrowserRouter} from "react-router-dom";
import {withStyles, Container} from "@material-ui/core";

import NavTabs from './components/NavTabs'
import MainBody from './pages/Home'
import Detail from './pages/Details/'
import LoginRegister from './pages/Authentication/LoginRegister'
import UserHome from './pages/Authentication/HomeRegistrationForm/UserHome'
import Footer from './components/Footer'
import Comment from './pages/Comment'

const useStyles = ((theme) => ({
    root: {

    },
    mainParts: {
        marginTop: '100px'
    },
}));

class App extends React.Component {
    render() {
        const {classes} = this.props;

        return (
            <div className={classes.root}>

                <BrowserRouter basename={process.env.PUBLIC_URL}>
                    <NavTabs/>
                    <div className={classes.mainParts}>
                        <Route  path='/' exact component={MainBody}/>
                        <Route  path={process.env.PUBLIC_URL + '/detail'} component={Detail}/>
                        <Route  path={process.env.PUBLIC_URL + '/login'} component={LoginRegister}/>
                        <Route  path='/home' component={UserHome}/>
                        <Route  path='/comment' component={Comment}/>
                    </div>
                </BrowserRouter >
                <Footer/>

            </div>
        );
    }


}

export default withStyles(useStyles)(App);