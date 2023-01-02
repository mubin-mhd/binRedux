import React from "react";
import RigthLogin from "../../lib/organisms/rightLogin-org";
import SendRequestOrg from "../../lib/organisms/SendRequest-org";

const SendRequestEmail = () => {
  return (
    <div className="w-full  flex justify-between items-center">
      <div className="w-3/5">
        <SendRequestOrg />
      </div>
      <div className="w-2/5 bg-blue-400 h-screen">
        <RigthLogin />
      </div>
    </div>
  );
};

export default SendRequestEmail;
