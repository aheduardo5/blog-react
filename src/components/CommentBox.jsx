import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { postContext } from "../context/postContext";

const CommentBox = ({ post, deleteHandler }) => {
  const { id } = useParams();
  const { addCommentHandler, posts } = useContext(postContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const newComment = {
      id: crypto.randomUUID(),
      user: data.user,
      comment: data.comment,
    };
    addCommentHandler(newComment, id);
    console.log(posts);
  };

  return (
    <div>
      <div className="comments">
        <h3>Comments ({post.comments.length})</h3>
        {post.comments.map((comment) => {
          return (
            <div key={comment.id}>
              <h3>User:</h3>
              <p>{comment.user}</p>
              <h3>Comments:</h3>
              <p>{comment.comment}</p>
              <button>Edit</button>
              <button>Delete</button>
            </div>
          );
        })}
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="content">
          <p>Add a comment</p>
          <label htmlFor="user">User</label>
          <input
            type="text"
            id="user"
            {...register("user")}
            placeholder="Add a comment"
          />
        </div>
        <div className="content">
          <label htmlFor="comment">Add a comment</label>
          <textarea
            type="text"
            id="comment"
            {...register("comment")}
            placeholder="Add a comment"
          />
        </div>
        <button>Add</button>
      </form>
    </div>
  );
};

export default CommentBox;
