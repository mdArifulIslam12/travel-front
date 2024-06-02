import Link from "next/link";
import DestinationPage from "../Destination/DestinationPage";

const HomeDestination = () => {
  return (
    <div className="bg-[#F6F8FB] pb-16 pt-1 mt-12 ">
      <DestinationPage></DestinationPage>
      <p className="text-lg text-center mt-10 font-medium mx-auto">
        Speak to our Destination Experts at Call{" "}
        <span className="text-[#E46D43] font-bold ">+01600906178</span> or{" "}
        <Link href={"/contact"}>
          <span className="font-bold text-black underline">
            Request A Quote
          </span>
        </Link>{" "}
      </p>
    </div>
  );
};

export default HomeDestination;
