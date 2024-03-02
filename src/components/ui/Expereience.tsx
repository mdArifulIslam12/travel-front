"use client";
import { useEffect, useState } from "react";

interface IExperience {
  id: number;
  "bg-color": string;
  title: string;
  description: string;
  img: string;
}

const Expereience = () => {
  const [data, setData] = useState<IExperience[]>([]);

  useEffect(() => {
    fetch("exp.json")
      .then((res) => res.json())
      .then((icons) => setData(icons.data));
  }, []);
  return (
    <div>
      {data && Array.isArray(data) ? (
        data.map((x: any) => (
          <div key={x?.id}>
            <p>{x.title}</p>
          </div>
        ))
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default Expereience;
