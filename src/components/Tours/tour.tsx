import { ITour } from "@/types";
import React from "react";

const Tour = ({ tour }: any) => {
  const { title, image, price, rating, city, country, duration } = tour;
  console.log(tour);
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="tour img" />
      </figure>
      <div className="card-body">
        <p>
          {city},{country}
        </p>
        <h2 className="card-title">{title}</h2>

        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Tour;
