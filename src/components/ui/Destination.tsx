/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";

const Destination = ({ continents }: { continents: any }) => {
  const { asia, africa, europe, americas, antarctica } = continents;
  return (
    <div className="max-w-7xl mx-auto">
      <div className="my-8 mb-16">
        <p className="text-center mt-28 subHeaderTitle ">
          Choose Your Experience
        </p>
        <p className=" headerTitle text-6xl text-center mt-6 text-black font-bold">
          Top Attractions <br /> Destinations
        </p>
      </div>
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 lg:gap-5 gap-y-7">
        <Link href={`destination/americas`}>
          <div className="h-[350px] relative overflow-hidden destination-page-img-before  ">
            <img
              src="https://i.ibb.co/DYvnfYb/location2.jpg"
              className=" img-destination-page w-100% h-100% object-cover left-0 right-0 absolute top-0 bottom-0 rounded-lg "
              alt=""
            />

            <div className="destinationDetails">
              <h4 className="text-3xl font-bold text-white headerTitle ">
                Americas
              </h4>
              <span className="destination-details-page-hover-section text-center">
                <p className="w-[80px] h-[2px] bg-red-500 my-[17px] "></p>
                <p className="subHeaderTitle text-md font-bold">
                  {americas?.length} Tours+
                </p>
              </span>
            </div>
          </div>
        </Link>
        <Link href={`destination/africa`}>
          <div className="h-[350px] relative overflow-hidden destination-page-img-before  ">
            <img
              src="https://i.ibb.co/Hzh02T8/location19.jpg"
              className=" img-destination-page w-100% h-100% object-cover left-0 right-0 absolute top-0 bottom-0 rounded-lg "
              alt=""
            />

            <div className="destinationDetails">
              <h4 className="text-3xl font-bold text-white headerTitle ">
                Africa
              </h4>
              <span className="destination-details-page-hover-section text-center">
                <p className="w-[80px] h-[2px] bg-red-500 my-[17px] "></p>
                <p className="subHeaderTitle text-md font-bold">
                  {africa?.length} Tours+
                </p>
              </span>
            </div>
          </div>
        </Link>
      </div>

      <div className="grid lg:grid-cols-3 sm:grid-cols-1 lg:gap-5 gap-y-7 mt-5">
        <Link href={`destination/europe`}>
          <div className="h-[350px] relative overflow-hidden destination-page-img-before  ">
            <img
              src="https://i.ibb.co/7v6NJLj/location1.jpg"
              className=" img-destination-page w-100% h-100% object-cover left-0 right-0 absolute top-0 bottom-0 rounded-lg "
              alt=""
            />

            <div className="destinationDetails">
              <h4 className="text-3xl font-bold text-white headerTitle ">
                Europe
              </h4>
              <span className="destination-details-page-hover-section text-center">
                <p className="w-[80px] h-[2px] bg-red-500 my-[17px] "></p>
                <p className="subHeaderTitle text-md font-bold">
                  {europe?.length} Tours+
                </p>
              </span>
            </div>
          </div>
        </Link>
        <Link href={`destination/asia`}>
          <div className="h-[350px] relative overflow-hidden destination-page-img-before  ">
            <img
              src="https://i.ibb.co/S0SySYT/location7.jpg"
              className=" img-destination-page w-100% h-100% object-cover left-0 right-0 absolute top-0 bottom-0 rounded-lg "
              alt=""
            />

            <div className="destinationDetails">
              <h4 className="text-3xl font-bold text-white headerTitle ">
                Asia
              </h4>
              <span className="destination-details-page-hover-section text-center">
                <p className="w-[80px] h-[2px] bg-red-500 my-[17px] "></p>
                <p className="subHeaderTitle text-md font-bold">
                  {asia?.length} Tours+
                </p>
              </span>
            </div>
          </div>
        </Link>
        <Link href={`destination/antarctica`}>
          <div className="h-[350px] relative overflow-hidden destination-page-img-before  ">
            <img
              src="https://i.ibb.co/0jN8c1H/location4.jpg"
              className=" img-destination-page w-100% h-100% object-cover left-0 right-0 absolute top-0 bottom-0 rounded-lg "
              alt=""
            />

            <div className="destinationDetails">
              <h4 className="text-3xl font-bold text-white headerTitle ">
                Antarctica
              </h4>
              <span className="destination-details-page-hover-section text-center">
                <p className="w-[80px] h-[2px] bg-red-500 my-[17px] "></p>
                <p className="subHeaderTitle text-md font-bold">
                  {antarctica?.length} Tours+
                </p>
              </span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Destination;
