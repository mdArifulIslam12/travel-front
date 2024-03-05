'use client'

import { useEffect, useState } from "react";

const Trip = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch('tour.json')
            .then(res => res.json())
            .then((x) => setData(x))
    })

    return (
        <div className="mt-8">
            <p className="text-center">Browse by Category</p>
            <p className="text-center mt-6 text-3xl font-bold">Find Inspiration For <br />
                Your Next Trip</p>
            <div className="flex gap-7 mt-12 mb-24 justify-center">
                {
                    data.map((one) => (<div key={one.id}>
                        <div className="relative">
                            <img  className="w-44 h-64 opacity-0 hover:opacity-100 bg-slate-300 hover:text-white transition" src={one.background} alt="" />
                            <div className="absolute bottom-1 left-14">
                                <img className="w-14 mb-14 " src={one.icon} alt="" />
                                <div className=" text- text-center">
                                    <p className="text-xl mb-1 font-semibold">{one.title}</p>
                                    <p className="mb-5">{one.tour}</p>
                                    <p className="text-orange-400 font-bold">{one.price}</p>
                                </div>
                            </div>
                        </div>
                    </div>))
                }
            </div>
        </div>
    );
};

export default Trip;