/* eslint-disable react/no-unescaped-entities */
"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

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

const AboutTravelersTrip = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 4000, // Autoplay interval in milliseconds (e.g., 2000ms = 2 seconds)
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };
  return (
    <div className="my-20 about-travel-right-img">
      <div className="about-travel-left-img">
        <div className="text-center">
          <p className="text-[13px] font-[600] uppercase  mb-12">
            Real Travelers Reviews
          </p>
          <h2 className="text-5xl font-bold text-black">
            What Our Travelers Say <br /> About the Trip
          </h2>
          <div className="w-[100px] h-[1px] bg-[#E46D30] mx-auto my-12"></div>
        </div>
        <div className="max-w-3xl mx-auto">
          <Slider {...settings}>
            <div className=" text-center p-10">
              <h2 className="text-2xl font-semibold">
                "Absolutely wonderful ! Just the right amount of time spent
                snorkeling and one of the most beautiful beaches I have ever
                seen. Customer service was professional. Highly recommend "
              </h2>
              <div className="flex items-center justify-center mt-5 mb-12">
                <FaStar className="mr-1 text-[#e46d30]" />
                <FaStar className="mr-1 text-[#e46d30]" />
                <FaStar className="mr-1 text-[#e46d30]" />
                <FaStar className="mr-1 text-[#e46d30]" />
                <FaStar className="mr-1 text-[#e46d30]" />
              </div>
              <h2 className="text-md uppercase text-black font-bold ">
                Brad cooper
              </h2>
              <p className="text-sm font-normal text-[#969BA1] ">
                London England
              </p>
            </div>
            <div className=" text-center p-10">
              <h2 className="text-2xl font-semibold">
                “Everything worked like clockwork. However, it was the genius of
                the itinerary, coupled with our two passionate professionals.”
              </h2>
              <div className="flex items-center justify-center mt-5 mb-12">
                <FaStar className="mr-1 text-[#e46d30]" />
                <FaStar className="mr-1 text-[#e46d30]" />
                <FaStar className="mr-1 text-[#e46d30]" />
                <FaStar className="mr-1 text-[#e46d30]" />
                <FaStar className="mr-1 text-[#e46d30]" />
              </div>
              <h2 className="text-md uppercase text-black font-bold ">
                Jhon Smith
              </h2>
              <p className="text-sm font-normal text-[#969BA1] ">
                New York, USA
              </p>
            </div>
            <div className=" text-center p-10">
              <h2 className="text-2xl font-semibold">
                "Absolutely wonderful ! Just the right amount of time spent
                snorkeling and one of the most beautiful beaches I have ever
                seen. Customer service was professional. Highly recommend "
              </h2>
              <div className="flex items-center justify-center mt-5 mb-12">
                <FaStar className="mr-1 text-[#e46d30]" />
                <FaStar className="mr-1 text-[#e46d30]" />
                <FaStar className="mr-1 text-[#e46d30]" />
                <FaStar className="mr-1 text-[#e46d30]" />
                <FaStar className="mr-1 text-[#e46d30]" />
              </div>
              <h2 className="text-md uppercase text-black font-bold ">
                Brad cooper
              </h2>
              <p className="text-sm font-normal text-[#969BA1] ">
                London England
              </p>
            </div>
            <div className=" text-center p-10">
              <h2 className="text-2xl font-semibold">
                “Excellent. Our best tour operator yet. The itinerary was
                carefully thought through and well balanced. The trip
                represented great travel for the cost.”
              </h2>
              <div className="flex items-center justify-center mt-5 mb-12">
                <FaStar className="mr-1 text-[#e46d30]" />
                <FaStar className="mr-1 text-[#e46d30]" />
                <FaStar className="mr-1 text-[#e46d30]" />
                <FaStar className="mr-1 text-[#e46d30]" />
                <FaStar className="mr-1 text-[#e46d30]" />
              </div>
              <h2 className="text-md uppercase text-black font-bold ">
                Veronica Doe
              </h2>
              <p className="text-sm font-normal text-[#969BA1] ">
                London England
              </p>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default AboutTravelersTrip;
