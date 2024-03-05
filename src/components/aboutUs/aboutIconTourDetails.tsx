import React from "react";
import Icon1 from "../../assets/icon5.png";
import Icon2 from "../../assets/icon6.png";
import Icon3 from "../../assets/icon7.png";
import Icon4 from "../../assets/icon8.png";
import Image from "next/image";

const AboutIconTourDetails = () => {
  return (
    <div className="grid lg:grid-cols-4 sm:grid-cols-1 gap-5">
      <div className="flex items-center border-r-[2px] border-dashed ">
        <div>
          <Image src={Icon1} alt="" />
        </div>
        <div className="ml-6">
          <h2 className="text-4xl mb-2 font-bold text-[#e46d30] ">16,284+</h2>
          <p className="text-sm font-semibold text-black uppercase">
            Tours and Holidays
          </p>
        </div>
      </div>
      <div className="flex items-center border-r-[2px] border-dashed">
        <div>
          <Image src={Icon2} alt="" />
        </div>
        <div className="ml-6">
          <h2 className="text-4xl mb-2 font-bold text-[#e46d30] ">23,653+</h2>
          <p className="text-sm font-semibold text-black uppercase">
            Trip Reviews
          </p>
        </div>
      </div>
      <div className="flex items-center border-r-[2px] border-dashed">
        <div>
          <Image src={Icon3} alt="" />
        </div>
        <div className="ml-6">
          <h2 className="text-4xl mb-2 font-bold text-[#e46d30] ">125+</h2>
          <p className="text-sm font-semibold text-black uppercase">
            Countries covered
          </p>
        </div>
      </div>
      <div className="flex items-center">
        <div>
          <Image src={Icon4} alt="" />
        </div>
        <div className="ml-6">
          <h2 className="text-4xl mb-2 font-bold text-[#e46d30] ">1,700+</h2>
          <p className="text-sm font-semibold text-black uppercase">
            Tours operators
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutIconTourDetails;
