import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import { TextField, Button } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { Typography } from "@material-ui/core";
import UserInfo from "./UserInfo";
import ItemList from "./ItemList";
import ListHeader from "./ListHeader";

import uuid from "uuid";

const useStyles = (theme) => ({
	root: {
		display: "grid",
		// margin: "30px",
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
	bodyStyling: {
		/**here is the style of all the user dashboard page  */
		borderRadius: "20px",
		height: "200%",
		background: "#E5E5E5",
	},
	buttonStyling: {
		background: "#3F51B5",
		color: "#ffffff",
		borderRadius: "10px",
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
							<Button onClick={this.AddHouse} className={classes.buttonStyling}>
								<Add />
								Add new house
							</Button>
						</span>
					</div>

					<div className={classes.bodyStyling}>
						<ListHeader />
						<ItemList
							data={this.state.data}
							edit={this.edit}
							view={this.view}
							delete={this.delete}
						/>
					</div>
					<div style={this.state.view}></div>
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
