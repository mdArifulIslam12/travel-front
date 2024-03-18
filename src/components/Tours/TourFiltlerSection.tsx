"use client";
import {
  addPriceSortHigh,
  addReviewStar,
  addType,
} from "@/redux/api/tour/filterTour";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import React, { useEffect, useState } from "react";

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

  const { type, search, sort, reviewStar, priceSortHigh, priceSortLow } =
    useAppSelector((state) => state.filter);
  const dispatch = useAppDispatch();

  const [rangeValue, setRangeValue] = useState(priceSortHigh);

  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    dispatch(addType(selectedCategories));
  }, [selectedCategories]);

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
          <div
            className="flex items-center mt-2 hover:text-[#e46d30] "
            key={c.categories}
          >
            <input
              type="checkbox"
              onChange={() => handleCheckboxChange(c.categories as never)}
              checked={selectedCategories.includes(c.categories as never)}
              className="checkbox checkbox-sm hover:border-orange-400   [--chkbg:theme(colors.orange.500)]"
            />
            <p className="ml-2">{c.categories}</p>
          </div>
        ))}
      </div>
      <div className="border-y-[2px] border-dotted  py-12 ">
        <p className="text-xl font-medium text-black mt-4 mb-3">Reviews</p>
        <div>
          <div className="flex items-center mt-2 text-[#5C626A]  hover:text-[#e46d30] ">
            <input
              type="checkbox"
              onChange={() => dispatch(addReviewStar(5))}
              checked={reviewStar == 5}
              className="checkbox checkbox-sm hover:border-orange-400  [--chkbg:theme(colors.orange.500)] "
            />
            <p className="ml-2">5 Stars </p>
          </div>
          <div className="flex items-center mt-2 text-[#5C626A]  hover:text-[#e46d30] ">
            <input
              type="checkbox"
              onChange={() => dispatch(addReviewStar(4))}
              checked={reviewStar == 4}
              className="checkbox checkbox-sm hover:border-orange-400  [--chkbg:theme(colors.orange.500)] "
            />
            <p className="ml-2">4 Stars & Up</p>
          </div>
          <div className="flex items-center mt-2 text-[#5C626A]  hover:text-[#e46d30] ">
            <input
              type="checkbox"
              onChange={() => dispatch(addReviewStar(3))}
              checked={reviewStar == 3}
              className="checkbox checkbox-sm hover:border-orange-400  [--chkbg:theme(colors.orange.500)] "
            />
            <p className="ml-2">3 Stars & Up</p>
          </div>
          <div className="flex items-center mt-2 text-[#5C626A]  hover:text-[#e46d30] ">
            <input
              type="checkbox"
              onChange={() => dispatch(addReviewStar(2))}
              checked={reviewStar == 2}
              className="checkbox checkbox-sm hover:border-orange-400  [--chkbg:theme(colors.orange.500)] "
            />
            <p className="ml-2">2 Stars & Up</p>
          </div>
          <div className="flex items-center mt-2 text-[#5C626A]  hover:text-[#e46d30] ">
            <input
              type="checkbox"
              onChange={() => dispatch(addReviewStar(1))}
              checked={reviewStar == 1}
              className="checkbox checkbox-sm hover:border-orange-400  [--chkbg:theme(colors.orange.500)] "
            />
            <p className="ml-2">1 Stars & Up</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourFiltlerSection;
