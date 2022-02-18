import { useState } from "react";

export const usePost = () => {
  const postsInit = [
    {
      id: 1,
      title: "Visita Mazatlán",
      description: "Hermoso Puerto en las costas del Oceano Pacifico",
      category: "lifestyle",
      img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
      comments: [],
    },
    {
      id: 2,
      title: "Visita Mazatlán",
      description: "Hermoso Puerto en las costas del Oceano Pacifico",
      category: "lifestyle",
      img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
      comments: [],
    },
    {
      id: 3,
      title: "Visita Mazatlán",
      description: "Hermoso Puerto en las costas del Oceano Pacifico",
      category: "work",
      img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
      comments: [],
    },
    {
      id: 4,
      title: "Visita Mazatlán",
      description: "Hermoso Puerto en las costas del Oceano Pacifico",
      category: "business",
      img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
      comments: [],
    },
    {
      id: 5,
      title: "Visita Mazatlán",
      description: "Hermoso Puerto en las costas del Oceano Pacifico",
      category: "travel",
      img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
      comments: [],
    },
  ];
  const [posts, setPosts] = useState(postsInit);

  const addPostHandler = (data) => {
    setPosts([...posts, data]);
  };

  const addCommentHandler = (data, id) => {

    const newComment = posts.filter((post) => post.id == id);
    newComment[0].comments.push(data);

    
    //update comment
    setPosts((prevState) => {
      return prevState.map((prev) => {
        if (prev.id === id) {
          return {
            ...prev,
            title: newComment[0].title,
            description: newComment[0].description,
            category: newComment[0].category,
            img: newComment[0].img,
            comments: newComment[0].comments,
          };
        }

        return prev;
      });
    });
    return newComment
  };

  const deleteHandler = (id) => {
    console.log('Hola')
    // setUsers(users.filter((user) => user.id !== userId ))
  }


  return {
    posts,
    addPostHandler,
    addCommentHandler,
    deleteHandler
    
  };
};
