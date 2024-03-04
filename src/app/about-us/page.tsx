import SheardButtonIcons from "@/components/Sheard/SheardButtonIcons";
import SheardHeader from "@/components/Sheard/SheardHeader";
import SheardNewsletterSupport from "@/components/Sheard/SheardNewsletterSupport";
import AboutSubHeader from "@/components/aboutUs/aboutSubHeader";

const AboutUs = () => {
  return (
    <div className="">
      <SheardHeader title={"About Us"} subTitle="about us" />
      <div className="max-w-7xl mx-auto">
        <AboutSubHeader />
      </div>
      <SheardButtonIcons className="w-24 h-24 relative">dsfd</SheardButtonIcons>
      <SheardNewsletterSupport />
    </div>
  );
};

export default AboutUs;
