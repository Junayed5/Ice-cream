import React from "react";
import Collapse from "./collapse/Collapse";

const Connected = () => {
  return (
    <div className="mt-10">
      <div className="pb-8">
        <h2 className="font-semibold text-xl text-center">STAY CONNECTED</h2>
        <p className="border-b-2 w-24 mx-auto border-black "></p>
      </div>

      <div className="grid grid-cols-4 px-5">
        <img src="connect4.png" alt="connect4.png" />
        <img src="connect3.png" alt="connect3.png" />
        <img src="connect2.png" alt="connect2.png" />
        <img src="connect.png" alt="connect.png" />
      </div>

      <div className="my-8">
        <div className="pb-8">
          <h3 className="text-center text-3xl font-semibold ">FAQs</h3>
          <p className="border-b-2 w-8 mx-auto border-black "></p>
        </div>

        <Collapse
          question="Are there nuts in your ice cream?"
          answer="Some of our flavours contain nuts, so do refer to our product pages for more information on the ingredients for each flavour."
        />
        <Collapse
          question="Is there soy present in your ice cream?"
          answer="No soy milk is used, but do note that there is soy lecithin used in some of our products such as the chocolate based ones."
        />
        <Collapse
          question="Do you offer same-day delivery?"
          answer="A resounding YES! Place your order before 4 pm and leave the rest to us!"
        />
      </div>
    </div>
  );
};

export default Connected;
