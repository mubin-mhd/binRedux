import React from "react";
import BackButton from "../atoms/BackButton";
import Text from "../atoms/Text";
import InputField from "../atoms/InputField";
import Button from "../atoms/Button";
import { useHistory } from "react-router-dom";

const ResetPassMol = () => {
  const history = useHistory();
  return (
    <div className="h-[406px] w-[385px] pt-[40px] px-[20px] pb-[20px] bg-white shadow-md absolute left-20 rounded-md">
      <BackButton label="Back" onClick={() => history.push("/send-request")} />
      <div className="mt-12">
        <Text label="Create New Password" size="large" />
      </div>
      <div>
        <Text
          size="normal"
          label="Your new password must be different from previous used password"
        />
        <div className="mt-[25px]">
          <InputField
            placeholder="New Password"
            addClass="mb-[5px]"
            type="password"
          />
          <InputField placeholder="Confirm New Password" type="password" />
        </div>
        <div className="mt-[30px] flex justify-center">
          <Button label="Create Password" />
        </div>
      </div>
    </div>
  );
};

export default ResetPassMol;
