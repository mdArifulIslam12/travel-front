import SheardHeader from "@/components/Sheard/SheardHeader";
import SheardNewsletterSupport from "@/components/Sheard/SheardNewsletterSupport";
import AllTours from "@/components/Tours/AllTours";
import React from "react";

const TourPage = () => {
  return (
    <div>
      <SheardHeader title="Tours" subTitle="Tours" />
      <div className="max-w-7xl mx-auto">
        <div className=" grid lg:grid-cols-12 sm:grid-cols-12 gap-4 my-16 ">
          <div className="lg:col-span-8 sm:col-span-12 lg:border-r-[2px] lg:border-dotted lg:pr-12 ">
            <AllTours />
          </div>
          <div className="lg:col-span-4 sm:col-span-12 lg:pl-12 ">
            <p>sdfdsf</p>
          </div>
        </div>
      </div>
      <SheardNewsletterSupport />
    </div>
  );
};

export default TourPage;
