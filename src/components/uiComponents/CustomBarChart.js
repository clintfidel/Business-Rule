import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const CustomBarChart = ({
  data,
  showLegend,
  valueName,
  barColor,
  barLabel,
  unit,
}) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={35}
        barSize={35}
        // height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        className="font-customRoboto text-sm overflow-x-scroll"
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="name" />
        <YAxis axisLine={false} unit={unit} />
        <Tooltip />
        {showLegend ? (
          <Legend
            wrapperStyle={{ fontSize: "14px", textTransform: "uppercase" }}
            verticalAlign="top"
            height={70}
            align="left"
            className="uppercase"
            iconSize={16}
          />
        ) : null}
        <Bar
          dataKey="value"
          name={valueName}
          fill={barColor}
          legendType="circle"
          label={barLabel ? { fill: "#fff" } : null}
          unit="%"
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default CustomBarChart;
