import React from "react";
import { FaFacebookSquare, FaYoutube, FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const TravelTeam = () => {
  const allTeam: { id: number; name: string; details: string; img: string }[] =
    [
      {
        id: 1,
        name: "Eleanor Pena",
        img: "https://demo2.wpopal.com/zourney/wp-content/uploads/2022/07/ab_teambox1.jpg",
        details: "Ceo, Founder",
      },
      {
        id: 2,
        name: "Arlene McCoy",
        img: "https://demo2.wpopal.com/zourney/wp-content/uploads/2022/07/ab_teambox2.jpg",
        details: "Marketing",
      },
      {
        id: 3,
        name: "Dianne Russell",
        img: "https://demo2.wpopal.com/zourney/wp-content/uploads/2022/07/ab_teambox4.jpg",
        details: "Tour Guide",
      },
      {
        id: 4,
        name: "Jacob Jones",
        img: "https://demo2.wpopal.com/zourney/wp-content/uploads/2022/07/ab_teambox3.jpg",
        details: "Tour Guide",
      },
    ];

  return (
    <div className="mt-12 mb-12 max-w-7xl mx-auto ">
      <div className="text-center">
        <p className="mb-4 font-bold uppercase text-[14px]">Meet the Team</p>
        <h2 className="lg:text-6xl font-medium text-black ">
          Our best Travel Agents
        </h2>
        <div className="w-[100px] h-[1px] bg-[#E46D30] mx-auto my-12"></div>
      </div>
      <div className="grid lg:grid-cols-4 sm:grid-cols-1 gap-5  lg:pt-4">
        {allTeam.map((team) => (
          <div
            key={team.id}
            className="card lg:max-w-lg bg-base-100 tema-project-img-card "
          >
            <figure className="relative rounded-sm ">
              <img src={team.img} alt="Tema img" className="rounded-sm " />
              <div className="absolute z-1 bg-white bottom-0 rounded-sm team-project-icons ">
                <div className="flex justify-center items-center text-xl py-4  px-6 ">
                  <FaFacebookSquare className="mr-6 team-project-single-icon " />
                  <FaYoutube className="mr-6 team-project-single-icon " />
                  <FaTwitter className="mr-6 team-project-single-icon " />
                  <FaInstagram className="team-project-single-icon" />
                </div>
              </div>
            </figure>
            <div className="card-body items-center text-center pt-[20px]">
              <h2 className="text-2xl font-medium ">{team.name}</h2>
              <p className="text-[13px] font-[600] uppercase text-[#E46D30] ">
                {team.details}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravelTeam;
