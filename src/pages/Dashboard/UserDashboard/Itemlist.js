import React, { Component } from "react";
import UserDashboardInfo from "./UserDashboardInfo";
import PropTypes from "prop-types";

class Itemlist extends Component {
	render() {
		return this.props.data.map((datas) => (
			<UserDashboardInfo
				userData={datas}
				key={datas.id}
				delete={this.props.delete}
			/>
		));
	}
}

Itemlist.PropTypes = {
	data: PropTypes.array.isRequired,
	delete: PropTypes.func.isRequired,
};
export default Itemlist;
