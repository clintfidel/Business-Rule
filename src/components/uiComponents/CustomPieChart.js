import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { modelData } from '../../utils/dummyData'

const CustomPieChart = () => {

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <ResponsiveContainer className='w-full h-full md:w-50 lg:w-50' width='50%'>
      <PieChart width={500} height={100}>
        <Pie
          data={modelData}
          cx={100}
          cy={120}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {modelData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  )
};

export default CustomPieChart;
