import React, { Component } from "react";
import { createStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import { makeStyles, withStyles } from "@material-ui/styles";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";

const useStyles = (theme) => ({
	root: {
		background: "#E5E5E5",
		borderRadius: "10px",
		paddingLeft: "2em",
		display: "grid",
		gridTemplateRow: "1fr 1fr",
		height: "189px",
		marginTop: "20px",
	},
});

class UserInfo extends Component {
	state = {
		userName: "desalegn",
		email: "desalegnmihret97@rmail.com",
	};

	findInfo = (data) => {
		this.props.findInfo(
			this.setState({
				userName: data.userName,
				email: data.email,
			})
		);
	};
	componentDidMount() {
		//we needs to get the data and reset the value right
		//after we fetched the values when user login then set them
	}

	render() {
		const { classes } = this.props;
		const { userName, email } = this.state;
		return (
			<List className={classes.root}>
				<ListItem alignItems="flex-start">
					<PersonOutlineIcon style={{ marginRight: "10px" }} />
					<ListItemText
						primary="Name"
						secondary={<React.Fragment>{userName}</React.Fragment>}
					/>
				</ListItem>
				{/* <Divider variant="inset" component="li" /> */}
				<ListItem alignItems="flex-start">
					<MailOutlineIcon style={{ marginRight: "10px" }} />
					<ListItemText
						primary="Email"
						secondary={<React.Fragment>{email}</React.Fragment>}
					/>
				</ListItem>
			</List>
		);
	}
}

export default withStyles(useStyles, { withTheme: true })(UserInfo);