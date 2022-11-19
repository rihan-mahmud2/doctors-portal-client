import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { authContext } from "../Contexts/ContextProvider";
import useAdmin from "../hooks/useAdmin";
import Navbar from "../Shared/Navbar/Navbar";

const DashboardLayout = () => {
  const { user } = useContext(authContext);
  const [isAdmin] = useAdmin(user?.email);

  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li>
              <Link to="/dashboard">dashboard</Link>
            </li>
            {isAdmin && (
              <li>
                <Link to="/dashboard/allUsers">All Users</Link>
                <Link to="/dashboard/addadoctor">Add A doctor</Link>
                <Link to="/dashboard/manageDoctors">Mange doctors</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
