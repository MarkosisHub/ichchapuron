import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import CategoryScreen from "./screens/CategoryScreen";
import SingleProductScreen from "./screens/SingleProductScreen";
import WishlistScreen from "./screens/WishlistScreen";
import CartScreen from "./screens/CartScreen";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/wishlist" element={<WishlistScreen />} />
        <Route path="/cart" element={<CartScreen />} />
        <Route path="/category" element={<CategoryScreen />} />
        <Route path="/product/:id" element={<SingleProductScreen />} />
      </Routes>
    </>
  );
};

export default App;
