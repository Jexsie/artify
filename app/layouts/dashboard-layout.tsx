import React from "react";
import { Outlet } from "react-router";
import SideNav from "~/components/navigation/side-nav";

const DashboardLayout = () => {
  return (
    <div>
      <SideNav />
      <div className="pl-90 pt-9">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
