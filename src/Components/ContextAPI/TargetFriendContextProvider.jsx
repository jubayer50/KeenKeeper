import React, { createContext, useState } from "react";

export const TargetFriendContext = createContext();

const TargetFriendContextProvider = ({ children }) => {
  const [call, setCall] = useState([]);
  const [text, setText] = useState([]);
  const [video, setVideo] = useState([]);

  const data = { call, setCall, text, setText, video, setVideo };

  return (
    <TargetFriendContext.Provider value={data}>
      {children}
    </TargetFriendContext.Provider>
  );
};

export default TargetFriendContextProvider;
