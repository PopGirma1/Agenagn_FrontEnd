import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import { TextField, Button } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { Typography } from "@material-ui/core";
import UserInfo from "./UserInfo";
import Itemlist from "./Itemlist";
import ListHeader from "./ListHeader";
import InputItem from "./InputItem";

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

class Userdashboard extends Component {
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

	Submit = (location, bedrooms) => {
		console.log(location, bedrooms);
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
							<Button color="primary" background="primary">
								<Add color="primary" />
								Add new house
							</Button>
						</span>
					</div>
					<ListHeader />
					<Itemlist data={this.state.data} delete={this.delete} />
					<InputItem userData={this.state.data} Submit={this.Submit} />
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

export default withStyles(useStyles, { withTheme: true })(Userdashboard);
