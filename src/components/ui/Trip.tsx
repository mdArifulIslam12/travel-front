"use client";

import { useGetAllTourQuery } from "@/redux/api/tour/tourApi";
import { ITour } from "@/types";
import { useEffect, useState } from "react";
import { BsCupHot } from "react-icons/bs";
import { GiPaperBoat } from "react-icons/gi";
import { LiaMountainSolid } from "react-icons/lia";
import { LuTrees } from "react-icons/lu";
import { MdOutlineHomeWork } from "react-icons/md";
import { TbBeach } from "react-icons/tb";

const Trip = () => {
  const query: Record<string, any> = {};
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(50);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");

  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;

  const {
    data: allTour,
    isLoading,
    isError,
    isSuccess,
  } = useGetAllTourQuery({
    ...query,
  });

  const [adventure, setAdventure] = useState<number>(0);
  const [city, setcity] = useState<number>(0);
  const [beach, setBeach] = useState<number>(0);
  const [boat, setBoat] = useState<number>(0);
  const [food, setFood] = useState<number>(0);
  const [hinking, setHinking] = useState<number>(0);

  const tours = allTour?.tours;

  let tourLength = 0;
  if (tours) {
    tourLength = tours.length;
  }

  let content: any;
  if (isLoading) {
    content = <div>Loding..</div>;
  } else if (!isLoading && !isError && tours?.length == 0) {
    content = <div className="">Tour tag not found!!</div>;
  } else if (!isLoading && !isError && tourLength > 0 && isSuccess) {
    content = tours;
  }
  useEffect(() => {
    if (content && Array.isArray(content)) {
      const adventureData = content?.filter(
        (tour: ITour) => tour.categories == "Adventure"
      );
      const beachesData = content?.filter(
        (tour: ITour) => tour.categories == "Beaches"
      );
      const boatData = content?.filter(
        (tour: ITour) => tour.categories == "Boat Tours"
      );
      const cityData = content?.filter(
        (tour: ITour) => tour.categories == "city Tours"
      );
      const hikingData = content?.filter(
        (tour: ITour) => tour.categories == "Hiking"
      );
      const foodData = content?.filter(
        (tour: ITour) => tour.categories == "Food"
      );

      setAdventure(adventureData?.length || 0);
      setBeach(beachesData?.length || 0);
      setBoat(boatData?.length || 0);
      setFood(foodData?.length || 0);
      setcity(cityData?.length || 0);
      setHinking(hikingData?.length || 0);
    }
  }, [content]);

  return (
    <div className="bg-[#eef2f9] py-20 ">
      <div className=" max-w-7xl mx-auto py-12 ">
        <div>
          <p className="text-center uppercase text-md">Browse by Category</p>
          <h2 className="text-center mt-4 text-5xl font-bold text-black ">
            Find Inspiration For <br />
            Your Next Trip
          </h2>
          <div className="w-[100px] h-[1px] bg-[#E46D30] mx-auto my-12"></div>
        </div>
        <div className="grid lg:grid-cols-6 sm:grid-cols-1 gap-5 ">
          <div className=" background-trip-img-1">
            <div className=" bg-color-trip   p-[30px] rounded py-[45px]  ">
              <div className="text-center background-trip ">
                <LiaMountainSolid className="mx-auto text-6xl mb-8 background-trip-icon " />
                <h2 className="text-2xl font-bold mb-2">Adventure</h2>
                <p className="mb-5 text-sm ">{adventure}+ Tours</p>
                <p className="text-xl font-bold text-orange-500 ">
                  {" "}
                  <span className="text-sm text-[#969BA1]">from</span> $1204
                </p>
              </div>
            </div>
          </div>
          <div className=" background-trip-img-2">
            <div className=" bg-color-trip   p-[30px] rounded py-[45px]  ">
              <div className="text-center background-trip ">
                <TbBeach className="mx-auto text-6xl mb-8 background-trip-icon " />
                <h2 className="text-2xl font-bold mb-2">Beaches</h2>
                <p className="mb-5 text-sm ">{beach}+ Tours</p>
                <p className="text-xl font-bold text-orange-500 ">
                  {" "}
                  <span className="text-sm text-[#969BA1]">from</span> $1040
                </p>
              </div>
            </div>
          </div>
          <div className=" background-trip-img-3">
            <div className=" bg-color-trip   p-[30px] rounded py-[45px]  ">
              <div className="text-center background-trip ">
                <GiPaperBoat className="mx-auto text-6xl mb-8 background-trip-icon " />
                <h2 className="text-2xl font-bold mb-2">Boat Tours</h2>
                <p className="mb-5 text-sm ">{boat}+ Tours</p>
                <p className="text-xl font-bold text-orange-500 ">
                  {" "}
                  <span className="text-sm text-[#969BA1]">from</span> $1000
                </p>
              </div>
            </div>
          </div>
          <div className=" background-trip-img-4">
            <div className=" bg-color-trip   p-[30px] rounded py-[45px]  ">
              <div className="text-center background-trip ">
                <MdOutlineHomeWork className="mx-auto text-6xl mb-8 background-trip-icon " />
                <h2 className="text-2xl font-bold mb-2">City Tours</h2>
                <p className="mb-5 text-sm ">{city}+ Tours</p>
                <p className="text-xl font-bold text-orange-500 ">
                  {" "}
                  <span className="text-sm text-[#969BA1]">from</span> $1020
                </p>
              </div>
            </div>
          </div>
          <div className=" background-trip-img-5">
            <div className=" bg-color-trip   p-[30px] rounded py-[45px]  ">
              <div className="text-center background-trip ">
                <BsCupHot className="mx-auto text-6xl mb-8 background-trip-icon  " />
                <h2 className="text-2xl font-bold mb-2">Food</h2>
                <p className="mb-5 text-sm ">{food}+ Tours</p>
                <p className="text-xl font-bold text-orange-500 ">
                  {" "}
                  <span className="text-sm text-[#969BA1]">from</span> $204
                </p>
              </div>
            </div>
          </div>
          <div className=" background-trip-img-6">
            <div className=" bg-color-trip   p-[30px] rounded py-[45px]  ">
              <div className="text-center background-trip ">
                <LuTrees className="mx-auto text-6xl mb-8 background-trip-icon " />
                <h2 className="text-2xl font-bold mb-2">Hiking</h2>
                <p className="mb-5 text-sm ">{hinking}+ Tours</p>
                <p className="text-xl font-bold text-orange-500 ">
                  {" "}
                  <span className="text-sm text-[#969BA1]">from</span> $1404
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trip;
