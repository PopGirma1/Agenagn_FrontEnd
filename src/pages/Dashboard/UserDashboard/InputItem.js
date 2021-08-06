import React, { Component } from "react";
import { createStyles, makeStyles, withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import CloseIcon from "@material-ui/icons/Close";
import { Button } from "@material-ui/core";
import PropTypes from "prop-types";
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

/*here the text fields which helps us either edit or draft the locations and bedrooms */
class InputItem extends Component {
	state = {
		location: "",
		bedrooms: "",
	};

	onSubmit = (e) => {
		const { location, bedrooms } = this.state;
		e.preventDefault();
		this.props.Submit(location, bedrooms);
		this.setState({
			location: "",
			bedrooms: "",
		});
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
						style={{ marginRight: "3px" }}
					/>
					<TextField
						id="filled-basic"
						label="bedrooms"
						variant="filled"
						name="bedrooms"
						value={this.state.bedrooms}
						onChange={this.onChange}
						style={{ marginLeft: "3px" }}
					/>
				</form>
				<Button style={buttonStyle}>
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
const buttonStyle = {
	width: "8px",
	height: "30px",
};

InputItem.PropTypes = {
	userData: PropTypes.array.isRequired,
	Submit: PropTypes.func.isRequired,
};

export default withStyles(useStyles, { withTheme: true })(InputItem);

//happy hacking day someone wisely said that!
