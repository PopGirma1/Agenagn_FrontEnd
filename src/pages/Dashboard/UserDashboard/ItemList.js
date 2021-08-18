import React, { Component } from "react";
import UserDashboardInfo from "./UserDashboardInfo";
import PropTypes from "prop-types";

class ItemList extends Component {
	render() {
		return this.props.data.map((datas) => (
			<UserDashboardInfo
				userData={datas}
				key={datas.id}
				reviewStatus={this.props.reviewStatus}
				edit={this.props.edit}
				view={this.props.view}
				delete={this.props.delete}
			/>
		));
	}
}

ItemList.propTypes = {
	data: PropTypes.array.isRequired,
};
export default ItemList;