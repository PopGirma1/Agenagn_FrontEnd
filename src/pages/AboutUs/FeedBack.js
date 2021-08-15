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

const useStyles = (theme) => ({
	root: {
		"& > *": {
			margin: theme.spacing(1),
			width: "25ch",
		},
		"& .MuiFilledInput-root": {
			background: "#eee",
		},
	},
	buttonStyle: {
		"& .MuiFilledInput-root": {
			background: "rgb(100, 10, 255)",
			color: "#fff",
			align: "center ",
			borderRadius: "10px",
		},
	},
});

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
						variant="outlined"
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
						placeholder="write a comment"
						name="feedback"
						onChange={this.onChange}
						value={this.state.feedback}
						style={{
							outline: "none",
							width: "80%",
							margin: "2em 0",
							background: "#eee",
						}}
						className={classes.commentFieldStyling}
					/>
					{/* <DoneIcon color="primary" style={this.state.view.feedback} /> */}

					<TextField
						id="filled-basic"
						variant="filled"
						type="submit"
						value="Submit"
						style={{
							background: "#aaa",
							width: "40%",
							margin: "2em 0",
							background: "blue",
							color: "#fff",
							borderRadius: "10px",
							float: "right",
							marginRight: "5em",
						}}
						className={classes.buttonStyle}
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
