import React, { useState } from "react";
import oshmicon from "./oshmicon.png";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
let url = "http://localhost:8080/api/user/signup";

const SignUp = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    sendMail: false,
    termAndConditon: false,
  });

  // handle signup data
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormdata((prevData) => {
      return {
        ...prevData,
        [name]: type === "checked" ? checked : value,
      };
    });
  };

  const userSignup = async(data)=>{
    const toastId = toast.loading("loading...")
    try {
      const response = await axios.post(url,data);

      if(response.data.success){
        toast.success(response.data.message);
      }
      console.log(response)
      navigate("/login")

    } catch (error) {
      toast.error(error.response.data.message);
    }
    toast.dismiss(toastId)
  }

  // form submit function
  const handleSubmit = (e) => {
    e.preventDefault();

    if (formdata.password.length < 6) {
      toast.error("password must be at least 6 characters long");
      return;
    }

    if (formdata.password !== formdata.confirmPassword) {
      toast.error("password does not match");
      return;
    }
    userSignup(formdata);
  };

  return (
    <div className="bg-white">
      <div className="w-11/12 max-w-[450px] mx-auto flex items-center flex-col py-10 gap-y-5">
        <img src={oshmicon} alt="icon" width={98} height={36} />
        <h3 className="text-center text[#374151] text-[16px] md:text-[24px] font-bold font-sans leading-[20px] md:leading-[30px]">
          Create an account{" "}
        </h3>

        <form className="pt-4 w-full" onSubmit={handleSubmit}>
          <label className="flex flex-col gap-2 mb-4">
            <p className="text-[#374151] leading-[24px] text-[16px] font-bold font-sans">
              Full Name{" "}
            </p>
            <input
              type="text"
              name="name"
              value={formdata.name}
              onChange={handleChange}
              className="w-full py-3 px-4 rounded-[16px] border-2 border-[#f3f4f6]  focus:outline-none"
              placeholder="Full Name"
            />
          </label>

          <label className="flex flex-col gap-2 mb-4">
            <p className="text-[#374151] leading-[24px] text-[16px] font-bold font-sans">
              Email{" "}
            </p>
            <input
              type="email"
              name="email"
              value={formdata.email}
              onChange={handleChange}
              className="w-full py-3 px-4 rounded-[16px] border-2 border-[#f3f4f6]  focus:outline-none"
              placeholder="Email"
            />
          </label>

          <label className="flex flex-col gap-2 mb-4 relative">
            <p className="text-[#374151] leading-[24px] text-[16px] font-bold font-sans">
              Password
            </p>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formdata.password}
              onChange={handleChange}
              className="w-full py-3 px-4 rounded-[16px] border-2 border-[#f3f4f6]  focus:outline-none"
              placeholder="Password"
            />
            <span
              onClick={() => {
                setShowPassword(!showPassword);
              }}
              className="absolute right-8 top-12 text-[#afb3c1] cursor-pointer"
            >
              {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
            </span>
          </label>

          <label className="flex flex-col gap-2 mb-4 relative">
            <p className="text-[#374151] leading-[24px] text-[16px] font-bold font-sans">
              Confirm Password
            </p>
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={formdata.confirmPassword}
              onChange={handleChange}
              className="w-full py-3 px-4 rounded-[16px] border-2 border-[#f3f4f6]  focus:outline-none"
              placeholder="confirm password"
            />
            <span
              onClick={() => {
                setShowConfirmPassword(!showConfirmPassword);
              }}
              className="absolute right-8 top-12 text-[#afb3c1] cursor-pointer"
            >
              {showConfirmPassword ? <FaRegEyeSlash /> : <FaRegEye />}
            </span>
          </label>

          <label className="flex gap-2 items-center mb-3">
            <input
              type="checkbox"
              checked={formdata.sendMail}
              onChange={handleChange}
              name="sendMail"
              className="border-2 border-[#9ca3af] rounded-[4px]"
            />
            <p className="text-[16px] leading-[24px] font-medium font-sans text-[#374151] ">
              Yes, I want to receive email{" "}
            </p>
          </label>

          <label className="flex gap-2 items-center mb-8">
            <input
              type="checkbox"
              name="termAndConditon"
              checked={formdata.termAndConditon}
              onChange={handleChange}
              className="border-2 border-[#9ca3af] rounded-[4px]"
            />
            <p className="text-[16px] leading-[24px] font-medium font-sans text-[#374151] ">
              I agree to all{" "}
              <span className="text-[#e7319d] font-bold">
                Terms & Privacy Policy{" "}
              </span>
            </p>
          </label>

          <button
            className="w-full px-[24px] py-[16px] bg-[#2fa551] rounded-[16px] text-[#f9fafb] text-[16px] leading-[24px] font-medium text-center"
            type="submit"
          >
            {" "}
            Sign Up
          </button>
        </form>

        <div className="w-full flex justify-center gap-4 mt-8">
          <p className="text-[#374151] text-[16px] leading-[24px] font-medium font-sans">
            Already have an account?{" "}
          </p>
          <span className="text-[16px] leading-[24px] font-bold font-sans text-[#e7319d]">
            <Link to="/login"> Sign in </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
