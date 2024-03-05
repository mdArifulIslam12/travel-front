'use client'


import Image from "next/image";
import { useEffect, useState } from "react";

const Travel = () => {

    const [data, setData] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        fetch('X.json')
            .then(res => res.json())
            .then((one) => setData(one))
    })

    return (
        <div className="flex mt-20 mb-20">
            <div>
                <p>Book Now And Save</p>
                <p className="font-bold text-3xl text-black">Last Minute <br /> Travel Deals</p>
                <div className="flex">
                    {
                        data.slice(currentIndex, currentIndex + 3).map((one) => <div key={one.day}>
                            <div className="card w-80 bg-base-100 rounded shadow-xl">
                                <figure> <Image src={one.img} height={500} width={500} alt="x.jpg"></Image> </figure>
                                <div className="card-body">
                                    <h2 className="card-title">Shoes!</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                    <div className="card-actions justify-end">
                                        <p className="text-right">More Information</p>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
            <div>
                <Image className="float-right" src={'https://i.ibb.co/Ctcp28M/h1-parallax.jpg'} height={1200} width={1200} alt="Travel" ></Image>
            </div>
        </div>
    );
};

export default Travel;