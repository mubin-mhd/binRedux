import React, { Fragment } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const ProtectedRoute = ({ children }) => {
  const isLogin = localStorage.getItem("dataSession");
  if (isLogin === false) {
    return <Navigate to="/" />;
  }
  return <Fragment>{children}</Fragment>;
};

export const NonProtectedRoute = ({ children }) => {
  const isLogin = localStorage.getItem("dataSession");
  if (isLogin === true) {
    return <Navigate to="/dashboard" />;
  }
  return <Fragment>{children}</Fragment>;
};
