import React from "react";
import Text from "./Text";
import dashboard from "../../assets/icons/dasboard.png";

const MenuBar = ({ icon, label }) => {
  return (
    <button className="flex justify-start hover:bg-[#EFF0FF] w-full px-4 py-1.5 rounded focus:bg-[#EFF0FF]">
      <img src={icon} />
      <Text label={label} size="medium" color="text-[#AEB6D3" addClass="ml-2" />
    </button>
  );
};

MenuBar.defaultProps = {
  icon: dashboard,
  label: "dashboard",
};

export default MenuBar;
