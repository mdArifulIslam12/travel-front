"use client";

import SheardHeader from "@/components/Sheard/SheardHeader";
import SheardNewsletterSupport from "@/components/Sheard/SheardNewsletterSupport";
import FqaSection from "@/components/Tours/FqaSection";
import OtherStaticTour from "@/components/Tours/OtherStaticTour";
import Tour from "@/components/Tours/tour";
import { useGetAllTourDbFromQuery } from "@/redux/api/tour/tourApi";
import { useRouter, useSearchParams } from "next/navigation";

const TripTourPage = () => {
  const searchParams = useSearchParams();
  const categoriesData = searchParams.get("categories");
  let categories: string = "";
  if (categoriesData) {
    categories = categoriesData;
  }

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
    const filteredByContinent = tours.filter(
      (tour: any) => tour.categories.toUpperCase() == categories.toUpperCase()
    );
    content = filteredByContinent?.map((tour: any, index: any) => (
      <Tour tour={tour} key={index} />
    ));
  }

  return (
    <div>
      <SheardHeader title={"Trip"} subTitle={`Trip / ${categories}`} />
      <div className="max-w-7xl mx-auto tour-page-small-device ">
        <h2 className="text-4xl font-bold text-black mt-16 ">Explore Tours</h2>
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 lg:gap-5 gap-y-7 mb-16 mt-12 ">
          {content}
        </div>
        <div className=" grid lg:grid-cols-12 sm:grid-cols-12 gap-4 my-16  ">
          <div className="lg:col-span-8 sm:col-span-12  lg:pr-4 ">
            <FqaSection />
          </div>
          <div className="lg:col-span-4 sm:col-span-12 lg:pl-12  ">
            <OtherStaticTour />
          </div>
        </div>
      </div>

      <SheardNewsletterSupport />
    </div>
  );
};

export default TripTourPage;
