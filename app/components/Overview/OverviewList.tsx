"use client";
import React from "react";
import OverviewCard from "./OverviewCard";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const OverviewList = () => {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
      <OverviewCard
        title="Page views"
        kpiNumber="87"
        percentage="3%"
        socialMediaIcon={<FaFacebookSquare color="#178FF5" fontSize={"20px"} />}
      />
      <OverviewCard
        title="Likes"
        kpiNumber="52"
        percentage="2%"
        socialMediaIcon={<FaFacebookSquare color="#178FF5" fontSize={"20px"} />}
      />
      <OverviewCard
        title="Likes"
        kpiNumber="5462"
        percentage="2257%"
        socialMediaIcon={
          <FaInstagram
            // color="#178FF5"
            fontSize={"20px"}
            style={{
              background:
                "linear-gradient(225deg, #DF4896 0%, #EE877E 50.91%, #FDC366 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          />
        }
      />

      <OverviewCard
        title="Profiles views"
        kpiNumber="52k"
        percentage="1375%"
        socialMediaIcon={
          <FaInstagram
            // color="#178FF5"
            fontSize={"20px"}
            style={{
              background:
                "linear-gradient(225deg, #DF4896 0%, #EE877E 50.91%, #FDC366 100%)",
              WebkitTextFillColor: "transparent",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
            }}
          />
        }
      />
      <OverviewCard
        title="Retweets"
        kpiNumber="117"
        percentage="303%"
        socialMediaIcon={<FaTwitter color="#178FF5" fontSize={"20px"} />}
      />
      <OverviewCard
        title="Likes"
        kpiNumber="507"
        percentage="553%"
        socialMediaIcon={<FaTwitter color="#178FF5" fontSize={"20px"} />}
      />
      <OverviewCard
        title="Likes"
        kpiNumber="107"
        percentage="19%"
        socialMediaIcon={<FaYoutube color="#DC414C" fontSize={"20px"} />}
      />
      <OverviewCard
        title="Total views"
        kpiNumber="1407"
        percentage="12%"
        socialMediaIcon={<FaYoutube color="#DC414C" fontSize={"20px"} />}
      />
    </div>
  );
};

export default OverviewList;
