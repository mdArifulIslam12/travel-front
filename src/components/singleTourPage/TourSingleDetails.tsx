/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import Rating from "../ui/Rating";

const TourSingleDetails = ({ tour }: { tour: any }) => {
  const {
    title,
    image,
    price,
    rating,
    city,
    description,
    duration,
    maxPeople,
    minAge,
    categories,
  } = tour;
  const [isAdded, setIsAdded] = useState(false);

  const handleClick = () => {
    setIsAdded(!isAdded);
  };
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
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
        <h2 className="text-4xl text-black mb-2 font-bold ">{title}</h2>
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 my-4  ">
          <div>
            <div className="grid grid-cols-4 mb-3">
              <div className="border-r-[1px] border-dashed border-[#cfd3da] ">
                <p className="text-[#969ba1] text-[14px] block ">From</p>
                <h2 className="text-2xl font-bold text-[#E46D30]">${price}</h2>
              </div>
              <div className="border-r-[1px] border-dashed border-[#cfd3da] pl-[25px] ">
                <p className="text-[#969ba1] text-[14px] block ">Duration</p>
                <p className="text-[15px] font-bold text-black">{duration}</p>
              </div>
              <div className="border-r-[1px] border-dashed border-[#cfd3da] pl-[25px] ">
                <p className="text-[#969ba1] text-[14px] block ">Max People</p>
                <p className="text-[15px] font-bold text-black">{maxPeople}</p>
              </div>
              <div className="border-r-[1px] border-dashed border-[#cfd3da] pl-[25px] ">
                <p className="text-[#969ba1] text-[14px] block ">Min Age</p>
                <p className="text-[15px] font-bold text-black">{minAge}+</p>
              </div>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-2">
              <div className="border-r-[1px] border-dashed border-[#cfd3da] pl-[25px] ">
                <p className="text-[#969ba1] text-[14px] block ">Tour Type</p>
                <h2 className="text-[15px] font-bold text-black">
                  {categories}
                </h2>
              </div>
              <div className=" pl-[25px] ">
                <p className="text-[#969ba1] text-[14px] block ">Reviews</p>
                <Rating rating={rating} />
              </div>
            </div>
          </div>
        </div>
        <img
          src={image}
          className="w-full"
          style={{
            height: "540px",
            objectFit: "cover",
            borderRadius: "3px",
          }}
          alt=""
        />
        <div className="mt-6">
          <h2 className="text-3xl text-black font-bold">Description</h2>
          <p className="mt-4 text-[#969BA1] text-md ">{description}</p>
          <p className="mt-5 text-[#969BA1] text-md ">
            Experience the best of Europe with our 15-day grand tour, covering
            five countries and some of the continent’s most iconic cities. Begin
            your journey in Paris, the City of Lights, where you’ll marvel at
            the Eiffel Tower, stroll along the Champs-Élysées, and explore the
            historic Notre-Dame Cathedral. Enjoy a Seine River cruise and taste
            exquisite French cuisine, immersing yourself in the romance and
            culture that make Paris an eternal favorite among travelers.
          </p>
          {isExpanded && (
            <p className="mt-5 text-[#969BA1] text-md ">
              Next, travel to the romantic city of Venice, Italy. Navigate the
              enchanting canals by gondola, visit the magnificent St. Mark's
              Basilica, and explore the artistic treasures of the Doge's Palace.
              Indulge in delicious Italian gelato and experience the vibrant
              culture of this floating city, where every turn offers a new
              discovery. Venice’s unique charm, with its maze of waterways and
              historic architecture, provides an unforgettable backdrop for your
              European adventure.
            </p>
          )}
          {isExpanded && (
            <p className="mt-5 text-[#969BA1] text-md ">
              From Venice, head to Florence, the cradle of the Renaissance.
              Here, you can visit the awe-inspiring Florence Cathedral and see
              Michelangelo's David up close. Walk through the historic Ponte
              Vecchio and explore the Uffizi Gallery, home to an incredible
              collection of Renaissance art. In Florence, you'll also have the
              chance to taste some of Tuscany’s finest wines, enhancing your
              appreciation for the region's rich cultural and culinary heritage.
            </p>
          )}
          {isExpanded && (
            <p className="mt-5 text-[#969BA1] text-md ">
              The adventure continues to Rome, the Eternal City. Discover the
              ancient wonders of the Colosseum, Roman Forum, and Palatine Hill,
              where history comes alive through the ruins of the Roman Empire.
              Stand in awe of Vatican City, with its majestic St. Peter's
              Basilica and the breathtaking Sistine Chapel, adorned with
              Michelangelo's masterpieces. Enjoy authentic Italian pasta and
              pizza in the bustling streets of Rome, where every meal is a
              celebration of flavors and traditions.
            </p>
          )}
          {isExpanded && (
            <p className="mt-5 text-[#969BA1] text-md ">
              Finally, the tour concludes in the Netherlands, with a visit to
              the dynamic city of Amsterdam. Cruise along the picturesque
              canals, visit the Anne Frank House, and explore the renowned
              Rijksmuseum. Amsterdam’s vibrant arts scene, charming streets, and
              lively atmosphere provide the perfect end to your European
              adventure.
            </p>
          )}

          <div className="text-center">
            <button
              onClick={handleToggle}
              className="mt-2 text-md subHeaderTitle text-black hover:text-[#E46D30]"
            >
              {isExpanded ? "View Less" : "View More"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourSingleDetails;
