import React from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

interface IOverviewCard
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  socialMediaIcon?: React.ReactNode;
  title?: string;
  kpiNumber?: string;
  percentage?: string;
  arrowIcon?: React.ReactNode;
}

const OverviewCard = ({
  title = "",
  socialMediaIcon = <div />,
  kpiNumber = "",
  percentage = "3",
  arrowIcon = <IoMdArrowDropup />,
}: IOverviewCard) => {
  return (
    <article className="min-w-[255px] p-6  grid gap-6 bg-gray hover:bg-hoverGray hover:cursor-pointer rounded-[5px] [&>*]:flex [&>*]:justify-between">
      <div>
        <h3 className="text-[14px] text-darkGray font-bold">{title}</h3>
        <div>{socialMediaIcon}</div>
      </div>
      <div>
        <strong className="text-[32px] font-bold text-black">
          {kpiNumber}
        </strong>
        <div className="flex items-center text-green font-bold text-[12px]">
          <div>{arrowIcon} </div> <span>{percentage}</span>
        </div>
      </div>
    </article>
  );
};

export default OverviewCard;
