import React, { useState } from "react";
import oshmicon from "./oshmicon.png";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import google from "./google.png";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { useDispatch } from "react-redux";
import {setToken,setUser} from "../slices/userSlice";

let url = "http://localhost:8080/api/user/login";

const SignIn = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [formdata, setFormdata] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormdata((prevData) => {
      return {
        ...prevData,
        [e.target.name]: e.target.value,
      };
    });
  };

  // api call for user login

  const userLogin = async(data)=>{
    const toastId = toast.loading("loading...")
    try {
      const response = await axios.post(url,data);
      if(response.data.success){
        toast.success(response.data.message);
      }

      console.log(response.data)
      localStorage.setItem("user",JSON.stringify(response.data.user));
      localStorage.getItem("token",JSON.stringify(response.data.token));
      dispatch(setUser(response.data.user))
      dispatch(setToken(response.data.token));

      navigate("/")

    } catch (error) {
      toast.error(error.response.data.message)
    }
    toast.dismiss(toastId)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formdata.password.length < 6) {
      toast.error("password must be at least 6 characters long");
      return;
    }
    userLogin(formdata)
  };

  return (
    <div className="bg-white">
      <div className="w-11/12 max-w-[450px] mx-auto flex items-center flex-col py-10 gap-y-5">
        <img src={oshmicon} alt="icon" width={98} height={36} />
        <h3 className="text-center text[#374151] text-[24px] font-bold font-sans leading-[30px]">
          Sing in to OSHM{" "}
        </h3>

        <form className="pt-4 w-full" onSubmit={handleSubmit}>
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
              placeholder="Username or email"
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
            <p className="text-right text-[#e7319d] font-normal text-[14px] leading-[24px] font-sans cursor-pointer">
              Forget password
            </p>
            <span
              onClick={() => {
                setShowPassword(!showPassword);
              }}
              className="absolute right-8 top-12 text-[#afb3c1] cursor-pointer"
            >
              {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
            </span>
          </label>

          <button
            className="w-full px-[24px] py-[16px] bg-[#2fa551] rounded-[16px] text-[#f9fafb] text-[16px] leading-[24px] font-medium text-center"
            type="submit"
          >
            {" "}
            Sing In
          </button>
        </form>

        <div className="flex gap-2 justify-between flex-row items-center">
          <div className="w-[150px] h-[2px] bg-[#e6e8ec]"></div>
          <div className="w-fit text-[#d1d5db] text-[16px] leading-[24px] font-medium font-sans">
            {" "}
            or continue with{" "}
          </div>
          <div className="w-[150px] h-[2px] bg-[#e6e8ec]"></div>
        </div>

        <div className="flex gap-3 bg-[#eff6ff] py-[16px] px-[24px] w-full justify-center rounded-[16px]">
          <img src={google} alt="icon" className="object-cover" />
          <button className="text-[#333333] text-[16px] leading-[16px] font-sans font-bold ">
            {" "}
            Continue with Google
          </button>
        </div>

        <div className="w-full flex justify-center gap-4 mt-8">
          <p className="text-[#374151] text-[16px] leading-[24px] font-medium font-sans">
            Don't have an account?{" "}
          </p>
          <span className="text-[16px] leading-[24px] font-bold font-sans text-[#e7319d]">
            <Link to="/signup"> Sign up </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
