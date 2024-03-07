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
  console.log(allTour);
  if (meta) {
    console.log(meta?.total / 8);
  }

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

  return (
    <div>
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-5">{content}</div>
      <div className="flex justify-center mt-8">
        <button
          onClick={() => onPaginationChange(1, 8)}
          className="mr-2 px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={() => onPaginationChange(1, 8)}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AllTours;
