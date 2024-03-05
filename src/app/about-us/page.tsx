import SheardButtonIcons from "@/components/Sheard/SheardButtonIcons";
import SheardHeader from "@/components/Sheard/SheardHeader";
import SheardNewsletterSupport from "@/components/Sheard/SheardNewsletterSupport";
import TravelTeam from "@/components/aboutUs/TravelTeam";
import WorldExciting from "@/components/aboutUs/WorldExciting";
import AboutIconTourDetails from "@/components/aboutUs/aboutIconTourDetails";
import AboutSubHeader from "@/components/aboutUs/aboutSubHeader";

const AboutUs = () => {
  return (
    <div className="">
      <SheardHeader title={"About Us"} subTitle="about us" />
      <div className="max-w-7xl mx-auto">
        <AboutSubHeader />

        <AboutIconTourDetails />
      </div>

      <SheardButtonIcons className="w-24 h-24 relative">dsfd</SheardButtonIcons>

      <TravelTeam />
      <WorldExciting />
      <SheardNewsletterSupport />
    </div>
  );
};

export default AboutUs;
