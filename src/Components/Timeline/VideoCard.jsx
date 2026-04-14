import React from "react";
import VideoIcon from "../../assets/video.png";

const VideoCard = ({ item }) => {
  return (
    <div className="bg-white p-4 rounded-lg border border-[#E9E9E9]">
      <div className="flex gap-4 items-center">
        <div>
          <img src={VideoIcon} alt="" />
        </div>

        <div className="">
          <h2 className="text-[#64748B] text-lg">
            <span className="text-[#244D3F] font-medium text-xl ">Video </span>
            With {item.name}
          </h2>
          <p className="text-[#64748B] font-medium">{item.date}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
