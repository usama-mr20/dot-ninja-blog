import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import Dashboard from "./components/dashboard/Dashboard";
import PostDetails from "./components/blogPosts/PostDetails";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import CreatPost from "./components/blogPosts/CreatePost.js";
import Container from "@material-ui/core/Container";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Container>
        <br />
        <br />
        <br />

        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/post/:id" component={PostDetails} />
          <Route path="/create" component={CreatPost} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
