import { withStyles } from "@material-ui/core";
import React from "react";
import { Component } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import { Typography } from "@material-ui/core";

const useStyles = (theme) => ({
	divStyling: {
		display: "grid",
		gridTemplateColumns: "7fr 1fr",
		gridGap: "20px",
		marginBottom: "80px",
	},
});

class FilterBy extends Component {
	render() {
		const { classes } = this.props;
		return (
			<div>
				<div>
					<Typography variant="h3">Filter By</Typography>
				</div>
				<div className={this.props.mainContent}>
					<div className={classes.divStyling}>
						<Typography variant="h5">Location of condominium</Typography>
						<select></select>
					</div>
					<div className={classes.divStyling}>
						<Typography variant="h5">Number of Bed Room</Typography>
						<select></select>
					</div>
					<div className={classes.divStyling}>
						<Typography variant="h5">Monthly Rent</Typography>
						<select></select>
					</div>
					<div className={classes.divStyling}>
						<Typography variant="h5">Guest House</Typography>
						<Checkbox
							inputProps={{ "aria-label": "uncontrolled-checkbox" }}
							size="large"
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default withStyles(useStyles, { withTheme: true })(FilterBy);
