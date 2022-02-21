import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { postContext } from "../context/postContext";

const EditPost = ({ post }) => {
  const { editHandler } = useContext(postContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const requiredForm = {
    required: {
      value: true,
      message: "This field is required",
    },
  };

  const onSubmit = (data) => {
    const newPost = {
      id: post.id,
      title: data.title,
      description: data.description,
      category: data.category,
      img: data.img,
      comments: [post.comments]
    }
    editHandler(newPost)
  };

  return (
    <div className="form-container">
      <span className="titlepost">Edit Post</span>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-content">
          <label htmlFor="title">Title</label>
          <input
            {...register("title", requiredForm)}
            defaultValue={post.title}
          />
          {errors.title && <div className="error">{errors.title.message}</div>}
        </div>
        <div className="form-content">
          <label htmlFor="description">Description</label>
          <input
            {...register("description", requiredForm)}
            defaultValue={post.description}
          />
          {errors.description && (
            <div className="error">{errors.description.message}</div>
          )}
        </div>
        <div className="form-content">
          <label htmlFor="title">Category</label>
          <select
            {...register("category", requiredForm)}
            defaultValue={post.category}
          >
            <option disabled>Choose a category</option>
            <option value="travel">Travel</option>
            <option value="lifestyle">Lifestyle</option>
            <option value="business">Business</option>
            <option value="food">Food</option>
            <option value="work">Work</option>
          </select>
          {errors.category && (
            <div className="error">{errors.category.message}</div>
          )}
        </div>
        <div className="form-content">
          <label htmlFor="">Image</label>
          <input
            {...register("img", requiredForm)}
            type="text"
            defaultValue={post.img}
          />
          {errors.img && <div className="error">{errors.img.message}</div>}
        </div>
        <div className="form-content">
          <button className="button" type="submit">
            Add post
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditPost;
