import React from "react";
import { Sidebar } from "../../../Components/Sidebar";
import { MdDashboard } from "react-icons/md";
import { FaChartLine, FaCog, FaRegLightbulb } from "react-icons/fa";

export const AdminSidebar = () => {
  const sideLinks = [
    { path: "/admin/dashboard", name: "Dashboard", icon: MdDashboard },
    { path: "/admin/all-ideas", name: "Ideas", icon: FaRegLightbulb },
    { path: "/admin/user", name: "User List", icon: FaRegLightbulb },
    { path: "/admin/carrier", name: "Carrier List", icon: FaRegLightbulb },
    { path: "/admin/start-process", name: "Interested Investor", icon: FaChartLine },
    { path: "/admin/profile", name: "Profile", icon: FaCog },
  ];
  return (
    <div className="h-full">
      <Sidebar links={sideLinks} />
    </div>
  );
};
