import React from "react";
import Dashboard from "../uiComponents/Dashboard";
import DataBox from "../uiComponents/DataBox";
import { overviewDataSet } from "../../utils/dummyData";
import CustomBarChart from "../uiComponents/CustomBarChart";
import Dropdown from "../uiComponents/Dropdown";
import { barChartData, modelData } from '../../utils/dummyData';
import CustomPieChart from "../uiComponents/CustomPieChart";

const Overview = ({ location }) => {
  return (
    <Dashboard location={location}>
      <div className="px-10 pt-10 pb-36">
        <h3 className="text-2xl text-inbev-secondary-text font-customRoboto">
          Peru Team
        </h3>
        <p className="text-inbev-primary-text text-lg mt-5 font-customRoboto">
          BU West Overview
        </p>
        <div className="block gap-2 md:grid lg:grid md:grid-cols-4 lg:grid-cols-4 md:gap-4 lg:gap-4 mt-6">
          {overviewDataSet.map((data, idx) => (
            <div key={idx}>
              <DataBox
                dataType={data.dataType.toUpperCase()}
                dataValue={data.dataValue}
                count={data.count}
                colorCode={data.colorCode}
              />
            </div>
          ))}
        </div>
        <div className="px-4 pt-8 pb-16 w-full h-96 mt-6 rounded-md bg-white border-2 border-inbev-primary-text border-opacity-20 ">
          <p className="font-customRoboto text-inbev-primary-text text-lg ml-4 mb-4">
            Accuracy Per SKU
          </p>
          <CustomBarChart data={barChartData} showLegend valueName="sku" barColor="#F7951D" />
        </div>
        <div className="mt-6 block gap-4 md:grid lg:grid md:grid-cols-2 lg:grid-cols-2 md:gap-4 lg:gap-4">
          <div className="w-full h-full rounded-md bg-white border-2 border-inbev-primary-text border-opacity-20">
            <div className="block px-4 py-3 md:px-8 lg:px-8 md:py-6 lg:py-6 md:flex lg:flex items-left md:items-center lg:items-center md:justify-between lg:justify-between mb-3">
              <p className="font-customRoboto text-lg font-medium text-inbev-primary-text">Model Accuracy Graph</p>
              <div className=" block items-left md:flex lg:flex md:items-center lg:items-center">
                <span className="font-customRoboto text-base mx-2 md:mr-2 lg:mr-2">Filter by:</span>
                <Dropdown width="sm" />
              </div>
            </div>
            <div className="w-full h-72">
              <CustomBarChart data={modelData} valueName="percentage" barColor="#971B1E" barLabel unit="%" />
            </div>
          </div>
          <div className="px-8 py-10 mt-6 md:mt-0 lg:mt-0 md:py-6 lg:6 w-full h-full rounded-md bg-white border-2 border-inbev-primary-text border-opacity-20">
            <p className="font-customRoboto text-lg font-medium text-inbev-primary-text ">Chart Lines</p>
            <div className="block w-full h-full md:h-72 lg:h-72 md:flex lg:flex items-left md:justify-between lg:justify-between">
              <CustomPieChart />
              <div className='md:mt-12 '>
                <p className='font-customRoboto mb-4 text-lg font-medium text-inbev-primary-text '>
                  Model Accuracy 1
                </p>
                <p className='font-customRoboto mb-4 text-lg font-medium text-inbev-primary-text '>
                  Model Accuracy 2
                </p>
                <p className='font-customRoboto mb-4 text-lg font-medium text-inbev-primary-text '>
                  Model Accuracy 3
                </p>
                <p className='font-customRoboto mb-4 text-lg font-medium text-inbev-primary-text '>
                  Model Accuracy 4
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Dashboard>
  );
};

export default Overview;
