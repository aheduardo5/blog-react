import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import CommentBox from "../components/CommentBox";
import { postContext } from "../context/postContext";

const PostPage = () => {
  const { posts } = useContext(postContext);
  const { id } = useParams();


  const post = posts.find((post) => post.id == id);


  return (
    <div className="post-container">
      <h1>{post.title}</h1>
      <div className="img-post">
        <img src={post.img} alt="" />
      </div>
      <div className="description-post">
        <span>{post.category}</span>
        <p>{post.description}</p>
      </div>
    
      <CommentBox post={post}/>
    </div>
  );
};

export default PostPage;
