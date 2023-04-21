"use client";
import React from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import FollowerCard from "./FollowerCard/FollowerCard";
import { IoMdArrowDropdown } from "react-icons/io";

const FollowerList = () => {
  return (
    //  <div className="bg-green mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-4">

    <div className="w-full grid gap-8 md:grid-cols-2 lg:grid-cols-4">
      <FollowerCard
        socialMediaIcon={<FaFacebookSquare color="#178FF5" fontSize={"20px"} />}
        username={"@nathanf"}
        followers="1987"
        days={12}
        borderColor="#178FF5"
      />
      <FollowerCard
        socialMediaIcon={<FaTwitter color="#1DA1F2" fontSize={"20px"} />}
        username={"@nathanf"}
        followers="1044"
        days={99}
        borderColor="#1DA1F2"
      />
      <FollowerCard
        socialMediaIcon={
          <FaInstagram
            color="linear-gradient(225deg, #DF4896 0%, #EE877E 50.91%, #FDC366 100%)"
            fontSize={"20px"}
            style={{
              background:
                "linear-gradient(225deg, #DF4896 0%, #EE877E 50.91%, #FDC366 100%)",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              WebkitBackgroundClip: "text",
            }}
          />
        }
        username={"@realnathanf"}
        followers="11K"
        days={1099}
        style={{
          borderImageSource:
            "linear-gradient(225deg, #DF4896 0%, #EE877E 50.91%, #FDC366 100%);",
          borderImageSlice: 1,
        }}
      />
      <FollowerCard
        socialMediaIcon={<FaYoutube color="#DC414C" fontSize={"20px"} />}
        username={"Nathan F."}
        followers="8239"
        days={144}
        daysColor="#DC414C"
        borderColor="#DC414C"
        arrowIcon={<IoMdArrowDropdown className="text-xl" />}
      />
    </div>
  );
};

export default FollowerList;
