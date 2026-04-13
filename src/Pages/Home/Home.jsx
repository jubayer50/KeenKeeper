import React from "react";
import Navbar from "../../Components/Shared/Navbar/Navbar";
import Banner from "../../Components/Shared/Home/Banner/Banner";
import Summary from "../../Components/Shared/Home/Summary/Summary";
import Friends from "../../Components/Shared/Home/Friends/Friends";

const Home = () => {
  return (
    <div className="bg-[#F8FAFC]">
      <Banner></Banner>

      <Summary></Summary>

      <Friends></Friends>
    </div>
  );
};

export default Home;
