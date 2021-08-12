import React from "react";
import PostSummary from "./PostSummary";
import { Link } from "react-router-dom";
const PostList = ({ posts }) => {
  return (
    <>
      {posts &&
        posts.map((post) => (
          <Link
            to={"/post/" + post.id}
            style={{ textDecoration: "none" }}
            key={post.id}
          >
            <PostSummary post={post} />
          </Link>
        ))}
    </>
  );
};

export default PostList;
