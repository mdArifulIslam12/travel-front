/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

const Blog = ({ blog }: { blog: any }) => {
  const { title, date, categories, details, image } = blog;
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl single-tour-card ">
      <figure className="h-[400px] w-full">
        <Link href={`/blog/${blog?._id}`}>
          <img
            src={image}
            alt="tour img"
            className="img-tour h-[400px]  "
            style={{
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </Link>
      </figure>
      <div className="card-body pt-[14px] bg-[#f6f8fb] ">
        <p className="text-[12px] font-medium uppercase  text-[#969BA1] flex items-center ">
          <span className="text-[#E46D30]">{categories}</span>
          <span className="mx-[8px]">{date}</span>
          <span>Admin</span>
        </p>
        <Link href={`/blog/${blog?._id}`}>
          <h2 className="text-2xl text-black font-semibold hover:text-[#e46d30] ">
            {title}
          </h2>
        </Link>
        <div className="bord border-t-[1px] border-dotted border-[#969BA1]  pt-[15px] mt-[15px]"></div>
        <p className="text-[16px]  text-[#969BA1]">
          {details.slice(0, 100)}...
        </p>
        <div className="bord  flex items-center justify-between ">
          <div className="card-actions justify-end">
            <Link href={`/blog/${blog?._id}`}>
              <button className="text-md font-semibold hover:text-[#e46d30] ">
                <div className="flex justify-center items-center">
                  <div>Read More</div>
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

export default Blog;
