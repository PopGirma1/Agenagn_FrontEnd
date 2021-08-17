import React, { Component } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { withStyles } from "@material-ui/core";

//material-ui overriding the style
const useStyles = (them) => ({
	root: {
		display: "flex",
		flexDirection: "column",
		"& div": {
			display: "flex",
			justifyContent: "space-between",
		},
	},
});
class AdminFilter extends Component {
	state = {
		latest: false,
		approved: false,
		pending: false,
		rejected: false,
	};

	onChange = () => {
		this.setState({
			[this.target.name]: this.target.value,
		});
	};
	render() {
		const { classes } = this.props;
		return (
			<FormControl component="fieldset">
				<RadioGroup
					aria-label="gender"
					name="gender1"
					value={value}
					onChange={this.onChange}
					className={classes.root}>
					<div>
						<Typography variant="h4">Latest</Typography>
						<FormControlLabel
							value={this.state.latest}
							control={<Radio />}
							name="latest"
						/>
					</div>
					<div>
						<Typography variant="h4">Approved</Typography>
						<FormControlLabel
							value={this.state.approved}
							control={<Radio />}
							name="approved"
						/>
					</div>
					<div>
						<Typography variant="h4">Pending</Typography>
						<FormControlLabel
							value={this.state.pending}
							control={<Radio />}
							name="pending"
						/>
					</div>
					<div>
						<Typography variant="h4">Rejected</Typography>
						<FormControlLabel
							value={this.state.rejected}
							disabled
							control={<Radio name="rejected" />}
						/>
					</div>
				</RadioGroup>
			</FormControl>
		);
	}
}

export default withStyles(useStyles, { withTheme: true })(AdminFilter);
