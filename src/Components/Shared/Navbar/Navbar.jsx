import React from "react";

const Navbar = () => {
  return (
    <div className="py-4 shadow">
      <div className="max-w-360 mx-auto px-2 flex flex-col md:flex-row items-center md:justify-between gap-5">
        <div>
          <h2 className="font-extrabold text-2xl text-[#1F2937]">
            Keen<span className="text-[#244D3F]">Keeper</span>
          </h2>
        </div>

        <div className="flex flex-col gap-3 md:flex-row font-semibold">
          <button className="btn">Home</button>
          <button className="btn">Timeline</button>
          <button className="btn">Stats</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
