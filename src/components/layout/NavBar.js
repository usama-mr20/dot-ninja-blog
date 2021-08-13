import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    color: "white",
    fontSize: "16px",
    textDecoration: "none",
    fontWeight: "bold",
    [theme.breakpoints.up("sm")]: {
      fontSize: "28px",
    },
  },

  toolbar: {
    marginLeft: theme.spacing(0),
    marginRight: theme.spacing(8),
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(8),
    },
  },
}));

const NavBar = (props) => {
  const classes = useStyles();
  const { auth, profile } = props;

  const Links = auth.uid ? (
    <SignedInLinks profile={profile} />
  ) : (
    <SignedOutLinks />
  );
  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="secondary">
        <Toolbar className={classes.toolbar}>
          <Link to="/" className={classes.title}>
            Dot Ninja Blog
          </Link>
          {Links}
        </Toolbar>
      </AppBar>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

export default connect(mapStateToProps)(NavBar);
