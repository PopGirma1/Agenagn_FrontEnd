import {
	withStyles,
	Typography,
	makeStyles,
	createStyles,
} from "@material-ui/core";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

import React, { Component } from "react";
import FeedBack from "./FeedBack";

const useStyles = (theme) => ({
	root: {
		display: "grid",
		margin: "2em",
		gridTemplateColumns: "5fr 2fr",
		gridColumnGap: "80px",
	},
});
class AboutUs extends Component {
	onSubmit = (email, feedback) => {
		console.log(email, feedback);
	};

	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<div style={{ background: "#eee" }}>
					<div
						className="aboutContent"
						style={{ textAlign: "center", margin: "2em " }}>
						<Typography variant="h4">Agenagn</Typography>
						<Typography
							variant="h6"
							style={{ margin: "2em", lineHeight: "1.5" }}>
							Agenagn is a solution for looking for house available for rent.
							The system connects strangers who looking for house rent and
							administrator of the system. The service capable of showing the
							detailed information about the house such as number of bedrooms,
							bathrooms, price of rent, location where the house is found. In
							addition, the strangers can filter the available house with
							respect to the ranges of price they can afford. The service would
							not provide online payment since online payment is another
							challenge in Ethiopia. The system reduces strangers’ time, energy
							and money spent by looking for house. It reduces an additional
							money spent for brokers from both strangers and owner.
							Furthermore, it facilitates house rent to be taken earlier. In
							terms of boundary Agenagn works for house found around Addis Ababa
							for now. But, for sure Agenagn will expand to the rest of
							Ethiopia.
						</Typography>

						<AlignItemsList />
					</div>
				</div>
				<div className="feedback">
					<FeedBack onSubmit={this.onSubmit} />
				</div>
			</div>
		);
	}
}

export default withStyles(useStyles, { withTheme: true })(AboutUs);

const useStyless = makeStyles((theme) =>
	createStyles({
		root: {
			display: "flex",
			margin: "auto",
		},
		inline: {
			display: "inline",
		},
	})
);

const AlignItemsList = ({}) => {
	const classes = useStyless();

	return (
		<List className={classes.root}>
			<ListItem alignItems="flex-start">
				<ListItemAvatar>
					<Avatar alt="Girmay Tadese" src="/static/images/avatar/1.jpg" />
				</ListItemAvatar>
				<ListItemText
					primary="Girmay Tadese"
					secondary={
						<React.Fragment>
							<Typography
								component="span"
								variant="body2"
								className={classes.inline}
								color="textPrimary">
								email
							</Typography>
							{" email"}
						</React.Fragment>
					}
				/>
			</ListItem>
			<Divider variant="inset" component="li" />
			<ListItem alignItems="flex-start">
				<ListItemAvatar>
					<Avatar alt="Kalab Amare" src="/static/images/avatar/2.jpg" />
				</ListItemAvatar>
				<ListItemText
					primary="Kalab Amare"
					secondary={
						<React.Fragment>
							<Typography
								component="span"
								variant="body2"
								className={classes.inline}
								color="textPrimary">
								email
							</Typography>
							{" email"}
						</React.Fragment>
					}
				/>
			</ListItem>
			<Divider variant="inset" component="li" />
			<ListItem alignItems="flex-start">
				<ListItemAvatar>
					<Avatar alt="Desalegn Mihret" src="/static/images/avatar/3.jpg" />
				</ListItemAvatar>
				<ListItemText
					primary="Desalegn Mihret"
					secondary={
						<React.Fragment>
							<Typography
								component="span"
								variant="body2"
								className={classes.inline}
								color="textPrimary">
								email
							</Typography>
							{" desalegnmihret97@gmail.com"}
						</React.Fragment>
					}
				/>
			</ListItem>
		</List>
	);
};
