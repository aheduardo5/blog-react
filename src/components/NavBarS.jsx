// import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";
import {  NavLink } from "react-router-dom";
import { HiPencil } from "react-icons/hi";
import CreatePost from "./CreatePost";
import { Box, Button, Modal } from "@mui/material";

const styles = {
  modalCreatePost: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    height: 550,
    bgcolor: "background.paper",
    border: "none",
    borderRadius: "3%",
    boxShadow: 24,
    p: 4,
  }
};

const NavBarS = () => {
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
          <Button onClick={handleOpen} sx={styles.buttonModal}>
            {" "}
            <HiPencil />{" "}
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
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
