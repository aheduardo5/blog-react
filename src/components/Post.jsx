import React from "react";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  return (
    <div className="post-content">
      <Link className="linkpost" to={`/postpage/${post.id}`}>
        <p>{post.title}</p>{" "}
      </Link>
      <Link className="linkpost" to={`/category/${post.category}`}>
        <span>{post.category}</span>
      </Link>

      <div className="post">
        <p>{post.description}</p>
      </div>
    </div>
  );
};

export default Post;
