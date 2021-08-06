import { makeStyles, withStyles } from "@material-ui/core";
import React, { Component } from "react";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { Button } from "@material-ui/core";

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
					<Button>{reviewStatus}</Button>
					<span style={ActionStyling}>
						<Button>
							<EditIcon color="primary" />
						</Button>
						<Button onClick={this.props.delete.bind(this, id)}>
							<DeleteIcon color="secondary" />
						</Button>
						<Button>
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
};

const ActionStyling = {
	display: "flex",
	justifyContent: "space-between",
};

export default withStyles(useStyles, { withTheme: true })(UserDashboardInfo);
