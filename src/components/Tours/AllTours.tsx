"use client";
import { useGetAllTourQuery } from "@/redux/api/tour/tourApi";
import React, { useState } from "react";
import Tour from "./tour";

const AllTours = () => {
  const query: Record<string, any> = {};

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
  console.log(meta);
  console.log(Math.ceil(meta?.total / 8));
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
    content = tours?.map((tour, index) => <Tour tour={tour} key={index} />);
  }
  const onPaginationChange = (page: number, pageSize: number) => {
    console.log("Page:", page, "PageSize:", pageSize);
    setPage(page);
    setSize(pageSize);
  };

  const pages = Array.from({ length: totalPage }, (_, index) => index + 1);

  return (
    <div>
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-5 gap-y-7 ">
        {content}
      </div>

      <div className="flex justify-center items-center space-x-4 mt-8">
        <button onClick={() => onPaginationChange(page - 1, 8)}>prev</button>
        {pages.map((allPage) => (
          <button
            key={allPage}
            className={`px-4 py-2 rounded-md bg-gray-200 ${
              page === allPage ? "bg-gray-500 text-white" : "hover:bg-gray-300"
            }`}
            onClick={() => onPaginationChange(allPage, 8)}
          >
            {allPage}
          </button>
        ))}
        <button onClick={() => onPaginationChange(page + 1, 8)}>next</button>
      </div>
    </div>
  );
};

export default AllTours;
