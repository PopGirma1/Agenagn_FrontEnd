import { makeStyles, withStyles } from "@material-ui/core";
import React, { Component } from "react";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { Button } from "@material-ui/core";
import PropTypes from "prop-types";

const useStyles = (theme) => ({
	statuses: {
		borderRadius: "30px",
		background: "#888890",
		width: "150px",
		height: "auto",
		textAlign: "center",
	},
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
		background: "#E5E5E5",
		borderRadius: "30px",
	},
	styleDelete: {
		borderRadius: "30px",
		background: "#F299ff",
	},
	styleEdit: {
		background: "#33232",
		borderRadius: "30px",
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
				<span className={classes.statuses}>{reviewStatus}</span>
				<span>
					<Button
						onClick={this.props.edit.bind(this, id)}
						size="small"
						className={classes.styleEdit}>
						<EditIcon color="primary" />
					</Button>
					<Button
						onClick={this.props.delete.bind(this, id)}
						size="small"
						className={classes.styleDelete}>
						<DeleteIcon color="secondary" />
					</Button>
					<Button
						onClick={this.props.view.bind(this.id)}
						size="small"
						className={classes.styleView}>
						<VisibilityIcon />
					</Button>
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
