import React, { useContext } from "react";

import { useForm } from "react-hook-form";
import { postContext } from "../context/postContext"

const CreatePost = () => {
  //Context
  const {addPostHandler} = useContext(postContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    defaultValues: {
      title: "",
      description: "",
      category: "",
      img: "",
    },
  });

  const requiredForm = {
    required: {
      value: true,
      message: "This field is required",
    },
  };

  const onSubmit = (data) => {

    const newPost = {
      id: crypto.randomUUID(),
      title: data.title,
      description: data.description,
      category: data.category,
      img: data.img,
      comments: [{}]
    }
    addPostHandler(newPost);
    // addPostHandler(newPost);
    reset()
  };

  return (
    <>
      <div className="form-container">
        <span className="titlepost">Add a new post</span>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-content">
            <label htmlFor="title">Title</label>
            <input
              {...register("title", requiredForm)}
              placeholder="add a title for your post"
              id="title"
            />
            {errors.title && (
              <div className="error">{errors.title.message}</div>
            )}
          </div>
          <div className="form-content">
            <label htmlFor="description">Description</label>
            <input
              {...register("description", requiredForm)}
              placeholder="add a description for your post"
              id="description"
            />
            {errors.description && (
              <div className="error">{errors.description.message}</div>
            )}
          </div>
          <div className="form-content">
            <label htmlFor="title">Category</label>
            <select {...register("category", requiredForm)}>
              <option value=" " disabled>
                Choose a category
              </option>
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
              type="text"
              placeholder="add a picture (only URL)"
              {...register("img", requiredForm)}
            />
            {errors.img && <div className="error">{errors.img.message}</div>}
          </div>
          <div className="form-content">
            <button className="button" type="submit">Add post</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreatePost;
