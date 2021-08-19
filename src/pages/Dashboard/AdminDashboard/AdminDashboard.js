import { withStyles } from "@material-ui/core";

import React, { Component } from "react";
import { Typography } from "@material-ui/core";

import ListHeader from "./ListHeader";
import AdminFilter from "./AdminFilter";
import FilterBy from "./FilterBy";
import HouseSubmitted from "./HouseSubmitted";
const classNames = require("classnames");

const useStyles = (theme) => ({
	parent: {
		marginLeft: "5%",
	},
	root: {
		display: "grid",
		gridTemplateColumns: "5fr 2fr",
		gridGap: "80px",
	},
	mainBody: {
		height: "100%",

		marginTop: "30px",

		background: "#E5E5E5",

		paddingTop: "20px",
		borderRadius: "15px",
	},
	adminFilterStyling: {
		width: "90%",
		height: "30%",
		borderRadius: "20px",

		padding: "2em",
		background: "#EEEEEE",
		marginTop: "30px",
		marginBottom: "20%",
	},
	headingStyle: {
		display: "grid",
		gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
		gridTemplateRows: "auto",
		padding: "2em",
		textAlign: "center",
	},
});

class AdminDashboard extends Component {
	state = {
		data: [
			{
				id: 1,
				location: "bole",
				bedroom: 2,
				monthlyRent: 4000,
				submittedDate: new Date(),
			},
			{
				id: 2,
				location: "bole",
				bedroom: 2,
				monthlyRent: 6000,
				submittedDate: new Date(),
			},
			{
				id: 3,
				location: "bole",
				bedroom: 2,
				monthlyRent: 7000,
				submittedDate: new Date(),
			},
		],
	};

	onClick = () => {
		console.log("is approved");
	};
	render() {
		const { classes } = this.props;

		return (
			<div className={classes.parent}>
				<div className={classes.root}>
					<Typography variant="h4">All Listing Reviews</Typography>
					<Typography variant="h4">Listing Filters</Typography>
				</div>
				<div className={classes.root}>
					<div className={classes.mainBody}>
						<ListHeader headingStyle={classes.headingStyle} />
						<HouseSubmitted
							dataStyling={classes.headingStyle}
							houseData={this.state.data}
							onClick={this.onClick}
						/>
					</div>
					<div>
						<AdminFilter adminFilter={classes.adminFilterStyling} />
						<FilterBy mainContent={classes.adminFilterStyling} />
					</div>
				</div>
			</div>
		);
	}
}

export default withStyles(useStyles, { withTheme: true })(AdminDashboard);
