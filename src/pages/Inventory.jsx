import React from "react";

const Inventory = () => {
  return (
    <div className="bg-white">
      <div className="w-11/12 max-w-[450px] mx-auto flex items-center flex-col py-10 gap-y-5">
        <p className="text-center font-sans font-bold text-[18px] leading-[32px] tracking-tighter text-[#111827]">
          Inventory{" "}
        </p>
        <form className="mt-4 w-full">
          <label className="flex flex-col mb-3 gap-3 mt-3">
            <p className="text-[#374151] font-bold text-[16px] leading-[24px] font-sans">
              Property Space Name{" "}
            </p>
            <input
              type="text"
              placeholder="Dormitory - 201"
              className="text-[#374151] font-bold text-[16px] border-2 border-[#e5e7eb]  focus:outline-none rounded-[16px] px-[16px] py-3"
            />
          </label>

          <div className="flex flex-col gap-2 mb-3">
            <label
              htmlFor="inventorytype"
              className="text-[#374151] font-bold text-[16px] leading-[24px] font-sans"
            >
              {" "}
              Property Inventory Type{" "}
            </label>
            <select
              name=""
              id="inventorytype"
              className="text-[#374151] font-bold text-[16px] leading-[24px] font-sans border-2 border-[#e5e7eb]  focus:outline-none rounded-[16px] px-[16px] py-3"
            >
              <option value="Others"> Others</option>
              <option value="typeone"> Type One</option>
              <option value="typetwo"> Type Two</option>
              <option value="typethree"> Type Three</option>
              <option value="typefour"> Type Four</option>
              <option value="typefive"> Type Five</option>
            </select>
          </div>

          <label className="flex flex-col mb-3 gap-3">
            <p className="text-[#374151] font-bold text-[16px] leading-[24px] font-sans">
              Other Property Inventory Type{" "}
            </p>
            <input
              type="text"
              className="text-[#374151]  text-[16px] border-2 border-[#e5e7eb]  focus:outline-none rounded-[16px] px-[16px] py-3"
              placeholder="Add Property Inventory Type "
            />
          </label>

          <label className="flex flex-col mb-3 gap-3">
            <p className="text-[#374151] font-bold text-[16px] leading-[24px] font-sans">
              Capacity{" "}
            </p>
            <input
              type="text"
              className="text-[#374151]  text-[16px] border-2 border-[#e5e7eb]  focus:outline-none rounded-[16px] px-[16px] py-3"
              placeholder="Number of occupants "
            />
          </label>

          <label className="flex flex-col mb-3 gap-3">
            <p className="text-[#374151] font-bold text-[16px] leading-[24px] font-sans">
              Amenities{" "}
            </p>
            <input
              type="text"
              className="text-[#374151]  text-[16px] border-2 border-[#e5e7eb]  focus:outline-none rounded-[16px] px-[16px] py-3"
              placeholder="Available amenities "
            />
          </label>

          <div className="flex flex-col gap-2 mb-3">
            <label
              htmlFor="availabilitystatus"
              className="text-[#374151] font-bold text-[16px] leading-[24px] font-sans"
            >
              {" "}
              Availability Status{" "}
            </label>
            <select
              name=""
              id="availabilitystatus"
              className="text-[#374151] font-bold text-[16px] leading-[24px] font-sans border-2 border-[#e5e7eb]  focus:outline-none rounded-[16px] px-[16px] py-3"
            >
              <option value="Active"> Active </option>
              <option value="Inactive"> Inactive </option>
            </select>
          </div>

          <label className="flex flex-col mb-3 gap-3">
            <p className="text-[#374151] font-bold text-[16px] leading-[24px] font-sans">
              Notes (if any ){" "}
            </p>
            <input
              type="text"
              className="text-[#374151]  text-[16px] border-2 border-[#e5e7eb]  focus:outline-none rounded-[16px] px-[16px] py-3"
              placeholder="add notes if any... "
            />
          </label>

          <div className=" flex flex-col gap-3 w-full">
            <button
              className="border border-[#2fa551] px-[24px] py-[16px] rounded-[16px] bg-[#f9fafb]
             text-[#2fa551] text-[16px] leading-[24px] text-center font-sans font-medium"
            >
              Cancel
            </button>
            <button
              className="border border-[#2fa551] px-[24px] py-[16px] rounded-[16px] bg-[#2fa551]
             text-[#f9fafb] text-[16px] leading-[24px] text-center font-sans font-medium"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Inventory;
