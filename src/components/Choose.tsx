import { FaRegCheckCircle } from "react-icons/fa";

const Choose = () => {
    return (
        <div className="flex gap-28">
            <div className="relative">
                <img src="https://i.ibb.co/QNQzkDS/h1-img.jpg" alt="" />
                <div className="w-96 absolute bottom-0  h-64 text-2xl font-bold flex justify-center -right-16 bg-orange-400">
                    <p className="text-white text-center pt-14"> We Create journeys Worth Taking for the Travelar</p>
                    <img src="https://i.ibb.co/CMX7GPP/h1-deco.png" alt="" />
                </div>
            </div>
            <div>
                <p>Why Choose Us</p>
                <p className="text-3xl mt-10 font-bold">Our Service meet <br /> High quality standard</p>
                <div className="flex mt-10 gap-4">
                    <div className="divider w-16  divider-accent"></div>
                    <div>
                        <p className="mt-3">Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. <br /> Ut elit tellus, luctus nec <br /> ullamcorper mattis, pulvinar dapibus leo</p>
                        <div className="flex gap-4 mt-6">
                            <div className="text-4xl hover:text-orange-400">
                                <FaRegCheckCircle />
                            </div>
                            <p className="mt-2">Professional Tour Guide</p>
                        </div>
                        <div className="flex  gap-4 mt-6">
                            <div className="text-4xl hover:text-orange-400">
                                <FaRegCheckCircle />
                            </div>
                            <p className="mt-2">Exceptional flexibility</p>
                        </div>
                        <div className="flex gap-4 mt-6">
                            <div className="text-4xl hover:text-orange-400">
                                <FaRegCheckCircle />
                            </div>
                            <p className="mt-2">Quality you can trust</p>
                        </div>
                        <div className="flex gap-4 mt-6">
                            <div className="text-4xl hover:text-orange-400">
                                <FaRegCheckCircle />
                            </div>
                            <p className="mt-2">Award-winning support </p>
                        </div>
                        <button className="mt-8 text-sm w-56 h-14 before:absolute border-[1px] border-black before:block before:inset-0 before:-z-10 before:bg-none text-black after:block hover:after:w-full after:w-0 after:hover:left-0 after:right-0 after:top-0 after:h-full after:-z-10 after:duration-300 after:bg-orange-400 after:absolute relative  inline-block">Contact Us </button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Choose;