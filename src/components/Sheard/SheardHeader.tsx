"use client";

type ISheardHeared = {
  title: string;
  subTitle: string;
};

const SheardHeader = ({ title, subTitle }: ISheardHeared) => {
  return (
    <div className="sheardHeader">
      <div className="sharderHeaderBackground">
        <div className="flex justify-center items-center h-[100%] ">
          <div>
            <h4 className="text-2xl  ">{title}</h4>
            <p className="font-bold uppercase subHeaderTitle text-md">
              Home / {subTitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SheardHeader;
