"use client";
import { addPriceSortHigh } from "@/redux/api/tour/filterTour";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import React, { useState } from "react";

const TourFiltlerSection = () => {
  const allCategories = [
    {
      categories: "Museum Tours",
    },
    {
      categories: "Boat Tours",
    },
    {
      categories: "city Tours",
    },
    {
      categories: "Hiking",
    },
    {
      categories: "Adventure",
    },
    {
      categories: "Honeymoon",
    },
    {
      categories: "Beaches",
    },
  ];

  const { type, search, sort, priceSortHigh, priceSortLow } = useAppSelector(
    (state) => state.filter
  );
  const dispatch = useAppDispatch();

  const [rangeValue, setRangeValue] = useState(priceSortHigh);

  const [selectedCategories, setSelectedCategories] = useState([]);

  // Function to handle checkbox change event
  const handleCheckboxChange = (category: never) => {
    // Check if the category is already selected
    const index = selectedCategories.indexOf(category);
    if (index === -1) {
      // If not selected, add it to the selected categories
      setSelectedCategories([...selectedCategories, category]);
    } else {
      // If already selected, remove it from the selected categories
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    }
  };
  console.log(selectedCategories);

  const handleRangeChange = (event: any) => {
    const value = parseInt(event.target.value);
    dispatch(addPriceSortHigh(value));
    setRangeValue(value);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-black mb-3 ">Filter by</h2>
      <div className=" border-y-[2px] border-dotted py-11">
        <p className="text-black text-lg font-medium mb-2">Price Range</p>
        <input
          type="range"
          min={0}
          max={211}
          value={rangeValue}
          onChange={handleRangeChange}
          className="range range-xs [--range-shdw:#e46d30]"
        />
        <p className="mt-2">
          ${priceSortLow} - ${priceSortHigh}
        </p>
      </div>
      <div>
        <p className="text-xl font-medium text-black mt-4 mb-3">Categories</p>

        {allCategories.map((c) => (
          <div className="flex items-center" key={c.categories}>
            <input
              type="checkbox"
              onChange={() => handleCheckboxChange(c.categories)}
              checked={selectedCategories.includes(c.categories)}
              className="checkbox checkbox-sm"
            />
            <p className="ml-2">{c.categories}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TourFiltlerSection;
