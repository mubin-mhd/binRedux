import React from "react";
import { useHistory } from "react-router-dom";
import Text from "../../../lib/atoms/Text";
import BackButton from "../../../lib/atoms/BackButton";
import InputField from "../../../lib/atoms/InputField";
import Button from "../../../lib/atoms/Button";
import sideImage from "../../../assets/images/side.svg";
import { useFormik } from "formik";
import * as Yup from "yup";

const ForgotPass = () => {
  const history = useHistory();

  // do send email
  const doSendEmail = async (values) => {
    console.log("data values", values);
  };

  // initial formik
  const formik = useFormik({
    // initial values
    initialValues: {
      email: "",
    },
    // validation schema
    validationSchema: Yup.object({
      email: Yup.string().required().email("Invalid email format"),
    }),
    onSubmit: doSendEmail,
  });

  return (
    <div className="w-full  flex justify-between items-center">
      <div className="w-3/5">
        <div className="flex justify-between items-center relative">
          <div className="min-h-[406px] w-[385px] pt-[40px] px-[20px] pb-[20px] bg-white shadow-md absolute left-20 rounded-md">
            <BackButton label="Back" onClick={() => history.push("/login")} />
            <div className="mt-[12px]">
              <Text label="Forgot Password" size="large" />
            </div>
            <form onSubmit={formik.handleSubmit} classname="mt-[5px]">
              <Text
                label="Please enter the address associated with your account"
                size="normal"
              />
              <div className="mt-[26px]">
                <InputField
                  placeholder="email"
                  type="email"
                  name="email"
                  {...formik.getFieldProps("email")}
                />
                {formik.touched.email && formik.errors.email && (
                  <div className="error">{formik.errors.email}</div>
                )}
              </div>
              <div className="flex justify-center mt-36">
                <Button
                  label="Send Request"
                  onClick={() => history.push("/send-request")}
                  disabled={formik.isSubmitting}
                />
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

export default ForgotPass;
