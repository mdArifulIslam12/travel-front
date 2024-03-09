"use client";
import { useGetAllTourQuery } from "@/redux/api/tour/tourApi";
import React, { useState } from "react";
import Tour from "./tour";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useAppSelector } from "@/redux/hooks";

const AllTours = () => {
  const query: Record<string, any> = {};
  const { type, search, sort, priceSortHigh, priceSortLow } = useAppSelector(
    (state) => state.filter
  );
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

  const tours = allTour?.tours;
  const meta = allTour?.meta;
  let totalPage = Math.ceil(meta?.total / 8);
  let tourLength = 0;
  if (tours) {
    tourLength = tours.length;
  }
  let content = null;
  if (isLoading) {
    content = <div>Loding..</div>;
  } else if (!isLoading && !isError && tours?.length == 0) {
    content = <div className="">Tour tag not found!!</div>;
  } else if (!isLoading && !isError && tourLength > 0 && isSuccess) {
    const filteredData = tours?.filter(
      (item) => item.price >= priceSortLow && item.price <= priceSortHigh
    );
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
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-5 gap-y-7 ">
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
