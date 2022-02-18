import React, { useContext } from 'react'
// import { useParams } from 'react-router-dom'
import { postContext } from '../context/postContext'
import Post from './Post'

const PostList = () => {
    const {addNewPost, posts} = useContext(postContext)
    // const {params} = useParams();
    // console.log(params)
    // console.log(PostList)



  return (
    <div className='postlist-container'>
        {
            posts.map((post) => {  
              return(
                <Post 
                  key={post.id}
                  post={post}
                />
                );
            })
        }
    </div>
  )
}

export default PostList;