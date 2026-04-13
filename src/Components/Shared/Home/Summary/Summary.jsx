import React from "react";

const Summary = () => {
  return (
    <div className="max-w-277.5 mx-auto py-10 px-2 border-b border-[#E9E9E9]">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="text-center space-y-2 bg-white shadow-sm rounded-lg py-8 ">
          <h2 className="text-[32px] font-semibold text-[#244D3F]">10</h2>
          <p className="text-[#64748B] text-lg">Total Friends</p>
        </div>

        <div className="text-center space-y-2 bg-white shadow-sm rounded-lg py-8 ">
          <h2 className="text-[32px] font-semibold text-[#244D3F]">3</h2>
          <p className="text-[#64748B] text-lg">On Track</p>
        </div>

        <div className="text-center space-y-2 bg-white shadow-sm rounded-lg py-8 ">
          <h2 className="text-[32px] font-semibold text-[#244D3F]">6</h2>
          <p className="text-[#64748B] text-lg">Need Attention</p>
        </div>

        <div className="text-center space-y-2 bg-white shadow-sm rounded-lg py-8">
          <h2 className="text-[32px] font-semibold text-[#244D3F]">12</h2>
          <p className="text-[#64748B] text-lg">Interactions This Month</p>
        </div>
      </div>
    </div>
  );
};

export default Summary;
