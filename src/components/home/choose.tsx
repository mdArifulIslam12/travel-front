/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import AboutImg from "../../assets/about_bg.jpg";
const ChooseSection = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mt-12 mb-12 grid lg:grid-cols-2 sm:grid-cols-1 gap-5 ">
        <div className="relative">
          <img
            src={
              "https://demo2.wpopal.com/zourney/wp-content/uploads/2022/07/h1_img.jpg"
            }
            alt="About img descrption"
            className="lg:w-full sm:w-[300px] lg:h-[800px] sm:h-[600px]  rounded-lg"
          />
          <div className="absolute bottom-0 lg:right-[-100px] sm:right-0 lg:w-[400px]  lg:h-[250px]  bg-[#E46D30] rounded-md  ">
            <div className="pt-[40px] pb-[30px] pr-[60px] pl-[50px] relative ">
              <div className="absolute top-0 right-0">
                <img
                  src="	https://demo2.wpopal.com/zourney/wp-content/uploads/2022/07/h1_deco.png"
                  alt=""
                  className=""
                />
              </div>
              <div className="ml-3">
                {/* <TbWorldSearch className="text-white text-5xl" /> */}
              </div>
              <div className="mt-3">
                <h4 className="headerTitle font-medium text-3xl text-white">
                  We Create Journeys Worth Taking For The Traveler
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:ml-40 lg:pr-[44px] about-page-time ">
          <p className="subHeaderTitle text-[14px] font-bold mb-4 uppercase lg:pl-0 sm:pl-[10px]">
            Why choose us
          </p>
          <h2 className="headerTitle text-5xl  font-[600] text-black ">
            Our Experiences Meet High Quality Standards
          </h2>
          <div className="mt-8  ">
            <div className="lg:w-[60px] sm:w-0 lg:h-[1px] bg-[#E46D30] mb-[-10px]"></div>
            <div className="lg:ml-[100px]">
              <p className="subHeaderTitle font-normal text-lg text-black mb-6">
                Zourney is a global travel booking portal where you effortlessly
                can book day tours, fixed group departures, holidays and
                vacation packages in 130+ countries around the world.
              </p>
              <p className="subHeaderTitle text-[15px] font-medium mb-8">
                Today, booking the right tour or holiday package has become a
                time consuming and painful process. Which tour operator is
                qualified? What’s the right tour price? When you pay an upfront
                deposit to an unknown tour operator, is your money safe? Are the
                reviews seen on a local operators website genuine?
              </p>
              <Link href={"/"}>
                <button className="mt-8 text-md w-56 h-14 before:absolute border-[1px] border-black before:block before:inset-0 before:-z-10 before:bg-none text-black after:block hover:after:w-full after:w-0 after:hover:left-0 after:right-0 after:top-0 after:h-full after:-z-10 after:duration-300 after:bg-orange-400 after:absolute relative  inline-block hover:border-none hover:text-white font-bold subHeaderTitle rounded-md  contact-about-link ">
                  <div className="flex justify-center items-center">
                    <div>Contact Us</div>
                    <IoIosArrowRoundForward className="text-[30px] font-bold subHeaderTitle text-[#E46D30] about-contact-icon" />
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseSection;
