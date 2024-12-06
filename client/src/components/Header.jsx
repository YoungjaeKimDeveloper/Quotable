import React from "react";
import { FaPlusSquare } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";

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
        <div className="flex gap-x-4 p-2 duration-300">
          <Link to={"/"}>
            <div className="rounded-xl p-2 duration-300 hover:bg-yellow-200">
              <IoMdHome className="rounded-xl text-2xl hover:cursor-pointer" />
            </div>
          </Link>
          <Link to={"/create"}>
            <div className="rounded-xl p-2 duration-300 hover:bg-yellow-200">
              <FaPlusSquare className="rounded-xl text-2xl hover:cursor-pointer" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
