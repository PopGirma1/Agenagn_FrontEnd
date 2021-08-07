import {
	withStyles,
	makeStyles,
	createStyles,
	TextField,
} from "@material-ui/core";
import React, { Component } from "react";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

const useStyles = makeStyles((theme) =>
	createStyles({
		root: {
			"& > *": {
				margin: theme.spacing(1),
				width: "25ch",
			},
		},
	})
);
class FeedBack extends Component {
	render() {
		const { classes } = this.props;
		return (
			<div>
				<form
					className={classes.root}
					noValidate
					autoComplete="off"
					// onSubmit={this.onSubmit}
					style={stylingForm}>
					<TextField
						id="filled-basic"
						label="email"
						variant="filled"
						name="location"
						// value={this.state.location}
						// onChange={this.onChange}
					/>
					<TextareaAutosize
						maxRows={4}
						aria-label="maximum height"
						placeholder="Put your comment here"
						name="comment"
					/>
					<TextField
						id="filled-basic"
						variant="filled"
						type="submit"
						value="Submit"
						style={{
							background: "#333",
							fontStyle: "#fff",
						}}
					/>
				</form>
			</div>
		);
	}
}

const stylingForm = {};
export default withStyles(useStyles, { withTheme: true })(FeedBack);
