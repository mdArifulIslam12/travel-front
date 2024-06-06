import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";

const TourSingleDetails = ({ tour }: { tour: any }) => {
  const { title, image, price, rating, city, country, duration } = tour;
  const [isAdded, setIsAdded] = useState(false);

  const handleClick = () => {
    setIsAdded(!isAdded);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          {" "}
          <p className="text-[#969BA1] text-sm">
            Bryce Canyon National Park, USA
          </p>
        </div>
        <div className="flex items-center">
          <button
            className="text-[#969BA1] text-sm"
            onClick={handleClick}
            style={{ display: "flex", alignItems: "center" }}
          >
            <FaHeart
              color={isAdded ? "red" : "grey"}
              style={{ marginRight: "8px" }}
            />
            {isAdded ? "Remove from Wishlist" : `Add to Wishlist`}
          </button>
        </div>
      </div>
      <div>
        <h2 className="text-4xl text-black my-2 font-bold ">{title}</h2>
        <div></div>
      </div>
    </div>
  );
};

export default TourSingleDetails;
