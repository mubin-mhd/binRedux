import React from "react";
import MenuBar from "../atoms/MenuBar";
import iconPost from "../../assets/icons/post.png";
import iconSettings from "../../assets/icons/settings.png";
import iconUser from "../../assets/icons/users.png";
import iconDashboard from "../../assets/icons/dasboard.png";

const SidebarMol = () => {
  return (
    <div className="grid grid-cols-1 gap-4">
      <MenuBar label="Dashboard" icon={iconDashboard} />
      <MenuBar label="Posts" icon={iconPost} />
      <MenuBar label="Users" icon={iconSettings} />
      <MenuBar label="Settings" icon={iconUser} />
    </div>
  );
};

export default SidebarMol;
