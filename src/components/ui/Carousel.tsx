/* eslint-disable @next/next/no-img-element */
"use client"
import { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Carousel = () => {

    const [currentSlider, setCurrentSlider] = useState(0);


    const sliders = [{ img: "https://i.ibb.co/wN7BPnt/revslider-1.jpg", title: "Maldives", des: "A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.", }, { img: "https://i.ibb.co/Z1Kvsxy/revslider-2.jpg", title: "Venice", des: "A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.", }, { img: "https://i.ibb.co/MRSn958/revslider-3.jpg", title: "Santorini", des: "A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.", }, { img: "https://i.ibb.co/k0YHzt8/revslider-4.jpg", title: "Caribbean", des: "A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.", }];

    // if you don't want to change the slider automatically then you can just remove the useEffect

    useEffect(() => {

        const intervalId = setInterval(() => setCurrentSlider(currentSlider === sliders.length - 1 ? 0 : currentSlider + 1), 5000);

        return () => clearInterval(intervalId);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentSlider]);


    return (
        <>
            <div className="w-full h-72 sm:h-96 md:h-[540px] lg:h-[640px] xl:h-[780px] flex flex-col items-center justify-center gap-5 lg:gap-10 bg-cover bg-center before:absolute before:bg-black/50 before:inset-0 transform duration-1000 ease-linear"

                style={{ backgroundImage: `url(${sliders[currentSlider].img})` }}>

                {/* text container here */}

                <div className="drop-shadow-lg text-white text-center px-5">

                    <h1 className="text-xl lg:text-7xl font-semibold mb-3">{sliders[currentSlider].title}</h1>

                    <p className="text-sm md:text-base lg:text-lg">{sliders[currentSlider].des}</p>
                    <p className="mt-3">689 | Reviews </p>
                    <button className="mt-8 text-sm w-56 h-14 before:absolute border-[1px] border-slate-50 before:block before:inset-0 before:-z-10 before:bg-none text-white after:block hover:after:w-full after:w-0 after:hover:left-0 after:right-0 after:top-0 after:h-full after:-z-10 after:duration-300 after:bg-orange-400 after:absolute relative  inline-block">Take Me There </button>

                </div>

            </div>

            {/* slider container */}

            <div className="flex justify-center items-center gap-3 p-2">

                {/* sliders */}

                {sliders.map((slide, inx) => (

                    <img onClick={() => setCurrentSlider(inx)} key={inx}

                        src={slide.img} className={`w-10 md:w-20 h-6 sm:h-8 md:h-12 bg-black/20 ${currentSlider === inx ? 'border-2 border-black p-px' : ''} rounded-md md:rounded-lg box-content cursor-pointer`}

                        alt={slide.title} />
                ))}

            </div>
        </>
    );
};

export default Carousel;