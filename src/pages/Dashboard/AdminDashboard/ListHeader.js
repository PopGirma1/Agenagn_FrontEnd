import React from "react";
import { Typography } from "@material-ui/core";

function ListHeader() {
	return (
		<div className={this.props.headingStyle}>
			<Typography variant="h5">Location</Typography>
			<Typography variant="h5">Bed Rooms</Typography>
			<Typography variant="h5">Monthly Rent</Typography>
			<Typography variant="h5">Submitted Date</Typography>
			<Typography variant="h5">Review status</Typography>
		</div>
	);
}

export default ListHeader;
