import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/AuthActions";
import Avatar from "@material-ui/core/Avatar";

const SignedInLinks = (props) => {
  return (
    <>
      <NavLink to="/create" style={{ textDecoration: "none" }}>
        <Button>New Post</Button>
      </NavLink>

      <Button onClick={props.signOut}>Log Out</Button>

      <Avatar
        style={{
          marginLeft: "10px",
          color: "black",
          backgroundColor: "#fae8e8",
        }}
      >
        {props.profile.initials}
      </Avatar>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(null, mapDispatchToProps)(SignedInLinks);
