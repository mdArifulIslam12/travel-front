import DestinationPage from "@/components/Destination/DestinationPage";
import SheardHeader from "@/components/Sheard/SheardHeader";
import SheardNewsletterSupport from "@/components/Sheard/SheardNewsletterSupport";

const Destination = () => {
  return (
    <>
      <SheardHeader title={"Destination"} subTitle="destination" />
      <div className="mb-14">
        <DestinationPage />
      </div>
      <SheardNewsletterSupport />
    </>
  );
};

export default Destination;
