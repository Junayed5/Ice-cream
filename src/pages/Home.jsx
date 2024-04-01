import React from "react";
import { Link } from "react-router-dom";
import Slider from "../components/Slider/Slider";
import Search from "../components/Search";
import Products from "../layout/Products";

const Home = () => {
  return (
    <>
      <Slider />
      <Products/>
    </>
  );
};

export default Home;
