import React from 'react';
import {Link, Route, HashRouter, BrowserRouter} from "react-router-dom";
import {withStyles, Container} from "@material-ui/core";

import NavTabs from './components/NavTabs'
import MainBody from './pages/Home'
import Detail from './pages/Details/'
/*import LoginRegister from './pages/Authentication/LoginRegister'*/
<<<<<<< HEAD
import SignUp from './pages/Authentication/SignUp/Signup'
import ListHouse from "./pages/NewList/ListHouse";
=======
import LoginRegister from './pages/Authentication/Login'
>>>>>>> 8b33aa3957aea824e7fb74e704c5400ca5665e91
import UserHome from './pages/Authentication/HomeRegistrationForm/UserHome'
import AddedHouse from './pages/AddedHouse/AddedHouse'
import Footer from './components/Footer'
import Comment from './pages/Comment'
<<<<<<< HEAD
import About from "./pages/About/About";
=======
import Signup from "./pages/Authentication/Signup";
import RegisterHouse from './pages/Addhouse/New'
>>>>>>> 8b33aa3957aea824e7fb74e704c5400ca5665e91

const useStyles = ((theme) => ({
    root: {

    },
    mainParts: {
        marginTop: '100px'
    },
}));

class App extends React.Component {
    state = {token: ''};
    setToken = (token) => {
        localStorage.setItem('token', JSON.stringify(token));

        this.setState({token: token})
    };

    getToken = () => {
        const tokenString = localStorage.getItem('token');
        const userToken = JSON.parse(tokenString);

        if (userToken) {
            return userToken.token
        } else {
            return ''
        }
    };

    render() {
        const {classes} = this.props;

        return (
            <div className={classes.root}>

                <BrowserRouter basename={process.env.PUBLIC_URL}>
<<<<<<< HEAD
                    <NavTabs/>
                    <div className={classes.mainParts}>

                        <Route  path='/' exact component={MainBody}/>
                        <Route  path={process.env.PUBLIC_URL + '/detail'} component={Detail}/>
                        <Route  path={process.env.PUBLIC_URL + '/login'} component={SignUp}/>
                        <Route  path={process.env.PUBLIC_URL + '/ListHouse'} component={ListHouse}/>
                        <Route  path={process.env.PUBLIC_URL + '/AddedHouse'} component={AddedHouse}/>
                        <Route  path={process.env.PUBLIC_URL + '/ABout'} component={About}/>
                        <Route  path='/home' component={UserHome}/>
                        <Route  path='/comment' component={Comment}/>

                    </div>
=======
                    <NavTabs getToken={this.getToken}/>
                    <Container className={classes.mainParts}>
                        <Route  path='/' exact component={MainBody}/>
                        <Route  path={process.env.PUBLIC_URL + '/detail'} component={Detail}/>
                        {/*<Route  path={process.env.PUBLIC_URL + '/login'} component={LoginRegister}/>*/}
                        <Route path='/login' exact> <LoginRegister setToken={this.setToken}
                                                           getToken={this.getToken}/></Route>
                        <Route  path='/userdashboard' component={UserHome}/>
                        <Route  path='/register' component={Signup}/>
                        <Route  path='/addhouse'> <RegisterHouse getToken={this.getToken}/></Route>
                        <Route  path='/comment' component={Comment}/>
                    </Container>
>>>>>>> 8b33aa3957aea824e7fb74e704c5400ca5665e91
                </BrowserRouter >
                <Footer/>

            </div>
        );
    }


}

export default withStyles(useStyles)(App);
