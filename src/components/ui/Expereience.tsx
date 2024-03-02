import Image from "next/image";
import { useEffect, useState } from "react";

const Expereience = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch('exp.json')
            .then(res => res.json())
            .then(icons => setData(icons))
    })

    return (
        <div className="grid grid-cols-4">
            {
                data.map((x) => <div className="items-center" key={x.id}>
                    <div className="w-72 ml-24 mr-24">
                        <img className="lg:ml-24" src={x.img} width={80} height={80} alt="" />
                        <p className="text-2xl text-center font-bold text-black">{x.title}</p>
                        <p className="text-center mt-3">{x.description}</p>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Expereience;