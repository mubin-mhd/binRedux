import React from "react";
import BackButton from "../atoms/BackButton";
import Text from "../atoms/Text";
import InputField from "../atoms/InputField";
import Button from "../atoms/Button";
import { useHistory } from "react-router-dom";

const ForgotPass = () => {
  const history = useHistory();
  return (
    <div className="h-[406px] w-[385px] pt-[40px] px-[20px] pb-[20px] bg-white shadow-md absolute left-20 rounded-md">
      <BackButton label="Back" onClick={() => history.push("/login")} />
      <div className="mt-[12px]">
        <Text label="Forgot Password" size="large" />
      </div>
      <div classname="mt-[5px]">
        <Text
          label="Please enter the address associated with your account"
          size="normal"
        />
        <div className="mt-[26px]">
          <InputField placeholder="email" />
        </div>
        <div className="flex justify-center mt-36">
          <Button
            label="Send Request"
            onClick={() => history.push("/send-request")}
          />
        </div>
      </div>
    </div>
  );
};

export default ForgotPass;
