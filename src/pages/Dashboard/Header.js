import React from "react";
import Userdashboard from "./UserDashboard/Userdashboard";
import {
	AppBar,
	Button,
	Grid,
	Link,
	List,
	ListItem,
	Toolbar,
	Typography,
	withStyles,
} from "@material-ui/core/index";
//import SearchBar from "@material-ui-search-bar/lib/index";

const useStyles = (theme) => ({
	root: {
		display: "flex",
		margin: "auto",
		"& ul": {
			padding: "0px",
			margin: "0px",
		},
		"& li": {
			display: "inline",
			padding: "0px",

			"& a": {
				color: "black",
				padding: "20px",
			},

			"& a:hover": {
				textDecoration: "none",
			},
		},
		backgroundColor: "#eee",
		maxHeight: "100px",
		zIndex: theme.zIndex.drawer + 1,
	},
});

class DashboardHeader extends React.Component {
	render() {
		const { classes } = this.props;

		return (
			<div>
				<AppBar className={classes.root} position="fixed">
					<Toolbar>
						<Grid container>
							<Grid item sm={7} align="right">
								<List>
									<ListItem>
										<Button href={process.env.PUBLIC_URL + "/"}>Home</Button>
									</ListItem>
									<ListItem>
										<Button href={process.env.PUBLIC_URL + "/dashboard"}>
											Dashboard
										</Button>
									</ListItem>
									<ListItem>
										<Button href={process.env.PUBLIC_URL + "/logout"}>
											Logout
										</Button>
									</ListItem>
								</List>
							</Grid>
						</Grid>
					</Toolbar>
				</AppBar>
				<Userdashboard />
			</div>
		);
	}
}

export default withStyles(useStyles, { withTheme: true })(DashboardHeader);
