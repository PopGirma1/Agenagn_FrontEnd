import { makeStyles, withStyles } from "@material-ui/core";
import React, { Component } from "react";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import VisibilityIcon from "@material-ui/icons/Visibility";

import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";

const useStyles = (theme) => ({
	statuses: {
		borderRadius: "30px",
		background: "#888890",
		width: "80%",
		height: "auto",
		textAlign: "center",
	},
	actionRequiredStatus: {
		background: "#FFB0B0",
		width: "80%",
		borderRadius: "30px",
		textAlign: "center",
	},
	pendingStatus: {
		borderRadius: "30px",
		background: "#D7D6D6",
	},
	//the above three styles use as conditional as per status from the admin page
	bodyStyle: {
		background: "#E5E5E5",
		display: "grid",
		gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
		fontSize: "20px",
		marginTop: "30px",

		textAlign: "center",
		paddingBottom: "30px",
	},
	styleView: {
		background: "#959595",
		borderRadius: "10px",
		width: "25%",
	},
	styleDelete: {
		borderRadius: "10px",
		background: "#F2AAff",
		width: "25%",
	},
	styleEdit: {
		background: "#a5a5a5",
		borderRadius: "10px",
		width: "25%",
	},
	actionStyling: {
		display: "flex",
		justifyContent: "space-evenly",
		overflow: "hidden",
	},
});

class UserDashboardInfo extends Component {
	render() {
		const { classes } = this.props;
		const { id, location, bedroom, listingStatus, reviewStatus } =
			this.props.userData;
		return (
			<div className={classes.bodyStyle}>
				<span>{location}</span>
				<span>{bedroom}</span>
				<span className={classes.statuses}>{listingStatus}</span>
				<span className={classes.actionRequiredStatus}>{reviewStatus}</span>
				<span className={classes.actionStyling}>
					<Box
						onClick={this.props.edit.bind(this, id)}
						size="small"
						className={classes.styleEdit}>
						<EditIcon color="primary" />
					</Box>
					<Box
						onClick={this.props.delete.bind(this, id)}
						size="small"
						className={classes.styleDelete}>
						<DeleteIcon color="secondary" />
					</Box>
					<Box
						onClick={this.props.view.bind(this.id)}
						size="small"
						className={classes.styleView}>
						<VisibilityIcon />
					</Box>
				</span>
			</div>
		);
	}
}

UserDashboardInfo.PropTypes = {
	edit: PropTypes.func.isRequired,
	delete: PropTypes.func.isRequired,
	view: PropTypes.func.isRequired,
	userData: PropTypes.array.isRequired,
};

export default withStyles(useStyles, { withTheme: true })(UserDashboardInfo);
