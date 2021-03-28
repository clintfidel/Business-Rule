import React from "react";
import Logo from "../../assests/images/logo_ab-inbev.svg";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";
import { routes } from "../../routes/siderbarRoutes";

const Dashboard = ({ location, children, setTask }) => {
  console.log(location);

  return (
    <div className="flex flex-col h-screen max-h-screen overflow-y-hidden">
      <div className="hidden px-16 py-2 md:flex lg:flex md:justify-between items-center"  id="mobile-menu">
        <img src={Logo} alt="Logo" />
        <div className="flex items-center space-x-10">
          <Dropdown changed={setTask} width="lg" options={['Chiller Task', 'Poster Task']} />
          <p className="text-lg font-customRoboto">Peru Team</p>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-0 max-h-full h-full">
        <div className="bg-inbev-main h-full min-h-full">
          <ul className="mt-4">
            {routes.map((route) => {
              if (location.pathname === route.link) {
                return (
                  <li className="pl-14 py-4 bg-white border-l-2 border-white bg-opacity-20">
                    <Link to={route.link}>
                      <span className="flex items-center space-x-6">
                        <route.icon color="#fff" size="1.2rem" />
                        <span className="text-white text-lg font-customRoboto">
                          {route.label}
                        </span>
                      </span>
                    </Link>
                  </li>
                );
              } else {
                return (
                  <li className="pl-14 py-4">
                    <Link to={route.link}>
                      <span className="flex items-center space-x-6">
                        <route.icon color="#fff" size="1.2rem" />
                        <span className="text-white text-lg font-customRoboto">
                          {route.label}
                        </span>
                      </span>
                    </Link>
                  </li>
                );
              }
            })}
          </ul>
        </div>
        <div className="col-span-4 w-full overflow-hidden h-full max-h-full bg-gray-100">
          <div className="overflow-y-scroll max-h-full">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
