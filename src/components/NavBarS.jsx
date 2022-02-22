// import { AppBar, Toolbar, Typography } from "@mui/material";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { HiPencil } from "react-icons/hi";
import CreatePost from "./CreatePost";
import { Box, Modal } from "@mui/material";
import { postContext } from "../context/postContext";

const NavBarS = () => {
  const { styles } = useContext(postContext);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <nav className="Navbar-container">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "isactive" : "links")}
        >
          All
        </NavLink>

        <NavLink
          to="/category/travel"
          className={({ isActive }) => (isActive ? "isactive" : "links")}
        >
          Travel
        </NavLink>

        <NavLink
          to="/category/lifestyle"
          className={({ isActive }) => (isActive ? "isactive" : "links")}
        >
          Lifestyle
        </NavLink>

        <NavLink
          to="/category/business"
          className={({ isActive }) => (isActive ? "isactive" : "links")}
        >
          Business
        </NavLink>

        <NavLink
          to="/category/food"
          className={({ isActive }) => (isActive ? "links isactive" : "links")}
        >
          Food
        </NavLink>

        <NavLink
          to="/category/work"
          className={({ isActive }) => (isActive ? "links isactive" : "links")}
        >
          Work
        </NavLink>

        <div className="createPost-modal">
          <button className="op-button" onClick={handleOpen}>
            <HiPencil />
          </button>
          <Modal open={open} onClose={handleClose}>
            <Box sx={styles.modalCreatePost}>
              <CreatePost />
            </Box>
          </Modal>
        </div>
      </nav>
    </>
  );
};

export default NavBarS;
