import React, { Component } from "react";
import UserDashboardInfo from "./UserDashboardInfo";

class Itemlist extends Component {
	state = {
		data: [
			{
				id: 1,
				location: "bole",
				bedroom: 2,
				listingStatus: "active",
				reviewStatus: "submited",
			},
			{
				id: 2,
				location: "bole",
				bedroom: 2,
				listingStatus: "active",
				reviewStatus: "submited",
			},
			{
				id: 3,
				location: "bole",
				bedroom: 2,
				listingStatus: "active",
				reviewStatus: "submited",
			},
		],
	};

	delete = (id) => {
		this.setState({
			data: [...this.state.data.filter((datas) => datas.id !== id)],
		});
	};
	render() {
		return this.state.data.map((datas) => (
			<UserDashboardInfo userData={datas} key={datas.id} delete={this.delete} />
		));
	}
}

export default Itemlist;
