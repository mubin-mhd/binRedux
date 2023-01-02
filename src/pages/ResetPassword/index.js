import React from "react";
import ResetPassOrg from "../../lib/organisms/ResetPassOrg";
import RigthLogin from "../../lib/organisms/rightLogin-org";

const Resetpassword = () => {
  return (
    <div className="w-full  flex justify-between items-center">
      <div className="w-3/5">
        <ResetPassOrg />
      </div>
      <div className="w-2/5 bg-blue-400 h-screen">
        <RigthLogin />
      </div>
    </div>
  );
};

export default Resetpassword;
