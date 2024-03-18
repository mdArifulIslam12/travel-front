'use client'


import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { FaClock } from "react-icons/fa6";

const Travel = () => {

    const [data, setData] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0);

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
        }, 6000);

        return () => clearInterval(intervalId);
    }, [nextSlider]);

    useEffect(() => {
        fetch('X.json')
            .then(res => res.json())
            .then((one) => setData(one))
    })

    return (
        <div className="mt-20 mb-20">

            <div className="flex">
                <div className="ml-12">
                    <div className="text-left mt-44 ml-56 ">
                        <p>Book Now And Save</p>
                        <p className="font-bold text-3xl text-black">Last Minute <br /> Travel Deals</p>
                    </div>
                    <div className="flex mt-36 gap-5">
                        {
                            data.slice(currentIndex, currentIndex + 3).map((one) => <div key={one.day}>
                                <div className="card w-80 bg-base-100 rounded shadow-xl">
                                    <figure> <Image src={one.img} height={500} width={500} alt="x.jpg"></Image></figure>
                                    <div className="card-body">
                                        <p>{one.location}</p>
                                        <h2 className="card-title">{one.title}</h2>
                                        <div className="flex gap-2">
                                            <div className="mt-1"><FaClock /></div>
                                            <p className="">{one.days} days</p>
                                        </div>
                                        <div className="card-actions justify-end">
                                            <p>From {one.price}</p>
                                            <p className="text-right">More Information</p>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
                <div className="">
                    <img className="w-[1000px] h-[1000px] " src="https://i.ibb.co/Ctcp28M/h1-parallax.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Travel;