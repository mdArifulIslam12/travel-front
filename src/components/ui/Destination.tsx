'use client'
import { motion } from "framer-motion";

import { createContext } from 'react'


const Destination = () => {
    return (
        <div className="">
            <div className="relative">
                <div className="absolute right-0">
                    <img className="  " src="https://i.ibb.co/mDXsX0q/ldp-vector-2.png" alt="" />
                </div>

                <img className="float-left absolute " src="https://i.ibb.co/L5yGHCR/h1-vector-1.png" alt="" />
            </div>
            <div>
                <p className="text-center mt-28">Choose Your Experience</p>
                <p className="text-3xl text-center mt-6 text-black font-bold">Top Attractions <br /> Destinations</p>
            </div>
            <div className="flex gap-4 justify-center mt-9">
                <motion.img initial={{ scale: 1 }} whileHover={{ scale: 1.1 }} className="h-72 w-[600px]" src="https://i.ibb.co/DYvnfYb/location2.jpg" alt="" />
                <motion.img initial={{ scale: 1 }} whileHover={{ scale: 1.1 }} className="h-72 w-[600px]" src="https://i.ibb.co/Hzh02T8/location19.jpg" alt="" />
            </div>
            <div className="flex gap-8 mt-8 justify-center">
                <motion.img initial={{ scale: 1 }} whileHover={{ scale: 1.1 }} className="w-[384px] cursor-pointer h-80" src="https://i.ibb.co/7v6NJLj/location1.jpg" alt="" />
                <motion.img initial={{ scale: 1 }} whileHover={{ scale: 1.1 }} className="w-[384px] cursor-pointer h-80" src="https://i.ibb.co/S0SySYT/location7.jpg" alt="" />
                <motion.div initial={{ scale: 1 }} whileHover={{ scale: 1.1 }}>
                    <img className="w-[384px] cursor-pointer h-80" src="https://i.ibb.co/0jN8c1H/location4.jpg" alt="" />
                </motion.div>

            </div>
        </div>
    );
};

export default Destination;