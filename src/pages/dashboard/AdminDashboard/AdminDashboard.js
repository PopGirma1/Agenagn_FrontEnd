import { withStyles } from "@material-ui/core";

import React, { Component } from "react";
import { Typography } from "@material-ui/core";

import ListHeader from "./ListHeader";
import AdminFilter from "./AdminFilter";
import FilterBy from "./FilterBy";
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
		marginBottom: "30px",
		background: "#E5E5E5",

		paddingTop: "30px",
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
});

class AdminDashboard extends Component {
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
						<ListHeader />
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