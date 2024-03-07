import Link from "next/link";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const Support = () => {
  const AvatalImg = [
    {
      img: "https://demo2.wpopal.com/zourney/wp-content/uploads/2022/07/footer_img01.png",
    },
    {
      img: "https://demo2.wpopal.com/zourney/wp-content/uploads/2022/07/footer_img02.png",
    },
    {
      img: "https://demo2.wpopal.com/zourney/wp-content/uploads/2022/07/footer_img03.png",
    },
    {
      img: "https://demo2.wpopal.com/zourney/wp-content/uploads/2022/07/footer_img04.png",
    },
    {
      img: "https://demo2.wpopal.com/zourney/wp-content/uploads/2022/07/footer_img05.png",
    },
  ];

  return (
    <div className="bg-[#edf1f4]">
      <div className="ml-[80px]">
        <h2 className="mt-20 font-bold text-3xl ">24/7 Customer Support</h2>
        <p className="mt-3 font-medium text-md text-[#5c626a]">
          Contact us now to have all of your tour-related question answered.
        </p>
        <div className="lg:flex items-center sm:justify-center  mt-6">
          <div>
            <div className="avatar-group -space-x-6 rtl:space-x-reverse">
              {AvatalImg.map((av, index) => (
                <div className="avatar border-none  " key={index}>
                  <div className="w-14 avatar-section-img">
                    <img src={av.img} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="ml-[90px] support-button-sm">
            <Link href={"/"}>
              <button className=" text-md w-48 h-14 before:absolute border-[1px] border-none before:block before:inset-0 before:-z-10 before:bg-none text-white bg-[#8E8A46] after:block hover:after:w-full after:w-0 after:hover:left-0 after:right-0 after:top-0 after:h-full after:-z-10 after:duration-300 after:bg-orange-400 after:absolute relative  inline-block hover:border-none hover:text-white font-bold subHeaderTitle rounded-md hover:bg-orange-500">
                <div className="flex justify-center items-center">
                  <div>Contact Us</div>
                  <IoIosArrowRoundForward className="text-[30px] font-bold subHeaderTitle text-white" />
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
