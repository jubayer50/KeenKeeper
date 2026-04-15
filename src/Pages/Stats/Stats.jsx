import React, { useContext } from "react";
import { Legend, Pie, PieChart } from "recharts";
import { TargetFriendContext } from "../../Components/ContextAPI/TargetFriendContextProvider";

const Stats = () => {
  const { communication } = useContext(TargetFriendContext);

  const callData = communication.filter((item) => item.type === "call");
  const textData = communication.filter((item) => item.type === "text");
  const videoData = communication.filter((item) => item.type === "video");

  const data = [
    { name: "Call", value: callData.length, fill: "#244D3F" },
    { name: "Text", value: textData.length, fill: "#7E35E1" },
    { name: "Video", value: videoData.length, fill: "#37A163" },
  ];

  return (
    <div className="bg-[#F8FAFC] py-20">
      <div className="space-y-6 max-w-277.5 mx-auto">
        <h2 className="text-5xl font-bold text-[#1F2937]">
          Friendship Analytics
        </h2>

        <div className="bg-white p-8 rounded-lg">
          <h3 className="text-xl font-medium text-[#244D3F]">
            By Interaction Type
          </h3>

          {videoData.length == 0 &&
          textData.length == 0 &&
          callData.length == 0 ? (
            <div>
              <h2 className="py-10 text-center text-lg">No data for Chart.</h2>
            </div>
          ) : (
            <div className=" flex justify-center items-center mt-4">
              <PieChart
                style={{
                  width: "100%",
                  maxWidth: "500px",
                  maxHeight: "80vh",
                  aspectRatio: 1,
                  paddingBottom: "30px",
                }}
                responsive
              >
                <Pie
                  data={data}
                  innerRadius="80%"
                  outerRadius="100%"
                  // Corner radius is the rounded edge of each pie slice
                  cornerRadius="10%"
                  fill="#8884d8"
                  // padding angle is the gap between each pie slice
                  paddingAngle={5}
                  dataKey="value"
                  isAnimationActive={true}
                />

                <Legend></Legend>
              </PieChart>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Stats;
