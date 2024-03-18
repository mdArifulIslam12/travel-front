import { ITour } from "@/types";
import Link from "next/link";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import Rating from "../ui/Rating";
import { MdOutlineWatchLater } from "react-icons/md";

const Tour = ({ tour }: any) => {
  const { title, image, price, rating, city, country, duration } = tour;
  // console.log(tour.continents);
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl single-tour-card ">
      <figure className="h-[280px]">
        <Link href={`tour/${tour?._id}`}>
          <img src={image} alt="tour img" className="img-tour h-[280px] " />
        </Link>
      </figure>
      <div className="card-body pt-[14px] bg-[#f6f8fb] ">
        <p className="text-md font-normal text-[#969BA1]">
          {city},{country}
        </p>
        <Link href={`tour/${tour?._id}`}>
          <h2 className="text-2xl text-black font-semibold hover:text-[#e46d30] ">
            {title}
          </h2>
        </Link>
        <div className="flex justify-between items-center">
          <p className="flex items-center">
            {" "}
            <span className="mr-2">
              <MdOutlineWatchLater className="text-[19px] text-[#e46d30]" />
            </span>{" "}
            {duration}
          </p>
          <Rating rating={rating} />
        </div>
        <div className="bord border-t-[1px] border-dotted border-[#969BA1]  flex items-center justify-between pt-[22px] mt-[22px]">
          <p className="text-md font-normal text-[#969BA1]">
            From{" "}
            <span className="text-xl font-semibold text-[#e46d30]">
              ${price}
            </span>{" "}
          </p>
          <div className="card-actions justify-end">
            <Link href={`tour/${tour?._id}`}>
              <button className="text-md font-semibold hover:text-[#e46d30] ">
                <div className="flex justify-center items-center">
                  <div>More Information</div>
                  <IoIosArrowRoundForward className="text-[30px] font-bold subHeaderTitle text-[#e46d30] " />
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tour;
