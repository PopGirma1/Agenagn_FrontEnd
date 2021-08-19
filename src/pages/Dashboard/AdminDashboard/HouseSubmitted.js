import { withStyles, Button, Typography } from "@material-ui/core";
//import classNames from "classnames";
import React from "react";
import { Component } from "react";
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";

const useStyles = (theme) => ({
	root: {},
	buttonStyling: {
		background: "#FFE5EA",
		borderRadius: "25px",
		width: "80%",
		background: "#888890",
		display: "flex",
		margin: "auto",
		"& :hover": {
			background: "#88889F",
			borderRadius: "25px",
			width: "80%",
			display: "flex",
			margin: "auto",
		},
	},
	typoStyling: {
		display: "flex",
		margin: "auto",
	},
});

class HouseSubmitted extends Component {
	render() {
		const { classes } = this.props;
		return this.props.houseData.map((data) => (
			<div className={this.props.dataStyling} key={data.id}>
				<Typography variant="h6">{data.location}</Typography>
				<Typography variant="h6">{data.bedroom}</Typography>
				<Typography variant="h6">{data.monthlyRent}</Typography>
				<Typography variant="h6">
					{data.submittedDate.toLocaleDateString("en-US")}
				</Typography>
				<Box className={classes.buttonStyling} onClick={this.props.onClick}>
					<Typography variant="h6" className={classes.typoStyling}>
						Approved
					</Typography>
				</Box>
			</div>
		));
	}
}

HouseSubmitted.propTypes = {
	houseData: PropTypes.array.isRequired,
	onClick: PropTypes.func.isRequired,
	dataStyling: PropTypes.array.isRequired,
};
export default withStyles(useStyles, { withTheme: true })(HouseSubmitted);
