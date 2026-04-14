import React, { useContext, useState } from "react";
import { TargetFriendContext } from "../../Components/ContextAPI/TargetFriendContextProvider";
import CallCard from "../../Components/Timeline/CallCard";
import TextCard from "../../Components/Timeline/TextCard";
import VideoCard from "../../Components/Timeline/VideoCard";

const Timeline = () => {
  const { call, setCall, text, setText, video, setVideo } =
    useContext(TargetFriendContext);

  const [filter, setFilter] = useState("all");
  // console.log(filter);
  // console.log(call, "from timeline call");
  // console.log(text, "from timeline text");
  // console.log(video, "from timeline video");

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
              className="bg-white p-1.5 border border-[#] w-40 rounded-lg"
            >
              <option value="all">All</option>
              <option value="call">Call</option>
              <option value="text">Text</option>
              <option value="video">Video</option>
            </select>
          </div>
        </div>

        {/* empty massage */}
        {call.length == 0 && text.length == 0 && video.length == 0 && (
          <div className="bg-white py-20">
            <h2 className="text-lg font-medium text-[#1F2937] text-center">
              No call, Text and Video!
            </h2>
          </div>
        )}

        {/* all card show */}
        {filter === "all" && (
          <div className="space-y-4">
            {/* call card */}
            <div className="space-y-4">
              {call.map((item, i) => (
                <CallCard key={i} item={item}></CallCard>
              ))}
            </div>

            {/* video call card */}
            <div className="space-y-4">
              {video.map((item, i) => (
                <VideoCard key={i} item={item}></VideoCard>
              ))}
            </div>

            {/* text card */}
            <div className="space-y-4">
              {text.map((item, i) => (
                <TextCard key={i} item={item}></TextCard>
              ))}
            </div>
          </div>
        )}

        {/* only text */}
        {filter === "text" && (
          <div className="space-y-4">
            {text.map((item, i) => (
              <TextCard key={i} item={item}></TextCard>
            ))}
          </div>
        )}

        {/* only video */}
        {filter === "video" && (
          <div className="space-y-4">
            {video.map((item, i) => (
              <VideoCard key={i} item={item}></VideoCard>
            ))}
          </div>
        )}

        {/* only call */}
        {filter === "call" && (
          <div className="space-y-4">
            {call.map((item, i) => (
              <CallCard key={i} item={item}></CallCard>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Timeline;
