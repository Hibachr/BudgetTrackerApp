import { useState, useEffect } from "react";
import Image from "next/image";

export default function DropDown({ options, selected, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropDown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelect = (option) => {
    onSelect(option);
    setIsOpen(false); 
  };

  return (
    <div className="relative inline-block dropdown">
      {/* Button */}
      <button
        onClick={toggleDropDown}
        className="border-gray-400 border-2 px-4 py-1 rounded-md text-xs max-md:text-[14px] min-w-30 flex gap-2 items-center"
      >
        {selected} <Image src="/icons/drop.png" width={7} height={4} alt="Dropdown icon" />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute left-0 mt-2 min-w-30 rounded-md bg-white shadow-md z-10">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleSelect(option)}
              className={`block w-full text-left px-4 py-2 text-xs max-md:text-[14px] hover:bg-gray-100 ${
                selected === option ? "bg-gray-200" : ""
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
