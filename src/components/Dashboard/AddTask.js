import React from "react";
import Dashboard from "../uiComponents/Dashboard";
import uploadImg from '../../assests/images/upload.svg'

const AddTasks = ({ location }) => {
  return (
    <Dashboard location={location}>
      <div className="block px-5 py-3 md:px-10 lg:px-10 md:py-6 lg:py-6 md:flex lg:flex h-screen">
        <div className="h-80 w-full md:h-full lg:h-full md:w-1/2 lg:w-1/2">
          <div className="h-full mt-10 md:mt-20 lg:mt-20 ml-5 w-11/12 md:h-3/5 lg:h-3/5 object-center flex justify-center text-center rounded border-dashed border-4 border-red-700" style={{ backgroundColor: 'rgba(196, 196, 196, 0.3 )', borderRadius: '10px' }}>
            <div className="m-auto">
              <img className="h-24 w-24 m-auto" src={uploadImg} alt=''/>
              <input type="file" name="file" id="file" class="inputfile font-normal mt-3" />
              <label className="font-customRoboto font-normal" for="file">Drag to upload or <span className="font-normal cursor-pointer" style={{ color: 'black' }}>browse</span></label>
            </div>
          </div>
        </div>
        <div className="h-full w-full md:w-1/2 lg:w-1/2 md:overflow-y-scroll lg:overflow-y-scroll">
          <div className="my-8 mx-0 px-0 md:mt-20 lg:mt-20 md:mx-10 lg:mx-0 md:px-10 lg:px-10">
            <p
              className="mx-5 text-black-400 font-bold pb-5 font-customRoboto"
              style={{ fontSize: "30px" }}
            >
              New Task Upload
					</p>
            <div className='mt-4 mx-5 px-0'>
              <form>
                <div class="pt-6 pb-8 mb-4 flex flex-col">
                  <div class="mb-4">
                    <label
                      class="block text-black-400 text-base font-normal font-customRoboto mb-2"
                      for="username"
                    >
                      Task Name
									</label>
                    <select
                      class="shadow appearance-none border rounded w-full py-2 px-3 text-black-400"
                      id="task-name"
                      type="text"
                    >
                      <option className>
                        Chiilers
                    </option>
                      <option className="py-2 px-3 text-black-400">
                        Posters
                    </option>
                    </select>
                  </div>
                  <div class="mb-4">
                    <label
                      class="block text-black-400 text-base font-normal font-customRoboto mb-2"
                      for="username"
                    >
                      Task Type
									</label>
                    <select
                      class="shadow appearance-none border rounded w-full py-2 px-3 text-black-400"
                      id="task-type"
                      type="text"
                    >
                      <option className>
                        Peru Team
                    </option>
                      <option className="py-2 px-3 text-black-400">
                        Temi Team
                    </option>
                      <option className="py-2 px-3 text-black-400">
                        Anu Team
                    </option>
                    </select>
                  </div>
                  <div class="mb-4">
                    <label
                      class="block text-black-400 text-base font-normal font-customRoboto mb-2"
                      for="password"
                    >
                      Task start date
									</label>
                    <input
                      class="shadow appearance-none border  rounded w-full py-2 px-3 text-black-400 mb-3"
                      id="password"
                      type="text"
                      placeholder="May 27, 2020 | 9:30am"
                    />
                  </div>
                  <div class="mb-4">
                    <label
                      class="block text-black-400 text-base font-normal font-customRoboto mb-2"
                      for="password"
                    >
                      Task end date
									</label>
                    <input
                      class="shadow appearance-none border  rounded w-full py-2 px-3 text-black-400 mb-3"
                      id="password"
                      type="password"
                      placeholder="May 27, 2020 | 9:30am"
                    />
                  </div>
                  <div class="mb-6">
                    <label
                      class="block text-black-400 text-base font-normal font-customRoboto mb-2"
                      for="password"
                    >
                      Business Rule
									</label>
                    <input
                      class="shadow appearance-none border  rounded w-full py-2 px-3 text-black-400 mb-3"
                      id="password"
                      type="password"
                      placeholder=""
                    />
                  </div>
                  <div className="block md:flex lg:flex md:justify-between lg:justify-between w-full">
                    <button className="w-full md:w-1/2 lg:w-1/2 md:mr-3 lg:mr-3 my-5 py-3 rounded text-white text-center text-base font-bold font-customRoboto" style={{ backgroundColor: '#971B1E' }}>
                      Upload Task
                  </button>
                    <button className="w-full md:w-1/2 lg:w-1/2 md:ml-3 lg:ml-3 my-5 py-3 rounded text-center text-base font-bold font-customRoboto" style={{ backgroundColor: '#FFFFFF', color: '#971B1E', border: '1px solid #000000' }}>
                      Cancel
                  </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Dashboard>
  );
};

export default AddTasks;
