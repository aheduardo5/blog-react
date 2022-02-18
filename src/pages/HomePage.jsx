import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { postContext } from "../context/postContext";
import Post from "../components/Post";

const HomePage = () => {
  const { posts } = useContext(postContext);
  const params = useParams();
  // console.log(params)

  return (
    <div className="box-container">
      {Object.keys(params).length === 0	
        ? posts.map((post) => <Post key={post.id} post={post} />)
        : posts.map(post => (
          (post.category === params.filtername) 
          ? 
          <Post key={post.id} post={post} />
          :
           null
        ))
        }
    </div>
  );
};

export default HomePage;
