import React from "react";
import { Typography } from "@material-ui/core";

function ListHeader(props) {
	return (
		<div className={props.headingStyle}>
			<Typography variant="h6">Location</Typography>
			<Typography variant="h6">Bed Rooms</Typography>
			<Typography variant="h6">Monthly Rent</Typography>
			<Typography variant="h6">Submitted Date</Typography>
			<Typography variant="h6">Review status</Typography>
		</div>
	);
}

export default ListHeader;
