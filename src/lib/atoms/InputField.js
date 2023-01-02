import React from "react";
import PropTypes from "prop-types";

const InputField = ({ type, placeholder, color, addClass, ...rest }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`${color} h-[48px] w-[354px] text-[13px] font-Inter font-[400] rounded-[4px] placeholder-[#AEB6D3] border-[#AEB6D3] ${addClass}`}
      {...rest}
    />
  );
};

InputField.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  color: PropTypes.string,
  addClass: PropTypes.string,
};

InputField.defaultProps = {
  type: "text",
  placeholder: "",
  color: "text-[#403F63]",
  addClass: "",
};

export default InputField;
