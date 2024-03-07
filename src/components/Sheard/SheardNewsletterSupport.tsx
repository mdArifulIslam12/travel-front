import React from "react";
import Newsletter from "../ui/Newsletter";
import Support from "../ui/Support";

const SheardNewsletterSupport = () => {
  return (
    <div className="grid lg:grid-cols-2 sm:grid-cols-1">
      <Newsletter />
      <Support />
    </div>
  );
};

export default SheardNewsletterSupport;
