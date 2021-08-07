import React from "react";

function ListHeader() {
	return (
		<div style={headingStyle}>
			<span>Location</span>
			<span>Bed Rooms</span>
			<span>Listing Status</span>
			<span>Review status</span>
			<span>Action</span>
		</div>
	);
}

const headingStyle = {
	display: "flex",
	justifyContent: "space-between",
	fontSize: "20px",
	marginTop: "30px",
	marginBottom: "30px",
	background: "#eee",
	textAlign: "left",
};

export default ListHeader;
