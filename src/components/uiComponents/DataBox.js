import React from "react";

const DataBox = ({ dataType, dataValue, count, colorCode }) => {
  return (
    <div className="w-full rounded-md bg-white border-2 border-inbev-primary-text border-opacity-20 ">
      <div className={["w-full", "h-1", "rounded-t-md", `bg-inbev-${colorCode}`, 'border-1', `border-inbev-${colorCode}`].join(' ')}></div>
      <div className="p-6">
        <p className="font-customRoboto text-xs text-inbev-primary-text text-opacity-60">{dataType}</p>
        <p className="font-customBarlow text-2xl text-inbev-primary-text mt-2">{dataValue}</p>
      </div>
      <div className="w-full bg-inbev-mute rounded-b-sm px-6 py-4">
        <span className="font-customBarlow text-lg text-inbev-primary-text">{count}</span>
        <span className="font-customRoboto text-sm ml-2 text-inbev-primary-text">Count</span>
      </div>
    </div>
  )
};

export default DataBox;
