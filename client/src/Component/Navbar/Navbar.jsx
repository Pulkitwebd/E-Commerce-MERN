import React, { useState, useEffect } from "react";
import classes from "./Navbar.module.css";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import logo from "../Assets/logo.svg";
import { HiX } from "react-icons/hi";

const Navbar = () => {
  const totalItem = useSelector((state) => state.cart.totalItem);

  const [sideBar, setSideBar] = useState(false);

  const handleSideBar = () => {
    setSideBar((prevState) => !prevState);
  };

  return (
    <>
      <header>
        <div className={classes.destop_navbar}>
          <div className={classes.webLogo}>
            <img src={logo}></img>
          </div>

          <div className={classes.navlink_Box}>
            <div className={classes.link}>
              <Link to="/">Home</Link>
            </div>
            <div className={classes.link}>
              <Link to="/about">About</Link>
            </div>
            <div className={classes.link}>
              <Link to="/products">Products</Link>
            </div>
          </div>

          <div className={classes.cartLogin_icons}>
            <Link to="/cart" style={{ textDecoration: "none" }}>
              <div>
                Cart
                <ShoppingCartIcon className={classes.navIcon} />
                <span className={classes.badge}>{totalItem}</span>
              </div>
            </Link>
            <Link to="/user-authentication" style={{ textDecoration: "none" }}>
              <div>
                Login
                <PersonAddAlt1Icon className={classes.navIcon} />
              </div>
            </Link>
          </div>
        </div>

        {sideBar ? (
          <div className={classes.sideBar}>
            <div className={classes.sideBarHeader}>
              <div className={classes.webLogo}>
                <img src={logo}></img>
              </div>
              <HiX onClick={handleSideBar} className={classes.crossBtn} />
            </div>

            <Stack spacing={2} className={classes.sidebar_Stack}>
              <div>Home</div>
              <div>About</div>
              <div>Products</div>
            </Stack>
          </div>
        ) : (
          <div className={classes.mobile_navbar}>
            <div className={classes.webLogo}>
              <img src={logo}></img>
            </div>
            <FaBars className={classes.menuIcon} onClick={handleSideBar} />
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
