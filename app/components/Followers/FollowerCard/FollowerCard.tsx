import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { IoMdArrowDropup } from "react-icons/io";

interface IFollowerCard
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  socialMediaIcon?: React.ReactNode;
  arrowIcon?: React.ReactNode;
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
  arrowIcon = <IoMdArrowDropup className="text-xl" />,
  ...rest
}: IFollowerCard) => {
  return (
    <article
      className={`min-w-[255px] border-t-[5px] bg-gray flex flex-col items-center py-6 rounded-[5px] hover:bg-hoverGray hover:cursor-pointer overflow-hidden`}
      style={{ borderColor }}
      {...rest}
    >
      <div className="flex items-center gap-2 ">
        {socialMediaIcon}
        <span className="font-bold text-darkGray text-[12px]">{username}</span>
      </div>
      <div className="pt-[28px] pb-[25px] text-center">
        <h3 className="font-bold text-black text-[56px] pb-[9px] leading-[48px] -tracking-[2px]">
          {followers}
        </h3>
        <p className="uppercase text-[12px] text-center tracking-[5px] text-darkGray">
          Followers
        </p>
      </div>
      <div
        className={`flex items-center gap-2 font-bold`}
        style={{ color: daysColor }}
      >
        {arrowIcon} <span>{days} Today</span>
      </div>
    </article>
  );
};

export default FollowerCard;
