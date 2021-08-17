import React from "react";

function ListHeader() {
	return (
		<div style={headingStyle}>
			<span>Location</span>
			<span>Bed Rooms</span>
			<span>Monthly Rent</span>
			<span>Submitted Date</span>
			<span>Review status</span>
		</div>
	);
}

const headingStyle = {
	display: "grid",
	gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
	gridTemplateRows: "auto",
	fontSize: "20px",
	textAlign: "center",
};

export default ListHeader;
