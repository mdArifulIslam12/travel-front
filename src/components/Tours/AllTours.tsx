"use client";
import { useGetAllTourQuery } from "@/redux/api/tour/tourApi";
import React, { useState } from "react";
import Tour from "./tour";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { FaSortAlphaDown } from "react-icons/fa";
import { ITour } from "@/types";
import { addSort } from "@/redux/api/tour/filterTour";

const AllTours = () => {
  const query: Record<string, any> = {};
  const { type, search, sort, reviewStar, priceSortHigh, priceSortLow } =
    useAppSelector((state) => state.filter);
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(8);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");

  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;

  const {
    data: allTour,
    isLoading,
    isError,
    isSuccess,
  } = useGetAllTourQuery({
    ...query,
  });
  const dispatch = useAppDispatch();

  const tours = allTour?.tours;
  const meta = allTour?.meta;
  let totalPage = Math.ceil(meta?.total / 8);
  let tourLength = 0;
  if (tours) {
    tourLength = tours.length;
  }

  // State to manage the selected option
  const [selectedOption, setSelectedOption] = useState("");

  // Event handler to update the selected option
  const handleSelectChange = (e: any) => {
    setSelectedOption(e.target.value);
    dispatch(addSort(e.target.value));
  };

  let content = null;
  if (isLoading) {
    content = <div>Loding..</div>;
  } else if (!isLoading && !isError && tours?.length == 0) {
    content = <div className="">Tour tag not found!!</div>;
  } else if (!isLoading && !isError && tourLength > 0 && isSuccess) {
    const filteredData = tours
      ?.filter(
        (item) => item.price >= priceSortLow && item.price <= priceSortHigh
      )
      .filter((tour: ITour) => {
        if (type.length > 0) {
          return type.includes(tour.categories as never);
        } else {
          return tour;
        }
      })
      .filter((tour: ITour) => tour.rating >= reviewStar)
      .slice()
      .sort((a: ITour, b: ITour): any => {
        if (sort == "price") {
          return b.price - a.price;
        } else if (sort == "rating") {
          return b.rating - a.rating;
        }
      });

    content = filteredData?.map((tour, index) => (
      <Tour tour={tour} key={index} />
    ));
  }
  const onPaginationChange = (page: number, pageSize: number) => {
    setPage(page);
    setSize(pageSize);
  };

  const pages = Array.from({ length: totalPage }, (_, index) => index + 1);

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          {" "}
          <p className="text-[#969BA1] text-sm">{meta?.total} Tours</p>
        </div>
        <div className="flex items-center">
          <p className="text-[#969BA1] text-sm">Sort By</p>
          <FaSortAlphaDown className="mx-2" />
          <select
            className="select select-bordered select-sm w-[150px] max-w-xs"
            value={selectedOption}
            onChange={handleSelectChange}
          >
            <option value="">Title</option>
            <option value="price">Price</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 lg:gap-5 gap-y-7 ">
        {content}
      </div>

      <div className="flex items-center space-x-4 mt-16">
        {page !== 1 && (
          <button
            onClick={() => onPaginationChange(page - 1, 8)}
            className="text-[#969BA1] uppercase text-[16px] font-medium"
          >
            <div className="flex items-center">
              <IoIosArrowBack className="text-[19px] font-medium" />
              <span>prev</span>
            </div>
          </button>
        )}
        {pages.map((allPage) => (
          <button
            key={allPage}
            className={`px-4 py-2 rounded-full text-[#969BA1]  ${
              page === allPage
                ? "bg-[#e46d30] text-white"
                : "hover:bg-[#e46d30] hover:text-white "
            }`}
            onClick={() => onPaginationChange(allPage, 8)}
          >
            {allPage}
          </button>
        ))}
        {page !== 3 && (
          <button
            onClick={() => onPaginationChange(page + 1, 8)}
            className="text-[#969BA1] uppercase text-[16px] font-medium"
          >
            <div className="flex items-center">
              <span>next</span>
              <IoIosArrowForward className="text-[19px] font-medium" />
            </div>
          </button>
        )}
      </div>
    </div>
  );
};

export default AllTours;
