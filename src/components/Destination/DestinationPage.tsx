"use client";
import { useGetAllTourDbFromQuery } from "@/redux/api/tour/tourApi";
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
    const continents: any = {
      asia: filteredByContinentAsia,
      europe: filteredByContinentEurope,
      americas: filteredByContinentAmericas,
      africa: filteredByContinentAfrica,
      antarctica: filteredByContinentAntarctica,
    };
    content = <Destination continents={continents} />;
  }

  return <>{content}</>;
};

export default DestinationPage;
