import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import { TextField, Button } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { Typography } from "@material-ui/core";
import UserInfo from "./UserInfo";
import Itemlist from "./Itemlist";
import ListHeader from "./ListHeader";
import InputItem from "./InputItem";
import uuid from "uuid";

const useStyles = (theme) => ({
	root: {
		display: "grid",
		margin: "30px",
		gridTemplateColumns: "3fr 1fr",
		gridColumnGap: "80px",
	},
	title: {
		fleGrow: 1,
	},
	parent: {
		display: "flex",

		justifyContent: "space-between",
	},
});

class UserDashboard extends Component {
	state = {
		view: {
			display: "none",
		},
		data: [
			{
				id: 1,
				location: "bole",
				bedroom: 2,
				listingStatus: "active",
				reviewStatus: "submitted",
			},
			{
				id: 2,
				location: "bole",
				bedroom: 2,
				listingStatus: "active",
				reviewStatus: "submitted",
			},
			{
				id: 3,
				location: "bole",
				bedroom: 2,
				listingStatus: "active",
				reviewStatus: "submitted",
			},
		],
	};

	delete = (id) => {
		this.setState({
			data: [...this.state.data.filter((datas) => datas.id !== id)],
		});
	};

	Submit = (locations, bedrooms) => {
		const { id, location, bedroom, listingStatus, reviewStatus } = this.state;
		const newList = {
			id: uuid.v4(),
			location: locations,
			bedroom: bedrooms,
			listingStatus: "active",
			reviewStatus: "submitted",
		};
		this.setState({
			data: [...this.state.data, newList],
		});
	};

	reviewStatus = (id) => {
		console.log(id);
	};

	edit = (id) => {
		this.state.data.map((data) => {
			if (data.id === id) {
				this.setState({
					view: { display: "flex" },
				});
			}
		});
	};

	view = (id) => {
		console.log(id);
	};

	AddHouse = () => {
		this.setState({
			view: { display: "flex" },
		});
	};

	cancel = () => {
		this.setState({
			view: {
				display: "none",
			},
		});
	};

	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<div>
					<div className={classes.parent}>
						<span>
							<Typography variant="h6" className={classes.title}>
								Your list of house
							</Typography>
						</span>

						<span>
							<Button
								color="primary"
								background="primary"
								onClick={this.AddHouse}>
								<Add color="primary" />
								Add new house
							</Button>
						</span>
					</div>

					<div style={{ background: "#eee" }}>
						<ListHeader />
						<Itemlist
							data={this.state.data}
							reviewStatus={this.reviewStatus}
							edit={this.edit}
							view={this.view}
							delete={this.delete}
						/>
					</div>
					<div style={this.state.view}>
						<InputItem
							userData={this.state.data}
							Submit={this.Submit}
							cancel={this.cancel}
						/>
					</div>
				</div>
				<div>
					<Typography variant="h6" className={classes.title}>
						Account Information
					</Typography>
					<UserInfo />
				</div>
			</div>
		);
	}
}

export default withStyles(useStyles, { withTheme: true })(UserDashboard);
