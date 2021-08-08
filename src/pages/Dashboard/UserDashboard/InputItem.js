import React, { Component } from "react";
import { createStyles, makeStyles, withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import CloseIcon from "@material-ui/icons/Close";
import { Button } from "@material-ui/core";
import PropTypes from "prop-types";
import * as yup from "yup";

const useStyles = makeStyles((theme) =>
	createStyles({
		root: {
			"& > *": {
				margin: theme.spacing(1),
				width: "25ch",
			},
		},
	})
);

let schema = yup.object().shape({
	location: yup.string().required().min(4), //location minimum length don't be less than four right
	bedrooms: yup.number().required().positive().integer().max(10), //it is expected to be error when some one try to enter number of bed rooms >10
});
/*here the text fields which helps us either edit or draft the locations and bedrooms */
class InputItem extends Component {
	state = {
		location: "",
		bedrooms: "",
		error: "",
	};

	onSubmit = (e) => {
		e.preventDefault();
		schema
			.validate(this.state)
			.then((data) => {
				this.props.Submit(this.state.location, this.state.bedrooms);
				this.setState({
					location: "",
					bedrooms: "",
					error: "",
				});
			})
			.catch((error) =>
				this.setState({
					error: "not valid input",
				})
			);
	};

	onChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	render() {
		const { classes } = this.props;
		const { id } = this.props.userData;
		return (
			<div style={styling}>
				<div style={{ color: "red" }}>{this.state.error}</div>
				<form
					className={classes.root}
					noValidate
					autoComplete="off"
					onSubmit={this.onSubmit}
					style={stylingForm}>
					<TextField
						id="filled-basic"
						label="Location"
						variant="filled"
						name="location"
						value={this.state.location}
						onChange={this.onChange}
						style={{ margin: "0 3px", flex: "2" }}
					/>
					<TextField
						id="filled-basic"
						label="bedrooms"
						variant="filled"
						name="bedrooms"
						value={this.state.bedrooms}
						onChange={this.onChange}
						style={{ margin: "0 2px", flex: "2" }}
					/>
					<TextField
						id="filled-basic"
						variant="filled"
						type="submit"
						value="Submit"
						style={{
							marginLeft: "3px",
							flex: "1",
							background: "#333",
							fontStyle: "#fff",
						}}
					/>
				</form>
				<Button style={buttonStyle} onClick={this.props.cancel}>
					<CloseIcon color="primary" style={styleClosingIcon} />
				</Button>
			</div>
		);
	}
}

const styling = {
	width: "50%",
	height: "10em",
	boxShadow: "0 0 4px 8px rgba(0,0,0,0.5)",
	zIndex: "2",
	margin: "auto",
	display: "flex",
};
const buttonStyle = {
	width: "8px",
	height: "30px",
	display: "block",
};

const stylingForm = {
	display: "flex",
	margin: "auto",
	position: "relative",
};

const styleClosingIcon = {
	position: "absolute",
	top: "0",
	right: "0",
};

InputItem.propTypes = {
	userData: PropTypes.array.isRequired,
	Submit: PropTypes.func.isRequired,
	cancel: PropTypes.func.isRequired,
};

export default withStyles(useStyles, { withTheme: true })(InputItem);

//happy hacking day someone wisely said that!
