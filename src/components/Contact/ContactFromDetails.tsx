"use client";
import React from "react";

const ContactFromDetails = () => {
  return (
    <div className="mb-16">
      <div>
        <h2 className="text-2xl font-bold text-black mb-8">Trip Queries</h2>
        <p className="text-[16px] font-medium text-[#5c626a]">
          Emergency Helpline
        </p>
        <h2 className="text-2xl font-bold mb-8 text-[#e46d30] ">
          +(066) 016 1101 0930{" "}
        </h2>
        <p className="text-[16px] font-medium text-[#5c626a] ">
          Contactable Hours
        </p>
        <h2 className="text-2xl text-black font-bold mb-10">
          Mon-Sun: 24 Hours
        </h2>
        <p className="text-[16px] font-medium text-[#5c626a]">
          Require information about a trip?
        </p>
        <h2 className="text-2xl font-bold text-black">mdarif@gmail.com</h2>
      </div>
      <div className="mt-8 w-full h-24 ">
        <iframe
          src="https://www.google.com/maps/d/embed?mid=1B1lAsUpYFg82Je7XN1_cxRPf1UU&hl=en_US&ehbc=2E312F"
          width="340"
          height="300"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactFromDetails;
