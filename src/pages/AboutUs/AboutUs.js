import { Grid, withStyles } from "@material-ui/core";
import React, { Component } from "react";
import FeedBack from "./FeedBack";

const useStyles = (theme) => ({
	root: {
		display: "grid",
		margin: "30px",
		gridTemplateColumns: "3fr 1fr",
		gridColumnGap: "80px",
	},
});
class AboutUs extends Component {
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<div className="aboutContent"></div>
				<div className="feedback">
					<FeedBack />
				</div>
			</div>
		);
	}
}

export default withStyles(useStyles, { withTheme: true })(AboutUs);
