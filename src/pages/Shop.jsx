import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const Shop = () => {
  const products = [
    {
      name: "Ice Cream",
      price: "9.99",
      quantity: 0,
      image:
        "https://i.ibb.co/QF4mbbR/7-Form-Link-kindkones-veganicecream-plantbasedicecream-allnaturalingredients-coconuticecream-coconut.png",
    },
    {
      name: "Ice Cream",
      price: "9.99",
      quantity: 0,
      image:
        "https://i.ibb.co/QF4mbbR/7-Form-Link-kindkones-veganicecream-plantbasedicecream-allnaturalingredients-coconuticecream-coconut.png",
    },
    {
      name: "Ice Cream",
      price: "9.99",
      quantity: 0,
      image:
        "https://i.ibb.co/QF4mbbR/7-Form-Link-kindkones-veganicecream-plantbasedicecream-allnaturalingredients-coconuticecream-coconut.png",
    },
    {
      name: "Ice Cream",
      price: "9.99",
      quantity: 0,
      image:
        "https://i.ibb.co/QF4mbbR/7-Form-Link-kindkones-veganicecream-plantbasedicecream-allnaturalingredients-coconuticecream-coconut.png",
    },
    {
      name: "Ice Cream",
      price: "9.99",
      quantity: 0,
      image:
        "https://i.ibb.co/QF4mbbR/7-Form-Link-kindkones-veganicecream-plantbasedicecream-allnaturalingredients-coconuticecream-coconut.png",
    },
    {
      name: "Ice Cream",
      price: "9.99",
      quantity: 0,
      image:
        "https://i.ibb.co/QF4mbbR/7-Form-Link-kindkones-veganicecream-plantbasedicecream-allnaturalingredients-coconuticecream-coconut.png",
    },
  ];
  const categories = ["Ice Cream", "Kind Deals", "Cakes & Bakes", "Cookies & Kones", "Bliss Balls", "Gifts & Merch"]

  return (
    <div className="flex mx-64 my-10">
      <div className="w-1/4">
        <h3 className="text-xl uppercase py-3">Categories</h3>
        <hr />
        <ul>
            {
                categories.map(category => <li className="flex items-center py-2 gap-x-3"> <IoIosArrowForward />{category}</li>)
            }
        </ul>
      </div>
      <div className="">
        <div className="grid grid-cols-3 gap-x-7 gap-y-6">
          {products.map(({ image, name, price, quantity }) => {
            return (
                <div className="w-fit">
                  <img className="h-80 w-80" src={image} alt="" />
                  <div className="">
                    <p className="text-center">{name}</p>
                    <p className="text-center">From ${price}</p>

                    <div className="flex justify-center">
                      <button className="h-10 w-14 bg-[#51659C] text-white rounded-md ">
                        -
                      </button>
                      <p className="h-10 w-16 text-center py-2">{quantity}</p>
                      <button className="h-10 w-14 bg-[#51659C] text-white rounded-md ">
                        +
                      </button>
                    </div>
                  </div>
                </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Shop;
