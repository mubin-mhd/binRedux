import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import supabase from "../../config/supabase";

const RegisterForm = () => {
  const [openModal, setOpenModal] = useState(false)
  const doregister = async(values) => {
    console.log("data values", values)
    const result = await supabase.auth.signUp({
      email: values.email,
      password:values.password
    });
    if (result) {
      setOpenModal(true)
    }
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
      confirmPassword: "",
      agreement: false,
    },
    // validation schema
    validationSchema: Yup.object({
      username: Yup.string().required(),
      email: Yup.string().required().email("Invalid email format"),
      password: Yup.string()
        .required()
        .min(8, "Should more than 8 characters")
        .matches(/[a-z]/g, "Should contain at least 1 lowercase")
        .matches(/[A-Z]/g, "Should contain at least 1 uppercase")
        .matches(/[0-9]/g, "Should contain at least 1 number")
        .matches(/^\S*$/, "Should not contain spaces"),
      confirmPassword: Yup.string()
        .required()
        .oneOf([Yup.ref("password")], "Password must match"),
      agreement: Yup.bool().isTrue("Field must be checked"),
    }),
    // handle submission
    onSubmit: doregister,
  });

  useEffect(() => {
    if (openModal) {
      alert("Berhasil Registrasi");
    }
  },[openModal])

  return (
    <div className="w-1/2">
      <h1 className="text-2xl font-semibold text-center">Register Form</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label className="label-required">Email</label>
          <input type="text" name="email" {...formik.getFieldProps("email")} />
          {formik.touched.email && formik.errors.email && (
            <div className="error">{formik.errors.email}</div>
          )}
        </div>
        <div className="form-group">
          <label className="label-required">Password</label>
          <input
            type="password"
            name="password"
            {...formik.getFieldProps("password")}
          />
          {formik.touched.password && formik.errors.password && (
            <div className="error">{formik.errors.password}</div>
          )}
        </div>
        <div className="form-group">
          <label className="label-required">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            {...formik.getFieldProps("confirmPassword")}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <div className="error">{formik.errors.confirmPassword}</div>
          )}
        </div>
        <div className="form-group">
          <input
            id="agreement"
            type="checkbox"
            name="agreement"
            checked={formik.values.agreement}
            {...formik.getFieldProps("agreement")}
          />
          <label htmlFor="agreement" className="label-required">
            I agree to Terms of Services
          </label>
          {formik.touched.agreement && formik.errors.agreement && (
            <div className="error">{formik.errors.agreement}</div>
          )}
        </div>
        <button
          className="w-full bg-[#198754] text-white text-center rounded-sm py-2"
          type="submit"
          disabled={formik.isSubmitting}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
