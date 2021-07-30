import React, { Component } from "react";
import propType from "prop-types";

class Home extends Component {
	state = {
		inputText: "",
	};

	onSubmit = (e) => {
		e.preventDefault();
		this.props.findText(this.state.inputText);
		this.setState({
			inputText: "",
		});
	};

	onChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	render() {
		return (
			<form className="" onSubmit={this.onSubmit} style={styleForm}>
				<input
					type="text"
					name="inputText"
					value={this.state.inputText}
					onChange={this.onChange}
					placeholder="type house you want ..."
					style={styleSearchBox}
				/>
				<input
					type="submit"
					value="Submit"
					className="btn"
					style={styleSubmitButton}
				/>
			</form>
		);
	}
}

Home.propType = {
	findText: propType.func.isRequired,
};

//styling the input field and the submit button right this

const styleForm = {
	overflow: "hidden",
	margin: "3em",
	position: "absolute",
	top: "50%",
};

const styleSearchBox = {
	padding: "5px",
	flex: "8",
	boxShadow: "0 0 2px 8px rgba(0,0,0,0.5)",
};

const styleSubmitButton = {
	flex: "1",
	background: "#333",
	color: "#fff",
	margin: "0 2em",
};

export default Home;
