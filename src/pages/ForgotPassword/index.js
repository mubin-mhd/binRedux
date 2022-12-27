import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";

const ForgotPassword = () => {
  const history = useHistory();
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
    },
    // validation schema
    validationSchema: Yup.object({
      email: Yup.string().required().email("Invalid email format"),
    }),
    // handle submission
    onSubmit: doregister,
  });

  return (
    <div className="w-1/2">
      <h1 className="text-2xl font-semibold text-center">Forgot Password</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label className="label-required">Email</label>
          <input type="text" name="email" {...formik.getFieldProps("email")} />
          {formik.touched.email && formik.errors.email && (
            <div className="error">{formik.errors.email}</div>
          )}
        </div>
        <div className="form-group">
          <label>Enter your email active</label>
          <br />
        </div>
        <button
          className="w-full bg-[#198754] text-white text-center rounded-sm py-2"
          type="submit"
          disabled={formik.isSubmitting}
        >
          Send Email
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
