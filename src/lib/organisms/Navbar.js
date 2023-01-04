import React from "react";
import logos from "../../assets/icons/logos.png";
import UserInfo from "../molecules/userInfo-mol";
import Text from "../atoms/Text";
import { PrimaryButton, AccentButton } from "../atoms/toggleDarkMode";

const Navbar = () => {
  return (
    <div className="min-w-[1280px] h-[86px] bg-white shadow-sm flex justify-between items-center px-[40px]">
      <div className="flex items-center">
        <img src={logos} />
        <Text label="APP Template" color="text-blue-primary" size="large" />
      </div>
      <div className="flex items-center">
        <div className="flex items-center mr-5">
          <PrimaryButton label="Light" />
          <AccentButton label="Dark" />
        </div>
        <UserInfo />
      </div>
    </div>
  );
};

export default Navbar;
