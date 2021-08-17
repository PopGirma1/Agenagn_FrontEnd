import { withStyles } from "@material-ui/core";

import React, { Component } from "react";
import { useStyles, withStyles, Typography } from "@material-ui/styles";
import classNames from "classnames";
import ListHeader from "./ListHeader";
import AdminFilter from "./AdminFilter";

const useStyles = (theme) => ({
	root: {
		display: "grid",
		gridTemplateColumns: "5fr 2fr",
		gridGap: "80px",
	},
	mainBody: {
		background: "#EEEEEE",
		borderRadius: "20px",
		display: "grid",
		gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
		margin: "2em",
		textAlign: "center",
		height: "200%",
	},
	adminFilter: {
		background: "#EEEEEE",
		borderRadius: "20px",
		margin: "1em",
		display: "flex",
		justifiedContent: "space-between",
	},
});

class AdminDashboard extends Component {
	render() {
		const { classes } = this.props;
		return (
			<div>
				<div className={classes.root} style={headerStyling}>
					<Typography variant="h2">All Listing Reviews</Typography>
					<Typography variant="h2">Listing Filters</Typography>
				</div>
				<div className={classNames.root}>
					<div className={classes.mainBody}>
						<ListHeader />
					</div>
					<div className={classes.adminFilter}>
						<AdminFilter />
					</div>
				</div>
			</div>
		);
	}
}

const headerStyling = {
	textAlign: "left",
	marginTop: "50px",
	marginBottom: "10px",
};

export default withStyles(useStyles, { withTheme: true })(AdminDashboard);
