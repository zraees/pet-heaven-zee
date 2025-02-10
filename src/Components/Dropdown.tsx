import React, { useState, useRef, useEffect } from "react";
import DropdownIcon from "../Assets/DropdownIcon.svg";

type Props = {
  options: React.ReactNode;
  children?: React.ReactNode;
};

const Dropdown = ({ options, children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative flex justify-center items-center z-[100]" ref={dropdownRef}>
      <button
        className="flex justify-center items-center w-full hover:bg-gray-50 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {children}
        <img
          src={DropdownIcon}
          alt="dropdown icon"
          className={`ml-2 transform ${isOpen ? "rotate-180" : ""} transition-transform duration-200`}
        />
      </button>

      {isOpen && (
        <div className="absolute w-40 right-0 top-10 bg-white p-2 shadow-lg rounded-md z-[100] border">
          {options}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
