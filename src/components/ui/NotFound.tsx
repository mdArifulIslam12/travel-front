/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const NotFoundPage = () => {
  return (
    <div className="my-24 text-center">
      <div>
        <img
          src="https://demo2.wpopal.com/zourney/wp-content/themes/zourney/assets/images/404/404_image.png"
          alt=""
          className="mx-auto"
        />
        <h2 className="text-5xl font-bold text-black mt-5 mb-4 ">
          Oops! That Page Can't Be Found{" "}
        </h2>
        <p className="text-xl font-medium text-[#5C626A]">
          It looks like nothing was found at thes location. You can either go
          back to <br /> the last page or go to{" "}
          <a href="/" className="underline hover:text-orange-500 ">
            Home page.
          </a>{" "}
        </p>
        <Link href={"/"}>
          <button className="mt-8 text-md w-56 h-14 before:absolute border-[1px] border-none bg-black before:block before:inset-0 before:-z-10 before:bg-none text-white after:block hover:after:w-full after:w-0 after:hover:left-0 after:right-0 after:top-0 after:h-full after:-z-10 after:duration-300 after:bg-orange-400 after:absolute relative  inline-block hover:border-none hover:text-white font-bold subHeaderTitle rounded-md z-10">
            <div className="flex justify-center items-center">
              <div>Back to Home</div>
              <IoIosArrowRoundForward className="text-[30px] font-bold subHeaderTitle text-white about-contact-icon" />
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
