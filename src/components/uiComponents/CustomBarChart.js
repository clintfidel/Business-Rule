import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList,
} from "recharts";

const CustomBarChart = ({
  data,
  showLegend,
  valueName,
  barColor,
  barLabel,
  unit,
  topMargin,
  customDomain,
}) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={35}
        barSize={35}
        // height={300}
        data={data}
        margin={{
          top: topMargin,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        className="font-customRoboto text-sm"
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="name" />
        <YAxis axisLine={false} unit={unit} type="number" domain={customDomain} />
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
          unit="%"
          minPointSize={6}
        >
          {barLabel ? <LabelList dataKey={`value`} position="top" /> : null}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default CustomBarChart;
