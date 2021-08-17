import React, { Component } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { withStyles } from "@material-ui/core";
import { Typography } from "@material-ui/core";

//material-ui overriding the style
const useStyles = (them) => ({
	root: {
		display: "grid",
		gridTemplateRows: "1fr 1fr 1fr 1fr",
		gridGap: "10px",
	},
	divStyling: {
		display: "grid",
		gridTemplateColumns: "7fr 1fr",
		gridGap: "20px",
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
			<div className={this.props.adminFilter}>
				<FormControl component="fieldset">
					<RadioGroup
						aria-label="gender"
						name="gender1"
						onChange={this.onChange}
						className={classes.root}>
						<div className={classes.divStyling}>
							<Typography variant="h5">Latest</Typography>
							<FormControlLabel
								value={this.state.latest}
								control={<Radio />}
								name="latest"
							/>
						</div>
						<div className={classes.divStyling}>
							<Typography variant="h5">Approved</Typography>
							<FormControlLabel
								value={this.state.approved}
								control={<Radio />}
								name="approved"
							/>
						</div>
						<div className={classes.divStyling}>
							<Typography variant="h5">Pending</Typography>
							<FormControlLabel
								value={this.state.pending}
								control={<Radio />}
								name="pending"
							/>
						</div>
						<div className={classes.divStyling}>
							<Typography variant="h5">Rejected</Typography>
							<FormControlLabel
								value={this.state.rejected}
								disabled
								control={<Radio name="rejected" />}
							/>
						</div>
					</RadioGroup>
				</FormControl>
			</div>
		);
	}
}

export default withStyles(useStyles, { withTheme: true })(AdminFilter);
