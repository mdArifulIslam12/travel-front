import SheardHeader from "@/components/Sheard/SheardHeader";
import { useRouter } from "next/router";

const TourDetails = ({ params }: { params: any }) => {
  return (
    <div>
      <SheardHeader title="Tour Details" subTitle="Tour Details" />
      {params.id}
    </div>
  );
};

export default TourDetails;
