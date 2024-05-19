import React from "react";

const Products = () => {
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
  ];

  return (
    <div className="my-20">
      <div>
        <h2 className="font-semibold text-3xl text-center">KIND KLASSIKS</h2>
        <p className="border-b-2 w-36 mx-auto border-black py-1"></p>
      </div>
      <div className="flex gap-4 justify-center my-10">
        <div>
          <h2 className="text-xl ">ICE CREAM</h2>
          <p className="border-b-2 w-20 ml-3 border-black py-1"></p>
        </div>
        <div>
          <h2 className="text-xl ">CAKES & BAKES</h2>
          {/* <p className="border-b-2 w-20 ml-3 border-black py-1"></p> */}
        </div>
      </div>
      {/*products */}
      <div className="grid grid-cols-5">
        {products.map(({ image, name, price, quantity }) => {
          return (
            <div>
              <img src={image} alt="" />
              <div className="inline-block justify-center">
                <p>{name}</p>
                <p>From ${price}</p>

                <div className="flex">
                  <button className="h-10 w-16 bg-[#51659C] text-white rounded-md ">
                    -
                  </button>
                  <p className="h-10 w-16 text-center py-2">{quantity}</p>
                  <button className="h-10 w-16 bg-[#51659C] text-white rounded-md ">
                    +
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
