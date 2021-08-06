import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import { TextField, Button } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { Typography } from "@material-ui/core";
import UserInfo from "./UserInfo";
import Itemlist from "./Itemlist";
import ListHeader from "./ListHeader";

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
	state = {};

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
					<Itemlist />
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
