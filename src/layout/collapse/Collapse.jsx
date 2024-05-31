import React, { useState } from "react";
import { CSSTransition } from 'react-transition-group';
import "./style.css";

const Collapse = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-w-md mx-auto my-4">
      <button
        className="w-full text-left py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
      </button>
      <CSSTransition
        in={isOpen}
        timeout={300}
        classNames="collapse"
        unmountOnExit
      >
        <div className="mt-2 px-4 py-2 bg-gray-100 rounded-lg shadow-inner">
          {answer}
        </div>
      </CSSTransition>
    </div>
  );
};

export default Collapse;
