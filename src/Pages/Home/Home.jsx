import React from "react";
import Navbar from "../../Components/Shared/Navbar/Navbar";
import Banner from "../../Components/Shared/Home/Banner/Banner";
import Summary from "../../Components/Shared/Home/Summary/Summary";

const Home = () => {
  return (
    <div className="bg-[#F8FAFC]">
      <Banner></Banner>

      <Summary></Summary>
    </div>
  );
};

export default Home;
