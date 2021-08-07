import { makeStyles, withStyles } from "@material-ui/core";
import React, { Component } from "react";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { Button } from "@material-ui/core";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({}));

class UserDashboardInfo extends Component {
	render() {
		const { classes } = this.props;
		const { id, location, bedroom, listingStatus, reviewStatus } =
			this.props.userData;
		return (
			<div style={{ background: "#eee" }}>
				<div style={headingStyle}>
					<span>{location}</span>
					<span>{bedroom}</span>
					<Button>{listingStatus}</Button>
					<Button onClick={this.props.reviewStatus.bind(this, id)}>
						{reviewStatus}
					</Button>
					<span>
						<Button onClick={this.props.edit.bind(this, id)}>
							<EditIcon color="primary" />
						</Button>
						<Button onClick={this.props.delete.bind(this, id)}>
							<DeleteIcon color="secondary" />
						</Button>
						<Button onClick={this.props.view.bind(this.id)}>
							<VisibilityIcon />
						</Button>
					</span>
				</div>
			</div>
		);
	}
}
const headingStyle = {
	display: "flex",
	justifyContent: "space-between",
	fontSize: "20px",
	marginTop: "30px",
	background: "#eee",
	itemAlign: "center",
};

UserDashboardInfo.PropTypes = {
	reviewStatus: PropTypes.func.isRequired,
	edit: PropTypes.func.isRequired,
	delete: PropTypes.func.isRequired,
	view: PropTypes.func.isRequired,
	userData: PropTypes.array.isRequired,
};

export default withStyles(useStyles, { withTheme: true })(UserDashboardInfo);
