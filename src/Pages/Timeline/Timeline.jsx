import React, { useContext } from "react";
import { TargetFriendContext } from "../../Components/ContextAPI/TargetFriendContextProvider";

const Timeline = () => {
  const { call, setCall, text, setText, video, setVideo } =
    useContext(TargetFriendContext);

  console.log(call, "from timeline call");
  console.log(text, "from timeline text");
  console.log(video, "from timeline video");

  return <div>Timeline</div>;
};

export default Timeline;
