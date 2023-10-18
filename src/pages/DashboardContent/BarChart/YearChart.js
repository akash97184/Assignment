import React from "react";

import { ResponsiveContainer, BarChart, Bar, XAxis, Tooltip } from "recharts";

import monthlyEarningData from "./BarChartData";

const YearChart = () => {
  return (
    <ResponsiveContainer width="100%">
      <BarChart data={monthlyEarningData}>
        <XAxis dataKey="name" stroke="rgba(145, 150, 150, 0.889)" />
        <Bar dataKey="Earning" stroke="rgba(145, 150, 150, 0.889)" fill="#2884ff" barSize={40} />
        <Tooltip wrapperClassName="tooltip__style" cursor={false} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default YearChart;