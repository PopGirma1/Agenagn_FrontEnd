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
	marginTop: "30px",
	marginBottom: "30px",
	background: "#E5E5E5",
	textAlign: "center",
	paddingTop: "40px",
	borderRadius: "15px",
};

export default ListHeader;
