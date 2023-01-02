import React from "react";
import RigthLoginOrg from "../../lib/organisms/rightLogin-org";
import ForgotPasswordOrg from "../../lib/organisms/Forgot-org";

const ForgotPass = () => {
  return (
    <div className="w-full  flex justify-between items-center">
      <div className="w-3/5">
        <ForgotPasswordOrg />
      </div>
      <div className="w-2/5 bg-blue-400 h-screen">
        <RigthLoginOrg />
      </div>
    </div>
  );
};

export default ForgotPass;
