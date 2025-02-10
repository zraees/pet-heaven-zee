import React, { ReactNode, useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

interface AccordionProps {
  title: string;
  content: ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-300 rounded-lg mb-4">
      <button
        className="w-full flex justify-between items-center p-4 bg-white rounded-t-lg focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold text-gray-900">{title}</span>
        {isOpen ? <FaMinus className="text-gray-900" /> : <FaPlus className="text-gray-900" />}
      </button>
      {isOpen && (
        <div className="p-4 bg-gray-3 rounded-b-lg text-gray-700 text-sm">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
