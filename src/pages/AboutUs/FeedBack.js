import {
	withStyles,
	makeStyles,
	createStyles,
	TextField,
	Typography,
} from "@material-ui/core";
import React, { Component } from "react";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
//import PropTypes from "prop-types";
import * as yup from "yup";

import DoneIcon from "@material-ui/icons/Done";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		margin: "auto",
	},
}));

const schema = yup.object().shape({
	email: yup.string().required().email(),
	feedback: yup.string().required(),
});

class FeedBack extends Component {
	state = {
		view: { display: "none" },
		error: "",
		email: "",
		feedback: "",
	};

	onChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	onSubmit = (e) => {
		e.preventDefault();
		schema
			.validate(this.state)
			.then((data) => {
				this.props.onSubmit(data.email, data.feedback);
				this.setState({
					email: "",
					feedback: "",
					error: "",
				});
			})
			.catch((error) =>
				this.setState({
					error: "either email isn't valid or feedback leave empty",
				})
			);
	};
	render() {
		const { classes } = this.props;
		return (
			<div style={parentDivStyling}>
				<div style={{ width: "100%", margin: "2em 0", textAlign: "center" }}>
					<Typography variant="h4">FeedBack</Typography>
				</div>
				<form
					className={classes.root}
					noValidate
					autoComplete="off"
					onSubmit={this.onSubmit}
					style={stylingForm}>
					<TextField
						id="filled-basic"
						label="email"
						variant="filled"
						name="email"
						value={this.state.email}
						onChange={this.onChange}
						style={{ width: "80%", margin: "2em 0" }}
					/>
					{/* <DoneIcon color="primary" style={this.state.view.email} /> */}
					<div>
						<span style={{ color: "red" }}>{this.state.error}</span>
					</div>
					<TextareaAutosize
						minRows={10}
						aria-label="maximum height"
						placeholder="Put your comment here"
						name="feedback"
						onChange={this.onChange}
						value={this.state.feedback}
						style={{ outline: "none", width: "80%", margin: "2em 0" }}
					/>
					{/* <DoneIcon color="primary" style={this.state.view.feedback} /> */}

					<TextField
						id="filled-basic"
						variant="filled"
						type="submit"
						value="Submit"
						style={{
							background: "#aaa",
							width: "80%",
							margin: "2em 0",
						}}
					/>
				</form>
			</div>
		);
	}
}

const stylingForm = {
	marginLeft: "10%",
};

const parentDivStyling = {
	width: "100%",
	display: "flex",
	margin: "auto",
	justifyContent: "center",
	flexDirection: "column",
	background: "#eee",
};

// FeedBack.PropTypes = {
// 	onSubmit: PropTypes.func.isRequired,
// };

export default withStyles(useStyles, { withTheme: true })(FeedBack);
