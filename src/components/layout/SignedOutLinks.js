import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";

const SignedOutLinks = () => {
  return (
    <>
      <NavLink to="/signin" style={{ textDecoration: "none" }}>
        <Button>Log in</Button>
      </NavLink>

      <NavLink to="/signup" style={{ textDecoration: "none" }}>
        <Button>Sign Up</Button>
      </NavLink>
    </>
  );
};

export default SignedOutLinks;
