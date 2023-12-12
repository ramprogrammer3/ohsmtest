import React from "react";
import icon from "./icon.png";

const Plan = ({ heading, data, btnText }) => {
  return (
    <div className="border border-color-[#c0c0c0] ">
      <div className="mx-auto pt-[33.8px] pl-[25.63px]">
        <h3 className="text-center text-[27px] font-black leading-9 pb-5">
          {" "}
          {heading}{" "}
        </h3>
        <ul className=" py-[12px] flex flex-col gap-[25px] pb-3">
          {data.map((item, index) => (
            <div key={index} className="flex gap-2 items-center px-2 ml-[-7px] ">
              <img
                src={icon}
                alt="icon"
                className="object-cover w-[10px] h-[9.07px] "
              />
              <li className=" font-normal text-[14px] roboto  text-white">
                {item}
              </li>
            </div>
          ))}
        </ul>
      </div>

      <div className="py-8">
        <button
          className="text-center w-[210px] h-[45px] block mx-auto bg-indigo-500 px-2 rounded-[8px] hover:bg-indigo-600 transition-all duration-300 roboto text-[18px] font-medium
      "
        >
          {btnText}
        </button>
      </div>
    </div>
  );
};

export default Plan;
