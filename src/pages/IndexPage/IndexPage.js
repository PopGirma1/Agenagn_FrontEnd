import React, { Component } from "react";
import { alpha, withStyles } from "@material-ui/core/styles";

import InputBase from "@material-ui/core/InputBase";

import SearchIcon from "@material-ui/icons/Search";
import Agenagn from "./images/agenagn.png";

const useStyles = (theme) => ({
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto"
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch"
    }
  }
});

class PrimarySearchAppBar extends Component {
  state = {
    inputText: ""
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.Submit(this.state.inputText);
    this.setState({
      inputText: ""
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div style={container}>
        <div style={imageStyling}>
          <img src={Agenagn} alt="image not found" style={image} />
        </div>
        <form
          className={classes.search}
          style={boxStyling}
          onSubmit={this.onSubmit}
        >
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            name="inputText"
            value={this.state.inputText}
            onChange={this.onChange}
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </form>
      </div>
    );
  }
}

const imageStyling = {
  width: "50%",
  margin: "auto"
};

const image = {
  backgroundRepeate: "no-repeate",
  opacity: "0.2",
  display: "block"
};
const boxStyling = {
  width: "50%",
  margin: "auto",
  boxShadow: "0 0 4px 8px rgba(0,0,0,0.07)",
  borderRadius: "10%"
};

const container = {};

export default withStyles(useStyles, { withTheme: true })(PrimarySearchAppBar);
