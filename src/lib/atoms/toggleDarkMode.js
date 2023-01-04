import React from "react";
import { MdOutlineDarkMode } from "react-icons/fa";

export const PrimaryButton = ({ label = "Button", onClick, ...props }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center rounded-md bg-primary px-11 py-2 font-semibold text-white hover:bg-indigo-600"
      {...props}
    >
      {label}
    </button>
  );
};

export const AccentButton = ({ label = "Button", onClick, ...props }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center text-xs text-primary hover:text-indigo-600"
      {...props}
    >
      {label}
    </button>
  );
};
