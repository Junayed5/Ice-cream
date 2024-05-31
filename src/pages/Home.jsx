import React from "react";
import { Link } from "react-router-dom";
import Slider from "../components/Slider/Slider";
import Search from "../components/Search";
import Products from "../layout/products/Products";
import CategoryShop from "../layout/CategoryShop";
import Community from "../layout/Community";
import Connected from "../layout/Connected";


const Home = () => {
  return (
    <>
      <Slider />
      <Products/>
      <CategoryShop/>
      <Community/>
      <Connected/>
    </>
  );
};

export default Home;
