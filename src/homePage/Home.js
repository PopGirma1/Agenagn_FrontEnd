import React, { Component } from "react";
import propType from "prop-types";
import Image from "./images/gojo.jpeg";

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
			<div className="container" style={stylingContainer}>
				<img
					src={Image}
					alt="image not found "
					style={stylingImage}
					className="home-image"
				/>
				<form className="form" onSubmit={this.onSubmit} style={styleForm}>
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
			</div>
		);
	}
}

Home.propType = {
	findText: propType.func.isRequired,
};

//styling the input field and the submit button right this

const styleForm = {
	overflow: "hidden",
	marginRight: "auto",
	marginLeft: "auto",
	width: "50%",
	display: "flex",
	justifiedContent: "space-around",
};

const styleSearchBox = {
	padding: "5px",
	flex: "8",
	boxShadow: "0 0 4px 16px rgba(0,0,0,0.5)",
	borderRadius: "10px",
	outline: "none",
	border: "2px solid #333",
};

const styleSubmitButton = {
	flex: "1",
	background: "#333",
	color: "#fff",
	margin: "0 2em",
};

const stylingImage = {
	width: "25%",
	height: "auto",
	backgroundRepeat: "no-repeat",
	display: "block",
	marginLeft: "auto",
	marginRight: "auto",
	outline: "none",
};

const stylingContainer = {
	width: "100%",
	display: "flex",
	flexDirection: "column",
	justifiedContent: "space-around",
};

export default Home;
