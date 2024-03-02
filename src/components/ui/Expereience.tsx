import { useEffect, useState } from "react";

const Expereience = () => {

    const [data,setData] = useState([])

    useEffect(() => {
        fetch('exp.json')
        .then(res => res.json())
        .then(icons => setData(icons))
    })

    return (
        <div>
            {
                data?.map((x) => (<div key={x?.id}>
                        <p>{x.title}</p>
                </div>))
            }
        </div>
    );
};

export default Expereience;