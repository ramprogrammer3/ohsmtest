import React from "react";
import { data } from "../Data/navData";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {setToken,setUser} from "../slices/userSlice"
import toast from "react-hot-toast";
const Navbar = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = ()=>{
    dispatch(setUser(null))
    dispatch(setToken(null))
    localStorage.removeItem("user");
    localStorage.removeItem('token');
    toast.success("Log out successful")
    navigate("/")
  }

  return (
    <div className="bg-[#0A0F1B] text-white py-[24px]">
      <div className="w-11/12 max-w-[1080px] mx-auto flex justify-between items-center">
        <div>
          <Link className="logo" to="/">
            OHSM
          </Link>
        </div>

        <div className="flex gap-[16px]">
          {data.map((navItem, index) => (
            <Link to={navItem.path} key={index} className="hidden md:block">
              {" "}
              {navItem.page}{" "}
            </Link>
          ))}
        </div>

        <div>
          <div className="flex gap-5 items-center">
            {!user && <Link to={"/login"}>Login</Link>}

            {!user && (
              <button className="request-btn">
                <Link to={"/signup"}>Request a demo</Link>
              </button>
            )}
            {
              user &&
            <Link to={"/addbusiness"}>business</Link>
            }

            {
              user && <Link to={"/inventory"} >inventory </Link>
            }

            {
              user && <button onClick={logout}>logout</button>
            }

          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
