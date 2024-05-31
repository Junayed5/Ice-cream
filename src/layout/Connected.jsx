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

      <div>
        <Collapse question="What is this" answer="This is collapse" />
        <Collapse question="What is this" answer="This is collapse" />
        <Collapse question="What is this" answer="This is collapse" />
      </div>
    </div>
  );
};

export default Connected;
