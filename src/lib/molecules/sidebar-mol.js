import React, { useState } from "react";
import MenuBar from "../atoms/MenuBar";
import iconPost from "../../assets/icons/post.png";
import iconSettings from "../../assets/icons/settings.png";
import iconUser from "../../assets/icons/users.png";
import iconDashboard from "../../assets/icons/dasboard.png";
import iconLogout from "../../assets/icons/logout.png";
import { useDispatch } from "react-redux";
import { logOut } from "../../features/authSlice";

const SidebarMol = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const loadingHandler = (loadValue) => {
    setIsLoading(loadValue);
  };

  const handleLogOut = () => {
    dispatch(logOut(loadingHandler)).then((response) => {
      console.log(response);
    });
  };

  return (
    <div className="flex flex-col justify-between min-h-[549px]">
      <div className="grid grid-cols-1 gap-4">
        <MenuBar label="Dashboard" icon={iconDashboard} />
        <MenuBar label="Posts" icon={iconPost} />
        <MenuBar label="Users" icon={iconSettings} />
        <MenuBar label="Settings" icon={iconUser} />
      </div>
      <div>
        <MenuBar
          onClick={handleLogOut}
          label="Logout"
          color="text-[#FF6363]"
          icon={iconLogout}
        />
      </div>
    </div>
  );
};

export default SidebarMol;
