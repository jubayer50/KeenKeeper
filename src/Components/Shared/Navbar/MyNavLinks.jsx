import React from "react";
import { NavLink } from "react-router";

const MyNavLinks = ({ to, children }) => {
  return (
    <div>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `btn font-semibold text-[#64748B] ${isActive ? "bg-[#244D3F] text-white" : ""}`
        }
      >
        {children}
      </NavLink>
    </div>
  );
};

export default MyNavLinks;
