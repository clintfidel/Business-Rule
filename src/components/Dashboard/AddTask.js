import React, { useState } from "react";
import Dashboard from "../uiComponents/Dashboard";
import { BsCloudUpload } from "react-icons/bs";
import InputField from "../uiComponents/InputField";
import Button from "../uiComponents/Button";

const NewTasks = ({ location }) => {
  const [newTaskData, setNewTaskData] = useState({
    taskName: "",
    taskStartDate: "",
    taskEndDate: "",
    businessRule: "",
  });

  return (
    <Dashboard setTask={''} location={location}>
      <div className="px-10 pt-10 pb-15 md:pb-36 lg:pb-36">
        <h2 className="font-customRoboto text-inbev-primary-text text-2xl">
          File Upload
        </h2>
        <div className="block md:flex lg:flex mt-10 md:mt-20 lg:mt-20 px-3 md:px-7 lg:px-7  md:space-x-14 lg:space-x-14 h-full">
          <div className="w-full md:w-1/2 lg:w-1/2 rounded-md border-2 border-dashed bg-gray-200 border-inbev-main flex items-center justify-center self-stretch">
            <div className="flex justify-center flex-col items-center">
              <BsCloudUpload size="4rem" color="rgba(151, 27, 30, 0.5)" />
              <input type="file" name="file" id="file" class="inputfile font-normal mt-3" />
              <label className="font-customRoboto font-normal" for="file">Drag to upload or <span className="font-normal cursor-pointer" style={{ color: 'black' }}>browse</span></label>
            </div>
          </div>
          <div className=" w-full md:w-1/2 lg:w-1/2">
            <h2 className="mt-8 md:mt-0 lg:mt-0 text-inbev-black font-customRoboto font-bold text-3xl">
              New task Upload
            </h2>
            <div className="mt-10">
              <InputField
                label="Task Name"
                value={newTaskData.taskName}
                nameAttr="taskName"
                changed={(val) =>
                  setNewTaskData({ ...newTaskData, taskName: val })
                }
              />
              <InputField
                label="Task Start Date"
                value={newTaskData.taskStartDate}
                nameAttr="taskStartDate"
                changed={(val) =>
                  setNewTaskData({ ...newTaskData, taskStartDate: val })
                }
              />
              <InputField
                label="Task End Date"
                value={newTaskData.taskEndDate}
                nameAttr="taskEndDate"
                changed={(val) =>
                  setNewTaskData({ ...newTaskData, taskEndDate: val })
                }
              />
              <InputField
                label="Business Rule"
                value={newTaskData.businessRule}
                nameAttr="businessRule"
                changed={(val) =>
                  setNewTaskData({ ...newTaskData, businessRule: val })
                }
              />
              <div className="block md:flex lg:flex md:space-x-5 lg:space-x-5 mt-4 md:mt-12 lg:mt-12">
                <Button className='md:mt-0 lg:mt-0' buttonLabel="Upload Task" type="button" styleType="filled" />
                <Button className='mt-5 md:mt-0 lg:mt-0' buttonLabel="Cancel" type="button" styleType="outline" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Dashboard>
  );
};

export default NewTasks;
