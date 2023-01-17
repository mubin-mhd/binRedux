import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Text from "../../../lib/atoms/Text";
import InputField from "../../../lib/atoms/InputField";
import ButtonLink from "../../../lib/atoms/buttonLink";
import ButtonWithIcon from "../../../lib/atoms/buttonWithIcon";
import Button from "../../../lib/atoms/Button";
import googleIcon from "../../../assets/icons/google.png";
import {
  loginWithGoogle,
  getSession,
  getStateChange,
} from "../../../features/authSlice";
import sideImage from "../../../assets/images/side.svg";
import supabase from "../../../config/supabase";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // state
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  // do submit formik
  const doregister = async (values) => {
    console.log("data values", values);
    const result = await supabase.auth.signUp({
      email: values.email,
      password: values.password,
    });
    if (result) {
      setOpenModal(true);
    }
    setTimeout(() => {
      formik.setSubmitting(false);
      formik.resetForm();
    }, 2000);
  };

  // initial formik
  const formik = useFormik({
    // initial values
    initialValues: {
      email: "",
      password: "",
    },
    // validation schema
    validationSchema: Yup.object({
      email: Yup.string().required().email("Invalid email format"),
      password: Yup.string()
        .required()
        .min(8, "Should more than 8 characters")
        .matches(/[a-z]/g, "Should contain at least 1 lowercase")
        .matches(/[A-Z]/g, "Should contain at least 1 uppercase")
        .matches(/[0-9]/g, "Should contain at least 1 number")
        .matches(/^\S*$/, "Should not contain spaces"),
    }),
    onSubmit: doregister,
  });

  const loadingHandler = (loadValue) => {
    setLoading(loadValue);
  };

  const handleLoginWithGoogle = () => {
    dispatch(loginWithGoogle(loadingHandler));
    dispatch(getSession());
    dispatch(getStateChange());
  };

  useEffect(() => {
    if (openModal) {
      alert("Berhasil Registrasi");
    }
  }, [openModal]);

  return (
    <div className="w-full  flex justify-between items-center">
      <div className="w-3/5">
        <div className="flex justify-between items-center relative">
          <div className="min-h-[406px] w-[385px] pt-[40px] px-[20px] pb-[20px] bg-white shadow-md absolute left-20 rounded-md">
            <Text size="large" label="Welcome" />
            <Text size="normal" label="Please login to your account" />
            <form className="mt-[30px]" onSubmit={formik.handleSubmit}>
              <div className="mb-4">
                <InputField
                  placeholder="Email"
                  type="text"
                  name="email"
                  {...formik.getFieldProps("email")}
                />
                {formik.touched.email && formik.errors.email && (
                  <div className="error">{formik.errors.email}</div>
                )}
              </div>
              <div className="mb-4 text-end">
                <InputField
                  placeholder="Password"
                  type="password"
                  name="password"
                  {...formik.getFieldProps("password")}
                />
                {formik.touched.password && formik.errors.password && (
                  <div className="error">{formik.errors.password}</div>
                )}
                <ButtonLink
                  label="Forgot Password?"
                  onClick={() => navigate("/forgot-password")}
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
                <Button label="login" disabled={formik.isSubmitting} />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="w-2/5 flex justify-end">
        <img src={sideImage} className="h-screen" />
      </div>
    </div>
  );
};

export default Login;
