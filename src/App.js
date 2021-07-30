import React, { Component } from "react";
import Post from "./component/Post";
import Comment from "./component/Comment";
import "./Styles/comment.css";
import Detail from "./component/Detail";
import AboutUs from "./component/AboutUs";
import HomePage from "./component/HomePage";
import Login from "./component/Login";
import SignUp from "./component/SignUp";
//import Filter from "./component/Filter";
import Home from "./homePage/Home";

class App extends Component {
	state = {};

	findText = (text) => {
		console.log(text);
	};

	render() {
		return (
			<div>
				<Home findText={this.findText} />
				{/*  <Post/>*/}

				{/*<Comment/>*/}

				{/*<Detail/>*/}
				{/*<AboutUs/>*/}
				{/*<HomePage/>*/}
				{/*<Login/>*/}
				{/*<SignUp/>*/}
			</div>
		);
	}
}

export default App;
