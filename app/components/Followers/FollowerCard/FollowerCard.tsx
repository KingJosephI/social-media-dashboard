import React from "react";
import { FaFacebookSquare, FaArrowUp } from "react-icons/fa";
import { IoMdArrowDropup } from "react-icons/io";

interface IFollowerCard
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  socialMediaIcon?: React.ReactNode;
  username?: string;
  followers?: string;
  days?: number;
  daysColor?: string;
  borderColor?: string;
}

const FollowerCard = ({
  socialMediaIcon = <FaFacebookSquare color="#178FF5" fontSize={"20px"} />,
  username = "@nathan",
  followers = "1987",
  days = 12,
  borderColor = "blue",
  daysColor = "#1EB589",
  ...rest
}: IFollowerCard) => {
  return (
    <article
      className={`max-w-[326px] border-t-[5px] bg-gray grid justify-center text-center py-6 rounded-[5px] hover:bg-hoverGray hover:cursor-pointer overflow-hidden`}
      style={{ borderColor }}
      {...rest}
    >
      <div className="flex items-center gap-2">
        {socialMediaIcon}
        <span className="font-bold text-darkGray text-[12px]">{username}</span>
      </div>
      <div className="pt-[28px] pb-[25px]">
        <h3 className="font-bold text-[56px] pb-[9px] leading-[48px] -tracking-[2px]">
          {followers}
        </h3>
        <p className="uppercase text-[12px] tracking-[5px] text-darkGray">
          Followers
        </p>
      </div>
      <div
        className={`flex items-center gap-2 font-bold`}
        style={{ color: daysColor }}
      >
        <IoMdArrowDropup className="text-xl" /> <span>{days} Today</span>
      </div>
    </article>
  );
};

export default FollowerCard;
