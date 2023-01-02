import React from "react";
import BackButton from "../atoms/BackButton";
import { useHistory } from "react-router-dom";
import Text from "../atoms/Text";
import InputCode from "../atoms/InputCode";
import ButtonLink from "../atoms/buttonLink";
import Button from "../atoms/Button";

const SendRequestMol = () => {
  const history = useHistory();
  return (
    <div className="h-[406px] w-[385px] pt-[40px] px-[20px] pb-[20px] bg-white shadow-md absolute left-20 rounded-md">
      <BackButton
        label="Back"
        onClick={() => history.push("/forgot-password")}
      />
      <div className="mt-[12px]">
        <Text size="large" label="Email Verivication" />
      </div>
      <div className="mt-[5px] flex items-center justify-evenly">
        <Text size="normal" label="An 4 digit code has been sent to " />
        <Text
          size="normal"
          label=" adamsmith@gmail.com"
          color="text-blue-primary"
        />
      </div>
      <div className="flex flex-row justify-center text-center px-2 mt-[47px]">
        <InputCode type="text" />
        <InputCode type="text" />
        <InputCode type="text" />
        <InputCode type="text" />
        <InputCode type="text" />
      </div>
      <div className="mt-[36px] flex justify-center">
        <Text size="large" color="text-blue-primary" label="00:59" />
      </div>
      <div className="mt-[5px] flex items-center justify-center">
        <Text label="Didn’t receive code?" />{" "}
        <ButtonLink label="Resend Code" addClass="ml-1" />
      </div>
      <div className="mt-[38px] flex justify-center">
        <Button
          label="Verify Now"
          onClick={() => history.push("/reset-password")}
        />
      </div>
    </div>
  );
};

export default SendRequestMol;
