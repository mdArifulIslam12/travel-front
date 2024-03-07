import SheardHeader from "@/components/Sheard/SheardHeader";
import SheardNewsletterSupport from "@/components/Sheard/SheardNewsletterSupport";
import NotFoundPage from "@/components/ui/NotFound";

const NotFound = () => {
  return (
    <div>
      <SheardHeader title="Not Found" subTitle="not found" />
      <NotFoundPage />
      <SheardNewsletterSupport />
    </div>
  );
};

export default NotFound;
