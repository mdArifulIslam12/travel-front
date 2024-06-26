"use client";
import AllTours from "../Tours/AllTours";
import TourFiltlerSection from "../Tours/TourFiltlerSection";
import FqaSection from "../Tours/FqaSection";
import OtherStaticTour from "../Tours/OtherStaticTour";
import TourSingleDetails from "./TourSingleDetails";
import OtherTour from "./OtherTour";
import BookingFromTour from "./BookingFromTour";

const TourDetails = ({ tour }: { tour: any }) => {
  return (
    <div className="max-w-7xl mx-auto tour-page-small-device ">
      <div className=" grid lg:grid-cols-12 sm:grid-cols-12 gap-4 my-16  ">
        <div className="lg:col-span-8 sm:col-span-12 lg:pr-12 ">
          <TourSingleDetails tour={tour} />
        </div>
        <div className="lg:col-span-4 sm:col-span-12   tour-page-fliter-section ">
          <BookingFromTour tour={tour} />
        </div>
      </div>
      <OtherTour tour={tour} />
      <div className=" grid lg:grid-cols-12 sm:grid-cols-12 gap-4 my-16  ">
        <div className="lg:col-span-8 sm:col-span-12  lg:pr-4 ">
          <FqaSection />
        </div>
        <div className="lg:col-span-4 sm:col-span-12 lg:pl-12  ">
          <OtherStaticTour />
        </div>
      </div>
    </div>
  );
};

export default TourDetails;
