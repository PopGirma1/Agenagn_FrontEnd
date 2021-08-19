import { withStyles, Button, Typography } from "@material-ui/core";
//import classNames from "classnames";
import React from "react";
import { Component } from "react";

const useStyles = (theme) => ({
	root: {},
	buttonStyling: {
		background: "#3F51B5",
		color: "#ffffff",
		borderRadius: "10px",
	},
});

class HouseSubmitted extends Component {
	render() {
		const { classes } = this.props;
		return this.props.houseData.map((data) => (
			<div className={this.props.dataStyling}>
				<Typography variant="h6">{data.location}</Typography>
				<Typography variant="h6">{data.bedrooms}</Typography>
				<Typography variant="h6">{data.monthlyRent}</Typography>
				<Typography variant="h6">{data.submittedDate}</Typography>
				<Button className={classes.buttonStyling}>{data.isApproved}</Button>
			</div>
		));
	}
}

export default withStyles(useStyles, { withTheme: true })(HouseSubmitted);
