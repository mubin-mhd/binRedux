import React from "react";
import SidebarMol from "../molecules/sidebar-mol";

const Sidebar = () => {
  return (
    <div className="w-[234px] min-h-[749px] shadow-md flex justify-center">
      <div className="w-11/12 mt-4">
        <SidebarMol />
      </div>
    </div>
  );
};

export default Sidebar;
