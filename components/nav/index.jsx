import React from "react";

const Nav = () => {
  return (
    <div className="bg-white/10 backdrop-blur-sm border-b border-white/50 ">
      <div className="flex items-center justify-between text-white relative z-50 py-[24px] px-[104px]">
        <div className="text-xl font-extrabold">
          Alagon Energy Resources Limited
        </div>
        <ul className="text-lg font-medium flex gap-8">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">About Us</li>
          <li className="cursor-pointer">Services</li>
        </ul>

        <button className="w-fit py-2 px-6 border-white border cursor-pointer rounded-full">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Nav;
