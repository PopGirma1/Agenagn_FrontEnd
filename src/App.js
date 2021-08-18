<<<<<<< HEAD
import React from "react";
import { Link, Route, HashRouter, BrowserRouter } from "react-router-dom";
import { withStyles, Container } from "@material-ui/core";

import NavTabs from "./components/NavTabs";
import MainBody from "./pages/Home";
import Detail from "./pages/Details/";
import LoginRegister from "./pages/Authentication/LoginRegister";
import UserHome from "./pages/Authentication/HomeRegistrationForm/UserHome";
import Footer from "./components/Footer";
import Comment from "./pages/Comment";
import DHeader from "./pages/Dashboard/Header";
const useStyles = (theme) => ({
	root: {},
	mainParts: {
		marginTop: "100px",
	},
});
||||||| d0415c4
import React from "react";
import { Link, Route, HashRouter, BrowserRouter } from "react-router-dom";
import { withStyles, Container } from "@material-ui/core";

import NavTabs from "./components/NavTabs";
import MainBody from "./pages/Home";
import Detail from "./pages/Details/";
import LoginRegister from "./pages/Authentication/LoginRegister";
import UserHome from "./pages/Authentication/HomeRegistrationForm/UserHome";
import Footer from "./components/Footer";
import Comment from "./pages/Comment";

const useStyles = (theme) => ({
	root: {},
	mainParts: {
		marginTop: "100px",
	},
});
=======
import React from 'react';
import {Link, Route, HashRouter, BrowserRouter} from "react-router-dom";
import {withStyles, Container} from "@material-ui/core";
import NavTabs from './components/NavTabs'
import MainBody from './pages/Home'
import Detail from './pages/Details/'
import LoginRegister from './pages/Authentication/Login'
import UserHome from './pages/Authentication/HomeRegistrationForm/UserHome'
import Footer from './components/Footer'
import Contact from './pages/Contact/Contact'
import Signup from "./pages/Authentication/Signup";
import RegisterHouse from './pages/Addhouse/New'
import About from "./pages/About/About";

const useStyles = ((theme) => ({
    root: {

    },
    mainParts: {
        marginTop: '100px'
    },
}));
>>>>>>> 8b33aa3957aea824e7fb74e704c5400ca5665e91

class App extends React.Component {
<<<<<<< HEAD
	render() {
		const { classes } = this.props;

		return (
			<div className={classes.root}>
				<BrowserRouter basename={process.env.PUBLIC_URL}>
					<NavTabs />
					<div className={classes.mainParts}>
						<Route path="/" exact component={MainBody} />
						<Route
							path={process.env.PUBLIC_URL + "/detail"}
							component={Detail}
						/>
						<Route
							path={process.env.PUBLIC_URL + "/login"}
							component={LoginRegister}
						/>
						<Route
							path={process.env.PUBLIC_URL + "/header"}
							component={DHeader}
						/>
						<Route path="/home" component={UserHome} />
						<Route path="/comment" component={Comment} />
					</div>
				</BrowserRouter>
				<Footer />
			</div>
		);
	}
||||||| d0415c4
	render() {
		const { classes } = this.props;

		return (
			<div className={classes.root}>
				<BrowserRouter basename={process.env.PUBLIC_URL}>
					<NavTabs />
					<div className={classes.mainParts}>
						<Route path="/" exact component={MainBody} />
						<Route
							path={process.env.PUBLIC_URL + "/detail"}
							component={Detail}
						/>
						<Route
							path={process.env.PUBLIC_URL + "/login"}
							component={LoginRegister}
						/>
						<Route path="/home" component={UserHome} />
						<Route path="/comment" component={Comment} />
					</div>
				</BrowserRouter>
				<Footer />
			</div>
		);
	}
=======
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
                        <Route  path='/Contact' component={Contact}/>
                        <Route  path='/About' component={About}/>
                    </Container>
                </BrowserRouter >
                <Footer/>
            </div>
        );
    }
}

export default withStyles(useStyles)(App);
