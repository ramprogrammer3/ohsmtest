import React from "react";
import leftArrow from "./assets/arrow-left.png";
import arrow from "./assets/Arrow.png";
import { state } from "../Data/statename";
import add from "./assets/add.png"

const AddBussiness = () => {
 
  return (
    <div className="bg-white">
      <div className="w-11/12 max-w-[450px] mx-auto flex items-center flex-col py-10 gap-y-5">
        <div className="flex gap-10 w-full ">
        
          <img src={leftArrow} alt="leftArrow" className="self-start w-[24px] h-[24px]" />
          <p className="w-1/2 font-bold text-[24px] leading-[30px] font-sans text-[#374151] text-center">Property Setup</p>
        </div>
        <img src={arrow} alt="arrow" className="w-full" width={342} height={140} />

        <form className="pt-4 w-full">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="propType"
              className="text-[#374151] font-bold text-[16px] leading-[24px] font-sans"
            >
              {" "}
              Property Type{" "}
            </label>
            <select
              name=""
              id="propType"
              className="text-[#374151] font-bold text-[16px] leading-[24px] font-sans border-2 border-[#e5e7eb]  focus:outline-none rounded-[16px] px-[16px] py-3"
            >
              <option value="propertytype"> Property Type</option>
              <option value="typeone"> Type One</option>
              <option value="typetwo"> Type Two</option>
              <option value="typethree"> Type Three</option>
              <option value="typefour"> Type Four</option>
              <option value="typefive"> Type Five</option>
            </select>
          </div>

          <label className="flex flex-col mb-3 gap-3 mt-3">
            <p className="text-[#374151] font-bold text-[16px] leading-[24px] font-sans">
              Property name{" "}
            </p>
            <input
              type="text"
              placeholder="Vista Proerty"
              className="text-[#374151] font-bold text-[16px] border-2 border-[#e5e7eb]  focus:outline-none rounded-[16px] px-[16px] py-3"
            />
          </label>

          <label className="flex flex-col mb-3 gap-3">
            <p className="text-[#374151] font-bold text-[16px] leading-[24px] font-sans">
              Phone Number{" "}
            </p>
            <input
              type="number"
              className="text-[#374151]  text-[16px] border-2 border-[#e5e7eb]  focus:outline-none rounded-[16px] px-[16px] py-3"
              placeholder="Phone number"
            />
          </label>

          <label className="flex flex-col mb-3 gap-3">
            <p className="text-[#374151] font-bold text-[16px] leading-[24px] font-sans">Email Address </p>
              <input type="email" className="text-[#374151]  text-[16px] border-2 border-[#e5e7eb]  focus:outline-none rounded-[16px] px-[16px] py-3" placeholder="Email Address" />
          </label>

          <label className="flex flex-col mb-3 gap-3">
            <p className="text-[#374151] font-bold text-[16px] leading-[24px] font-sans">
              Address {" "}
            </p>
            <input
              type="text"
              placeholder="123 Serene Street, Rajpur"
              className="text-[#374151] font-bold text-[16px] border-2 border-[#e5e7eb]  focus:outline-none rounded-[16px] px-[16px] py-3"
            />
          </label>

          <div className="flex flex-col gap-2 mb-3">
            <label
              htmlFor="state"
              className="text-[#374151] font-bold text-[16px] leading-[24px] font-sans"
            >
              {" "}
              State{" "}
            </label>
            <select
              name=""
              id="state"
              className="text-[#374151] font-bold text-[16px] leading-[24px] font-sans border-2 border-[#e5e7eb]  focus:outline-none rounded-[16px] px-[16px] py-3"
            >
              {
                state.map((item,index)=>(
                  <option value={item} key={index}> {item}</option>
                ))
              }
            </select>
          </div>


          <div className="flex flex-col gap-2 mb-3">
            <label
              htmlFor="city"
              className="text-[#374151] font-bold text-[16px] leading-[24px] font-sans"
            >
              {" "}
              City{" "}
            </label>
            <select
              name=""
              id="city"
              className="text-[#374151] font-bold text-[16px] leading-[24px] font-sans border-2 border-[#e5e7eb]  focus:outline-none rounded-[16px] px-[16px] py-3"
            >
              {
                state.map((item,index)=>(
                  <option value={item} key={index}> {item}</option>
                ))
              }
            </select>
          </div>

          <label className="flex flex-col mb-3 gap-3">
            <p className="text-[#374151] font-bold text-[16px] leading-[24px] font-sans">Pincode </p>
              <input type="number" className="text-[#374151]  text-[16px] border-2 border-[#e5e7eb]  focus:outline-none rounded-[16px] px-[16px] py-3" placeholder="e.g.220011" />
          </label>

          <div className="flex gap-1 my-3 items-center py-2 px-5 border border-[#2fa551] w-fit rounded-[16px]">
              <img src= {add} alt="add" />
              <button className="text-[14px] leading-[24px] font-medium font-sans text-[#2fa551]">Add Inventory</button>
          </div>

          <button className="bg-[#e5e7eb] w-full py-[16px] px-[24px] rounded-[16px] font-sans font-medium text-[16px] leading-[24px] text-center text-[#9ca3af]">
            Complete Your setup 
          </button>

        </form>
      </div>
    </div>
  );
};

export default AddBussiness;
