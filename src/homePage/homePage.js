import React, { Component } from "react";
import React, { Component, lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./homePage.css";

class HomePage extends Component {
	render() {
		return (
			<div className="nav">
				<div className="homepage">
					<Router>
						<Route exact={true} path="/">
							<div className="nav">
								<div className="float-right">
									<h1>AGENAGN</h1>
									<Search hint="search house" classname="searchbar" />
								</div>
								<div className="content">
									<NaveBare classname="home">Home</NaveBare>
									<NaveBare classname="home">Registor</NaveBare>
									<NaveBare classname="home">
										<Link to="/about" className="about-link">
											About Us
										</Link>
									</NaveBare>
									<NaveBare classname="home">Login</NaveBare>
								</div>
							</div>
						</Route>
					</Router>
					<div className="left-content"></div>
				</div>
			</div>
		);
	}
}
/*
Nave bar is a class component which returns button
*/

const NaveBare = ({ classname, children, onclick }) => (
	<button type="button" className={classname}>
		{children}
	</button>
);

const Search = ({ classname, hint }) => (
	<input placeholder={hint} className={classname} />
);
/*make export default means someone imort is the name you want */
export default HomePage;
