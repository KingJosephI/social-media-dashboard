import React from "react";
import OverviewTitle from "./OverviewTitle";
import OverviewList from "./OverviewList";

const Overview = () => {
  return (
    <section className="[&>*:first-child]:mb-6">
      <OverviewTitle />
      <OverviewList />
    </section>
  );
};

export default Overview;
