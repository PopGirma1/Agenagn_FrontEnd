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
	selectStyling: {
		background: "#EEEEEE",
		border: "none",
		outline: "none",
		display: "inline-block",
	},
	checkboxStyling: {
		border: "none",
		background: "#C4C4C4",
		outline: "none",
		display: "inline-block",
	},
});

class FilterBy extends Component {
	state = {
		isChecked: false,
	};

	onChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};
	render() {
		const { classes } = this.props;
		return (
			<div>
				<div>
					<Typography variant="h4">Filter By</Typography>
				</div>
				<div className={this.props.mainContent}>
					<div className={classes.divStyling}>
						<Typography variant="h5">Location of condominium</Typography>
						<select className={classes.selectStyling}></select>
					</div>
					<div className={classes.divStyling}>
						<Typography variant="h5">Number of Bed Room</Typography>
						<select className={classes.selectStyling}></select>
					</div>
					<div className={classes.divStyling}>
						<Typography variant="h5">Monthly Rent</Typography>
						<select className={classes.selectStyling}></select>
					</div>
					<div className={classes.divStyling}>
						<Typography variant="h5">Guest House</Typography>
						<Checkbox
							name="checkbox"
							value={this.state.isCheckbox}
							size="large"
							onChange={this.onChange}
							className={classes.checkboxStyling}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default withStyles(useStyles, { withTheme: true })(FilterBy);
