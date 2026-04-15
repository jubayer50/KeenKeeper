import React, { useContext, useState } from "react";
import { TargetFriendContext } from "../../Components/ContextAPI/TargetFriendContextProvider";
import CallCard from "../../Components/Timeline/CallCard";
import TextCard from "../../Components/Timeline/TextCard";
import VideoCard from "../../Components/Timeline/VideoCard";

const Timeline = () => {
  const { communication } = useContext(TargetFriendContext);

  const [filter, setFilter] = useState("all");

  const filterData =
    filter === "all"
      ? communication
      : communication.filter((item) => item.type === filter);

  return (
    <div className="bg-[#F8FAFC] py-15 md:py-20">
      <div className="max-w-277.5 mx-auto px-2 space-y-6">
        <div className="space-y-6">
          <h2 className="text-[#1F2937] font-bold text-3xl md:text-5xl">
            Timeline{" "}
          </h2>

          <div className="">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="bg-white px-4 py-2 border border-[#E9E9E9] text-[#64748B] w-60 rounded-lg text-lg appearance-none"
            >
              <option value="all">All</option>
              <option value="call">Call</option>
              <option value="text">Text</option>
              <option value="video">Video</option>
            </select>
          </div>
        </div>

        {/* new empty massage */}
        {communication.length === 0 && (
          <div className="bg-white rounded-lg py-20">
            <h2 className="text-lg font-medium text-[#1F2937] text-center">
              No call, video, and Text!
            </h2>
          </div>
        )}

        {/* all card show */}
        {filterData.map((item, i) => {
          if (item.type === "call") {
            return <CallCard key={i} item={item}></CallCard>;
          }
          if (item.type === "text") {
            return <TextCard key={i} item={item}></TextCard>;
          }
          if (item.type === "video") {
            return <VideoCard key={i} item={item}></VideoCard>;
          }
        })}
      </div>
    </div>
  );
};

export default Timeline;
