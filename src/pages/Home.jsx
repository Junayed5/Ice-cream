import React from "react";
import { Link } from "react-router-dom";
import Slider from "../components/Slider/Slider";
import Search from "../components/Search";
import Products from "../layout/products/Products";
import CategoryShop from "../layout/CategoryShop";


const Home = () => {
  return (
    <>
      <Slider />
      <Products/>
      <CategoryShop/>
    </>
  );
};

export default Home;
