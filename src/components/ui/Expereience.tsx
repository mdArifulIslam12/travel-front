/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

interface IExperience {
  id: number;
  bg: string;
  title: string;
  description: string;
  img: string;
}

const Expereience = () => {
  const [data, setData] = useState<IExperience[]>([]);

  useEffect(() => {
    fetch("exp.json")
      .then((res) => res.json())
      .then((icons) => setData(icons));
  }, []);

  return (
    <div className="max-w-7xl mx-auto my-24">
      <div className="grid lg:grid-cols-4 sm:grid-cols-1 gap-5 ">
        {data && Array.isArray(data) ? (
          data.map((x: any) => (
            <div className="expereience-img-home " key={x.id}>
              <div className=" relative">
                <div
                  className={`expereience-home-page  `}
                  style={{
                    backgroundColor: `${x.bg}`,
                  }}
                ></div>
                <img
                  className="mx-auto   "
                  src={x.img}
                  width={75}
                  height={75}
                  alt=""
                />
                <h2 className="text-2xl text-center font-bold text-black mt-9">
                  {x.title}
                </h2>
                <p className="text-center text-md mt-5 text-[#5c626a] ">
                  {x.description}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p>No data available</p>
        )}
      </div>
    </div>
  );
};

export default Expereience;
