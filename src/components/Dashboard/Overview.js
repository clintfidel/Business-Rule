import React, { useMemo, useState } from "react";
import Dashboard from "../uiComponents/Dashboard";
import DataBox from "../uiComponents/DataBox";
import CustomBarChart from "../uiComponents/CustomBarChart";
import Dropdown from "../uiComponents/Dropdown";
import {
  barChartData,
  modelData,
  modelPieChart,
  overviewDataSet,
  posterOverviewData,
  posterBarChartData,
  posterModelData,
} from "../../utils/dummyData";
import CustomPieChart from "../uiComponents/CustomPieChart";

const Overview = ({ location }) => {
  const [taskType, setTaskType] = useState("chiller task");
  const [modelBarTask, setModelBarTask] = useState("chiller task");

  const overviewData = useMemo(() => {
    if (taskType === "chiller task") {
      return overviewDataSet;
    } else if (taskType === "poster task") {
      return posterOverviewData;
    }
  }, [taskType]);

  const accuracyPerSku = useMemo(() => {
    if (taskType === "chiller task") {
      return barChartData;
    } else if (taskType === "poster task") {
      return posterBarChartData;
    }
  }, [taskType]);

  const modelBarData = useMemo(() => {
    if (modelBarTask === "chiller task") {
      return modelData;
    } else if (modelBarTask === "poster task") {
      return posterModelData;
    }
  }, [modelBarTask])

  return (
    <Dashboard setTask={setTaskType} location={location}>
      <div className="px-10 pt-10 pb-36">
        <h3 className="text-2xl text-inbev-secondary-text font-customRoboto">
          Peru Team
        </h3>
        <p className="text-inbev-primary-text text-lg mt-5 font-customRoboto">
          BU West Overview
        </p>
        <div className="block gap-2 md:grid lg:grid md:grid-cols-4 lg:grid-cols-4 md:gap-4 lg:gap-4 mt-6">
          {overviewData.map((data, idx) => (
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
          <CustomBarChart
            topMargin={5}
            data={accuracyPerSku}
            showLegend
            valueName="sku"
            barColor="#F7951D"
            customDomain={[0, 2000]}
          />
        </div>
        <div className="mt-6 block gap-4 md:grid lg:grid md:grid-cols-2 lg:grid-cols-2 md:gap-4 lg:gap-4">
          <div className="w-full h-full rounded-md bg-white border-2 border-inbev-primary-text border-opacity-20">
            <div className="block px-4 py-3 md:px-8 lg:px-8 md:py-6 lg:py-6 md:flex lg:flex items-left md:items-center lg:items-center md:justify-between lg:justify-between mb-3">
              <p className="font-customRoboto text-lg font-medium text-inbev-primary-text">Model Accuracy Graph</p>
              <div className=" block items-left md:flex lg:flex md:items-center lg:items-center">
                <span className="font-customRoboto text-base mx-2 md:mr-2 lg:mr-2">Filter by:</span>
                <Dropdown
                  changed={setModelBarTask}
                  width="sm"
                  options={["Chiller Task", "Poster Task"]}
                />
              </div>
            </div>
            <div className="w-full h-72">
              <CustomBarChart
                topMargin={20}
                data={modelBarData}
                valueName="percentage"
                barColor="#971B1E"
                barLabel
                unit="%"
                customDomain={[0, 100]}
              />
            </div>
          </div>
          <div className="px-8 py-10 mt-6 md:mt-0 lg:mt-0 md:py-6 lg:6 w-full h-full rounded-md bg-white border-2 border-inbev-primary-text border-opacity-20">
            <p className="font-customRoboto text-lg font-medium text-inbev-primary-text">Chart Lines</p>
            <div className="block md:flex lg:flex items-center w-full h-full md:h-72 lg:h-72 space-x-5">
              <div className="w-full md:w-1/2 lg:w-1/2 h-full">
                <CustomPieChart data={modelPieChart} />
              </div>
              <div className="w-1/2">
                <ul className="mt-10">
                  {modelPieChart.map((model, idx) => (
                    <li key={idx} className="flex items-center">
                      <span
                        className={[
                          "w-3",
                          "h-3",
                          `bg-${model.colorCode}`,
                          "inline-block",
                          "rounded-full",
                        ].join(" ")}
                      ></span>
                      <span className="font-customRoboto ml-4 mr-11 text-inbev-primary-text">
                        {model.name}
                      </span>
                      <span className="font-customRoboto text-inbev-primary-text font-medium">
                        {`(${model.value}%)`}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Dashboard>
  );
};

export default Overview;
