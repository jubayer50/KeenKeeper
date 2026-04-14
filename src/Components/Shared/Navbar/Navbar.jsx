import React from "react";
import MyNavLinks from "./MyNavLinks";
import { Link } from "react-router";
import { RiHome2Line } from "react-icons/ri";
import { IoTimeOutline } from "react-icons/io5";
import { FaChartLine } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="py-4 border-b border-[#E9E9E9] bg-white opacity-96 z-10 sticky top-0">
      <div className="max-w-360 mx-auto px-2 flex flex-col md:flex-row items-center md:justify-between gap-5">
        <div>
          <Link to={"/"}>
            <h2 className="font-extrabold text-2xl text-[#1F2937]">
              Keen<span className="text-[#244D3F]">Keeper</span>
            </h2>
          </Link>
        </div>

        <div className="flex gap-3 font-semibold">
          <MyNavLinks to={"/"}>
            <RiHome2Line className="text-xl" /> Home
          </MyNavLinks>
          <MyNavLinks to={"/timeline"}>
            <IoTimeOutline className="text-xl font-bold" /> Timeline
          </MyNavLinks>
          <MyNavLinks to={"/stats"}>
            <FaChartLine className="text-xl" /> Stats
          </MyNavLinks>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
