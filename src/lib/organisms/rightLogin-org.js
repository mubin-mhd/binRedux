import React from "react";
import RigthLogin from "../molecules/RightLogin-mol";

const LoginOrg = () => {
  return (
    <div className="flex justify-between items-center absolute -right-8 top-1/2 bottom-1/2">
      <RigthLogin />
    </div>
  );
};

export default LoginOrg;
