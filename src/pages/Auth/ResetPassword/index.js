import React from "react";
import Text from "../../../lib/atoms/Text";
import InputField from "../../../lib/atoms/InputField";
import BackButton from "../../../lib/atoms/BackButton";
import Button from "../../../lib/atoms/Button";
import { useNavigate } from "react-router-dom";
import sideImage from "../../../assets/images/side.svg";
import { useFormik } from "formik";
import * as Yup from "yup";

const Resetpassword = () => {
  const navigate = useNavigate();

  // do reset password
  const doSendNewPassword = async (values) => {
    console.log("data values", values);
  };

  // initial formik
  const formik = useFormik({
    // initial values
    initialValues: {
      oldPassword: "",
      newPassword: "",
    },
    // validation schema
    validationSchema: Yup.object({
      oldPassword: Yup.string()
        .required()
        .min(8, "Should more than 8 characters")
        .matches(/[a-z]/g, "Should contain at least 1 lowercase")
        .matches(/[A-Z]/g, "Should contain at least 1 uppercase")
        .matches(/[0-9]/g, "Should contain at least 1 number")
        .matches(/^\S*$/, "Should not contain spaces"),
      newPassword: Yup.string().oneOf(
        [Yup.ref("password"), null],
        "Passwords must match"
      ),
    }),
    onSubmit: doSendNewPassword,
  });

  return (
    <div className="w-full  flex justify-between items-center">
      <div className="w-3/5">
        <div className="flex justify-between items-center relative">
          <div className="min-h-[406px] w-[385px] pt-[40px] px-[20px] pb-[20px] bg-white shadow-md absolute left-20 rounded-md">
            <BackButton
              label="Back"
              onClick={() => navigate("/send-request")}
            />
            <div className="mt-12">
              <Text label="Create New Password" size="large" />
            </div>
            <form onSubmit={formik.handleSubmit}>
              <Text
                size="normal"
                label="Your new password must be different from previous used password"
              />
              <div className="mt-[25px]">
                <InputField
                  placeholder="New Password"
                  addClass="mb-[5px]"
                  type="password"
                  name="oldPassword"
                  {...formik.getFieldProps("oldPassword")}
                />
                {formik.touched.oldPassword && formik.errors.oldPassword && (
                  <div className="error">{formik.errors.oldPassword}</div>
                )}
                <InputField
                  placeholder="Confirm New Password"
                  type="password"
                  name="newPassword"
                  {...formik.getFieldProps("newPassword")}
                />
                {formik.touched.newPassword && formik.errors.newPassword && (
                  <div className="error">{formik.errors.newPassword}</div>
                )}
              </div>
              <div className="mt-[30px] flex justify-center">
                <Button label="Create Password" />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="w-2/5">
        <img src={sideImage} className="w-full h-screen" />
      </div>
    </div>
  );
};

export default Resetpassword;
