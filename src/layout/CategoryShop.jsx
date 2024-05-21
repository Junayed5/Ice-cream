import React from "react";

const CategoryShop = () => {
  const category = [
    {
      name: "Ice Cream",
      image: "https://i.ibb.co/71phJRT/Link.png",
    },
    {
      name: "Ice Cream",
      image: "https://i.ibb.co/71phJRT/Link.png",
    },
    {
      name: "Ice Cream",
      image: "https://i.ibb.co/71phJRT/Link.png",
    },
    {
      name: "Ice Cream",
      image: "https://i.ibb.co/71phJRT/Link.png",
    },
  ];
  return (
    <div>
      <div>
        <h2 className="font-semibold text-3xl text-center">SHOP BY CATEGORY</h2>
        <p className="border-b-2 w-36 mx-auto border-black py-1"></p>
      </div>
      <div className="grid grid-cols-4 w-2/3 mx-auto my-16">
        {category.map(({ name, image }) => {
          return (
            <div>
              <img src={image} alt="" />
              <p className="text-center">{name}</p>
              <div className=" border border-black w-fit p-[1px] rounded-md mx-auto my-5">
                <button className="h-14 w-64 bg-[#51659C] text-center text-white font-semibold rounded-md  uppercase p-1">
                  Shop More
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div>
        <img
          className="w-fit mx-auto"
          src="https://i.ibb.co/hZVfx94/Ledzgetreal-png.png"
          alt="Ledzgetreal-png"
        />
        <p className="w-3/5 text-center mx-auto my-10">
          Kind Kones is an all-natural vegan ice cream brand. The ice creams are
          plant based and free from dairy, egg, and other artificial additives
          with mostly gluten-free options. The shops also serve a selection of
          desserts that are healthier alternatives to conventional versions
          usually loaded with sugar and unhealthy fats. Kind Kones strives to
          provide a better way to indulge in sweet treats guided by a philosophy
          of being kind to your body, the environment, and to others.
        </p>
      </div>
    </div>
  );
};

export default CategoryShop;
