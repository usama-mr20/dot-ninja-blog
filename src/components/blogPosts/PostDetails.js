import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import moment from "moment";

const useStyles = makeStyles({
  root: {
    minWidth: 350,
    maxWidth: 900,
  },
});

const PostDetails = (props) => {
  const classes = useStyles();
  const { post, auth } = props;
  if (!auth.uid) return <Redirect to="/signin" />;
  if (post) {
    return (
      <>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} md={8}>
            <br />
            <br />
            <Card className={classes.root}>
              <CardContent>
                <Typography variant="h5" component="h2">
                  {post.title}
                </Typography>

                <Typography variant="body2" component="p">
                  {post.body}
                </Typography>
                <br />
                <Typography variant="body2" component="p">
                  Posted by: &nbsp;
                  <strong>
                    {post.authorFirstName} {post.authorLastName}
                  </strong>
                </Typography>
                <Typography variant="body2" component="p" color="textSecondary">
                  {moment(post.createdAt.toDate()).calendar()}
                </Typography>
              </CardContent>
            </Card>

            <Link to="/">
              <Button
                variant="contained"
                color="secondary"
                style={{ marginTop: "20px", float: "right" }}
              >
                Back
              </Button>
            </Link>
          </Grid>
          <Grid item xs={12} md={4}></Grid>
        </Grid>
      </>
    );
  } else {
    return <h3>Loading...</h3>;
  }
};
const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const posts = state.firestore.data.blogPosts;
  const post = posts ? posts[id] : null;
  return {
    post: post,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "blogPosts",
    },
  ])
)(PostDetails);
