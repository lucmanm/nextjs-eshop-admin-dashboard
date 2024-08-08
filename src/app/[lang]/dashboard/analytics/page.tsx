import React from "react";
import { AreaChartAnalytics } from "./components/area-chart";
import { PieChartDonut } from "./components/pie-chart";
import { BarChartAnalytics } from "./components/bar-chart";

const Page = () => {
  return (
    <React.Fragment>
      <div className="flex tems-center rounded-lg  border *:px-4 *:py-1">
        <h1 className="text-lg font-semibold md:text-2xl">Analytics</h1>
      </div>
      <section className="flex flex-col lg:grid lg:grid-cols-2 gap-4">
        <PieChartDonut />
        <BarChartAnalytics />
        <AreaChartAnalytics />
      </section>
    </React.Fragment>
  );
};

export default Page;
