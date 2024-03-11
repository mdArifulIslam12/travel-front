"use client";
import SheardHeader from "@/components/Sheard/SheardHeader";
import SheardNewsletterSupport from "@/components/Sheard/SheardNewsletterSupport";
import { useGetSingleTourQuery } from "@/redux/api/tour/tourApi";
import { useRouter } from "next/router";

const TourDetails = ({ params }: { params: any }) => {
  const {
    data: tour,
    isLoading,
    isError,
    isSuccess,
  } = useGetSingleTourQuery(params.id);
  let content = null;
  if (isLoading) {
    content = <div>Loding..</div>;
  } else if (!isLoading && isError) {
    content = <div className="">Tour is not found!!</div>;
  } else if (!isLoading && !isError && tour && isSuccess) {
    content = tour;
  }

  return (
    <div>
      <SheardHeader title="Tour Details" subTitle="Tour Details" />
      <div className="max-w-7xl mx-auto my-8">{content?.title}</div>
      <SheardNewsletterSupport />
    </div>
  );
};

export default TourDetails;
