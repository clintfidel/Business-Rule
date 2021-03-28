import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const CustomPieChart = ({ data }) => {
  const COLORS = ["#FFB5B6", "#971B1E", "#C14649", "#4D3737", "#896869"];

  console.log(data)

  return (
    <ResponsiveContainer height="100%" width='100%'>
      <PieChart
        margin={{ top: -45, right: 0, bottom: 0, left: -20 }}
        width={400}
        height={100}
      >
        <Pie
          data={data}
          cx={120}
          cy={200}
          innerRadius={68}
          outerRadius={100}
          fill="#8884d8"
          paddingAngle={0}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip
          itemStyle={{ fontFamily: "Barlow, sans-serif" }}
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default CustomPieChart;
