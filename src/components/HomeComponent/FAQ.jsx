import React from "react";
import { faqData } from "../../Data/homeSection";
import plus from "./plus.png"

const FAQ = () => {
  return (
    <div className="w-11/12 max-w-[1080px] mx-auto pt-10 pb-5">
      <h3 className="text-center font-black text-[40px] leading-[54.64px] avenir ">
        Frequently Asked Questions{" "}
      </h3>

      <div className="mt-5">
          {
            faqData.map((data,index)=>(
              <div key={index} className="flex flex-col gap-4">
                  <div className="flex  justify-between items-center bg-[#13151d] font-[350] text-[20px] leading-7 p-[23.84px] avenir ">
                    <p> {data.question} </p>
                    <img src= {plus} alt="plus-icon" />
                  </div>
                  <p></p>
              </div>
            ))
          }
      </div>
    </div>
  );
};

export default FAQ;
