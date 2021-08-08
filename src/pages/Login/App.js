import React, { Component } from "react";
import Signin from "./Signin";

class App extends Component {
	state = {
		//here will find the email and password from the database
	};

	Submit = (email, password) => {
		//here it make request to the database and check weather the fields are present or not
		console.log(email, password);
	};

	render() {
		return <Signin submit={this.Submit} />;
	}
}

export default App;
