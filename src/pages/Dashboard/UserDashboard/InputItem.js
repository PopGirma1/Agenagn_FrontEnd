import React, { Component } from "react";
import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

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

/*here the text fields which helps us either edit or draft the locations and bedrooms */
class InputItem extends Component {
	render() {
		const { id } = this.props.userData;
		return (
			<div>
				<form
					className={classes.root}
					noValidate
					autoComplete="off"
					onSubmit={(this.props.onSubmit, bind(this, id))}>
					<TextField
						id="filled-basic"
						label="Location"
						variant="filled"
						value={this.props.location}
					/>
					<TextField
						id="filled-basic"
						label="bedrooms"
						variant="filled"
						value={this.props.bedrooms}
					/>
				</form>
			</div>
		);
	}
}

export default withStyles(useStyles, { withTheme: true })(InputItem);

//happy hacking day someone wisely said that!
