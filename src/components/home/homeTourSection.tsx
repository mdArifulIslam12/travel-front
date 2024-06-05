/* eslint-disable @next/next/no-img-element */
"use client";

import { useGetAllTourDbFromQuery } from "@/redux/api/tour/tourApi";
import Tour from "../Tours/tour";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoIosArrowRoundForward,
} from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { GoStopwatch } from "react-icons/go";
import Link from "next/link";

const CustomPrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className={`w-16 h-16 sheardButtonIcons about-custom-tarvel absolute -left-24 top-[25%] bg-white shadow-sm  rounded-full`}
    >
      <IoIosArrowBack className="text-xl ml-[23px] text-[#e46d30]" />
    </button>
  );
};

const CustomNextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className={`w-16 h-16 sheardButtonIcons about-custom-tarvel absolute -right-24 top-[26%] bg-white shadow-sm  rounded-full `}
    >
      <IoIosArrowForward className="text-xl ml-[25px] text-[#e46d30] " />
    </button>
  );
};

const HomeTourSection = () => {
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
    content = tours?.slice(0, 10)?.map((tour: any, index: any) => (
      <div
        key={tour.id}
        className="card max-w-72 mx-2 inset-0 bg-black opacity-90 h-[396px] rounded-sm shadow-lg overflow-hidden home-tour-detilesHover "
      >
        <div className="home-tour-img">
          <img
            className="tour-home-imgHover"
            src={tour.image}
            style={{
              backgroundSize: "cover",
              backgroundPosition: "center",
              zIndex: -12,
              height: "400px",
              width: "100%",
              position: "absolute",
            }}
            alt=""
          />
          <div
            className="p-4 text-left "
            // style={{
            //   zIndex: 1,
            // }}
          >
            <div className="flex justify-between">
              <p className="bg-amber-500 font-semibold text-[12px] rounded-md text-white px-1 py-[1px] uppercase ">
                {tour?.tourType}
              </p>
              <p className="text-white font-semibold">From {tour.price}</p>
            </div>
            <div className="mt-36 ml-4">
              <p className="text-white subHeaderTitle  mb-2">
                {tour.city} {tour.country}{" "}
              </p>

              <Link href={`/tour/${tour?._id}`}>
                <h3
                  className="headerTitle text-[24px] text-white hover:text-orange-500 font-semibold mb-2 "
                  style={{
                    lineHeight: 1.25,
                  }}
                >
                  {tour.title.slice(0, 32)}...
                </h3>
              </Link>
              <div className="flex text-white mb-1 items-center gap-2">
                <GoStopwatch />
                <p className="my-1">{tour.duration}</p>
              </div>
              <Link href={`/tour/${tour?._id}`}>
                <button className="mt-1 text-sm w-56 h-14 before:absolute border-[1px] border-slate-50 before:block before:inset-0 before:-z-10 before:bg-none text-white after:block hover:after:w-full after:w-0 after:hover:left-0 after:right-0 after:top-0 after:h-full after:-z-10 after:duration-300 after:bg-orange-400 after:absolute relative  inline-block hover:border-none">
                  <div className="flex justify-center items-center ">
                    <div>More Information</div>
                    <IoIosArrowRoundForward className="text-[30px] font-bold subHeaderTitle text-[#fff] " />
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    ));
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false, // Enable autoplay
    autoplaySpeed: 4000, // Autoplay interval in milliseconds (e.g., 2000ms = 2 seconds)
  };

  return (
    <div className="max-w-7xl mx-auto my-12 ">
      <div className="my-8 mb-16">
        <p className="text-center mt-28 subHeaderTitle ">Explore our Tours</p>
        <p className=" headerTitle text-5xl text-center mt-6 text-black font-bold">
          New And Most <br /> Popular Tours
        </p>
        <div className="w-[100px] h-[1px] bg-[#E46D30] mx-auto mt-6 mb-16"></div>
      </div>
      <Slider {...settings}>
        {/* <div className="grid lg:grid-cols-4 sm:grid-cols-1 lg:gap-5 gap-y-7 "> */}
        {content}
        {/* </div> */}
      </Slider>
    </div>
  );
};

export default HomeTourSection;
