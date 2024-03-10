import React from "react";

const OtherStaticTour = () => {
  return (
    <div>
      <div className="h-[250px] relative tour-page-other-section ">
        <div className="tour-page-other-section-bg-img"></div>
        <div className="pt-[35px] pl-[40px]">
          <p className="text-black font-[600] text-sm uppercase">
            Happy Holiday
          </p>
          <h2 className="text-4xl font-bold mb-2 text-[#e46d30] ">
            Stay & Enjoy
          </h2>
          <p>15% off on all booking</p>
        </div>
      </div>
      <div className="h-[250px] relative tour-page-other-section mt-[70px] ">
        <div className="tour-page-other-section-bg-img-1"></div>
        <div className="pt-[35px] pl-[10px] pr-[40px] text-right ">
          <p className="text-white font-[600] text-sm uppercase">
            Summer Vacation
          </p>
          <h2 className="text-4xl font-bold mb-2 text-[#ECBE1D] ">
            Luxury Summer
          </h2>
          <p className="text-white">5% off on all booking</p>
        </div>
      </div>
    </div>
  );
};

export default OtherStaticTour;
