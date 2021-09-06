import React from 'react';
import {Link, Route, HashRouter, BrowserRouter} from "react-router-dom";
import {withStyles, Container} from "@material-ui/core";

import NavTabs from './components/NavTabs'
import MainBody from './pages/Home'
import Detail from './pages/Details/'
/*import LoginRegister from './pages/Authentication/LoginRegister'*/
import LoginRegister from './pages/Authentication/Login'
import UserHome from './pages/Authentication/HomeRegistrationForm/UserHome'
// import Footer from './components/Footer';
import Footer from "./components/Footer";
import Signup from "./pages/Authentication/Signup";
import RegisterHouse from './pages/Addhouse/New'

import Dashboard from "./pages/Dashboard/Dashboard";
import EditHouse from "./pages/Addhouse/EditHouse";
import Search from "./pages/Home/Search";
import About from "./pages/About/About";
import Common from "./components/Common";

const useStyles = ((theme) => ({
    root: {
        backgroundImage:'/img/background.jpg'
    },
    mainParts: {
        marginTop: '100px'
    },
}));

class App extends React.Component {
    state = {token: '', searchKeyword:''};
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

                    <NavTabs getToken={this.getToken}/>
                    <Container className={classes.mainParts}>
                        <Route path='/' exact> <Search  /></Route>
                        <Route path='/search' exact component={(props)=><MainBody {...props} />}/>
                        <Route path={process.env.PUBLIC_URL + '/detail'} component={Detail}/>
                        {/*<Route  path={process.env.PUBLIC_URL + '/login'} component={LoginRegister}/>*/}
                        <Route path='/login' exact> <LoginRegister setToken={this.setToken}
                                                                   getToken={this.getToken}/></Route>
                        <Route path='/signup' exact> <Signup setToken={this.setToken} getToken={this.getToken}/></Route>
                        {/*<Route  path='/userdashboard' component={UserHome}/>*/}
                        <Route path='/dashboard' exact> <Dashboard getToken={this.getToken}/></Route>

                        <Route path='/register' component={Signup}/>
                        <Route path='/addhouse'> <RegisterHouse getToken={this.getToken}/></Route>
                        <Route path='/edithouse/:id' exact
                               component={(props) => <EditHouse {...props} getToken={this.getToken}/>}/>
                        <Route path='/about' component={About}/>

                        {/*<Route path='/comment' component={Comment}/>
                        <Route path='/go' component={IndexPage}/>*/}
                    </Container>
                </BrowserRouter>
                <Common></Common>
                <Footer/>
            </div>
        );
    }


}

export default withStyles(useStyles)(App);
