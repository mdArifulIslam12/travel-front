"use client";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { GoStopwatch } from "react-icons/go";
import { motion } from "framer-motion";
// import { useRouter } from "next/router";

const Card = () => {
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // const router = useRouter();
  // const {slug} = router.query
 
  const nextSlider = useCallback(
    () =>
      setCurrentIndex((currentSlider) =>
        currentSlider === data.length - 4 ? 0 : currentSlider + 1
      ),
    [data.length]
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlider();
    }, 3000);

    return () => clearInterval(intervalId);
  }, [nextSlider]);

  useEffect(() => {
    fetch("index.json")
      .then((res) => res.json())
      .then((tours) => {
        setData(tours);
      });
  });

  const nextSlide = () => {
    setCurrentIndex(currentIndex === data.length - 4 ? 0 : currentIndex + 1);
  };

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? data.length - 4 : currentIndex - 1);
  };

  return (
    <div className="text-center mt-0">
      <p>Explore our Tours</p>
      {/* <h1>Post {slug} </h1> */}
      <p className="text-5xl mt-4 font-bold">
        New And Most <br />{" "}
        <span className="text-5xl font-bold">Popular Tours</span>
      </p>
      <div className="carousel-container">
        <div className="carousel mt-12 justify-center flex overflow-x-auto space-x-4">
          {data.slice(currentIndex, currentIndex + 4).map((item) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              key={item.id}
              className="card w-72 inset-0 bg-black opacity-90 h-96 rounded-sm shadow-lg overflow-hidden"
              style={{
                backgroundImage: `url(${item.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="p-4 text-left">
                <div className="flex justify-between">
                  <p className="text-amber-500 w-16 rounded-md">{item?.tag}</p>
                  <p className="text-white font-semibold">From {item.price}</p>
                </div>
                <div className="mt-36 ml-4">
                  <p className="text-white   mb-2">{item.location}</p>
                  <h3 className="text-xl text-white hover:text-orange-500 font-semibold mb-2">
                    {item.title}
                  </h3>
                  <div className="flex text-white mb-1 items-center gap-2">
                    <GoStopwatch />
                    <p className="">{item.day}</p>
                  </div>
                  <button className="mt- mb-8 text-sm w-56 h-14 before:absolute border-[1px] border-slate-50 before:block before:inset-0 before:-z-10 before:bg-none text-black after:block hover:after:w-full after:w-0 after:hover:left-0 after:right-0 after:top-0 after:h-full after:-z-10 after:duration-300 after:bg-orange-400 after:absolute relative  inline-block">
                    More Information{" "}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center mt-4">
          <button
            className="  font-bold py-2 px-4 rounded"
            onClick={prevSlide}
          >
            <FaChevronLeft />
          </button>
          <button
            className="  font-bold py-2 px-4 rounded"
            onClick={nextSlide}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
