import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import moment from "moment";

const useStyles = makeStyles({
  root: {
    minWidth: 350,
    maxWidth: 700,
  },
  title: {
    fontSize: 14,
    textDecoration: "none",
  },
});

const PostSummary = ({ post }) => {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {post.title}
          </Typography>

          <Typography
            variant="body2"
            component="p"
            style={{ marginTop: "5px" }}
          >
            {post.body}
          </Typography>

          <Typography
            variant="body2"
            component="p"
            color="textSecondary"
            style={{ marginTop: "10px" }}
          >
            {moment(post.createdAt.toDate()).calendar()}
          </Typography>
        </CardContent>
      </Card>
      <br />
    </>
  );
};

export default PostSummary;
