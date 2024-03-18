/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import emailjs from "emailjs-com";

const ContactFrom = () => {
  const [message, setMessage] = useState("");
  const [messageError, setMessageError] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
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
    event.target.reset();
  };
  return (
    <div>
      <h2 className="text-2xl font-bold text-black">Email us</h2>
      <p className="text-sm">
        Drop us an email and we all get back to you within 48hrs...
      </p>
      <div className="mt-6 ">
        <form onSubmit={handleSubmit}>
          <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-8 mb-6">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-lg font-bold headerTitle ">
                  Full Name
                </span>
              </div>
              <input
                type="text"
                name="fullName"
                placeholder="Name"
                className="input input-bordered w-full text-sm "
                value={formData.fullName}
                onChange={handleChange}
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-lg font-bold headerTitle">
                  Email
                </span>
              </div>
              <input
                type="email"
                name="email"
                placeholder="someone@gmail.com"
                className="input input-bordered w-full text-sm"
                value={formData.email}
                onChange={handleChange}
              />
            </label>
          </div>
          <label className="form-control w-full mb-9 ">
            <div className="label">
              <span className="label-text text-lg font-bold headerTitle">
                Contact Number
              </span>
            </div>
            <input
              type="text"
              name="contactNumber"
              placeholder="0136254985"
              className="input input-bordered w-full text-sm"
              value={formData.contactNumber}
              onChange={handleChange}
            />
          </label>

          <label className="form-control ">
            <div className="label">
              <span className="label-text text-lg font-bold headerTitle">
                What's your Message?
              </span>
            </div>
            <textarea
              name="message"
              placeholder="Your Message"
              className="textarea textarea-bordered textarea-lg w-full text-sm"
              value={formData.message}
              onChange={handleChange}
              rows={8}
            ></textarea>
          </label>

          <button
            type="submit"
            className="btn bg-[#E46D30] mt-9 px-8 text-white hover:bg-[#db5d1c] "
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactFrom;
