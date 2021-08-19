import React from "react";
import { Link, Route, HashRouter, BrowserRouter } from "react-router-dom";
import { withStyles, Container } from "@material-ui/core";
import Admin from "./pages/Dashboard/AdminDashboard";
import User from "./pages/Dashboard/UserDashboard";
import NavTabs from "./components/NavTabs";
import MainBody from "./pages/Home";
import Detail from "./pages/Details/";
/*import LoginRegister from './pages/Authentication/LoginRegister'*/
import LoginRegister from "./pages/Authentication/Login";
import UserHome from "./pages/Authentication/HomeRegistrationForm/UserHome";
import Footer from "./components/Footer";
// import Comment from "./pages/Comment";
import Signup from "./pages/Authentication/Signup";
import RegisterHouse from "./pages/Addhouse/New";

const useStyles = (theme) => ({
	root: {},
	mainParts: {
		marginTop: "100px",
	},
});

class App extends React.Component {
	state = { token: "" };
	setToken = (token) => {
		localStorage.setItem("token", JSON.stringify(token));

		this.setState({ token: token });
	};

	getToken = () => {
		const tokenString = localStorage.getItem("token");
		const userToken = JSON.parse(tokenString);

		if (userToken) {
			return userToken.token;
		} else {
			return "";
		}
	};

	render() {
		const { classes } = this.props;

		return (
			<div className={classes.root}>
				<BrowserRouter basename={process.env.PUBLIC_URL}>
					<NavTabs getToken={this.getToken} />
					<Container className={classes.mainParts}>
						<Route path="/" exact component={MainBody} />
						<Route
							path={process.env.PUBLIC_URL + "/detail"}
							component={Detail}
						/>
						<Route
							path={process.env.PUBLIC_URL + "/login"}
							component={LoginRegister}
						/>
						<Route path="/login" exact>
							{" "}
							<LoginRegister
								setToken={this.setToken}
								getToken={this.getToken}
							/>
						</Route>
						<Route path={process.env.PUBLIC_URL + "/admin"} component={Admin} />
						<Route path={process.env.PUBLIC_URL + "/user"} component={User} />
						<Route path="/userdashboard" component={UserHome} />
						<Route path="/register" component={Signup} />
						<Route path="/addhouse">
							<RegisterHouse getToken={this.getToken} />
						</Route>
						{/* <Route path="/comment" component={Comment} /> */}
					</Container>
				</BrowserRouter>
				<Footer />
			</div>
		);
	}
}

export default withStyles(useStyles)(App);
