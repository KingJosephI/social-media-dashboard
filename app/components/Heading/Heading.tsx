"use client";
import React from "react";

const Header = () => {
  const [theme, setTheme] = React.useState("light");

  React.useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleDarkMode = () => {
    setTheme(theme === "light" ? "dark" : "light");
    console.log(theme);
  };

  return (
    <header className="pt-[20px]  px-[165px] text-[14px] text-darkGray font-bold flex flex-col w-full md:flex-row md:justify-between dark:text-blueIsh">
      <div className="border-b-2 border-b-darkGray pb-6 md:border-none">
        <h1 className="text-[24px] text-black dark:text-white">
          Social Media Dashboard
        </h1>
        <p>Total Followers: 23,004</p>
      </div>
      <div className={`pt - 4`} onClick={handleDarkMode}>
        <span>Dark Mode</span>
      </div>
    </header>
  );
};

export default Header;
