import React, { useState } from "react";
import Dashboard from "../uiComponents/Dashboard";
import { BiSearch } from "react-icons/bi";
import Dropdown from "../uiComponents/Dropdown";
import { taskTableData } from "../../utils/dummyData";
import Pagination from "../uiComponents/Pagination";
import { usePagination } from "../../hooks/usePagination";

const Tasks = ({ location }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterValue, setFilterValue] = useState('all');

  const [currentList, pages] = usePagination(
    currentPage,
    itemsPerPage,
    taskTableData
  );

  return (
    <Dashboard setTask={''} location={location}>
      <div className="px-10 pt-10 pb-36">
        <h2 className="font-customRoboto text-inbev-primary-text text-2xl">
          BU West Tasks
        </h2>
        <div className="px-5 pt-10 w-full h-full pb-16 bg-white rounded-md mt-6 overflow-x-scroll">
          <div className="block md:flex lg:flex md:space-x-8 lg:space-x-8 items-left md:items-center lg:items-center">
            <p className="text-xl font-customRoboto text-inbev-primary-text mr-20">
              Tasks <span className="opacity-40 ml-1 text-sm">{currentList.length}</span>
            </p>
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.currentTarget.value)}
                name="search"
                className="border rounded border-inbev-primary-text border-opacity-20 font-customRoboto text-base px-4 py-2 w-72 focus:outline-none focus:ring-1 focus:ring-inbev-main"
              />
              <BiSearch
                className="absolute right-4 bottom-3"
                color="#3A434B"
                size="1.2rem"
              />
            </div>
            <div className="flex items-center">
              <span className="font-customRoboto text-base mr-3 text-inbev-secondary text-opacity-60">
                Filter by:
              </span>
              <Dropdown
                changed={setFilterValue}
                value={filterValue}
                options={["All", "Start Date", "End Date", "Status"]}
                width="sm"
              />
            </div>
            <div className="flex items-center">
              <span className="font-customRoboto text-base mr-3 text-inbev-secondary text-opacity-60">
                Showing:
              </span>
              <Dropdown
                changed={(val) => {
                  let value = Number(val.split(" ")[0]);
                  setItemsPerPage(value);
                }}
                options={[
                  "5 Entries",
                  "10 Entries",
                  "15 Entries",
                  "20 Entries",
                  "25 Entries",
                ]}
                width="sm"
              />
            </div>
          </div>
          <table className="w-full text-left mt-8">
            <thead className="bg-inbev-primary-text bg-opacity-5 font-customRoboto font-medium text-inbev-primary-text">
              <tr>
                <th className="py-4 pl-3">Task Reference</th>
                <th className="py-4 pl-3">Total Images</th>
                <th className="py-4 pl-3">Start Date</th>
                <th className="py-4 pl-3">End Date</th>
                <th className="py-4 pl-3">Status</th>
              </tr>
            </thead>
            <tbody className="font-customRoboto text-base text-inbev-primary-text">
              {currentList.map((row, idx) => (
                <tr
                  className="border-b border-inbev-primary-text border-opacity-20"
                  key={idx}
                >
                  <td className="py-8 pl-3">{row.reference}</td>
                  <td className="py-4 pl-3">{row.totalImages}</td>
                  <td className="py-4 pl-3">{`${row.startDate} | ${row.startTime}`}</td>
                  <td className="py-4 pl-3">{`${row.endDate} | ${row.endTime}`}</td>
                  <td className="py-4 pl-3">
                    <span
                      className={[
                        `bg-inbev-tag-${row.status.toLowerCase()}`,
                        "bg-opacity-20",
                        "text-sm",
                        "px-4",
                        "py-1",
                        "text-inbev-primary-text",
                        "text-opacity-80",
                        "rounded-full",
                      ].join(" ")}
                    >
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination
            activePage={currentPage}
            pages={pages}
            setActivePage={setCurrentPage}
          />
        </div>
      </div>
    </Dashboard>
  );
};

export default Tasks;
