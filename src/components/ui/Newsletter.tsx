"use client";
import React, { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import emailjs from "emailjs-com";

const Newsletter = () => {
  const [inputValue, setInputValue] = useState("");
  const [message, setMessage] = useState("");
  const [messageError, setMessageError] = useState("");
  const [dataSubmit, setDataSubmit] = useState<boolean>(false);

  const handleChange = (event: any) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    setDataSubmit(true);
    if (inputValue) {
      emailjs
        .sendForm(
          "service_0gb8yw7",
          "template_j1mckmk",
          event.target,
          "GGJcUSYKscponjqL2"
        )
        .then(
          (result: any) => {
            setMessage("Send your email message Successfully");
            event.target.reset();
          },
          (error: any) => {
            setMessageError(`Send message failed ${error} !!`);
          }
        );
    } else {
      setMessageError("Input not value");
    }
    setDataSubmit(false);
    event.target.reset();
  };
  return (
    <div className=" bg-[#f6f8fb] ">
      <div className="ml-[65px] pb-[82px]">
        <h2 className="mt-20 font-bold text-3xl">Sign Up for Our Newsletter</h2>
        <p className="mt-3 font-medium text-md">
          Save up to 50% on tours and trips. Get instant access to lower prices.
        </p>
        <div className="mt-6 ">
          <form action="" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter your email address"
              value={inputValue}
              onChange={handleChange}
              className="input input-bordered input-md w-full max-w-sm border-none text-md font-medium bg-white  "
            />
            <button
              className="border-none text-white text-md p-[8px] px-[20px] font-semibold subHeaderTitle bg-[#E46D30] rounded-md hover:bg-[#db5d1c] "
              disabled={dataSubmit}
              type="submit"
            >
              <div className="flex justify-center items-center">
                <div>Subscribe</div>
                <IoIosArrowRoundForward className="text-[30px] font-bold subHeaderTitle text-white " />
              </div>
            </button>
          </form>
        </div>
        <div className="mt-3">
          {message && <p className="text-md text-green-500">{message}</p>}
          {messageError && (
            <p className="text-md text-red-500"> x {messageError}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
