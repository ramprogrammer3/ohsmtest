import React from "react";
import { Link } from "react-router-dom";
import Badge from "./Badge";
import { FaArrowRight } from "react-icons/fa";

const Column = ({ subtitle, link }) => {
  return (
    <div>
      <h3 className="text-white roboto font-[500] text-[16px] leading-5 pb-2">
        {" "}
        {subtitle}{" "}
      </h3>
      <div className="flex flex-col gap-[8px]">
        {link.map((item,index) => (
          <Link
            key={index}
            to={"#"}
            className="py-[8px] text-[#e2e8f0] text-[16px] font-normal roboto leading-[22.4px]"
          >
            {" "}
            {item.text}
            {item.text === "Accessibility" ? <Badge /> : ""}
            {item.text === "Request Demo" ? (
              <FaArrowRight className="inline-block ml-[10px] text-[#e2e8f0]" />
            ) : (
              ""
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Column;
