import React from "react";
import Grid from "@material-ui/core/Grid";
import RightSideBar from "./RightSideBar";
import PostList from "../blogPosts/PostList";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { Redirect } from "react-router-dom";
import SkeletonScreen from "./SkeletonScreen";

const useStyles = makeStyles({
  notifications: {
    // border: "1px solid #f50057",
    maxHeight: "400px",
    maxWidth: "80%",
    position: "sticky",
    top: 75,
  },
});

const Dashboard = (props) => {
  const classes = useStyles();
  const { auth } = props;
  if (!auth.uid) return <Redirect to="/signin" />;

  return (
    <>
      <br />
      <br />

      <Grid container spacing={3} justifyContent="center">
        {props.posts ? (
          <Grid item xs={12} md={8}>
            <PostList posts={props.posts} />
          </Grid>
        ) : (
          <Grid item xs={12} md={8} justifyContent="center">
            <SkeletonScreen />
            <SkeletonScreen />
            <SkeletonScreen />
            <SkeletonScreen />
          </Grid>
        )}

        <Grid item xs={12} md={4} className={classes.notifications}>
          <RightSideBar />
        </Grid>
      </Grid>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.firestore.ordered.blogPosts,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "blogPosts", orderby: ["createdAt", "desc"] },
  ])
)(Dashboard);
