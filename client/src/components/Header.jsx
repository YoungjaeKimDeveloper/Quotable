import React from "react";
import { FaPlusSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="lg:px-100 px-[10%] py-4">
      <div className="flex items-center justify-between">
        <Link to={"/"}>
          <h1 className="spacing text-2xl font-semibold uppercase tracking-widest">
            Quotable
          </h1>
        </Link>
        <div className="rounded-x rounded-xl p-2 duration-300 hover:cursor-pointer hover:bg-[#ffffcc]">
          <Link to={"/create"}>
            <FaPlusSquare />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
