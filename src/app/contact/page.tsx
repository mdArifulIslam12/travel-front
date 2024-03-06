import ContactFrom from "@/components/Contact/ContactFrom";
import ContactFromDetails from "@/components/Contact/ContactFromDetails";
import ContactautoPalyImg from "@/components/Contact/ContactautoPalyImg";
import SheardHeader from "@/components/Sheard/SheardHeader";
import SheardNewsletterSupport from "@/components/Sheard/SheardNewsletterSupport";

const page = () => {
  return (
    <div>
      <SheardHeader title="Contact" subTitle="contact" />
      <div className=" max-w-7xl mx-auto my-16 contact-home-page">
        <h2 className="text-4xl font-bold text-black">
          Need to contact us? Use one of the options below.
        </h2>
        <h2 className="text-4xl font-bold text-black mb-16 ">
          Our team are always happy to help.
        </h2>
        <div className=" grid lg:grid-cols-12 sm:grid-cols-12 gap-4">
          <div className="lg:col-span-8 sm:col-span-12 lg:border-r-[2px] lg:border-dotted lg:pr-12 ">
            <ContactFrom />
          </div>
          <div className="lg:col-span-4 sm:col-span-12 lg:pl-12 ">
            <ContactFromDetails />
          </div>
        </div>
      </div>
      <ContactautoPalyImg />
      <SheardNewsletterSupport />
    </div>
  );
};

export default page;
