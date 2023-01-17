import React from "react";
import Text from "../../../lib/atoms/Text";
import BackButton from "../../../lib/atoms/BackButton";
import InputCode from "../../../lib/atoms/InputCode";
import Button from "../../../lib/atoms/Button";
import ButtonLink from "../../../lib/atoms/buttonLink";
import { useNavigate } from "react-router-dom";
import sideImage from "../../../assets/images/side.svg";

const SendRequestEmail = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full  flex justify-between items-center">
      <div className="w-3/5">
        <div className="flex justify-between items-center relative">
          <div className="min-h-[406px] w-[385px] pt-[40px] px-[20px] pb-[20px] bg-white shadow-md absolute left-20 rounded-md">
            <BackButton
              label="Back"
              onClick={() => navigate("/forgot-password")}
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
                onClick={() => navigate("/reset-password")}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-2/5">
        <img src={sideImage} className="w-full h-screen" />
      </div>
    </div>
  );
};

export default SendRequestEmail;
