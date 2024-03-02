"use client";
import { useState } from "react";

const Guest = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const [youth, setYouth] = useState(0);

  const youthIncrement = () => {
    setYouth(youth + 1);
  };

  const youthDecrement = () => {
    if (youth > 0) {
      setYouth(youth - 1);
    }
  };
  const [child, setChild] = useState(0);

  const childIncrement = () => {
    setChild(child + 1);
  };

  const childDecrement = () => {
    if (child > 0) {
      setChild(child - 1);
    }
  };

  const [isOpen, setIsOpen] = useState(false);

  const [selectedValue, setSelectedValue] = useState("Gusest");

  return (
    <div>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="mx-auto flex w-72 h-12 items-center justify-between rounded-sm border-[1px] border-gray-400 bg-white px-6 py-2"
      >
        <h1 className="font-medium text-gray-600">Guests {selectedValue}</h1>

        <svg
          className={`${isOpen ? "-rotate-180" : "rotate-0"} duration-300`}
          width={25}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M7 10L12 15L17 10"
              stroke="#4B5563"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{" "}
          </g>
        </svg>
      </div>
      <div
        className={`${
          isOpen ? "visible top-0 opacity-100" : "invisible -top-4 opacity-0"
        } relative overflow-y-auto max-h-44 my-4 w-72 rounded-xl py-4 border duration-300`}
      >
        <div
          onClick={(e) => {
            setSelectedValue(`${child + youth + count}`);
          }}
          className="px-6 py-2 text-gray-500 cursor-pointer"
        >
          <div className="flex justify-between">
            <div className="flex gap-2">
              <span>{count}</span>
              <h2>Adult</h2>
            </div>
            <div>
              <button
                className="bg-none hover:bg-orange-400 w-9 rounded-l-lg "
                onClick={decrement}
              >
                -
              </button>
              <button
                className="bg-none hover:bg-orange-400 w-9 rounded-r-lg"
                onClick={increment}
              >
                +
              </button>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-2">
              <span>{youth}</span>
              <h2>Youth</h2>
            </div>
            <div>
              <button
                className="bg-none hover:bg-orange-400 w-9 rounded-l-lg "
                onClick={youthDecrement}
              >
                -
              </button>
              <button
                className="bg-none hover:bg-orange-400 w-9 rounded-r-lg"
                onClick={youthIncrement}
              >
                +
              </button>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-2">
              <span>{child}</span>
              <h2>Children</h2>
            </div>
            <div>
              <button
                className="bg-none hover:bg-orange-400 w-9 rounded-l-lg "
                onClick={childDecrement}
              >
                -
              </button>
              <button
                className="bg-none hover:bg-orange-400 w-9 rounded-r-lg"
                onClick={childIncrement}
              >
                +
              </button>
            </div>
          </div>

          <button
            onClick={(e) => setIsOpen(false)}
            className=" bg-orange-400 hover:bg-orange-300 h-8 w-16 rounded text-gray-700 ml-20 mt-4"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default Guest;
