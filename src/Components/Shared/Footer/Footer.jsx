import React from "react";
import { FaSquareFacebook, FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="bg-[#244D3F] text-white px-2 pt-16 md:pt-20">
      <div className="pb-8">
        <div className="text-center space-y-5">
          <h2 className="text-3xl md:text-6xl font-bold">
            Keen<span>Keeper</span>
          </h2>

          <p>
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>

          <div className="space-y-4 ">
            <h4 className="text-xl font-medium">Social Links</h4>
            <div className="flex gap-3 text-[#101727] justify-center">
              <div className="w-10 h-10 bg-white rounded-full p-2.5 flex justify-center items-center text-lg">
                <RiInstagramFill />
              </div>

              <div className="w-10 h-10 bg-white rounded-full p-2.5 flex justify-center items-center text-lg">
                <FaSquareFacebook />
              </div>

              <div className="w-10 h-10 bg-white rounded-full p-2.5 flex justify-center items-center text-lg">
                <FaXTwitter />
              </div>
            </div>
          </div>
        </div>

        <div></div>
      </div>

      <div className="py-8 border-t border-[#1A886220] max-w-277.5 mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-3 md:justify-between">
          <div className="text-[#FAFAFA]">
            <p>© 2026 KeenKeeper. All rights reserved.</p>
          </div>

          <div className="flex gap-4">
            <p>Privacy Policy </p>
            <p> Terms of Service </p>
            <p> Cookies</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
