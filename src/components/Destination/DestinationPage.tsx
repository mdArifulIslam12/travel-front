"use client";
import {
  useGetAllTourDbFromQuery,
  useGetAllTourQuery,
} from "@/redux/api/tour/tourApi";
import { useState } from "react";
import Destination from "../ui/Destination";

const DestinationPage = () => {
  const {
    data: tours,
    isLoading,
    isError,
    isSuccess,
  } = useGetAllTourDbFromQuery("");

  let content = null;
  if (isLoading) {
    content = <div>Loding..</div>;
  } else if (!isLoading && !isError && tours?.length == 0) {
    content = <div className="">Tour tag not found!!</div>;
  } else if (!isLoading && !isError && tours?.length > 0 && isSuccess) {
    //   const filteredData = tours?.map((tour:any, index:any) => (
    //     dsf
    //   ));
    console.log(tours);
    const filteredByContinentAsia = tours.filter(
      (tour: any) => tour.continents == "Asia"
    );
    const filteredByContinentEurope = tours.filter(
      (tour: any) => tour.continents == "Europe"
    );
    const filteredByContinentAmericas = tours.filter(
      (tour: any) => tour.continents == "Americas"
    );
    const filteredByContinentAfrica = tours.filter(
      (tour: any) => tour.continents == "Africa"
    );
    const filteredByContinentAntarctica = tours.filter(
      (tour: any) => tour.continents == "Antarctica"
    );
    console.log(filteredByContinentAfrica.length);
  }

  return (
    <>
      <Destination />
    </>
  );
};

export default DestinationPage;
