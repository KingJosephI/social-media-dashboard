import React from "react";

const Header = () => {
  return (
    <header className="pt-[20px]  px-[165px] text-[14px] text-darkGray font-bold flex flex-col w-full md:flex-row md:justify-between">
      <div className="border-b-2 border-b-darkGray pb-6 md:border-none">
        <h1 className="text-[24px] text-black">Social Media Dashboard</h1>
        <p>Total Followers: 23,004</p>
      </div>
      <div className="pt-4">
        <span>Dark Mode</span>
      </div>
    </header>
  );
};

export default Header;
