import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { createPost } from "../../store/actions/PostActons";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
  },
  areaSize: {
    width: "300px",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const CreatPost = (props) => {
  const classes = useStyles();
  const [BodyChars, setBodyChars] = useState(0);
  const [TitleChars, setTitleChars] = useState(0);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [validateErrTitle, setValidateErrTitle] = useState(false);
  const [validateErrBody, setValidateErrBody] = useState(false);

  const handleBody = (e) => {
    setBodyChars(e.target.value.length);
    setBody(e.target.value);
    if (e.target.value.length <= 20) {
      setValidateErrBody(true);
    } else {
      setValidateErrBody(false);
    }
  };
  const handleTitle = (e) => {
    setTitleChars(e.target.value.length);
    setTitle(e.target.value);
    if (e.target.value.length <= 5) {
      setValidateErrTitle(true);
    } else {
      setValidateErrTitle(false);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.length >= 5 && body.length >= 20) {
      if (!validateErrTitle && !validateErrBody) {
        props.createPost({ title, body });
        props.history.push("/");
      }
    } else {
      setValidateErrTitle(true);
      setValidateErrBody(true);
    }
  };
  const { auth } = props;
  if (!auth.uid) return <Redirect to="/signin" />;
  return (
    <>
      <Container component="main" maxWidth="sm">
        <br />
        <Typography align="center" variant="h4">
          Create a new blog post
        </Typography>
        <br />
        <form className={classes.root}>
          <TextField
            id="title"
            label="Post Title"
            variant="outlined"
            required
            error={validateErrTitle}
            helperText={
              validateErrTitle
                ? `Tiltle must be longer than 5 characters`
                : `Characters ${TitleChars} / 50`
            }
            autoFocus={true}
            fullWidth={true}
            inputProps={{ maxLength: 50 }}
            onChange={handleTitle}
          />
          <br />
          <br />
          <TextField
            id="body"
            label="Post Body"
            variant="filled"
            size="medium"
            required
            error={validateErrBody}
            multiline={true}
            maxRows="25"
            fullWidth={true}
            helperText={
              validateErrBody
                ? "Tiltle must be longer than 20 characters"
                : `Characters ${BodyChars} / 500`
            }
            inputProps={{ maxLength: 500 }}
            onChange={handleBody}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Publish
          </Button>
        </form>
      </Container>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return { createPost: (post) => dispatch(createPost(post)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreatPost);
