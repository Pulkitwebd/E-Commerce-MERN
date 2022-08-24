import React from "react";
import Homepage from "./Component/Homepage/Homepage";
import Products from "./Component/Products/Products";
import Product from "./Component/Product/Product";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";
import About from "./Component/About/About";
import Cart from "./Component/Cart/Cart";
import UserAuth from "./Component/UserAuth/Index";
import "./App.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/Products/:productId" element={<Product />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/user-authentication" element={<UserAuth />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
