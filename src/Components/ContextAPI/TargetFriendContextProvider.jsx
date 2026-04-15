import React, { createContext, useState } from "react";

export const TargetFriendContext = createContext();

const TargetFriendContextProvider = ({ children }) => {
  const [communication, setCommunication] = useState([]);
  const [call, setCall] = useState([]);
  const [text, setText] = useState([]);
  const [video, setVideo] = useState([]);

  const data = {
    call,
    setCall,
    text,
    setText,
    video,
    setVideo,
    communication,
    setCommunication,
  };

  return (
    <TargetFriendContext.Provider value={data}>
      {children}
    </TargetFriendContext.Provider>
  );
};

export default TargetFriendContextProvider;
