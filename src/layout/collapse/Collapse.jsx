import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { BsQuestionCircle } from "react-icons/bs";

import "./style.css";
import { FaChevronDown } from "react-icons/fa";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const Collapse = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-w-2xl mx-auto">
      <button
        className="w-full flex justify-between items-center text-xl border-t  hover:bg-gray-100 px-3 py-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-2">
          <BsQuestionCircle />
          <p className="hover:border-b-2">{question}</p>
        </div>{" "}
        {
          isOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />
        }
        
      </button>
      <CSSTransition
        in={isOpen}
        timeout={300}
        classNames="collapse"
        unmountOnExit
      >
        <div className="text-md px-3 py-5">
          {answer}
        </div>
      </CSSTransition>
    </div>
  );
};

export default Collapse;
