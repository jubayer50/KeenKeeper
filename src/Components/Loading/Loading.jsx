import React from "react";
import { PuffLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex justify-center items-center py-80">
      <PuffLoader color="#244D3F" size={45} />
    </div>
  );
};

export default Loading;
