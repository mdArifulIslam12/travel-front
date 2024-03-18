import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import Link from "next/link";

const WorldExciting = () => {
  return (
    <div className="mt-12 sm:mt-5 md:mt-8 woldExcitin-backgournd-img">
      <div className=" flex justify-center items-center  woldExcitin-backgournd">
        <div className="text-center">
          <h2 className="text-5xl font-semibold text-white  ">
            We live in an exciting world!
          </h2>
          <Link href={"/"}>
            <button className="mt-8 text-md w-56 h-14 before:absolute border-[1px] border-white before:block before:inset-0 before:-z-10 before:bg-none text-white after:block hover:after:w-full after:w-0 after:hover:left-0 after:right-0 after:top-0 after:h-full after:-z-10 after:duration-300 after:bg-orange-400 after:absolute relative  inline-block hover:border-none hover:text-white font-bold subHeaderTitle rounded-md z-10">
              <div className="flex justify-center items-center">
                <div>Start Exploring It </div>
                <IoIosArrowRoundForward className="text-[30px] font-bold subHeaderTitle text-white about-contact-icon" />
              </div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WorldExciting;
