import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="py-20 flex justify-center h-screen items-center">
      <div className="flex flex-col items-center gap-2">
        <h2 className="font-bold text-3xl">404 Not Found!</h2>
        <Link to={"/"}>
          <button className="btn bg-[#244D3F] text-white">Back to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
