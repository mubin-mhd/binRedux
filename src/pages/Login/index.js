import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import supabase from "../../config/supabase";
import { Loading } from "../../component/Loading";
import { loginWithGithub } from "../../features/authSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const loadingHandler = (loadValue) => {
    setIsLoading(loadValue);
  };

  const doregister = (values) => {
    console.log("form values", values);
    setTimeout(() => {
      formik.setSubmitting(false);
      formik.resetForm();
    }, 2000);
  };
  const formik = useFormik({
    // initial values
    initialValues: {
      email: "",
      password: "",
    },
    // validation schema
    validationSchema: Yup.object({
      email: Yup.string().required().email("Invalid email format"),
      password: Yup.string().required().min(8, "Should more than 8 characters"),
    }),
    // handle submission
    onSubmit: doregister,
  });

  return (
    <div className="flex justify-center mt-10">
      <div className="w-1/2">
        <h1 className="text-2xl font-semibold text-center">Login Form</h1>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <form onSubmit={formik.handleSubmit}>
              <div className="form-group">
                <label className="label-required">Email</label>
                <input
                  type="text"
                  name="email"
                  autoComplete="off"
                  {...formik.getFieldProps("email")}
                />
                {formik.touched.email && formik.errors.email && (
                  <div className="error">{formik.errors.email}</div>
                )}
              </div>
              <div className="form-group">
                <label className="label-required">Password</label>
                <input
                  type="password"
                  name="password"
                  autoComplete="off"
                  {...formik.getFieldProps("password")}
                />
                {formik.touched.password && formik.errors.password && (
                  <div className="error">{formik.errors.password}</div>
                )}
              </div>
              <div className="form-group">
                <label>
                  <button
                    onClick={() => history.push("/forgot-password")}
                    className="font-semibold"
                  >
                    Forgot Password?
                  </button>
                </label>
                <br />
                <label className="font-thin">
                  Belum punya akun?{" "}
                  <button
                    onClick={() => history.push("/signUp")}
                    className="font-semibold"
                  >
                    Register
                  </button>
                </label>
              </div>
              <button
                className="w-full bg-[#198754] text-white text-center rounded-sm py-2"
                type="submit"
                disabled={formik.isSubmitting}
              >
                Login
              </button>
            </form>
            <div className="w-full text-center">
              <h3 className="text-lg mt-5 mb-4">Login With</h3>
              <button
                onClick={() => dispatch(loginWithGithub(loadingHandler))}
                class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
              >
                <i class="bi bi-github mr-2"></i>
                <span>Github</span>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
