import React, { useContext } from "react";
import { postContext } from "../context/postContext";
import { Link } from "react-router-dom";

import { BsFillTrashFill } from "react-icons/bs";
import { HiPencil } from "react-icons/hi";

import { Box, Modal } from "@mui/material";
import EditPost from "./EditPost";


const Post = ({ post }) => {
  const { deleteHandler, editHandler, styles } = useContext(postContext);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


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
      <div>
        <button
          onClick={handleOpen}
        >
          <HiPencil />
        </button>
        <Modal open={open} onClose={handleClose}>
            <Box sx={styles.modalUpdatePost}>
              <EditPost post={post}/>
            </Box>
          </Modal>
        <button onClick={() => {
            deleteHandler(post.id);

          }}>
          <BsFillTrashFill />
        </button>
      </div>
    </div>
  );
};

export default Post;
