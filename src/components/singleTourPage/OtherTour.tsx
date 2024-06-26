"use client";
import { useGetAllTourDbFromQuery } from "@/redux/api/tour/tourApi";

import Tour from "../Tours/tour";

const OtherTour = ({ tour }: { tour: any }) => {
  const { categories, _id } = tour;
  const {
    data: tours,
    isLoading,
    isError,
    isSuccess,
  } = useGetAllTourDbFromQuery("");

  let content = null;
  if (isLoading) {
    content = <div>Loding..</div>;
  } else if (!isLoading && !isError && tours?.length == 0) {
    content = <div className="">Tour tag not found!!</div>;
  } else if (!isLoading && !isError && tours?.length > 0 && isSuccess) {
    const filteredByContinent = tours
      .filter(
        (tour: any) =>
          tour.categories.toUpperCase() == categories?.toUpperCase()
      )
      .filter((tour: any) => tour.id !== _id);
    content = filteredByContinent?.map((tour: any, index: any) => (
      <Tour tour={tour} key={index} />
    ));
  }
  return (
    <div>
      <h2 className="text-3xl font-bold text-black">You May Also Like</h2>
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 lg:gap-5 gap-y-7 mb-16 mt-12 ">
        {content}
      </div>
    </div>
  );
};

export default OtherTour;
