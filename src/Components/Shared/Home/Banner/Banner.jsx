import React from "react";
import { FaPlus } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="text-center px-2 space-y-4 pt-15 md:pt-20">
      <h2 className="text-[#1F2937] text-3xl md:text-5xl font-bold">
        Friends to keep close in your life
      </h2>

      <p className="text-[#64748B] max-w-142.25 mx-auto">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the relationships that matter most.
      </p>

      <button className="btn bg-[#244D3F] text-white mt-4">
        <FaPlus /> Add a Friend
      </button>
    </div>
  );
};

export default Banner;
