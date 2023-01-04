import React, { useState } from "react";
import Text from "../atoms/Text";
import InputField from "../../lib/atoms/InputField";
import ButtonWithIcon from "../../lib/atoms/buttonWithIcon";
import googleIcon from "../../assets/icons/google.png";
import ButtonLink from "../atoms/buttonLink";
import Button from "../atoms/Button";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  loginWithGoogle,
  logOut,
  getSession,
  getStateChange,
} from "../../features/authSlice";

const LoginMol = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const loadingHandler = (loadValue) => {
    setLoading(loadValue);
  };

  const handleLoginWithGoogle = () => {
    dispatch(loginWithGoogle(loadingHandler));
    dispatch(getSession());
    dispatch(getStateChange());
  };

  const handleLogOut = () => {
    dispatch(logOut(loadingHandler)).then((response) => {
      console.log(response);
    });
  };

  return (
    <div className="h-[406px] w-[385px] pt-[40px] px-[20px] pb-[20px] bg-white shadow-md absolute left-20 rounded-md">
      <Text size="large" label="Welcome" />
      <Text size="normal" label="Please login to your account" />
      <div className="mt-[30px]">
        <div className="mb-4">
          <InputField placeholder="Username or Email" />
        </div>
        <div className="mb-4 text-end">
          <InputField placeholder="Password" />
          <ButtonLink
            label="Forgot Password?"
            onClick={() => history.push("/forgot-password")}
          />
        </div>
        <div className="mb-4">
          <ButtonWithIcon
            icon={googleIcon}
            label="Continue with Google"
            onClick={handleLoginWithGoogle}
          />
        </div>
        <div className="mb-[18px] flex justify-center">
          <Button label="login" />
          <Button label="logout" onClick={handleLogOut} />
        </div>
      </div>
    </div>
  );
};

export default LoginMol;
