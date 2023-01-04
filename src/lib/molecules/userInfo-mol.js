import React from "react";
import Text from "../atoms/Text";
import Avatar from "../atoms/Avatar";
import Chips from "../atoms/chips";

const UserInfo = () => {
  return (
    <div className="flex">
      <div className="mr-2 grid justify-items-end">
        <Text label="Albert Simanjuntak" size="medium" />
        <Chips label="Admin" addClass="mt-[5px] text-end" />
      </div>
      <div>
        <Avatar />
      </div>
    </div>
  );
};

export default UserInfo;
